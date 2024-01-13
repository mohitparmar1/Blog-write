import authModel from "../models/authModel.js";
import express from "express";
import jwt from "jsonwebtoken";
const jwtPassword = "123456789";
import bcrypt from "bcryptjs";

class AuthController {
  static userRegistration = async (req, res) => {
    const { username, email, password } = req.body;
    try {
      if (username && email && password) {
        const isUserExists = await authModel.findOne({ email: email });
        if (isUserExists == null) {
          const salt = await bcrypt.genSalt(10);
          const hashedPassword = await bcrypt.hash(password, salt);
          const newUser = new authModel({
            username,
            email,
            password: hashedPassword,
          });
          const savedUser = await newUser.save();
          if (savedUser) {
            res.status(201).json({
              message: "User registered successfully",
              data: savedUser,
            });
          }
        } else {
          res.status(400).json({
            message: "User already exists",
          });
        }
      } else {
        res.status(400).json({
          message: "Please fill all the fields",
        });
      }
    } catch (error) {
      res.status(400).json({
        message: error,
      });
    }
  };
  static userLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
      const isEmail = await authModel.findOne({ email: email });
      if (isEmail) {
        if (
          isEmail.email == email &&
          (await bcrypt.compare(password, isEmail.password))
        ) {
          const token = jwt.sign(
            { username: isEmail.username, email: isEmail.email },
            jwtPassword,
            { expiresIn: "5d" }
          );
          res.status(200).json({
            message: "login successfully",
            name: isEmail.username,
            token,
          });
        } else {
          res.status(400).json({
            message: "Invalid credentials",
          });
        }
      } else {
        res.status(400).json({
          message: "User does not exist",
        });
      }
    } catch (err) {
      res.status(400).json({
        message: err,
      });
    }
  };
}

export default AuthController;

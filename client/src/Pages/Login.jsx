// components/Login.js
import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [active, setActive] = useState("Login");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your login logic here
    try {
      const res = await axios.post(
        "http://localhost:9000/api/v1/user/login",
        formData
      );
      alert(res.data.message);
    } catch (error) {
      alert("Login failed. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center h-[100%] w-screen">
      <form
        className="bg-white p-8 rounded shadow-md w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none"
          onSubmit={handleSubmit}
        >
          {active === "Login" ? "Login" : "Register"}
        </button>
        <p className="mt-4 text-center">
          {"Don't have an account?"}{" "}
          <Link
            to="/register"
            className="text-blue-600"
            onClick={() => setActive(active === "Login" ? "Register" : "Login")}
          >
            {active === "Login" ? "Register" : "Login"}
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;

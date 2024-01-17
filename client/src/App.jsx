import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login.jsx";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar.jsx";
import AddBlog from "./Pages/addBlog.jsx";
import AddCategory from "./Pages/addCategory.jsx";
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/add-blog" element={<AddBlog />} />
          <Route path="/add-category" element={<AddCategory />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

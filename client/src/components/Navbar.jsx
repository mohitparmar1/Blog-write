import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-screen bg-blue-400 h-[60px] m-0 flex items-center justify-between">
      <h2 className="text-white text-2xl font-bold text-left mx-5 cursor-pointer">
        <Link to="/">Blog Write</Link>
      </h2>

      <div>
        <ul className="flex flex-row justify-end">
          <li className="text-white text-lg font-regular mx-2 p-2 cursor-pointer border-b-0 hover:border-b-4">
            <Link to="/">Home</Link>
          </li>
          <li className="text-white text-lg font-regular mx-2 p-2 cursor-pointer border-b-0 hover:border-b-4">
            <Link to="/add-blog">Add Blog</Link>
          </li>
          <li className="text-white text-lg font-regular mx-2 p-2 cursor-pointer border-b-0 hover:border-b-4">
            <Link to="/add-category">Add Category</Link>
          </li>
        </ul>
      </div>

      <div className="flex flex-row">
        <ul className="flex flex-row justify-end">
          <li className="text-white text-lg font-regular mx-2 p-2 cursor-pointer">
            <Link to="/login">Login</Link>
          </li>
          <li className="text-white text-lg font-regular mx-2 p-2 cursor-pointer">
            Register
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

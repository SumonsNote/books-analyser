import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="bg-gray-100 p-5 text-xl uppercase shadow-lg">
        <Link className="mr-4" to="/home">Home</Link>
        <Link className="mr-4" to="/review">Review</Link>
        <Link className="mr-4" to="/dashboard">Dashboard</Link>
        <Link className="mr-4" to="/blogs">Blogs</Link>
        <Link to="/about">About</Link>
      </nav>
    </div>
  );
};

export default Header;

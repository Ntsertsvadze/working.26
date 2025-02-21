import React from "react";
import { Link, NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";

const Header: React.FC = () => {
  return (
    <nav className="bg-yellow-500 p-4 shadow-md">
      <ul className="flex space-x-6 text-white items-center justify-center">
        <li>
          <Link className="hover:text-gray-300 border-b-2 border-transparent hover:border-white pb-1" to={"/"}>Home</Link>
        </li>
        <li>
          <Link className="hover:text-gray-300 border-b-2 border-transparent hover:border-white pb-1" to={"/about"}>About</Link>
        </li>
        <li>
          <Link className="hover:text-gray-300 border-b-2 border-transparent hover:border-white pb-1" to={"/contact"}>Contact</Link>
        </li>
        <li>
          <NavLink 
            to={"/users"} 
            className={({ isActive }) => 
              twMerge("hover:text-gray-300 border-b-2 border-transparent pb-1",
                 isActive ? "text-green-400 border-white" : "text-blue-400 hover:border-white")
            }
          >
            Users
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;



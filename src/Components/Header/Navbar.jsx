import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {

    const Links=<>
        <ul className="flex gap-8">
        
        <NavLink to="/"><li className="btn btn-outline btn-success">Home</li></NavLink>
        <NavLink to="readList"><li className="btn btn-outline btn-success">Listed Books</li></NavLink>
        <NavLink to="pagesToRead"><li className="btn btn-outline btn-success">Pages to Read</li></NavLink>
        </ul>
    </>
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {
                Links
            }
          </ul>
        </div>
        <a className="btn btn-ghost text-xl text-[#131313]">Book Vibe</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
         {
            Links
         }
        </ul>
      </div>
      <div className="navbar-end gap-3 text-white">
        <a className="btn bg-[#23BE0A] text-white">Sign In</a>
        
        <a className="btn bg-[#59C6D2] text-white">Sign Up</a>
      </div>
    </div>
  );
};

export default Navbar;

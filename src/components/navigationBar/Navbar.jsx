import React from "react";

const Navbar = () => {
  return (
    <div className="navbar max-w-[1200px] mx-auto">
      {/* In the navbar-start keep the dropdown list */}
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
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Fixture</a>
            </li>
            <li>
              <a href="#">Teams</a>
            </li>
            <li>
              <a href="#">Schedules</a>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <a className="font-bold">CS — Ticket System</a>
      </div>

      {/* In the navbar-center keep the lists */}
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">Changelog</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Download</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>

      {/* In the navbar-end the button. */}
      <div className="ml-auto w-[200px] text-center">
        <a className="btn">+ New Ticket</a>
      </div>
    </div>
  );
};

export default Navbar;

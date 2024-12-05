import React from "react";

import { FaSearch } from "react-icons/fa";

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">ARA</span>
            <span className="text-slate-800">Estate</span>
          </h1>
        </Link>

        <form className="bg-slate-100 p-4 rounded-full flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none  w-24 sm:w-64"
          />

          <FaSearch className="text-slate-600"></FaSearch>
        </form>
        <ul className="flex gap-5">
          <Link to="/home">
            <li className="hidden sm:inline text-slate-800 hover:underline cursor-pointer">
              Home
            </li>
          </Link>

          <Link to="/about">
            <li className="hidden sm:inline text-slate-800 hover:underline cursor-pointer">
              About
            </li>
          </Link>

          <Link to="/sign-in">
            <li className="sm:inline text-slate-800 hover:underline cursor-pointer">
              Sign in
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}

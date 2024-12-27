'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineHome } from "react-icons/ai";
import { PiWarningCircleLight } from "react-icons/pi";
import { FaArrowRight } from "react-icons/fa6";
import { TbBrandBlogger } from "react-icons/tb";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className=" mx-auto flex justify-between items-center p-4 md:px-8">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-900">
          BlogSite
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className="text-gray-600 hover:text-gray-900 flex items-center gap-1"
          >
            <AiOutlineHome />
            Home
          </Link>
          <Link
            href="/posts"
            className="text-gray-600 hover:text-gray-900 flex items-center gap-1"
          >
            <TbBrandBlogger />
            Blog
          </Link>
          <Link
            href="/about"
            className="text-gray-600 hover:text-gray-900 flex items-center gap-1"
          >
            <PiWarningCircleLight />
            About
          </Link>
        </nav>

        {/* Login Button */}
        <button className="hidden md:flex items-center gap-2 bg-gray-100 px-4 py-2 rounded hover:bg-gray-200 text-gray-700">
          Login
          <FaArrowRight />
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={toggleMenu}
          aria-label="Toggle Navigation"
        >
          {isOpen ? <HiOutlineX size={28} /> : <HiOutlineMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-0 left-0 h-screen w-3/4 bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="p-6">
          <button
            onClick={toggleMenu}
            className="text-gray-700 mb-6"
            aria-label="Close Menu"
          >
            <HiOutlineX size={28} />
          </button>
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-gray-600 hover:text-gray-900 flex items-center gap-2"
              onClick={toggleMenu}
            >
              <AiOutlineHome />
              Home
            </Link>
            <Link
              href="/blog"
              className="text-gray-600 hover:text-gray-900 flex items-center gap-2"
              onClick={toggleMenu}
            >
              <TbBrandBlogger />
              Blog
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-gray-900 flex items-center gap-2"
              onClick={toggleMenu}
            >
              <PiWarningCircleLight />
              About
            </Link>
          </nav>
          <button
            className="mt-6 w-full bg-gray-100 px-4 py-2 rounded hover:bg-gray-200 text-gray-700 flex items-center justify-center gap-2"
            onClick={toggleMenu}
          >
            Login
            <FaArrowRight />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

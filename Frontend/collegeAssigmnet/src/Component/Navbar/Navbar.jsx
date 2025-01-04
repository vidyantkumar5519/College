import React, { useContext, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa"; // Importing icons for sun/moon
import { ThemeContext } from "../../ContextApi/Theme/ThemeContext"; // Import ThemeContext
import Login from "../../Login/Login";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext); // Access theme and toggleTheme function from context

  return (
    <>
      <nav className="fixed top-0 w-full bg-white shadow-lg z-50">
        <div className="flex justify-between items-center h-20 px-4 sm:px-6 lg:px-10">
          {/* Logo */}
          <div className="text-3xl font-bold">Review News</div>

          {/* Desktop Menu */}
          <div className="p-5 ml-20 hidden lg:block">
            <ul className="flex flex-row space-x-10 text-md font-medium">
              {["Home", "About Us", "Latest News", "Blog", "Career", "Contact Us"].map((item) => (
                <li
                  key={item}
                  className="cursor-pointer transition transform hover:scale-105 hover:text-red-400"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Search and Login */}
          <div className="flex items-center space-x-4">
            {/* Search Input */}
            <div className="relative hidden md:block">
              <input
                placeholder="Search..."
                className="w-40 sm:w-60 h-10 pl-10 pr-4 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
              />
              <svg
                className="absolute top-1/2 left-3 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-4.35-4.35M16.65 10.35a6.3 6.3 0 11-12.6 0 6.3 6.3 0 0112.6 0z"
                />
              </svg>
            </div>
               {/* Theme Toggle Button */}
               <button
              onClick={toggleTheme} // Trigger toggleTheme function
              className=" rounded-full cursor-pointer  transition transform hover:scale-105"
            >
              {/* Conditionally render sun or moon icon based on the current theme */}
              {theme === "light" ? <FaMoon /> : <FaSun />}
            </button>

            {/* Login Button */}
            <button
              onClick={() => setIsLoginOpen(true)}
              className="border w-20 sm:w-28 h-10 bg-black text-white rounded-full cursor-pointer hover:border hover:border-red-400 hover:bg-white hover:text-black transition transform hover:scale-105"
            >
              Login
            </button>

         

            {/* Hamburger Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-md">
            <ul className="flex flex-col items-center space-y-2 py-4 text-md font-medium">
              {["Home", "About Us", "Latest News", "Blog", "Career", "Contact Us"].map((item) => (
                <li
                  key={item}
                  className="cursor-pointer transition transform hover:scale-105 hover:text-red-400"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      {/* Login Modal */}
      {isLoginOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="rounded-lg w-full sm:w-96 relative">
            <Login closeModal={() => setIsLoginOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
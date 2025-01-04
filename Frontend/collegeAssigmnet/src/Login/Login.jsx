import '@fortawesome/fontawesome-free/css/all.min.css';
import React from 'react';

const Login = ({ closeModal }) => {
  return (
    <div className="flex  flex-col md:flex-row border border-red-500 rounded-lg md:h-[35rem] md:w-[60rem] w-full max-w-3xl mx-auto shadow-lg relative md:right-64 bg-white ">
      {/* Left Section */}
      <div className="w-full md:w-1/2 bg-black flex flex-col justify-center items-center p-6 md:p-8 rounded-t-lg md:rounded-t-none md:rounded-l-lg">
        <h1 className="text-white text-2xl md:text-4xl font-bold mb-4 text-center">
          Welcome Back!
        </h1>
        <p className="text-white text-base md:text-lg mb-6 text-center">
          To keep connected with us, please login with your personal info.
        </p>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-6 md:p-8 rounded-b-lg md:rounded-b-none md:rounded-r-lg">
        <h1 className="text-black text-xl md:text-3xl font-bold mb-4 text-center">
          Login to Your Account
        </h1>
        <form className="w-full max-w-xs sm:max-w-sm">
          <div className="mb-3">
            <input
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2  focus:ring-red-400"
              placeholder="Email"
              type="email"
            />
          </div>
          <div className="mb-3">
            <input
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2  focus:ring-red-400"
              placeholder="Password"
              type="password"
            />
          </div>
          <button className="bg-black text-white py-2 md:py-3 px-6 rounded-full w-full mb-4">
            Login
          </button>
        </form>
        <p className="text-gray-500 text-sm md:text-base mb-4 text-center">
          Don't have an account? Sign up with:
        </p>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 w-full items-center">
          <button className="border text-blue-800 py-2 px-3 rounded-full flex items-center justify-center space-x-2 w-full sm:w-auto">
            <i className="fab fa-facebook-f text-blue-800 border rounded-full"></i>
            <span>Sign Up with Facebook</span>
          </button>
          <button className="border text-red-400 py-2 px-3 rounded-full flex items-center justify-center space-x-2 w-full sm:w-auto">
            <i className="fab fa-google text-red-400"></i>
            <span>Sign Up with Google</span>
          </button>
        </div>
      </div>

      {/* Close Button */}
      <button
        onClick={closeModal}
        className="absolute top-2 right-6 text-2xl font-bold text-white md:text-black"
      >
        &times;
      </button>
    </div>
  );
};

export default Login;

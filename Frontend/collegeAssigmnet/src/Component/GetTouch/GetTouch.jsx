import React from "react";

const GetTouch = () => {
  return (
    <div className="relative flex flex-col lg:flex-row items-center bg-black text-white h-auto px-8 lg:px-16 py-20">
      {/* Main Section */}
      <div className="text-center lg:text-left lg:w-2/3">
        <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
          Stay Updated with the Latest News and Blog Posts
        </h1>
        <p className="text-lg lg:text-xl mb-8">
          Subscribe now to receive real-time updates, insightful articles, and
          expert opinions delivered straight to your inbox. Stay ahead with our
          personalized updates.
        </p>
      </div>

      {/* Subscription Form */}
      <div className="lg:w-1/3 flex flex-col items-center lg:items-start">
        <div className="w-full flex flex-col sm:flex-row items-center sm:items-stretch gap-4 mb-6">
          <input
            type="email"
            placeholder="Enter your email address..."
            className="w-full sm:w-3/4 h-14 px-4 border text-black rounded-full text-sm focus:outline-none focus:ring  focus:ring-red-400"
          />
          <button
            className="h-14 px-8 rounded-full bg-gradient-to-r from-green-500 to-blue-500 text-white font-medium hover:shadow-lg hover:from-green-600 hover:to-blue-600 transition-transform transform hover:scale-105"
            aria-label="Subscribe to updates"
          >
            Subscribe Now
          </button>
        </div>
        <p className="text-sm lg:text-base text-gray-300 text-center lg:text-left">
          We value your privacy. Your email address will remain confidential.
        </p>
      </div>
    </div>
  );
};

export default GetTouch;

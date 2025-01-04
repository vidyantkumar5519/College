import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-400 text-sm">
              We share insights and knowledge through engaging blog posts to keep you informed and inspired.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="hover:text-red-400 transition">About</a>
              </li>
              <li>
                <a href="/blogs" className="hover:text-red-400 transition">Blogs</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-red-400 transition">Contact</a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-red-400 transition">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-red-500 transition"
              >
                <img
                  src="https://img.icons8.com/ios-filled/24/ffffff/facebook-new.png"
                  alt="Facebook"
                />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-red-500 transition"
              >
                <img
                  src="https://img.icons8.com/ios-filled/24/ffffff/twitter-circled.png"
                  alt="Twitter"
                />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-red-500 transition"
              >
                <img
                  src="https://img.icons8.com/ios-filled/24/ffffff/instagram-new.png"
                  alt="Instagram"
                />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-red-500 transition"
              >
                <img
                  src="https://img.icons8.com/ios-filled/24/ffffff/linkedin.png"
                  alt="LinkedIn"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} YourBlogName. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

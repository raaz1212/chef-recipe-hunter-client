// eslint-disable-next-line no-unused-vars
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-neutral-600 text-white p-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">Chef-Food</div>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Terms of Service
          </a>
        </div>
      </div>
      <div className="border-b border-white-300"></div>
    </footer>
  );
};

export default Footer;

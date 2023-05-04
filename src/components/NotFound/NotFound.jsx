// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi"; // Or any other icon library

//error message for wrong route
const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <img
        src="https://img.freepik.com/free-vector/404-error-page-background_23-2148076383.jpg?w=740&t=st=1683032875~exp=1683033475~hmac=094e1935fa7356d58a2164a7955479bb7262293d2c5b9518ab7589d32d38187a"
        alt="404 Not Found"
        className="w-1/2 mb-8"
      />
      <h1 className="text-3xl font-bold text-gray-800 mb-4">404 Not Found</h1>
      <p className="text-lg text-gray-600 mb-8">
        The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="text-sm text-gray-600 hover:text-gray-800 mb-4 flex items-center"
      >
        <FiArrowLeft className="inline-block mr-1 -mt-1" />
        Back to Home
      </Link>
      <Link
        to="/"
        className="bg-blue-500 px-4 py-2 rounded-md text-white font-semibold hover:bg-blue-600"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;

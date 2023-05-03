// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import app from "../firebase/firebase.config";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { Link } from "react-router-dom"; // Import the Link component

const Login = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleEmailSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setUser(loggedInUser);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setUser(loggedInUser);
      })
      .catch((error) => {
        console.log(error);
        setError("Failed to sign in with Google.");
      });
  };

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setUser(loggedUser);
      })
      .catch((error) => {
        console.log(error);
        setError("Failed to sign in with Github.");
      });
  };

  useEffect(() => {
    if (user !== null) {
      // Check if user is not null
      window.location.href = "/"; // Redirect to home page
    }
  }, [user]);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 py-4">
      <div className="text-center">
        <h2 className="text-2xl mb-4 font-bold">Login to your account</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <hr className="my-4" />
        <p className="text-red-500 mb-2">{error}</p>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="btn btn-primary w-full mb-4"
          onClick={handleEmailSignIn}
        >
          Sign in
        </button>{" "}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
          onClick={handleGoogleSignIn}
        >
          Google login
        </button>
        <button
          className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded"
          onClick={handleGithubSignIn}
        >
          Github login
        </button>
      </div>

      <div className="mt-4">
        If you do not have an account, please{" "}
        <Link to="/register" className="text-blue-500 underline">
          register
        </Link>{" "}
        here.
      </div>
    </div>
  );
};

export default Login;

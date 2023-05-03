// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import { Link } from "react-router-dom";

const auth = getAuth(app);

const Register = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (event) => {
    // 1. prevent page refresh
    event.preventDefault();
    setSuccess("");
    setError("");
    // 2. collect form data
    const email = event.target.email.value;
    const password = event.target.password.value;
    const name = event.target.name.value;
    const photoURL = event.target.photoURL.value;
    console.log(name, email, password, photoURL);

    // validate
    if (password.length < 6) {
      setError("Please add at least 6 characters in your password");
      return;
    }

    // 3. create user in fb
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setError("");
        event.target.reset();
        setSuccess("User has been created successfully. Please login again.");
        // sendVerificationEmail(result.user);
        updateUserData(result.user, name, photoURL);
      })
      .catch((error) => {
        console.error(error.message);
        setError(error.message);
      });
  };

  const updateUserData = (user, name, photoURL) => {
    updateProfile(user, {
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => {
        console.log("user data updated");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div
        className="card p-5 shadow"
        style={{ width: "400px", height: "500px" }}
      >
        <h4>Please Register</h4>
        <form onSubmit={handleSubmit}>
          <input
            className="w-100 mb-4 rounded ps-2 bg-lightblue"
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            required
          />
          <br />
          <input
            className="w-100 mb-4 rounded ps-2 bg-lightblue"
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
            required
          />
          <br />
          <input
            className="w-100 mb-4 rounded ps-2 bg-lightblue"
            type="password"
            name="password"
            id="password"
            placeholder="Your Password"
            required
          />
          <br />
          <input
            className="w-100 mb-4 rounded ps-2 bg-lightblue"
            type="url"
            name="photoURL"
            id="photoURL"
            placeholder="Your Profile Picture URL"
          />
          <br />
          <input
            className="btn btn-primary bg-orange w-100"
            type="submit"
            value="Register"
          />
        </form>
        <p className="mt-3">
          <small>
            Already have an account? Please <Link to="/login">Login</Link>{" "}
          </small>
        </p>
        <p className="text-danger">{error}</p>
        <p className="text-success">{success}</p>
      </div>
    </div>
  );
};

export default Register;

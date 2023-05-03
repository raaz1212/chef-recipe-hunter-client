import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../firebase/firebase.config";

function Navbar() {
  const [user, setUser] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return unsubscribe;
  }, []);

  const handleSignOut = () => {
    setUser(null);
  };

  return (
    <>
      <nav className="navbar bg-sky-100">
        <div className="flex items-center justify-between w-full max-w-6xl mx-auto py-2">
          <div className="flex items-center">
            <h1 to="/" className="text-3xl font-bold text-pink-600 p-2">
              CheFood
            </h1>
            <Link
              to="/"
              className={`${
                location.pathname === "/"
                  ? "text-blue-500 underline"
                  : "text-blue-700"
              } text-base font-medium`}
            >
              Home
            </Link>
            <Link
              to="/blog"
              className={`${
                location.pathname === "/blog"
                  ? "text-blue-500 underline"
                  : "text-blue-700"
              } ml-2 text-base font-medium`}
            >
              Blog
            </Link>
          </div>
          {user ? (
            <div className="flex items-center space-x-4">
              <div className="relative">
                <img
                  src={user.photoURL}
                  alt="Profile"
                  title={user.displayName}
                  className="rounded-full w-8 h-8 cursor-pointer"
                />
                {user.displayName && (
                  <span className="absolute top-full left-0 right-0 transform translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white shadow-lg rounded-md py-2 px-3 text-sm font-medium text-gray-700 z-10">
                    {user.displayName}
                  </span>
                )}
              </div>
              <button
                onClick={handleSignOut}
                className="btn btn-sm btn-secondary"
              >
                LogOut
              </button>
            </div>
          ) : (
            <Link to="/login" className="btn btn-sm btn-primary">
              Login
            </Link>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;

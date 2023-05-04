import { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
//responsive navbar
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();

  const { user, logOut } = useContext(AuthContext);
  //logOut from AuthProvider
  const handleSignOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };

  return (
    <>
      <nav className="navbar bg-sky-100">
        <div className="flex items-center justify-between w-full max-w-6xl mx-auto py-2">
          <div className="flex items-center">
            <h1 to="/" className="text-3xl font-bold text-pink-600 p-2">
              CheFood
            </h1>
            <div className="hidden sm:block">
              <Link
                to="/"
                className={`${
                  location.pathname === "/"
                    ? "text-blue-500 underline"
                    : "text-blue-700"
                } mt-4 block sm:inline-block sm:mt-0 mr-4 text-base font-medium`}
              >
                Home
              </Link>
              <Link
                to="/blog"
                className={`${
                  location.pathname === "/blog"
                    ? "text-blue-500 underline"
                    : "text-blue-700"
                } block mt-4 sm:inline-block sm:mt-0 mr-4 text-base font-medium`}
              >
                Blog
              </Link>
            </div>
          </div>

          <div className="sm:hidden">
            <button
              className="block ml-auto px-2 py-1 rounded text-blue-700 hover:text-blue-900 focus:outline-none focus:ring"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="fill-current h-4 w-4"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15 5H5v1h10V5zm0 4H5v1h10V9zm0 4H5v1h10v-1z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3 4.5A1.5 1.5 0 014.5 3h11A1.5 1.5 0 0117 4.5v0a1.5 1.5 0 01-1.5 1.5h-11A1.5 1.5 0 013 4.5v0zM4.5 6h11a1.5 1.5 0 011.5 1.5v0A1.5 1.5 0 0115.5 9h-11A1.5 1.5 0 014 7.5v0A1.5 1.5 0 014.5 6zm0 6h11a1.5 1.5 0 011.5 1.5v0a1.5 1.5 0 01-1.5 1.5h-11a1.5 1.5 0 01-1.5-1.5v0a1.5 1.5 0 011.5-1.5z"
                  />
                )}
              </svg>
            </button>
            <div
              className={`${
                isOpen ? "block" : "hidden"
              } absolute top-16 right-0 left-0 z-20 bg-sky-100 py-2`}
            >
              <Link
                to="/"
                className={`${
                  location.pathname === "/"
                    ? "text-blue-500 underline"
                    : "text-blue-700"
                } block px-4 py-2 text-base font-medium`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/blog"
                className={`${
                  location.pathname === "/blog"
                    ? "text-blue-500 underline"
                    : "text-blue-700"
                } block px-4 py-2 text-base font-medium`}
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              {user ? (
                <div className="flex items-center space-x-4 ps-4">
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
                    Log Out
                  </button>
                </div>
              ) : (
                <Link to="/login" className="btn btn-sm btn-primary ms-3">
                  Login
                </Link>
              )}
            </div>
          </div>
          <div className="hidden sm:block">
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
                  Log Out
                </button>
              </div>
            ) : (
              <Link to="/login" className="btn btn-sm btn-primary">
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

import { createBrowserRouter } from "react-router-dom";
import Blogs from "../Blogs/Blogs";
import ChefRecipes from "../Chef/ChefRecipes";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import Main from "../layouts/Main";
import Login from "../Login/Login";
import Navbar from "../Navbar/Navbar";
import NotFound from "../NotFound/NotFound";
import Register from "../Register/Register";
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Main />
        <Footer />
      </>
    ),
    errorElement: <NotFound />, //error handler
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/chefs"),
      },
      {
        path: "/chef/:id",
        element: (
          <PrivateRoute>
            <ChefRecipes />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/chefs/${params.id}`),
      },
      {
        path: "/blog",
        element: <Blogs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default routes;

// components
import Signup from "./Components/Signup";
import Signin from "./Components/Signin";

// react router dom
import { createBrowserRouter } from "react-router-dom";

// creating the routes
export const App = createBrowserRouter([
  //! /* ----------------------------- auth routes ----------------------------- */
  {
    path: "/",
    element: <Signup />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
]);

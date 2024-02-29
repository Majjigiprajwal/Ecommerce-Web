import React, { useContext } from "react";
import Products from "./Pages/Products";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Root from "./Pages/Root";
import Error from "./Pages/Error";
import Contact from "./Pages/Contact";
import Product from "./Pages/Product";
import Auth from "./Components/Auth/Auth";
import Profile from "./Pages/Profile";
import Context from "./Context";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "/products", element: <Products /> },
      { path: "/products/:productId", element: <Product /> },
      { path: "/contact", element: <Contact /> },
      { path: "/about", element: <About /> },
      { path: "/profile", element: <Profile /> },
    ],
  },
]);
const routerLogOut = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/logIn", element: <Auth /> },
      { path: "/products", element: <Auth /> },
      { path: "/products/:productId", element: <Auth /> },
      { path: "/contact", element: <Auth /> },
      { path: "/profile", element: <Auth /> },
    ],
  },
]);
function App() {
  const ctx = useContext(Context);
  return (
    <>
      {ctx.isLogIn && <RouterProvider router={router} />}
      {!ctx.isLogIn && <RouterProvider router={routerLogOut} />}
    </>
  );
}

export default App;

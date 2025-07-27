import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NotFoundPage from "./components/NotFoundPage.jsx";
import ShopContextProvider from "./context/ShopContext.jsx";
import "./index.css";
import Main from "./layout/Main.jsx";
import About from "./pages/About.jsx";
import Login from "./pages/Auth/Login.jsx";
import Cart from "./pages/Cart.jsx";
import Collection from "./pages/Collection.jsx";
import Contact from "./pages/Contact.jsx";
import Home from "./pages/Home.jsx";
import Orders from "./pages/Orders.jsx";
import PlaceOrder from "./pages/PlaceOrder.jsx";
import Products from "./pages/Products.jsx";
import Signup from "./pages/Auth/Signup.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    // path: "/",
    element: <Main></Main>,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/collection",
        element: <Collection />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/place-order",
        element: <PlaceOrder />,
      },
      {
        path: "/product/:id",
        element: <Products />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ShopContextProvider>
      <RouterProvider router={router} scrollRestoration="manual" />
      <ToastContainer />
    </ShopContextProvider>
  </React.StrictMode>
);

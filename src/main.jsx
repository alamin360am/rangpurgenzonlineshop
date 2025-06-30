import * as React from "react";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ShopContextProvider from './context/ShopContext.jsx'
import Main from './layout/Main.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Cart from './pages/Cart.jsx'
import Collection from "./pages/Collection.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import Orders from "./pages/Orders.jsx";
import PlaceOrder from "./pages/PlaceOrder.jsx";
import Products from "./pages/Products.jsx";
import NotFoundPage from "./components/NotFoundPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    // path: "/",
    element: <Main></Main>,
    errorElement: <NotFoundPage/>,
    children: [
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/cart",
        element: <Cart/>
      },
      {
        path: "/collection",
        element: <Collection/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/orders",
        element: <Orders/>
      },
      {
        path: "/place-order",
        element: <PlaceOrder/>
      },
      {
        path: "/products",
        element: <Products/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ShopContextProvider>
      <RouterProvider router={router} />
    </ShopContextProvider>
  </React.StrictMode>
)

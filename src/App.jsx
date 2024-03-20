import "./App.css";
import HomePage from "./pages/HomePage.jsx";
import ErrorPage from "./pages/Error";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Success from "./pages/Success.jsx";
import Cart from "./pages/Cart";
import StripePayment from "./StripePayment.jsx";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

const isAuthenticated = () => {
  // Implement your authentication logic here, e.g., checking cookies, local storage, or a state management library
  return true; // Replace with the actual return value based on your authentication state
};

const router = createBrowserRouter([
  {
    path: "/",
    element: isAuthenticated() ? (
      <HomePage />
    ) : (
      <Navigate to="/login" replace={true} />
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/payment",
    element: <StripePayment />,
  },

  {
    path: "/products/:category",
    element: <ProductList />,
  },

  {
    path: "/product/:id",
    element: <Product />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },

  {
    path: "/register",
    element: !isAuthenticated() ? (
      <Register />
    ) : (
      <Navigate to="/" replace={true} />
    ),
  },

  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/success",
    element: <Success />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

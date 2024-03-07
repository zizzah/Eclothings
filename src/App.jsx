import "./App.css";
import HomePage from "./pages/HomePage.jsx";
import Payment from "./pages/Payment.jsx";
import Root from "./route/root";
import ErrorPage from "./pages/Error";
import Success from "./pages/Success.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "contacts/:contactId",
    element: <Payment />,
  },
  {
    path: "success/:success",
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

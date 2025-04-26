import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";  // Ensure your styles are linked
import routes from "./routes";  // Import the routes from your routes file

const root = ReactDOM.createRoot(document.getElementById("root"));

// Create the router with the provided routes
const router = createBrowserRouter(routes);

// Render the app
root.render(
  <RouterProvider router={router} />
);

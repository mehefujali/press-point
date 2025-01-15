import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import { AuthProvider } from "./Context/AuthProvider";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
    <Toaster />
      <RouterProvider router={AppRouter}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);

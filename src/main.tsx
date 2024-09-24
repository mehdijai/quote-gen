import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HomePage from "@page/index";
import { createHashRouter, RouterProvider } from "react-router-dom";
// import "@style/main.scss";

const router = createHashRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

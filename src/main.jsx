import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createHashRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/Landing.jsx";
import DocumentationPage from "./pages/Documentation.jsx";
import TeamPage from "./pages/Team.jsx";
import ContactPage from "./pages/Contact.jsx";
import ErrorPage from "./pages/Error.jsx";
import Documentation_Content from "./pages/Documentation_Content.jsx";

// Router erstellen
const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "dokumentation", element: <DocumentationPage /> },
      { path: "dokumentation/:subpage", element: <Documentation_Content />, errorElement: <ErrorPage /> },
      { path: "team", element: <TeamPage /> },
      { path: "kontakt", element: <ContactPage /> },
      { path: "*", element: <ErrorPage /> }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

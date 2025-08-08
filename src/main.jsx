import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Tailwind entry (already set up below)
import "./index.css";

// Optional: if you want extra styles in app.css, keep this import
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

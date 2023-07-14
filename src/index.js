import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Features from "./features";
import Plan from "./plan";
import Blog from "./blog";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route index element={<App />} />
        <Route path="features" element={<Features />} />
        <Route path="plan" element={<Plan />} />
        <Route path="blog" element={<Blog />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

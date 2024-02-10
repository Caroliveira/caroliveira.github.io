import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Developments from "./pages/Development";
import Contact from "./pages/Contact";

import { ThemeContextProvider } from "./hooks/useThemeContext";
import Layout from "./components/Layout";
import "./assets/styles/index.scss";
import "./i18n";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeContextProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/developments" element={<Developments />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </ThemeContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

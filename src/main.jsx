import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@linaoliveira/design-system";

import Home from "./pages/Home";
import About from "./pages/About";
import Developments from "./pages/Development";
import Contact from "./pages/Contact";

import Layout from "./components/Layout";
import "./assets/styles/index.scss";
import "./i18n";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/developments" element={<Developments />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

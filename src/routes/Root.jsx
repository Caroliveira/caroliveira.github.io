import { Route, Routes } from "react-router-dom";
import Nav from "../components/Nav";
import Home from "./Home";
import Contact from "./Contact";
import "./Root.scss";

const Root = () => {
  return (
    <div className="root">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <footer>&copy; {new Date().getFullYear()} Lina Oliveira</footer>
    </div>
  );
};

export default Root;

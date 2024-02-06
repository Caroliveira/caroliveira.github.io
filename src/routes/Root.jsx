import { Route, Routes } from "react-router-dom";
import Nav from "../components/Nav";
import Home from "./Home";
import Contact from "./Contact";
import Developments from "./Developments";
import "./Root.scss";

const Root = () => {
  return (
    <div className="root">
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/developments" element={<Developments />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <footer>&copy; {new Date().getFullYear()} Lina Oliveira</footer>
    </div>
  );
};

export default Root;

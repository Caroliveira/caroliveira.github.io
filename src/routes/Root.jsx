import { Route, Routes } from "react-router-dom";
import Nav from "../components/Nav";
import Home from "./Home";
import "./Root.scss";

const Root = () => {
  return (
    <div className="root">
      <Nav />
      <main className="root__content">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <footer>&copy; {new Date().getFullYear()} Lina Oliveira</footer>
    </div>
  );
};

export default Root;

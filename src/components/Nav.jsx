import { Link } from "react-router-dom";
import "./Nav.scss";
import logo from "/logo.png";

const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/">
            <img alt="Home" src={logo} />
          </Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

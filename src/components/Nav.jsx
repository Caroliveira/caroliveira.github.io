import { Link, useLocation } from "react-router-dom";
import logo from "/logo.png";
import "./Nav.scss";

const ROUTES = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const Nav = () => {
  const location = useLocation();

  const renderNavLink = ({ name, path }) => {
    const isCurrent = path === location.pathname;
    const navLiClassName = isCurrent ? "nav__current" : "";
    return (
      <li key={name} className={navLiClassName}>
        <Link to={path}>{name}</Link>
      </li>
    );
  };

  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/">
            <img alt="Home" src={logo} />
          </Link>
        </li>
        {ROUTES.map(renderNavLink)}
      </ul>
    </nav>
  );
};

export default Nav;

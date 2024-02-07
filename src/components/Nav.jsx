import { Link, useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../utils/constants";
import logo from "/logo.png";
import "./Nav.scss";
import { useState } from "react";

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isCollapsibleNav = window.innerWidth < 1024;
  const [openNav, setOpenNav] = useState(!isCollapsibleNav);

  const handleCloseNav = () => {
    isCollapsibleNav && setOpenNav(false);
  };

  const handleLogoClick = () => {
    isCollapsibleNav ? setOpenNav(!openNav) : navigate("/");
  };

  const renderNavLink = ({ name, path }) => {
    const isCurrent = path === location.pathname;
    const navLiClassName = isCurrent ? "nav__current" : "";
    return (
      <li key={name} className={navLiClassName} onClick={handleCloseNav}>
        <Link to={path}>{name}</Link>
      </li>
    );
  };

  return (
    <nav className="nav">
      <Link to="/" className="nav__logo" onClick={handleCloseNav}>
        <img alt="Go to home page" src={logo} />
      </Link>
      {openNav && <ul>{ROUTES.map(renderNavLink)}</ul>}
      <button onClick={handleLogoClick} className="nav__menu">
        {openNav ? "Close" : "Open"} menu
      </button>
    </nav>
  );
};

export default Nav;

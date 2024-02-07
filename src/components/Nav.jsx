import { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useHandleOutsideClick from "../hooks/useHandleOutsideClick";
import { ROUTES } from "../utils/constants";
import logo from "/logo.png";
import "./Nav.scss";

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isCollapsibleNav = window.innerWidth < 1024;
  const [openNav, setOpenNav] = useState(!isCollapsibleNav);
  const navRef = useRef();

  useHandleOutsideClick(navRef, isCollapsibleNav && openNav, setOpenNav);

  useEffect(() => {
    isCollapsibleNav && setOpenNav(false);
  }, [isCollapsibleNav, location.pathname]);

  const handleLogoClick = () => {
    isCollapsibleNav ? setOpenNav(!openNav) : navigate("/");
  };

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
    <nav className="nav" ref={navRef}>
      <Link to="/" className="nav__logo">
        <img alt="Go to home page" src={logo} />
      </Link>
      <ul id="navigation">{openNav && ROUTES.map(renderNavLink)}</ul>
      <button
        onClick={handleLogoClick}
        className="nav__menu"
        aria-expanded={openNav}
        aria-controls="navigation"
      >
        {openNav ? "Close" : "Open"} menu
      </button>
    </nav>
  );
};

export default Nav;

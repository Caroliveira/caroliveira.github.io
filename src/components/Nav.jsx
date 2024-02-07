import { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ROUTES } from "../utils/constants";
import logo from "/logo.png";
import "./Nav.scss";

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isCollapsibleNav = window.innerWidth < 1024;
  const [openNav, setOpenNav] = useState(!isCollapsibleNav);
  const navRef = useRef();

  useEffect(() => {
    isCollapsibleNav && setOpenNav(false);
  }, [isCollapsibleNav, location.pathname]);

  useEffect(() => {
    const handleOutsideClick = ({ target }) => {
      const current = navRef.current;
      if (current && !current.contains(target) && isCollapsibleNav && openNav) {
        setOpenNav(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isCollapsibleNav, openNav]);

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
      {openNav && <ul>{ROUTES.map(renderNavLink)}</ul>}
      <button onClick={handleLogoClick} className="nav__menu">
        {openNav ? "Close" : "Open"} menu
      </button>
    </nav>
  );
};

export default Nav;

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
    if (isCollapsibleNav) setOpenNav(false);
  }, [isCollapsibleNav, location.pathname]);

  const handleLogoClick = () => {
    isCollapsibleNav ? setOpenNav(!openNav) : navigate("/");
  };

  const renderNavLink = ({ name, path }) => {
    const isCurrent = path === location.pathname;
    const navLiClassName = `nav__list__item${isCurrent ? "--current" : ""}`;
    return (
      <li key={name} className={navLiClassName}>
        <Link to={path}>{name}</Link>
      </li>
    );
  };

  return (
    <nav className="nav" ref={navRef}>
      <Link to="/" className="nav__logo">
        <img alt="Lina Logo" src={logo} />
      </Link>
      <button
        className="nav__menu"
        onClick={handleLogoClick}
        aria-expanded={openNav}
        aria-controls="navigation"
        aria-label={`${openNav ? "Close" : "Open"} menu`}
      >
        <div className={`nav__menu${openNav ? "--close" : "--open"}`} />
      </button>
      {openNav && (
        <ul id="navigation" aria-label="Main navigation" className="nav__list">
          {ROUTES.map(renderNavLink)}
        </ul>
      )}
    </nav>
  );
};

export default Nav;

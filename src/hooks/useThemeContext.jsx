import { useState, useEffect } from "react";
import { createContext } from "react";
import PropTypes from "prop-types";

export const ThemeContext = createContext({
  darkModeOn: true,
  setDarkTheme: () => {},
});

export const ThemeContextProvider = ({ children }) => {
  const [darkModeOn, setDarkModeOn] = useState();

  useEffect(() => {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
    const isBrowserDark = systemTheme.matches;
    const savedTheme = localStorage.getItem("lina_portfolio_theme");
    const isStarterDark = savedTheme ? savedTheme === "dark" : isBrowserDark;
    setDarkTheme(isStarterDark);
  }, []);

  const setDarkTheme = (isDarkMode) => {
    setDarkModeOn(isDarkMode);
    if (isDarkMode) {
      localStorage.setItem("lina_portfolio_theme", "dark");
      document.body.classList.remove("light");
    } else {
      localStorage.setItem("lina_portfolio_theme", "light");
      document.body.classList.add("light");
    }
  };

  return (
    <ThemeContext.Provider value={{ darkModeOn, setDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeContextProvider.propTypes = {
  children: PropTypes.element,
};

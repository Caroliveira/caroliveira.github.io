import { useState, useEffect } from "react";
import { createContext } from "react";
import PropTypes from "prop-types";

export const ThemeContext = createContext({
  darkModeOn: true,
  setDarkModeOn: () => {},
});

export const ThemeContextProvider = ({ children }) => {
  const [darkModeOn, setDarkModeOn] = useState(false);

  useEffect(() => {
    if (darkModeOn) document.body.classList.remove("light");
    else document.body.classList.add("light");
  }, [darkModeOn]);

  return (
    <ThemeContext.Provider value={{ darkModeOn, setDarkModeOn }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeContextProvider.propTypes = {
  children: PropTypes.element,
};

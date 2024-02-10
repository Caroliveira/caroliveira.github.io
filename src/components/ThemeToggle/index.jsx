import { useContext } from "react";
import { ThemeContext } from "../../hooks/useThemeContext";
import styles from "./styles.module.scss";

const ThemeToggle = () => {
  const { darkModeOn, setDarkTheme } = useContext(ThemeContext);

  return (
    <label className={styles.toggle}>
      <input
        type="checkbox"
        checked={darkModeOn}
        onChange={() => setDarkTheme(!darkModeOn)}
      />
      <span className={styles.toggle__slider} />
    </label>
  );
};

export default ThemeToggle;

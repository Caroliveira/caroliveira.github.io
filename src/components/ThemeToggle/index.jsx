import { useContext } from "react";
import { ThemeContext } from "../../hooks/useThemeContext";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";

const ThemeToggle = () => {
  const { t } = useTranslation();
  const { darkModeOn, setDarkTheme } = useContext(ThemeContext);

  return (
    <label className={styles.toggle}>
      <input
        type="checkbox"
        checked={darkModeOn}
        onChange={() => setDarkTheme(!darkModeOn)}
        aria-label={t(
          darkModeOn
            ? "themeToggle.enableLightTheme"
            : "themeToggle.enableDarkTheme"
        )}
      />
      <span className={styles.toggle__slider} />
    </label>
  );
};

export default ThemeToggle;

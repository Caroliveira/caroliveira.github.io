// Placeholder until I have projects to show or ongoing
import { useTranslation } from "react-i18next";
import styles from "./styles.module.scss";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <p className={styles.projects}>
      {t("projects.sorry")}
      <br />
      {t("projects.lookAround")}
    </p>
  );
};

export default Projects;

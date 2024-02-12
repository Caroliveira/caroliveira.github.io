import { Trans, useTranslation } from "react-i18next";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.projects}>
      <p>{t("projects.underConstruction")}</p>
      <p>
        <Trans
          i18nKey="projects.portfolioInvite"
          components={{
            a: (
              <a
                href="https://github.com/Caroliveira/caroliveira.github.io"
                rel="noreferrer"
                target="_blank"
              />
            ),
          }}
        />
      </p>
      <p>
        <Trans
          i18nKey="projects.askFeedback"
          components={{ a: <Link to={"/contact"} /> }}
        />
      </p>
    </div>
  );
};

export default Projects;

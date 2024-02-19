import { Trans, useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

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

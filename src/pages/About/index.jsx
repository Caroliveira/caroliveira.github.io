import { Link, useLocation, useNavigate } from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";
import { Button } from "@linaoliveira/design-system";
import styles from "./styles.module.scss";

const About = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation("pages");
  const query = new URLSearchParams(location.search);
  const option = query.get("option") || "feats";
  const aboutOptions = {
    feats: <p>{t("about.options.feats")}</p>,
    goals: <p>{t("about.options.goals")}</p>,
    approach: <p>{t("about.options.approach")}</p>,
    // skills: null,
    // testimonials: null,
  };

  return (
    <div className={styles.about}>
      <h1>{t("about.who")}</h1>
      <p>
        <Trans
          t={t}
          i18nKey="about.description"
          components={{ a: <Link to={"/developments"} /> }}
        />
      </p>
      <div className={styles.about__options}>
        {Object.keys(aboutOptions).map((key) => (
          <Button
            key={key}
            variant="outlined"
            disabled={key === option}
            onClick={() => navigate({ search: `?option=${key}` })}
          >
            {t(`about.${key}`)}
          </Button>
        ))}
      </div>
      {aboutOptions[option]}
    </div>
  );
};

export default About;

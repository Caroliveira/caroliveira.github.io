import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import illustration from "/src/assets/images/lina-illustration.png";
import styles from "./styles.module.scss";
import { Button } from "@linaoliveira/design-system";

const Home = () => {
  const { t } = useTranslation("pages");
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.home}>
        <h1 className={styles.home__intro}>
          {t("home.title.hello")} <br />
          {t("home.title.intro")} <strong>Lina Oliveira</strong>, <br />
          Front end Developer
        </h1>
        <div className={styles.home__buttons}>
          <Button
            size="large"
            variant="outlined"
            onClick={() => navigate("/developments")}
          >
            {t("home.button.about")}
          </Button>
          <Button size="large" onClick={() => navigate("/contact")}>
            {t("home.button.contact")}
          </Button>
        </div>
      </div>
      <img
        alt={t("home.illustrationAlt")}
        src={illustration}
        className={styles.home__illustration}
      />
    </>
  );
};

export default Home;

import picture from "/src/assets/images/lina-picture.jpg";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t, i18n } = useTranslation("pages");

  return (
    <div className={styles.contact}>
      <img
        alt={t("contact.pictureAlt")}
        className={styles.contact__picture}
        src={picture}
      />
      <div className={styles.contact__content}>
        <h1 className={styles.contact__title}>{t("contact.title")}</h1>
        <ul>
          <li>
            {t("contact.through.prevLinkedIn")}{" "}
            <a
              href="https://www.linkedin.com/in/carolina-ribeiro-oliveira/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            ,
          </li>
          <li>
            {t("contact.through.prevResume")}{" "}
            <a href={`/carolina-oliveira-resume-${i18n.language}.pdf`} download>
              {t("contact.through.resume")}
            </a>
            ,
          </li>
          <li>
            {t("contact.through.prevGitHub")}{" "}
            <a
              href="https://github.com/Caroliveira"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            ,
          </li>
          <li>
            {t("contact.through.prevCodePen")}{" "}
            <a
              href="https://codepen.io/caroliveira"
              target="_blank"
              rel="noreferrer"
            >
              CodePen
            </a>
          </li>
          <li>
            {t("contact.through.prevEmail")}{" "}
            <a href="mailto:linaribeirooliveira@gmail.com">
              {t("contact.through.email")}
            </a>{" "}
            {t("contact.through.postEmail")}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;

import { useTranslation } from "react-i18next";
import bizCapital from "../../assets/images/bizCapital.webp";
import andela from "../../assets/images/andela.webp";
import styles from "./styles.module.scss";
import { useLocation, useNavigate } from "react-router-dom";

const achievements = [
  { nameKey: "bizCapital", img: bizCapital },
  { nameKey: "andela", img: andela },
];

const Achievements = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const query = new URLSearchParams(location.search);
  const type = query.get("details");

  const renderAchvCard = ({ nameKey, img }) => {
    const showCurrent = type === nameKey;
    const buttonAriaLabel = `${t(
      `achievements.${showCurrent ? "collapse" : "expand"}`
    )} ${t(`achievements.list.${nameKey}.title`)}`;
    const details = showCurrent ? "" : `&details=${nameKey}`;

    return (
      <button
        key={nameKey}
        className={styles[`achv__card${showCurrent ? "--expanded" : ""}`]}
        onClick={() => navigate(`?type=achievements${details}`)}
        aria-label={buttonAriaLabel}
        aria-expanded={showCurrent}
      >
        {showCurrent ? (
          <div className={styles.achv__card__details}>
            <h3>{t(`achievements.list.${nameKey}.title`)}</h3>
            <p>{t(`achievements.list.${nameKey}.description`)}</p>
          </div>
        ) : (
          <img
            src={img}
            alt={t(`achievements.list.${nameKey}.imgAlt`)}
            className={styles.achv__card__image}
          />
        )}
      </button>
    );
  };

  return <div className={styles.achv}>{achievements.map(renderAchvCard)}</div>;
};

export default Achievements;

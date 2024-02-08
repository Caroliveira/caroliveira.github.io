import { useState } from "react";
import { useTranslation } from "react-i18next";
import bizCapital from "../../assets/images/bizCapital.jpg";
import andela from "../../assets/images/andela.jpg";
import styles from "./styles.module.scss";

const achievements = [
  { nameKey: "bizCapital", img: bizCapital },
  { nameKey: "andela", img: andela },
];

const Achievements = () => {
  const { t } = useTranslation();
  const [showDetails, setShowDetails] = useState("");

  const renderAchvCard = ({ nameKey, img }) => {
    const buttonAriaLabel = `${t(
      `achievements.${showDetails ? "collapse" : "expand"}`
    )} ${t(`achievements.list.${nameKey}.title`)}`;

    return (
      <button
        key={nameKey}
        className={styles.achv__card}
        onClick={() => setShowDetails(nameKey === showDetails ? "" : nameKey)}
        aria-label={buttonAriaLabel}
        aria-expanded={showDetails}
      >
        {showDetails === nameKey ? (
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

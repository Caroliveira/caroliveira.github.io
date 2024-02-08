import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";

const AchievementCard = ({ title, description, img, imgAlt }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <button
      className={styles.achvCard}
      onClick={() => setShowDetails(!showDetails)}
      aria-expanded={showDetails}
      aria-label={
        showDetails
          ? `Collapse details for ${title}`
          : `Expand details for ${title}`
      }
    >
      {showDetails ? (
        <div className={styles.achvCard__details}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      ) : (
        <img src={img} alt={imgAlt} className={styles.achvCard__image} />
      )}
    </button>
  );
};

AchievementCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
  imgAlt: PropTypes.string,
};

export default AchievementCard;

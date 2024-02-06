import { useState } from "react";
import "./AchievementCard.scss";
import PropTypes from "prop-types";

const AchievementCard = ({ title, description, img, imgAlt }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      tabIndex="0"
      className="achvCard"
      onClick={() => setShowDetails(!showDetails)}
      aria-label="Show achievement details"
      aria-expanded={showDetails}
      role="button"
    >
      {showDetails ? (
        <div className="achvCard__details">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      ) : (
        <img src={img} alt={imgAlt} className="achvCard__image" />
      )}
    </div>
  );
};

AchievementCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
  imgAlt: PropTypes.string,
};

export default AchievementCard;

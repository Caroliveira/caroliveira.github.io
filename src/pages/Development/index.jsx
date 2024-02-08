import { useState } from "react";
import { DEVELOPMENTS } from "./constants";
import styles from "./styles.module.scss";

const Developments = () => {
  const [current, setCurrent] = useState(2);

  const renderListItem = ({ type, description }, index) => {
    const isCurrent = index === current;
    const buttonClassName = `development${isCurrent ? "--current" : ""}`;
    return (
      <li key={type}>
        <button
          className={styles[buttonClassName]}
          onClick={() => setCurrent(index)}
          aria-label={`Display ${type}`}
          aria-expanded={isCurrent}
        >
          <h2 className={styles.development__title}>{type}</h2>
          {isCurrent && (
            <p className={styles.development__description}>{description}</p>
          )}
        </button>
      </li>
    );
  };

  return (
    <div className={styles.developments}>
      <ul className={styles.developments__list}>
        {DEVELOPMENTS.map(renderListItem)}
      </ul>
      <div className={styles.developments__content}>
        {DEVELOPMENTS[current].content}
      </div>
    </div>
  );
};

export default Developments;

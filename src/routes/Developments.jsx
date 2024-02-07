import { useState } from "react";
import { DEVELOPMENTS } from "../utils/constants";
import "./Developments.scss";

const Developments = () => {
  const [current, setCurrent] = useState(2);

  const renderListItem = ({ type, description }, index) => {
    const isCurrent = index === current;
    const buttonClassName = `development${isCurrent ? "--current" : ""}`;
    return (
      <li key={type}>
        <button
          className={buttonClassName}
          onClick={() => setCurrent(index)}
          aria-label={`Display ${type}`}
          aria-expanded={isCurrent}
        >
          <h2 className="development__title">{type}</h2>
          {isCurrent && (
            <p className="development__description">{description}</p>
          )}
        </button>
      </li>
    );
  };

  return (
    <div className="developments">
      <ul className="developments__list">{DEVELOPMENTS.map(renderListItem)}</ul>
      <div className="developments__content">
        {DEVELOPMENTS[current].content}
      </div>
    </div>
  );
};

export default Developments;

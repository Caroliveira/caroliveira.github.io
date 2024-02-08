import { useState } from "react";
import { useTranslation } from "react-i18next";
import Achievements from "../../components/Achievements";
import Experiments from "../../components/Experiments";
import Projects from "../../components/Projects";
import styles from "./styles.module.scss";

const DEVELOPMENTS = [
  { nameKey: "projects", content: <Projects /> },
  { nameKey: "experiments", content: <Experiments /> },
  { nameKey: "achievements", content: <Achievements /> },
];

const Developments = () => {
  const { t } = useTranslation("pages");
  const [current, setCurrent] = useState(2);

  const renderListItem = ({ nameKey }, index) => {
    const isCurrent = index === current;
    const buttonClassName = `development${isCurrent ? "--current" : ""}`;
    return (
      <li key={nameKey}>
        <button
          className={styles[buttonClassName]}
          onClick={() => setCurrent(index)}
          aria-expanded={isCurrent}
          aria-label={`${t("developments.display")} ${t(
            `developments.${nameKey}.type`
          )}`}
        >
          <h2 className={styles.development__title}>
            {t(`developments.${nameKey}.type`)}
          </h2>
          {isCurrent && (
            <p className={styles.development__description}>
              {t(`developments.${nameKey}.description`)}
            </p>
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

import { useLocation, useNavigate } from "react-router-dom";
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
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation("pages");

  const query = new URLSearchParams(location.search);
  const type = query.get("type") || "projects";
  const { content } = DEVELOPMENTS.find((d) => d.nameKey === type);

  const renderListItem = ({ nameKey }) => {
    const isCurrent = nameKey === type;
    const liClassName = `development${isCurrent ? "--current" : ""}`;
    return (
      <li key={nameKey} className={styles[liClassName]}>
        <button
          onClick={() => navigate({ search: `?type=${nameKey}` })}
          className={styles.development__button}
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
      <div className={styles.developments__wrapper}>
        <ul className={styles.developments__list}>
          {DEVELOPMENTS.map(renderListItem)}
        </ul>
      </div>
      <div className={styles.developments__content}>{content}</div>
    </div>
  );
};

export default Developments;

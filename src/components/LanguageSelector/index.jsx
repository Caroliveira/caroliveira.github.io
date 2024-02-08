import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <span>{t("languageSelector.label")} </span>
      <button onClick={() => i18n.changeLanguage("pt")}>
        {t("languageSelector.languages.pt")}
      </button>
      &nbsp;
      <button onClick={() => i18n.changeLanguage("en")}>
        {t("languageSelector.languages.en")}
      </button>
    </div>
  );
};

export default LanguageSelector;

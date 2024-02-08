import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import components_en from "./translations/en/components.json";
import pages_en from "./translations/en/pages.json";

import components_pt from "./translations/pt/components.json";
import pages_pt from "./translations/pt/pages.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    supportedLngs: ["pt", "en"],
    interpolation: { escapeValue: false },
    resources: {
      en: {
        components: components_en,
        pages: pages_en,
      },
      pt: {
        components: components_pt,
        pages: pages_pt,
      },
    },
    ns: ["components", "pages"],
    defaultNS: "components",
  });

export default i18n;

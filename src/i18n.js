import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import common_en from "./translations/en/common.json";
import components_en from "./translations/en/components.json";
import pages_en from "./translations/en/pages.json";

import common_pt from "./translations/pt/common.json";
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
        common: common_en,
        components: components_en,
        pages: pages_en,
      },
      pt: {
        common: common_pt,
        components: components_pt,
        pages: pages_pt,
      },
    },
    ns: ["common", "components", "pages"],
    defaultNS: "common",
  });

export default i18n;

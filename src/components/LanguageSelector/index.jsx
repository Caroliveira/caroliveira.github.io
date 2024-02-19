import { useTranslation } from "react-i18next";
import * as Select from "@radix-ui/react-select";
import styles from "./styles.module.scss";

const LANGUAGES = ["en", "pt"];

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  return (
    <Select.Root value={i18n.language} onValueChange={i18n.changeLanguage}>
      <Select.Trigger className={styles.selector__trigger} aria-label="Food">
        <Select.Value>{i18n.language.toUpperCase()}</Select.Value>
        <Select.Icon className={styles.selector__icon} />
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className={styles.selector__content} position="popper">
          <Select.Viewport className={styles.selector__viewport}>
            {LANGUAGES.map((language) => (
              <Select.Item
                key={language}
                value={language}
                className={styles.selector__item}
              >
                <Select.ItemText>{language.toUpperCase()}</Select.ItemText>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

export default LanguageSelector;

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./constants/en.json";
import ru from "./constants/ru.json";
import kz from "./constants/kz.json";

i18n.use(initReactI18next).init({
  resources: {
    EN: { translation: en },
    RU: { translation: ru },
    KZ: { translation: kz },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      home: "Home",
      about: "About Us",
      contact: "Contact Us",
    },
  },
  fr: {
    translation: {
      home: "Accueil",
      about: "À propos de nous",
      contact: "Nous contacter",
    },
  },
  sr: {
    translation: {
      home: "Početna",
      about: "O Nama",
      contact: "Kontaktiraj Nas",
    },
  },
  jp: {
    translation: {
      home: "ホーム",
      about: "私たちに関しては",
      contact: "お問い合わせ",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;

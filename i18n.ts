import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as Localization from "expo-localization";
import { useDispatch, useSelector } from "react-redux";

import en from "@/locales/en.json";
import bg from "@/locales/bg.json";
import { useEffect } from "react";

const initI18n = () => {
  // const currentLanguage = useSelector((state: any) => state.language.language);
  // const dispatch = useDispatch();

  // useEffect(() => {
    const deviceLocale = Localization.getLocales();
    // const deviceLanguageCode = deviceLocale[0]?.languageCode;
    

    // if (deviceLanguageCode) {
      // dispatch({ type: "SET_LANGUAGE", payload: deviceLanguageCode });
    //   i18n.changeLanguage(deviceLanguageCode);
    // }
  // }, []);
  
  i18n.use(initReactI18next).init({
    compatibilityJSON: "v4",
    lng: "en",
    fallbackLng: ["bg", "en"],
    resources: {
      en: { translation: en },
      bg: { translation: bg },
    },
    interpolation: {
      escapeValue: false,
    },
  });
};

initI18n();

export default i18n;
// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";
// import * as Localization from "expo-localization";
// import { useEffect } from "react"; // Import useEffect
// import { useDispatch, useSelector } from "react-redux";
// import en from "@/locales/en.json";
// import bg from "@/locales/bg.json";

// // Create a functional component
// const I18nInitializer = () => {
//   const currentLanguage = useSelector((state: any) => state.language.language);
//   const dispatch = useDispatch();
//   useEffect(() => { // Use useEffect to run the logic after component mounts
//     const deviceLocale = Localization.useLocales();
//     const deviceLanguageCode = deviceLocale[0]?.languageCode;

//     if (deviceLanguageCode && deviceLanguageCode!== currentLanguage) {
//       dispatch({ type: "SET_LANGUAGE", payload: deviceLanguageCode });
//       i18n.changeLanguage(deviceLanguageCode);
//     }
//   },); // Empty dependency array to run only once
//   return null; // This component doesn't render anything
// };

// // Initialize i18n as before
// i18n
// .use(initReactI18next)
// .init({
//     compatibilityJSON: "v4",
//     lng: "en",
//     fallbackLng: ["bg", "en"],
//     resources: {
//       en: { translation: en },
//       bg: { translation: bg },
//     },
//     interpolation: {
//       escapeValue: false,
//     },
//   });

// export { I18nInitializer }; // Export the component
// export default i18n;

import React, { createContext, useEffect, useMemo, useState } from "react";
import { I18nextProvider } from "react-i18next";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import i18n from "./../i18n";

interface ILanguageContext {
  toggleLanguage: (param: "fa" | "en") => void;
  language: "fa" | "en";
}

interface ILanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageContext = createContext<ILanguageContext>({
  toggleLanguage: () => {},
  language: "fa",
});

const LanguageContextProvider = ({ children }: ILanguageProviderProps) => {
  const [language, setLanguage] = useState<"fa" | "en">("fa");

  useEffect(() => {
    document.body.dir = i18n.dir();
  }, []);

  const changeLanguage = useMemo(
    () => ({
      toggleLanguage: (param: "fa" | "en") => {
        setLanguage(param);
        i18n.changeLanguage(param);
        document.body.dir = i18n.dir();
      },
      language,
    }),
    [language]
  );

  // const cacheRtl = createCache({
  //   key: "muirtl",
  //   stylisPlugins: [prefixer, rtlPlugin | undefined],
  // });
  return (
    <LanguageContext.Provider value={changeLanguage}>
      <I18nextProvider i18n={i18n}>
        {/* <CacheProvider value={cacheRtl}> */}
            {children}
            {/* </CacheProvider>; */}
      </I18nextProvider>
    </LanguageContext.Provider>
  );
};
export default LanguageContextProvider;

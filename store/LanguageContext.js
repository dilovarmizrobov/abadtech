import React from "react";
import {createContext, useState, useEffect} from "react";

export const LANGUAGES = {
    ru: {
        key: "ru",
        show: "RU"
    },
    en: {
        key: "en",
        show: "EN"
    },
}

const LanguageContext = createContext({})

export default LanguageContext;

export const LanguageProvider = ({ children }) => {
    const [locale, setLocale] = useState(null)

    useEffect(() => {
        if (!window) {
            return;
        }

        const language =  localStorage.getItem("lang") || LANGUAGES.en.key;
        setLocale(language);
    }, [locale])

    const handleLocaleChange = (language)=> {
        localStorage.setItem("lang", language);
        setLocale(language);
    }

    return (
        <LanguageContext.Provider value={{locale, handleLocaleChange}}>
            {locale ? children : null}
        </LanguageContext.Provider>
    )
}
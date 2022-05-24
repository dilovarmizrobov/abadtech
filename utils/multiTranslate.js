import {LANGUAGES} from "../store/LanguageContext";
import TRANSLATES from "../translations";

const multiTranslate = () => {
    const language = localStorage.getItem("lang") || LANGUAGES.en.key;

    return TRANSLATES[language]
}

export default multiTranslate
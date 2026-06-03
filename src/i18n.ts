import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// 1. Import ไฟล์ JSON ทั้งหมด 12 ภาษา
import enJSON from './locales/en.json';
import thJSON from './locales/th.json';
import koJSON from './locales/ko.json';
import jaJSON from './locales/ja.json';
import itJSON from './locales/it.json';
import esJSON from './locales/es.json';
import frJSON from './locales/fr.json';
import ruJSON from './locales/ru.json';
import nlJSON from './locales/nl.json';
import deJSON from './locales/de.json';
import daJSON from './locales/da.json';
import svJSON from './locales/sv.json';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: enJSON },
            th: { translation: thJSON },
            ko: { translation: koJSON },
            ja: { translation: jaJSON },
            it: { translation: itJSON },
            es: { translation: esJSON },
            fr: { translation: frJSON },
            ru: { translation: ruJSON },
            nl: { translation: nlJSON },
            de: { translation: deJSON },
            da: { translation: daJSON },
            sv: { translation: svJSON }
        },
        fallbackLng: 'en', // ภาษาหลักกรณีที่หาภาษาอื่นไม่เจอ
        interpolation: {
            escapeValue: false // ป้องกันปัญหาเรื่อง string escaping ใน React
        }
    });

export default i18n;
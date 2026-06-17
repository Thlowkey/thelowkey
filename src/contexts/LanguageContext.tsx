import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Lang = "en" | "es" | "fr" | "de";

export const LANGUAGES: { code: Lang; label: string; flag: string }[] = [
  { code: "en", label: "English", flag: "EN" },
  { code: "es", label: "Español", flag: "ES" },
  { code: "fr", label: "Français", flag: "FR" },
  { code: "de", label: "Deutsch", flag: "DE" },
];

type Dict = Record<string, string>;
const translations: Record<Lang, Dict> = {
  en: {
    "nav.mission": "Mission",
    "nav.simulator": "Simulator",
    "nav.vault": "Vault",
    "nav.brain": "Brain",
    "nav.journey": "Journey",
    "nav.experience": "Experience",
    "nav.services": "What I Do",
    "nav.insights": "Insights",
    "nav.contact": "Contact Me",
    "nav.initiate": "Initiate",
    "nav.back": "Back to Home",
  },
  es: {
    "nav.mission": "Misión",
    "nav.simulator": "Simulador",
    "nav.vault": "Bóveda",
    "nav.brain": "Cerebro",
    "nav.journey": "Trayecto",
    "nav.experience": "Experiencia",
    "nav.services": "Qué Hago",
    "nav.insights": "Artículos",
    "nav.contact": "Contáctame",
    "nav.initiate": "Iniciar",
    "nav.back": "Volver al inicio",
  },
  fr: {
    "nav.mission": "Mission",
    "nav.simulator": "Simulateur",
    "nav.vault": "Coffre",
    "nav.brain": "Cerveau",
    "nav.journey": "Parcours",
    "nav.experience": "Expérience",
    "nav.services": "Mes Services",
    "nav.insights": "Articles",
    "nav.contact": "Me Contacter",
    "nav.initiate": "Lancer",
    "nav.back": "Retour à l'accueil",
  },
  de: {
    "nav.mission": "Mission",
    "nav.simulator": "Simulator",
    "nav.vault": "Tresor",
    "nav.brain": "Gehirn",
    "nav.journey": "Reise",
    "nav.experience": "Erfahrung",
    "nav.services": "Was Ich Tue",
    "nav.insights": "Artikel",
    "nav.contact": "Kontakt",
    "nav.initiate": "Starten",
    "nav.back": "Zur Startseite",
  },
};

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (key: string) => string };
const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === "undefined") return "en";
    const saved = localStorage.getItem("lk-lang") as Lang | null;
    return saved && translations[saved] ? saved : "en";
  });
  useEffect(() => { localStorage.setItem("lk-lang", lang); document.documentElement.lang = lang; }, [lang]);
  const t = (key: string) => translations[lang][key] ?? translations.en[key] ?? key;
  return <LanguageContext.Provider value={{ lang, setLang: setLangState, t }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}

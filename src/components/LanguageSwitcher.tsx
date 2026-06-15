import { useState } from "react";
import { Globe, ChevronDown } from "lucide-react";
import { useLanguage, LANGUAGES } from "@/contexts/LanguageContext";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const current = LANGUAGES.find(l => l.code === lang)!;

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(o => !o)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full glass font-mono text-[10px] uppercase tracking-wider text-foreground/80 hover:text-primary transition"
        aria-label="Select language"
      >
        <Globe size={11} className="text-primary" />
        <span>{current.flag}</span>
        <ChevronDown size={10} className={`transition ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 mt-2 w-44 glass-strong rounded-xl p-1 z-50">
            {LANGUAGES.map(l => (
              <button
                key={l.code}
                onClick={() => { setLang(l.code); setOpen(false); }}
                className={`w-full text-left px-3 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition flex items-center justify-between ${
                  lang === l.code ? "bg-primary/10 text-primary" : "text-foreground/70 hover:bg-primary/5 hover:text-primary"
                }`}
              >
                <span>{l.label}</span>
                <span className="text-[9px] text-muted-foreground">{l.flag}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import lowkeyLogo from "@/assets/lowkey-logo.png";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import TimezoneClock from "@/components/TimezoneClock";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const nav = [
    { label: t("nav.mission"), href: "/#mission" },
    { label: t("nav.simulator"), href: "/#simulator" },
    { label: t("nav.vault"), href: "/#vault" },
    { label: t("nav.brain"), href: "/#brain" },
    { label: t("nav.journey"), href: "/#journey" },
    { label: t("nav.experience"), href: "/experience", route: true as const },
  ];

  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "glass" : ""}`}>
      <div className="container mx-auto flex items-center justify-between py-3 px-4 md:px-8 gap-3">
        <Link to="/" className="flex items-center gap-3 group shrink-0">
          <div className="relative">
            <img src={lowkeyLogo} alt="Low Key" className="h-8 w-auto brightness-0 invert opacity-90 group-hover:opacity-100 transition" />
            <div className="absolute inset-0 bg-primary/30 blur-xl opacity-0 group-hover:opacity-60 transition" />
          </div>
          <span className="font-mono text-[10px] tracking-[0.3em] text-primary/70 uppercase hidden sm:inline">// OS_v5.0</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1 glass rounded-full px-2 py-1.5">
          {nav.map(l => l.route ? (
            <Link key={l.href} to={l.href} className="px-4 py-1.5 text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-full transition">
              {l.label}
            </Link>
          ) : (
            <a key={l.href} href={l.href} className="px-4 py-1.5 text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-full transition">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block"><TimezoneClock /></div>
          <LanguageSwitcher />
          <a href="mailto:alwaysonalowkey@gmail.com?subject=New%20Project%20Inquiry" className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-[11px] font-mono uppercase tracking-wider hover:glow-cyan transition">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground animate-pulse" />
            {t("nav.initiate")}
          </a>
          <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden glass">
          <div className="flex flex-col gap-1 p-4">
            {nav.map(l => l.route ? (
              <Link key={l.href} to={l.href} onClick={() => setOpen(false)} className="px-4 py-3 font-mono text-xs uppercase tracking-wider text-muted-foreground hover:text-primary">
                {l.label}
              </Link>
            ) : (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="px-4 py-3 font-mono text-xs uppercase tracking-wider text-muted-foreground hover:text-primary">
                {l.label}
              </a>
            ))}
            <div className="sm:hidden pt-2"><TimezoneClock /></div>
            <a href="mailto:alwaysonalowkey@gmail.com?subject=New%20Project%20Inquiry" onClick={() => setOpen(false)} className="mt-2 px-4 py-3 rounded-full bg-primary text-primary-foreground text-xs font-mono uppercase tracking-wider text-center">
              {t("nav.initiate")}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

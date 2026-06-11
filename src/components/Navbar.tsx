import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import lowkeyLogo from "@/assets/lowkey-logo.png";

const nav = [
  { label: "Mission", href: "#mission" },
  { label: "Simulator", href: "#simulator" },
  { label: "Vault", href: "#vault" },
  { label: "Brain", href: "#brain" },
  { label: "Journey", href: "#journey" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "glass border-b border-border/60" : ""}`}>
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8">
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative">
            <img src={lowkeyLogo} alt="Low Key" className="h-8 w-auto brightness-0 invert opacity-90 group-hover:opacity-100 transition" />
            <div className="absolute inset-0 bg-primary/30 blur-xl opacity-0 group-hover:opacity-60 transition" />
          </div>
          <span className="font-mono text-[10px] tracking-[0.3em] text-primary/70 uppercase hidden sm:inline">// OS_v5.0</span>
        </a>

        <nav className="hidden md:flex items-center gap-1 glass rounded-full px-2 py-1.5">
          {nav.map(l => (
            <a key={l.href} href={l.href} className="px-4 py-1.5 text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-full transition">
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#final" className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary text-primary-foreground text-xs font-mono uppercase tracking-wider hover:glow-cyan transition">
          <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground animate-pulse" />
          Initiate
        </a>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden glass border-t border-border/60">
          <div className="flex flex-col gap-1 p-4">
            {nav.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="px-4 py-3 font-mono text-xs uppercase tracking-wider text-muted-foreground hover:text-primary">
                {l.label}
              </a>
            ))}
            <a href="#final" onClick={() => setOpen(false)} className="mt-2 px-4 py-3 rounded-full bg-primary text-primary-foreground text-xs font-mono uppercase tracking-wider text-center">
              Initiate Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

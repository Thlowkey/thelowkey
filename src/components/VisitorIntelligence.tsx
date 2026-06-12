import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Store, Briefcase, Code2, MapPin, Sparkles, Eye, ArrowRight, X } from "lucide-react";

const personas = [
  { id: "startup", icon: Sparkles, label: "Startup Founder", focus: "Position. Launch. Convert. You need a site that closes investors and early customers in the same scroll." },
  { id: "shopify", icon: Store, label: "Shopify Owner", focus: "Conversion architecture. AOV. Repeat purchase. Every pixel earns its place — or gets cut." },
  { id: "agency", icon: Briefcase, label: "Agency Owner", focus: "Authority + proof + pipeline. Your site should pre-qualify leads before the call." },
  { id: "local", icon: MapPin, label: "Local Business", focus: "Trust at first glance. Local intent capture. The phone should ring before they finish scrolling." },
  { id: "creator", icon: Code2, label: "Creator Brand", focus: "Distinct voice. Owned audience. A site that converts visitors into followers, then customers." },
  { id: "explore", icon: Eye, label: "Just Exploring", focus: "Wander the system. Everything you see was built to convert." },
];

const KEY = "lowkey_persona";

export default function VisitorIntelligence() {
  const [picked, setPicked] = useState<string | null>(() => typeof window !== "undefined" ? localStorage.getItem(KEY) : null);
  const [open, setOpen] = useState(() => typeof window !== "undefined" && !localStorage.getItem(KEY));

  const pick = (id: string) => {
    setPicked(id);
    localStorage.setItem(KEY, id);
    setTimeout(() => setOpen(false), 900);
  };

  const persona = personas.find(p => p.id === picked);

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/85 backdrop-blur-xl flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.98, opacity: 0 }}
              className="glass-strong rounded-2xl p-6 md:p-10 max-w-3xl w-full relative"
            >
              <button onClick={() => setOpen(false)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition" aria-label="Skip">
                <X size={18} />
              </button>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-3">// Identify the visitor</div>
              <h2 className="text-2xl md:text-4xl font-bold mb-2">Who are you?</h2>
              <p className="text-sm text-muted-foreground mb-6">The system tunes itself to you. Pick the closest fit.</p>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
                {personas.map(p => {
                  const Icon = p.icon;
                  const active = picked === p.id;
                  return (
                    <button
                      key={p.id}
                      onClick={() => pick(p.id)}
                      className={`group glass rounded-xl p-4 text-left transition-all ${active ? "border-primary/60 glow-soft" : "hover:border-primary/30"}`}
                    >
                      <Icon size={18} className={`mb-3 ${active ? "text-primary" : "text-muted-foreground group-hover:text-primary"} transition`} />
                      <div className="font-semibold text-sm">{p.label}</div>
                    </button>
                  );
                })}
              </div>
              <button onClick={() => setOpen(false)} className="mt-6 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground hover:text-foreground transition">
                Skip — show me everything →
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {persona && !open && (
        <motion.button
          initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
          onClick={() => setOpen(true)}
          className="fixed top-20 right-4 z-40 glass rounded-full px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-primary hover:border-primary/40 transition hidden md:flex items-center gap-2"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          Tuned for: {persona.label}
        </motion.button>
      )}

      {persona && (
        <section className="px-4 md:px-8 pt-24 pb-2">
          <div className="container mx-auto">
            <motion.div
              key={persona.id}
              initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
              className="glass rounded-xl p-4 md:p-5 flex flex-col md:flex-row md:items-center gap-3 md:gap-5"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary shrink-0">// Calibrated for {persona.label}</div>
              <div className="text-sm text-foreground/80 flex-1">{persona.focus}</div>
              <a href="#roast" className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-primary hover:text-primary/70 transition shrink-0">
                Start with a roast <ArrowRight size={12} />
              </a>
            </motion.div>
          </div>
        </section>
      )}
    </>
  );
}

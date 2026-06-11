import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, KeyRound } from "lucide-react";

// Konami sequence: ↑↑↓↓←→←→
const seq = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight"];

const goods = [
  { title: "The Half-Built Empire", desc: "A SaaS experiment I shelved at 87% — and the lessons I pulled out of the rubble." },
  { title: "Brutalist Commerce Lab", desc: "Three checkout experiments that broke every UX rule and outconverted the originals." },
  { title: "The 4AM Notebook", desc: "Pattern notes from 2,000+ projects: what consistently wins, what consistently fails." },
  { title: "Anti-Portfolio", desc: "The work I'd never put on a homepage — but learned the most from." },
];

export default function EasterEgg() {
  const [keys, setKeys] = useState<string[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      setKeys(prev => {
        const next = [...prev, e.key].slice(-seq.length);
        if (next.length === seq.length && next.every((k, i) => k === seq[i])) {
          setOpen(true);
          return [];
        }
        return next;
      });
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {/* Hidden trigger for mobile / non-keyboard */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Hidden vault"
        className="fixed bottom-4 left-4 z-40 w-2 h-2 rounded-full bg-primary/20 hover:bg-primary/80 transition"
      />

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[200] bg-background/90 backdrop-blur-xl flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.94, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className="glass-strong rounded-2xl max-w-2xl w-full overflow-hidden"
            >
              <div className="flex items-center justify-between px-6 py-4 border-b border-border/60 bg-background/60">
                <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
                  <KeyRound size={12} /> // Vault.unlocked — Curious humans only
                </div>
                <button onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground"><X size={18} /></button>
              </div>
              <div className="p-8">
                <h3 className="text-3xl md:text-4xl font-bold mb-3">You found it.</h3>
                <p className="text-muted-foreground mb-8">Curiosity is the first qualification. Here's what isn't on the main site.</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {goods.map(g => (
                    <div key={g.title} className="glass rounded-xl p-5">
                      <div className="font-semibold mb-1">{g.title}</div>
                      <div className="text-sm text-muted-foreground">{g.desc}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-border/60 text-center">
                  <a href="mailto:alwaysonalowkey@gmail.com?subject=Vault%20Access" className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary hover:underline">
                    Email me for vault access →
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

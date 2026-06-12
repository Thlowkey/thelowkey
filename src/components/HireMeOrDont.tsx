import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const fit = [
  "You care about measurable results",
  "You value strategy over decoration",
  "You embrace innovation and testing",
  "You're willing to implement ideas",
  "You're playing the long game",
];

const notFit = [
  "You want the cheapest option",
  "You avoid collaboration",
  "You dislike experimentation",
  "You only care about aesthetics",
  "You expect overnight success",
];

export default function HireMeOrDont() {
  return (
    <section id="fit" className="section-padding relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-12"
        >
          <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary mb-3">// 07 — Calibration</div>
          <h2 className="text-3xl md:text-5xl font-bold leading-[1.05]">
            Not everyone should <span className="serif-italic text-gradient-cyan">work with me.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-strong rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-primary/10 blur-3xl" />
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-6">// Work with me if</div>
            <ul className="space-y-3">
              {fit.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="mt-1 w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                    <Check size={12} className="text-primary" />
                  </span>
                  <span className="text-foreground/90">{f}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-6">// Don't work with me if</div>
            <ul className="space-y-3">
              {notFit.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="mt-1 w-5 h-5 rounded-full bg-muted flex items-center justify-center shrink-0">
                    <X size={12} className="text-muted-foreground" />
                  </span>
                  <span className="text-muted-foreground line-through decoration-muted-foreground/30">{f}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

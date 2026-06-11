import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

const planets = [
  { id: "revenue", label: "Revenue", value: "$15M+", color: "from-cyan-400 to-blue-500", size: 200,
    story: "Across 5 years, I've engineered and shipped systems that have collectively driven over $15M in tracked revenue. Not vanity metrics — booked, paid, attributed."
  },
  { id: "projects", label: "Projects", value: "2,000+", color: "from-violet-400 to-fuchsia-500", size: 160,
    story: "Two thousand engagements is two thousand chances to learn what actually moves a needle. Pattern recognition is the unfair advantage."
  },
  { id: "clients", label: "Clients", value: "Trusted", color: "from-amber-300 to-orange-500", size: 140,
    story: "From early-stage founders to 8-figure brands. Every engagement runs through me personally — no junior handoffs, no agency layers."
  },
  { id: "industries", label: "Industries", value: "27", color: "from-emerald-400 to-teal-500", size: 130,
    story: "DTC, SaaS, services, creators, agencies, fintech, wellness, real estate, hospitality. Cross-industry pattern matching = sharper strategy."
  },
  { id: "experience", label: "Years", value: "5+", color: "from-rose-400 to-pink-500", size: 115,
    story: "Five years of compounding craft. Every project teaches me something the next client benefits from."
  },
];

export default function AchievementUniverse() {
  const [open, setOpen] = useState<typeof planets[number] | null>(null);

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="container mx-auto relative">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mb-16">
          <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary mb-5">// 06 — Achievement Universe</div>
          <h2 className="text-4xl md:text-6xl font-bold leading-[1.05] mb-6">
            Numbers are <span className="serif-italic text-gradient-cyan">orbits.</span>
          </h2>
          <p className="text-muted-foreground md:text-lg">Each planet is a story compressed into a metric. Tap one to expand it.</p>
        </motion.div>

        <div className="relative min-h-[480px] md:min-h-[560px] flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {planets.map((p, i) => (
            <motion.button
              key={p.id}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 80 }}
              whileHover={{ scale: 1.06 }}
              onClick={() => setOpen(p)}
              className="relative group float-slow"
              style={{ animationDelay: `${i * 0.7}s`, width: p.size, height: p.size }}
            >
              <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${p.color} opacity-80 blur-xl group-hover:opacity-100 transition`} />
              <div className={`relative w-full h-full rounded-full bg-gradient-to-br ${p.color} flex flex-col items-center justify-center text-background shadow-2xl`}>
                <div className="text-2xl md:text-3xl font-bold">{p.value}</div>
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] opacity-80 mt-1">{p.label}</div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[100] bg-background/85 backdrop-blur-md flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.92, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className="glass-strong rounded-2xl max-w-lg p-8 relative"
            >
              <button onClick={() => setOpen(null)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"><X size={18} /></button>
              <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${open.color} mb-6 mx-auto glow-soft`} />
              <div className="text-center font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-2">// {open.label}</div>
              <div className="text-center text-4xl font-bold mb-6">{open.value}</div>
              <p className="text-center text-foreground/80 leading-relaxed">{open.story}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

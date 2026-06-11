import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { TrendingUp, Palette, Users, Cog, ArrowRight } from "lucide-react";

const paths = [
  { id: "sales", label: "I Need More Sales", icon: TrendingUp,
    plan: ["Audit your funnel for the 3 biggest leaks", "Rebuild the highest-traffic page around conversion psychology", "Install a post-purchase system that compounds LTV"],
    case: "DTC client: +62% CVR in 60 days." },
  { id: "design", label: "I Need Better Design", icon: Palette,
    plan: ["Strip everything that isn't earning its place", "Rebuild the brand expression around one ruthless idea", "Engineer micro-interactions that signal premium"],
    case: "Personal brand: 4x in average contract value." },
  { id: "leads", label: "I Need More Leads", icon: Users,
    plan: ["Reposition around one specific buyer, not 'everyone'", "Build a qualification funnel that pre-sells", "Stack social proof at decision moments"],
    case: "Service business: 4.7x monthly bookings." },
  { id: "auto", label: "I Need Automation", icon: Cog,
    plan: ["Map every manual touch point that's draining hours", "Connect tools so data flows without you", "Build a dashboard that surfaces only what matters"],
    case: "Agency: 12 hours/week reclaimed, zero quality loss." },
];

export default function ChooseAdventure() {
  const [picked, setPicked] = useState<typeof paths[number] | null>(null);

  return (
    <section className="section-padding relative">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mb-16">
          <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary mb-5">// 07 — Choose Your Adventure</div>
          <h2 className="text-4xl md:text-6xl font-bold leading-[1.05] mb-6">
            What's the <span className="serif-italic text-gradient-cyan">real bottleneck?</span>
          </h2>
          <p className="text-muted-foreground md:text-lg">Pick the one that hurts most. I'll show you exactly how I'd attack it.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {paths.map(p => {
            const Icon = p.icon;
            const active = picked?.id === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setPicked(p)}
                className={`group p-6 rounded-xl text-left transition-all ${active ? "glass-strong glow-cyan" : "glass hover:border-primary/30"}`}
              >
                <Icon size={22} className={`mb-4 ${active ? "text-primary" : "text-muted-foreground group-hover:text-primary"}`} />
                <div className="font-semibold">{p.label}</div>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          {picked && (
            <motion.div
              key={picked.id}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
              className="glass-strong rounded-2xl p-8 md:p-10"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-4">// Custom plan for: {picked.label}</div>
              <div className="space-y-4 mb-8">
                {picked.plan.map((s, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="font-mono text-xs text-primary pt-1">{String(i + 1).padStart(2, "0")}</div>
                    <div className="text-foreground/90">{s}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-border/60">
                <div className="text-sm text-muted-foreground"><span className="serif-italic">"{picked.case}"</span></div>
                <a href="#final" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-xs font-mono uppercase tracking-wider hover:glow-cyan transition shrink-0">
                  Run this play <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

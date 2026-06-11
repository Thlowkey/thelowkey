import { motion } from "framer-motion";

const steps = [
  { day: "DAY 01", title: "Discovery", desc: "Deep audit. Market, audience, current state, what's actually broken vs. what feels broken." },
  { day: "DAY 03", title: "Strategy", desc: "Positioning locked. Conversion architecture mapped. Every section earns its place — or doesn't ship." },
  { day: "DAY 07", title: "Design", desc: "High-fidelity build. Editorial layouts, custom interactions, mobile-first by default." },
  { day: "DAY 14", title: "Launch", desc: "Performance-tuned. Fully QA'd. Real metrics instrumented from minute one." },
  { day: "DAY 30", title: "Optimize", desc: "Data review. Iteration cycle. Doubling down on what's working, killing what isn't." },
];

export default function JourneyMap() {
  return (
    <section id="journey" className="section-padding relative">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mb-20">
          <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary mb-5">// 05 — Mission Roadmap</div>
          <h2 className="text-4xl md:text-6xl font-bold leading-[1.05] mb-6">
            Thirty days. <span className="serif-italic text-gradient-cyan">One trajectory.</span>
          </h2>
          <p className="text-muted-foreground md:text-lg">A precise sequence — not a process diagram. Each phase earns the next.</p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent md:-translate-x-px" />

          <div className="space-y-12 md:space-y-20">
            {steps.map((s, i) => (
              <motion.div
                key={s.day}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex md:items-center ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 top-0 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 z-10">
                  <div className="w-3 h-3 rounded-full bg-primary glow-cyan" />
                  <div className="absolute inset-0 rounded-full bg-primary/30 pulse-ring" />
                </div>

                <div className="md:w-1/2" />
                <div className={`pl-12 md:pl-0 md:w-1/2 ${i % 2 === 0 ? "md:pl-16" : "md:pr-16 md:text-right"}`}>
                  <div className="glass rounded-xl p-6 md:p-8 hover:border-primary/30 transition">
                    <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-3">{s.day}</div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-3">{s.title}</h3>
                    <p className="text-muted-foreground">{s.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

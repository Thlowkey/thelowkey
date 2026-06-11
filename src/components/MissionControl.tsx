import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";

function Counter({ end, suffix = "", prefix = "", duration = 2000 }: { end: number; suffix?: string; prefix?: string; duration?: number }) {
  const [v, setV] = useState(0);
  useEffect(() => {
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setV(Math.floor(eased * end));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [end, duration]);
  return <span>{prefix}{v.toLocaleString()}{suffix}</span>;
}

const stats = [
  { label: "Revenue Generated", value: 15, prefix: "$", suffix: "M+" },
  { label: "Projects Completed", value: 2000, suffix: "+" },
  { label: "Industries", value: 27, suffix: "" },
  { label: "Countries Served", value: 14, suffix: "" },
];

export default function MissionControl() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="mission" className="relative min-h-screen flex flex-col justify-center overflow-hidden grid-bg pt-24 pb-12">
      {/* Ambient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-primary/5 blur-[120px]" />

      <div className="container mx-auto px-4 md:px-8 relative">
        {/* HUD Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-12 font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-muted-foreground"
        >
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span>SYS.STATUS / ONLINE</span>
          </div>
          <div className="hidden md:block">NODE / LOW-KEY.OS</div>
          <div>{time.toUTCString().slice(17, 25)} UTC</div>
        </motion.div>

        {/* Headline */}
        <div className="max-w-5xl">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-mono text-[11px] uppercase tracking-[0.4em] text-primary mb-8"
          >
            // Enter the Mind of Low Key
          </motion.p>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-8">
            <motion.span initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="block">
              Most freelancers
            </motion.span>
            <motion.span initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} className="block text-muted-foreground/70">
              show work.
            </motion.span>
            <motion.span initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="block mt-2">
              I show <span className="serif-italic text-gradient-cyan text-glow">possibilities.</span>
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="max-w-xl text-base md:text-lg text-muted-foreground mb-16"
          >
            You're inside a private operating system — built for founders who refuse average. Explore. Interrogate. Simulate. Then decide.
          </motion.p>
        </div>

        {/* Live counters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border/60 glass rounded-2xl overflow-hidden"
        >
          {stats.map((s, i) => (
            <div key={s.label} className="p-6 md:p-8 bg-background/40 relative group hover:bg-primary/5 transition">
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-3">
                /// {String(i + 1).padStart(2, "0")} — {s.label}
              </div>
              <div className="text-3xl md:text-5xl font-bold text-foreground tabular-nums">
                <Counter end={s.value} prefix={s.prefix} suffix={s.suffix} />
              </div>
              <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full bg-primary transition-all duration-700" />
            </div>
          ))}
        </motion.div>

        <motion.a
          href="#simulator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-16 inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground hover:text-primary transition group"
        >
          <span>Enter the simulator</span>
          <ArrowDown size={14} className="group-hover:translate-y-1 transition" />
        </motion.a>
      </div>
    </section>
  );
}

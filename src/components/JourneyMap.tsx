import { motion } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const steps = [
  { day: "DAY 01", title: "Discovery", desc: "Deep audit. Market, audience, current state — what's actually broken vs. what feels broken." },
  { day: "DAY 03", title: "Strategy", desc: "Positioning locked. Conversion architecture mapped. Every section earns its place." },
  { day: "DAY 07", title: "Design", desc: "High-fidelity build. Editorial layouts, custom interactions, mobile-first by default." },
  { day: "DAY 14", title: "Launch", desc: "Performance-tuned. Fully QA'd. Real metrics instrumented from minute one." },
  { day: "DAY 30", title: "Optimize", desc: "Data review. Iteration cycle. Double down on what works, kill what doesn't." },
];

export default function JourneyMap() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const scrollToIndex = useCallback((i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[i] as HTMLElement | undefined;
    if (card) track.scrollTo({ left: card.offsetLeft - 16, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const cards = Array.from(track.children) as HTMLElement[];
      const center = track.scrollLeft + track.clientWidth / 2;
      let best = 0, bestDist = Infinity;
      cards.forEach((c, i) => {
        const cardCenter = c.offsetLeft + c.clientWidth / 2;
        const d = Math.abs(cardCenter - center);
        if (d < bestDist) { bestDist = d; best = i; }
      });
      setActive(best);
    };
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        track.scrollLeft += e.deltaY;
        e.preventDefault();
      }
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    track.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      track.removeEventListener("scroll", onScroll);
      track.removeEventListener("wheel", onWheel);
    };
  }, []);

  const nav = (dir: 1 | -1) => scrollToIndex(Math.max(0, Math.min(steps.length - 1, active + dir)));

  return (
    <section id="journey" className="section-padding relative">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary mb-3">05 — Mission Roadmap</div>
            <h2 className="text-3xl md:text-5xl font-bold leading-[1.05]">
              Thirty days. <span className="serif-italic text-gradient-cyan">One trajectory.</span>
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => nav(-1)} aria-label="Previous" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:border-primary/40 hover:text-primary transition disabled:opacity-30" disabled={active === 0}>
              <ChevronLeft size={16} />
            </button>
            <button onClick={() => nav(1)} aria-label="Next" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:border-primary/40 hover:text-primary transition disabled:opacity-30" disabled={active === steps.length - 1}>
              <ChevronRight size={16} />
            </button>
          </div>
        </motion.div>

        <div
          ref={trackRef}
          className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4 -mx-4 px-4 cursor-grab active:cursor-grabbing"
          style={{ scrollPaddingLeft: "1rem" }}
        >
          {steps.map((s, i) => (
            <motion.div
              key={s.day}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`snap-start shrink-0 w-[78%] sm:w-[46%] md:w-[30%] lg:w-[22%] glass rounded-2xl p-6 transition-all duration-500 ${active === i ? "border-primary/40 glow-soft" : "opacity-60 hover:opacity-100"}`}
            >
              <div className="flex items-center justify-between mb-5">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">{s.day}</div>
                <div className={`w-2 h-2 rounded-full ${active === i ? "bg-primary glow-cyan" : "bg-border"}`} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center gap-1.5 mt-4 justify-center">
          {steps.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              aria-label={`Go to step ${i + 1}`}
              className={`h-1 rounded-full transition-all ${active === i ? "w-8 bg-primary" : "w-3 bg-border hover:bg-muted-foreground"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

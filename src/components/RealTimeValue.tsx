import { useEffect, useState } from "react";
import { Zap } from "lucide-react";

const insights = [
  "Your checkout page is probably leaking 20–30% of buyers. Most stores never fix it.",
  "Visitors decide whether to trust your site in under 3 seconds. Design for that window.",
  "Slow mobile = silent revenue loss. Every 1s of latency cuts conversion ~7%.",
  "Most 'About' pages talk about you. Great ones talk about the buyer's transformation.",
  "If your pricing page needs explaining, your positioning isn't done yet.",
  "Founders underestimate friction. Every extra click is a vote for leaving.",
  "Social proof works — when it's specific. 'Loved by 10k' beats 'trusted worldwide' every time.",
  "Your homepage isn't a brochure. It's a decision engine.",
  "The best CTA isn't the loudest — it's the one that promises the clearest next step.",
  "Premium pricing requires premium clarity. Confused buyers don't pay top dollar.",
  "Most websites optimize for visitors. Elite sites optimize for the one buyer who matters.",
  "If you have to convince someone to buy, your offer is wrong — not your copy.",
];

export default function RealTimeValue() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIdx(i => (i + 1) % insights.length), 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 relative">
      <div className="container mx-auto">
        <div className="glass-strong rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="relative flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
            <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-primary shrink-0">
              <Zap size={14} className="text-primary" />
              <span>// Signal Stream</span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            </div>

            <div className="relative h-20 md:h-14 flex-1 overflow-hidden">
              {insights.map((t, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 flex items-center text-lg md:text-2xl font-medium leading-snug transition-all duration-700 ${
                    i === idx ? "opacity-100 translate-y-0" : i === (idx - 1 + insights.length) % insights.length ? "opacity-0 -translate-y-4" : "opacity-0 translate-y-4"
                  }`}
                >
                  <span className="serif-italic text-foreground/90">"{t}"</span>
                </div>
              ))}
            </div>

            <div className="font-mono text-[10px] text-muted-foreground tabular-nums shrink-0">
              {String(idx + 1).padStart(2, "0")} / {String(insights.length).padStart(2, "0")}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

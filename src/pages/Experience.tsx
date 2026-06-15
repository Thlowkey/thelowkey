import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ExternalLink, TrendingUp, BarChart3, DollarSign } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Result = {
  title: string;
  url?: string;
  image: string;
  blurb: string;
  metric: string;
  metricLabel: string;
  date: string;
};

const data: Record<"ranking" | "traffic" | "sales", Result[]> = {
  ranking: [
    { title: "Ugmonk", url: "https://ugmonk.com", image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=500&fit=crop", blurb: "Captured first-page rankings across minimalist-goods keyword cluster.", metric: "1st Page · 8 keywords", metricLabel: "Ranking", date: "April 2026" },
    { title: "Haus", url: "https://drink.haus", image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&h=500&fit=crop", blurb: "Owned non-alcoholic aperitif category for high-intent buyer queries.", metric: "1st Page · 11 keywords", metricLabel: "Ranking", date: "February 2026" },
    { title: "Local Service Co.", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=500&fit=crop", blurb: "Top-3 local pack rankings in eight weeks for service-area keywords.", metric: "Top 3 · Local Pack", metricLabel: "Ranking", date: "December 2025" },
    { title: "Boutique Real Estate", image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=500&fit=crop", blurb: "Premium listing pages outranked national portals on long-tail queries.", metric: "1st Page · 14 keywords", metricLabel: "Ranking", date: "November 2025" },
  ],
  traffic: [
    { title: "EdTech Cohort", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=500&fit=crop", blurb: "Launch sequence drove sustained organic traffic well beyond cohort window.", metric: "+312%", metricLabel: "Traffic", date: "March 2026" },
    { title: "Wellness Brand", image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&h=500&fit=crop", blurb: "Content engine compounded into evergreen acquisition channel.", metric: "+184%", metricLabel: "Traffic", date: "January 2026" },
    { title: "Independent Artist", image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=800&h=500&fit=crop", blurb: "Drop calendar + collector list turned launches into traffic spikes.", metric: "+540%", metricLabel: "Traffic / Launch", date: "October 2025" },
    { title: "Restaurant Group", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=500&fit=crop", blurb: "Local SEO push captured high-intent reservation traffic year-round.", metric: "+96%", metricLabel: "Traffic", date: "September 2025" },
  ],
  sales: [
    { title: "SaaS Startup", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop", blurb: "Trial-to-paid conversion lifted without a single product change.", metric: "3.1x", metricLabel: "Trial → Paid", date: "May 2026" },
    { title: "Niche Media Brand", image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop", blurb: "Membership tier turned a free list into a recurring revenue engine.", metric: "$24k MRR", metricLabel: "Recurring", date: "March 2026" },
    { title: "DTC Jewelry", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=500&fit=crop", blurb: "Mobile-first checkout doubled mobile conversion at scale.", metric: "+140%", metricLabel: "Mobile CVR", date: "December 2025" },
    { title: "B2B Manufacturing", image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&h=500&fit=crop", blurb: "Self-serve quote builder cut sales cycle and grew distributor pipeline.", metric: "+260%", metricLabel: "Inbound Quotes", date: "November 2025" },
  ],
};

const tabs = [
  { id: "ranking" as const, label: "Ranking Results", icon: BarChart3, blurb: "Top-of-page placements that compound into compounding demand." },
  { id: "traffic" as const, label: "Traffic Results", icon: TrendingUp, blurb: "Sustained organic growth — not borrowed reach." },
  { id: "sales" as const, label: "Sales Results", icon: DollarSign, blurb: "Revenue lift attributable to design and strategy work." },
];

export default function Experience() {
  const [active, setActive] = useState<"ranking" | "traffic" | "sales">("ranking");
  const activeTab = tabs.find(t => t.id === active)!;

  return (
    <div className="min-h-screen bg-background noise">
      <Navbar />

      <section className="section-padding pt-32">
        <div className="container mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-primary transition mb-10">
            <ArrowLeft size={12} /> Back to Home
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mb-14">
            <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary mb-5">// Experience · Client Results</div>
            <h1 className="text-4xl md:text-6xl font-bold leading-[1.05] mb-6">
              The <span className="serif-italic text-gradient-cyan">track record</span> behind the work.
            </h1>
            <p className="text-muted-foreground md:text-lg">Real engagements, real outcomes. Filter by what matters most to you — rankings, traffic, or revenue.</p>
          </motion.div>

          <div className="flex flex-wrap gap-2 mb-10">
            {tabs.map(t => (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-mono text-[11px] uppercase tracking-wider transition ${
                  active === t.id
                    ? "bg-primary text-primary-foreground glow-cyan"
                    : "glass text-foreground/70 hover:text-primary"
                }`}
              >
                <t.icon size={13} /> {t.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">{activeTab.label}</h2>
                <p className="text-muted-foreground">{activeTab.blurb}</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {data[active].map((r, i) => (
                  <motion.article
                    key={r.title + i}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="group glass rounded-2xl overflow-hidden hover:border-primary/40 hover:glow-soft transition-all"
                  >
                    <div className="aspect-[16/10] overflow-hidden bg-secondary">
                      <img src={r.image} alt={r.title} loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-bold">{r.title}</h3>
                        {r.url && (
                          <a href={r.url} target="_blank" rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition" aria-label={`Visit ${r.title}`}>
                            <ExternalLink size={14} />
                          </a>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{r.blurb}</p>
                      <div className="flex items-center justify-between pt-3 border-t border-border/40">
                        <div>
                          <div className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">{r.metricLabel}</div>
                          <div className="text-primary font-bold">{r.metric}</div>
                        </div>
                        <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{r.date}</div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </div>
  );
}

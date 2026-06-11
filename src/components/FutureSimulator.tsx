import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ShoppingBag, Rocket, Store, User, Building2, ArrowRight, AlertTriangle, TrendingUp, Target } from "lucide-react";

type Kind = "shopify" | "saas" | "local" | "personal" | "agency";

const options: { id: Kind; label: string; icon: any; tag: string }[] = [
  { id: "shopify", label: "Shopify Store", icon: ShoppingBag, tag: "DTC / Ecommerce" },
  { id: "saas", label: "SaaS Startup", icon: Rocket, tag: "Product / Software" },
  { id: "local", label: "Local Business", icon: Store, tag: "Service / Retail" },
  { id: "personal", label: "Personal Brand", icon: User, tag: "Creator / Expert" },
  { id: "agency", label: "Agency", icon: Building2, tag: "Service Firm" },
];

const sim: Record<Kind, { current: string; problems: string[]; opportunities: string[]; results: string[] }> = {
  shopify: {
    current: "Decent traffic, mediocre conversion. Probably hovering at 1.2–1.8% CVR with a cart abandon rate above 70%.",
    problems: ["Generic theme that screams 'template'", "Product pages built like brochures, not pitches", "Checkout friction quietly leaking 20–30% of buyers"],
    opportunities: ["Reframe the brand as a category leader", "Restructure PDPs around objection-killing", "Build a post-purchase flow that doubles LTV"],
    results: ["+45–80% CVR within 60 days", "30–50% lift in AOV", "Repeatable revenue, not random spikes"],
  },
  saas: {
    current: "Sign-ups feel slow. Trial-to-paid is below 8%. The site explains features but doesn't sell outcomes.",
    problems: ["Homepage answers 'what' instead of 'why now'", "Pricing page creates more friction than clarity", "Onboarding feels like a tutorial, not a transformation"],
    opportunities: ["Reposition around the buyer's pain — not your product", "Engineer a frictionless free-to-paid path", "Build trust assets that compress the sales cycle"],
    results: ["2–3x trial conversion", "Shorter sales cycle", "Lower CAC, higher expansion revenue"],
  },
  local: {
    current: "Word-of-mouth works, but the website does almost nothing. Most visitors leave without booking.",
    problems: ["No clear next step on the homepage", "Reviews buried instead of weaponized", "Slow mobile load killing local intent traffic"],
    opportunities: ["Turn the site into a 24/7 booking machine", "Stack social proof at every decision point", "Dominate local search with intent-mapped pages"],
    results: ["3–5x qualified bookings", "Lower dependency on referrals", "Premium positioning, premium pricing"],
  },
  personal: {
    current: "You're talented — your site doesn't say so. It reads like a freelancer, not an authority.",
    problems: ["Cluttered layout dilutes your signal", "No clear offer or call to engage", "Missing the 'unfair advantage' narrative"],
    opportunities: ["Strip the noise. Lead with one ruthless promise", "Build a signature framework only you own", "Engineer scarcity into your application path"],
    results: ["Higher-ticket clients, less negotiation", "Inbound that pre-qualifies itself", "A brand people screenshot, not skim"],
  },
  agency: {
    current: "You sell results but look like every other agency. Same hero, same testimonials, same case study grid.",
    problems: ["Positioning isn't unique enough to charge premium", "Case studies tell stories, not transformations", "Lead capture doesn't filter — it accepts everything"],
    opportunities: ["Niche down ruthlessly, charge 2x", "Productize your highest-ROI service", "Build a qualification funnel that pre-sells"],
    results: ["Higher retainers, better clients", "Predictable inbound pipeline", "A studio brand, not a freelancer collective"],
  },
};

export default function FutureSimulator() {
  const [picked, setPicked] = useState<Kind | null>(null);
  const [loading, setLoading] = useState(false);

  const select = (k: Kind) => {
    if (k === picked) return;
    setLoading(true);
    setPicked(k);
    setTimeout(() => setLoading(false), 900);
  };

  return (
    <section id="simulator" className="section-padding relative noise">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mb-16">
          <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary mb-5">// 02 — Client Future Simulator</div>
          <h2 className="text-4xl md:text-6xl font-bold leading-[1.05] mb-6">
            See your business <span className="serif-italic text-gradient-cyan">three moves ahead.</span>
          </h2>
          <p className="text-muted-foreground md:text-lg">Pick what you run. The simulator returns the diagnosis, the openings, and the projected outcome of working with me.</p>
        </motion.div>

        {/* Selector */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-12">
          {options.map(o => {
            const Icon = o.icon;
            const active = picked === o.id;
            return (
              <button
                key={o.id}
                onClick={() => select(o.id)}
                className={`group relative p-5 rounded-xl text-left transition-all ${active ? "glass-strong glow-cyan" : "glass hover:border-primary/30"}`}
              >
                <Icon size={20} className={`mb-3 transition ${active ? "text-primary" : "text-muted-foreground group-hover:text-primary"}`} />
                <div className="text-sm font-semibold">{o.label}</div>
                <div className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground mt-1">{o.tag}</div>
                {active && <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />}
              </button>
            );
          })}
        </div>

        {/* Output */}
        <AnimatePresence mode="wait">
          {picked && (
            <motion.div
              key={picked}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="glass-strong rounded-2xl overflow-hidden"
            >
              {/* terminal header */}
              <div className="flex items-center justify-between px-6 py-3 border-b border-border/60 bg-background/40">
                <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  Simulation / {picked.toUpperCase()}
                </div>
                <div className="font-mono text-[10px] text-muted-foreground">{loading ? "ANALYZING..." : "COMPLETE"}</div>
              </div>

              {loading ? (
                <div className="p-12 font-mono text-sm text-muted-foreground">
                  <div>&gt; loading market signals...</div>
                  <div>&gt; mapping conversion gaps...</div>
                  <div>&gt; projecting outcomes<span className="blink">_</span></div>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 gap-px bg-border/60">
                  <Block icon={<div className="w-2 h-2 rounded-full bg-muted-foreground" />} label="Current State" body={<p>{sim[picked].current}</p>} />
                  <Block icon={<AlertTriangle size={14} className="text-amber-400" />} label="Hidden Problems" body={<ul className="space-y-2">{sim[picked].problems.map((p, i) => <li key={i} className="flex gap-2"><span className="text-amber-400/70">→</span>{p}</li>)}</ul>} />
                  <Block icon={<Target size={14} className="text-primary" />} label="Opportunities" body={<ul className="space-y-2">{sim[picked].opportunities.map((p, i) => <li key={i} className="flex gap-2"><span className="text-primary">→</span>{p}</li>)}</ul>} />
                  <Block icon={<TrendingUp size={14} className="text-primary" />} label="Expected Results" body={<ul className="space-y-2">{sim[picked].results.map((p, i) => <li key={i} className="flex gap-2"><span className="text-primary">✓</span>{p}</li>)}</ul>} />
                </div>
              )}

              {!loading && (
                <div className="p-6 bg-background/40 border-t border-border/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">Want this projection turned into a plan?</div>
                  <a href="#final" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-xs font-mono uppercase tracking-wider hover:glow-cyan transition">
                    Initiate Strategy <ArrowRight size={14} />
                  </a>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {!picked && (
          <div className="glass rounded-2xl p-12 text-center text-muted-foreground font-mono text-sm">
            &gt; Awaiting input. Select a business type to run simulation.
          </div>
        )}
      </div>
    </section>
  );
}

function Block({ icon, label, body }: { icon: React.ReactNode; label: string; body: React.ReactNode }) {
  return (
    <div className="p-6 md:p-8 bg-background/60">
      <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-4">
        {icon}{label}
      </div>
      <div className="text-sm md:text-base text-foreground/90 leading-relaxed">{body}</div>
    </div>
  );
}

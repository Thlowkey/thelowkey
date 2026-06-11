import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Lock, FileText, X } from "lucide-react";

const files = [
  {
    id: "UGM-001",
    name: "Ugmonk",
    sector: "DTC / Premium Goods",
    mission: "Position a craft-driven product brand as the definitive minimalist authority online.",
    problem: "Generic ecommerce template was undermining the brand's premium positioning. Visitors couldn't tell it apart from 1,000 other Shopify stores.",
    strategy: "Strip everything down to typography, whitespace, and product. Make every page feel like a printed catalog moving in motion.",
    execution: "Custom theme rebuild. Editorial PDPs. Frictionless checkout. Story-led collection pages tied to founder voice.",
    results: ["+62% conversion rate", "+38% AOV", "27% lift in returning customers"],
    lessons: "Restraint is the most expensive design choice — and the most profitable.",
  },
  {
    id: "SAS-014",
    name: "SaaS Startup / Confidential",
    sector: "B2B SaaS / Devtools",
    mission: "Lift trial-to-paid conversion without changing the product.",
    problem: "Beautiful product, flat sign-ups. Pricing page was treated as a wall, not a decision tool.",
    strategy: "Rewrote the homepage around outcomes, not features. Restructured pricing as a guided choice with social proof and risk reversal.",
    execution: "Three landing variants tested in parallel. Onboarding rebuilt with progress + early-win moments.",
    results: ["3.1x trial-to-paid", "−21% CAC", "+44% MRR in 90 days"],
    lessons: "Pricing pages are conversion engines, not menus.",
  },
  {
    id: "LCL-027",
    name: "Local Service Co.",
    sector: "Service / Local",
    mission: "Turn a referral-dependent business into a self-generating pipeline.",
    problem: "Website was a digital business card. Mobile load > 6s. No clear booking path.",
    strategy: "Built a fast, intent-mapped funnel. Booking flow above the fold on every page. Reviews surfaced at decision moments.",
    execution: "Rebuild on a custom stack. SEO-optimized local pages. Automated lead routing into the owner's inbox + SMS.",
    results: ["4.7x monthly bookings", "Top-3 local rankings in 8 weeks", "Premium pricing accepted"],
    lessons: "Local intent buyers don't browse — they decide. Design for that.",
  },
  {
    id: "PRS-009",
    name: "Personal Brand / Creator",
    sector: "Authority / Creator Economy",
    mission: "Convert audience attention into high-ticket client demand.",
    problem: "Big following, small revenue. Site listed everything, sold nothing.",
    strategy: "Killed 80% of the site. One ruthless promise. One application path. Scarcity by design.",
    execution: "Brand refresh, signature framework, application funnel with screening logic.",
    results: ["10x application volume", "−60% time-to-close", "Average contract value 4x'd"],
    lessons: "Subtraction is a growth strategy.",
  },
  {
    id: "AGY-031",
    name: "Studio / Agency",
    sector: "Creative / Services",
    mission: "Reposition a generalist studio as a category specialist.",
    problem: "Looked like every other agency. Won on price, lost on prestige.",
    strategy: "Narrowed positioning to one vertical. Productized the highest-ROI offer. Rebuilt the site as a studio statement, not a portfolio dump.",
    execution: "New visual identity, case studies as longform investigations, inquiry funnel with qualification.",
    results: ["+170% retainer value", "50% fewer leads, 3x close rate", "Inbound from dream-tier clients"],
    lessons: "When you sound like everyone, you're priced like everyone.",
  },
  {
    id: "DTC-044",
    name: "DTC Jewelry / Confidential",
    sector: "Luxury Ecommerce",
    mission: "Move from boutique to scalable brand without losing soul.",
    problem: "Beautiful product photography buried under a clunky theme. Mobile UX hostile to checkout.",
    strategy: "Editorial product storytelling, frictionless mobile-first checkout, post-purchase nurture.",
    execution: "Custom Shopify build, performance optimization, lifecycle email design.",
    results: ["2.4x mobile CVR", "+52% repeat purchase rate", "Premium positioning held at scale"],
    lessons: "Mobile is the brand. Treat it like the hero, not the afterthought.",
  },
];

type File = (typeof files)[number];

export default function TheVault() {
  const [open, setOpen] = useState<File | null>(null);

  return (
    <section id="vault" className="section-padding relative">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mb-16">
          <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary mb-5">// 03 — The Vault</div>
          <h2 className="text-4xl md:text-6xl font-bold leading-[1.05] mb-6">
            Classified <span className="serif-italic text-gradient-cyan">case files.</span>
          </h2>
          <p className="text-muted-foreground md:text-lg">Each folder is a real engagement. Open one to read the full investigation — mission, diagnosis, execution, outcome.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {files.map((f, i) => (
            <motion.button
              key={f.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              onClick={() => setOpen(f)}
              className="group relative glass rounded-xl p-6 text-left hover:border-primary/40 hover:glow-soft transition-all overflow-hidden"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  CASE / {f.id}
                </div>
                <Lock size={14} className="text-muted-foreground group-hover:text-primary transition" />
              </div>
              <div className="text-xl font-bold mb-1">{f.name}</div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-6">{f.sector}</div>
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-primary opacity-0 group-hover:opacity-100 transition">
                <FileText size={12} /> Open file
              </div>
              <div className="absolute -bottom-12 -right-12 w-32 h-32 rounded-full bg-primary/5 blur-2xl group-hover:bg-primary/15 transition" />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-md flex items-end md:items-center justify-center p-0 md:p-6 overflow-y-auto"
          >
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className="glass-strong rounded-t-2xl md:rounded-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto"
            >
              <div className="sticky top-0 flex items-center justify-between px-6 py-4 border-b border-border/60 bg-background/80 backdrop-blur">
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">CASE / {open.id} — DECLASSIFIED</div>
                <button onClick={() => setOpen(null)} className="text-muted-foreground hover:text-foreground"><X size={18} /></button>
              </div>
              <div className="p-6 md:p-10">
                <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-2">{open.sector}</div>
                <h3 className="text-3xl md:text-4xl font-bold mb-8">{open.name}</h3>

                <Field label="Mission" body={<p>{open.mission}</p>} />
                <Field label="Problem" body={<p>{open.problem}</p>} />
                <Field label="Strategy" body={<p>{open.strategy}</p>} />
                <Field label="Execution" body={<p>{open.execution}</p>} />
                <Field label="Results" body={
                  <ul className="space-y-2">
                    {open.results.map((r, i) => <li key={i} className="flex gap-3"><span className="text-primary font-mono">→</span>{r}</li>)}
                  </ul>
                } />
                <Field label="Lessons" body={<p className="serif-italic text-lg text-foreground/80">"{open.lessons}"</p>} last />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function Field({ label, body, last = false }: { label: string; body: React.ReactNode; last?: boolean }) {
  return (
    <div className={`py-5 ${!last && "border-b border-border/60"}`}>
      <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-2">// {label}</div>
      <div className="text-foreground/90 leading-relaxed">{body}</div>
    </div>
  );
}

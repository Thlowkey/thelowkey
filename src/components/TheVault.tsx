import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Lock, FileText, X, ExternalLink, ArrowUpRight } from "lucide-react";

export type VaultFile = {
  id: string;
  name: string;
  sector: string;
  url?: string;
  mission: string;
  problem: string;
  strategy: string;
  execution: string;
  results: string[];
  tech?: string[];
  lessons: string;
};

const files: VaultFile[] = [
  {
    id: "UGM-001", name: "Ugmonk", sector: "DTC / Premium Goods", url: "https://ugmonk.com",
    mission: "Position a craft-driven product brand as the definitive minimalist authority online.",
    problem: "Generic ecommerce template was undermining the brand's premium positioning.",
    strategy: "Strip everything down to typography, whitespace, and product. Editorial-grade storytelling.",
    execution: "Custom theme rebuild. Editorial PDPs. Frictionless checkout. Story-led collection pages.",
    results: ["+62% conversion rate", "+38% AOV", "27% lift in returning customers"],
    tech: ["Shopify", "Liquid", "GSAP", "Klaviyo"],
    lessons: "Restraint is the most expensive design choice — and the most profitable.",
  },
  {
    id: "HAU-002", name: "Haus", sector: "Beverage / DTC", url: "https://drink.haus",
    mission: "Elevate a craft aperitif brand into a category-defining lifestyle product.",
    problem: "Beautiful product, low repeat rate. Subscription friction killed LTV.",
    strategy: "Reframe the brand as a ritual, not a drink. Subscription as membership.",
    execution: "Editorial homepage, member portal, lifecycle automation, post-purchase rituals.",
    results: ["+44% subscriber retention", "2.1x LTV", "+58% referral conversions"],
    tech: ["Shopify Plus", "Recharge", "Klaviyo", "Framer Motion"],
    lessons: "Brands aren't bought — they're joined.",
  },
  {
    id: "SAS-014", name: "SaaS Startup", sector: "B2B SaaS / Devtools",
    mission: "Lift trial-to-paid conversion without changing the product.",
    problem: "Beautiful product, flat sign-ups. Pricing page was a wall, not a decision tool.",
    strategy: "Rewrote homepage around outcomes. Restructured pricing with social proof and risk reversal.",
    execution: "Three landing variants tested in parallel. Onboarding rebuilt with progress + early-win moments.",
    results: ["3.1x trial-to-paid", "−21% CAC", "+44% MRR in 90 days"],
    tech: ["Next.js", "Stripe", "PostHog", "Vercel"],
    lessons: "Pricing pages are conversion engines, not menus.",
  },
  {
    id: "LCL-027", name: "Local Service Co.", sector: "Service / Local",
    mission: "Turn a referral-dependent business into a self-generating pipeline.",
    problem: "Website was a digital business card. Mobile load > 6s. No clear booking path.",
    strategy: "Built a fast, intent-mapped funnel. Booking above the fold. Reviews at decision moments.",
    execution: "Rebuild on custom stack. SEO-optimized local pages. Automated lead routing to inbox + SMS.",
    results: ["4.7x monthly bookings", "Top-3 local rankings in 8 weeks", "Premium pricing accepted"],
    tech: ["Astro", "Tailwind", "Twilio", "Supabase"],
    lessons: "Local intent buyers don't browse — they decide.",
  },
  {
    id: "PRS-009", name: "Personal Brand / Creator", sector: "Authority / Creator Economy",
    mission: "Convert audience attention into high-ticket client demand.",
    problem: "Big following, small revenue. Site listed everything, sold nothing.",
    strategy: "Killed 80% of the site. One ruthless promise. One application path. Scarcity by design.",
    execution: "Brand refresh, signature framework, application funnel with screening logic.",
    results: ["10x application volume", "−60% time-to-close", "Average contract value 4x'd"],
    tech: ["Framer", "Typeform", "Notion", "Cal.com"],
    lessons: "Subtraction is a growth strategy.",
  },
  {
    id: "AGY-031", name: "Studio / Agency", sector: "Creative / Services",
    mission: "Reposition a generalist studio as a category specialist.",
    problem: "Looked like every other agency. Won on price, lost on prestige.",
    strategy: "Narrowed positioning to one vertical. Productized the highest-ROI offer.",
    execution: "New visual identity, longform case studies, inquiry funnel with qualification.",
    results: ["+170% retainer value", "50% fewer leads, 3x close rate", "Inbound from dream-tier clients"],
    tech: ["Webflow", "GSAP", "HubSpot"],
    lessons: "When you sound like everyone, you're priced like everyone.",
  },
  {
    id: "DTC-044", name: "DTC Jewelry", sector: "Luxury Ecommerce",
    mission: "Move from boutique to scalable brand without losing soul.",
    problem: "Beautiful photography buried under a clunky theme. Mobile UX hostile to checkout.",
    strategy: "Editorial product storytelling, frictionless mobile-first checkout, post-purchase nurture.",
    execution: "Custom Shopify build, performance optimization, lifecycle email design.",
    results: ["2.4x mobile CVR", "+52% repeat purchase rate", "Premium positioning held at scale"],
    tech: ["Shopify", "Hydrogen", "Klaviyo"],
    lessons: "Mobile is the brand. Treat it like the hero.",
  },
  {
    id: "FIN-052", name: "Fintech Platform", sector: "Fintech / B2C",
    mission: "Earn user trust in a category dominated by skepticism.",
    problem: "Bounce on signup hit 71%. Trust signals were buried.",
    strategy: "Re-architected onboarding around transparency. Surfaced compliance as a feature.",
    execution: "Redesigned signup, dashboard, and KYC flow. Live trust badges and security pages.",
    results: ["−54% signup drop-off", "+38% activated accounts", "NPS +29 in 60 days"],
    tech: ["React", "Plaid", "Auth0", "Vercel"],
    lessons: "Trust isn't a section. It's an experience.",
  },
  {
    id: "EDU-061", name: "EdTech / Cohort Course", sector: "Education / B2C",
    mission: "Sell out a $2k cohort without paid ads.",
    problem: "Launch page converted at 0.8%. Long, generic, no urgency.",
    strategy: "Storytelling-first sales page. Outcome-based testimonials. Tiered cohort scarcity.",
    execution: "New page, application gate, founder-led email sequence, waitlist gamification.",
    results: ["Sold out in 9 days", "+340% application volume", "$180k launch revenue"],
    tech: ["Webflow", "ConvertKit", "Circle"],
    lessons: "People don't buy courses — they buy futures.",
  },
  {
    id: "HLT-073", name: "Wellness Brand", sector: "Health & Wellness DTC",
    mission: "Stand out in a saturated supplements category.",
    problem: "Generic claims, low trust, weak email revenue.",
    strategy: "Founder-led storytelling, science-backed proof, ritual-based subscription framing.",
    execution: "Brand revamp, subscription flow, content engine for SEO + email.",
    results: ["+91% subscription conversion", "+2.7x email revenue", "+33% AOV"],
    tech: ["Shopify", "Recharge", "Klaviyo", "Sanity"],
    lessons: "In wellness, who you are sells more than what you sell.",
  },
  {
    id: "REL-088", name: "Boutique Real Estate", sector: "Real Estate / Luxury",
    mission: "Generate inbound leads for $2M+ listings.",
    problem: "Listings buried in MLS feeds. No way to filter for premium buyers.",
    strategy: "Editorial property pages. Buyer intent funnel. Concierge-style inquiry flow.",
    execution: "Custom CMS, cinematic galleries, automated buyer qualification.",
    results: ["12 qualified inquiries / month", "Avg listing time −40%", "Two record-price sales"],
    tech: ["Next.js", "Sanity", "Mapbox", "Resend"],
    lessons: "Luxury sells through silence, not noise.",
  },
  {
    id: "MED-094", name: "Niche Media Brand", sector: "Media / Newsletter",
    mission: "Turn a free newsletter into a paid membership business.",
    problem: "30k free subscribers, $0 in product revenue.",
    strategy: "Productized the archive. Members-only briefings. Tiered access with status signaling.",
    execution: "Membership site, paywall, member directory, monthly live sessions.",
    results: ["$24k MRR in 90 days", "8% free→paid", "92% annual retention"],
    tech: ["Ghost", "Stripe", "Memberstack"],
    lessons: "Status is a feature.",
  },
  {
    id: "RES-102", name: "Restaurant Group", sector: "Hospitality",
    mission: "Drive direct reservations and reduce third-party platform dependence.",
    problem: "70% of bookings via OpenTable. High fees, no data ownership.",
    strategy: "Branded reservation experience. Loyalty layer. SEO for high-intent local queries.",
    execution: "Custom booking flow, automated SMS, local SEO push.",
    results: ["+58% direct reservations", "−$3.2k/mo platform fees", "+22% repeat diners"],
    tech: ["Next.js", "Resend", "Twilio", "SQLite"],
    lessons: "Owning the booking is owning the relationship.",
  },
  {
    id: "B2B-115", name: "B2B Manufacturing", sector: "Industrial / B2B",
    mission: "Modernize a 30-year-old industrial brand without alienating its base.",
    problem: "Quote-only sales. 90s site. No analytics. Sales cycle 4+ months.",
    strategy: "Spec-first product pages. Self-serve quote builder. Sales enablement content.",
    execution: "CMS migration, quote calculator, distributor portal.",
    results: ["+260% inbound quote requests", "Sales cycle cut to 6 weeks", "Distributor adoption 84%"],
    tech: ["Next.js", "Sanity", "Stripe", "Salesforce"],
    lessons: "Heritage brands win when they translate, not when they reinvent.",
  },
  {
    id: "ART-127", name: "Independent Artist", sector: "Art / Direct Sales",
    mission: "Build a direct-to-collector channel that bypasses galleries.",
    problem: "70% of sales lost to gallery commissions. No CRM, no list.",
    strategy: "Drop-based release model. Collector list as core asset. Cinematic product film.",
    execution: "Custom drop calendar, collector application, video-led PDPs.",
    results: ["Drop sold out in 14 minutes", "Margin +70%", "Collector waitlist 1,200 deep"],
    tech: ["Shopify", "Klaviyo", "Mux", "Cloudflare"],
    lessons: "Scarcity is a love letter to your best buyers.",
  },
];

type File = VaultFile;

export default function TheVault() {
  const [open, setOpen] = useState<File | null>(null);

  return (
    <section id="vault" className="section-padding relative">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mb-12">
          <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary mb-5">// 03 — The Vault</div>
          <h2 className="text-4xl md:text-6xl font-bold leading-[1.05] mb-6">
            Classified <span className="serif-italic text-gradient-cyan">case files.</span>
          </h2>
          <p className="text-muted-foreground md:text-lg">Fifteen real engagements. Open one to read the full investigation — mission, diagnosis, execution, outcome.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {files.map((f, i) => (
            <motion.button
              key={f.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: Math.min(i * 0.03, 0.3) }}
              onClick={() => setOpen(f)}
              className="group relative glass rounded-xl p-6 text-left hover:border-primary/40 hover:glow-soft transition-all overflow-hidden"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">CASE / {f.id}</div>
                <Lock size={14} className="text-muted-foreground group-hover:text-primary transition" />
              </div>
              <div className="text-xl font-bold mb-1">{f.name}</div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-6">{f.sector}</div>
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-primary opacity-70 group-hover:opacity-100 transition">
                <FileText size={12} /> Open file <ArrowUpRight size={12} className="ml-auto" />
              </div>
              <div className="absolute -bottom-12 -right-12 w-32 h-32 rounded-full bg-primary/5 blur-2xl group-hover:bg-primary/15 transition" />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-md flex items-end md:items-center justify-center p-0 md:p-6 overflow-y-auto"
          >
            <motion.div
              initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 40, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className="glass-strong rounded-t-2xl md:rounded-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto"
            >
              <div className="sticky top-0 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur z-10">
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">CASE / {open.id} — DECLASSIFIED</div>
                <button onClick={() => setOpen(null)} className="text-muted-foreground hover:text-foreground"><X size={18} /></button>
              </div>
              <div className="p-6 md:p-10">
                <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-2">{open.sector}</div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">{open.name}</h3>
                {open.url && (
                  <a href={open.url} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-primary text-primary-foreground text-xs font-mono uppercase tracking-wider hover:glow-cyan transition">
                    Visit Project <ExternalLink size={12} />
                  </a>
                )}

                <Field label="Mission" body={<p>{open.mission}</p>} />
                <Field label="Problem" body={<p>{open.problem}</p>} />
                <Field label="Strategy" body={<p>{open.strategy}</p>} />
                <Field label="Execution" body={<p>{open.execution}</p>} />
                <Field label="Results" body={
                  <ul className="space-y-2">
                    {open.results.map((r, i) => <li key={i} className="flex gap-3"><span className="text-primary font-mono">→</span>{r}</li>)}
                  </ul>
                } />
                {open.tech && open.tech.length > 0 && (
                  <Field label="Technologies" body={
                    <div className="flex flex-wrap gap-2">
                      {open.tech.map(t => (
                        <span key={t} className="px-3 py-1 rounded-full glass font-mono text-[10px] uppercase tracking-wider text-foreground/80">{t}</span>
                      ))}
                    </div>
                  } />
                )}
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
    <div className={`py-5 ${!last ? "border-b border-border/40" : ""}`}>
      <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-2">// {label}</div>
      <div className="text-foreground/90 leading-relaxed">{body}</div>
    </div>
  );
}

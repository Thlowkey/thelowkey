import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Lock, FileText, X, ExternalLink, ArrowUpRight, Mail } from "lucide-react";

export type VaultFile = {
  id: string;
  name: string;
  sector: string;
  url?: string;
  blurb: string;
  problem: string;
  solution: string;
  result: string[];
  tech?: string[];
  note: string;
};

const files: VaultFile[] = [
  {
    id: "UGM-001", name: "Ugmonk", sector: "DTC / Premium Goods", url: "https://ugmonk.com",
    blurb: "Helped a craft brand stop looking like another Shopify template and start looking like the category leader.",
    problem: "The product was beautiful. The site wasn't. A generic theme was making a premium brand feel mid-tier and killing conversions.",
    solution: "Stripped the whole thing down to typography, whitespace, and product. Rebuilt the PDPs to tell a story. Cleaned up checkout so nothing got in the way.",
    result: ["~62% jump in conversion rate", "~38% higher average order value", "More repeat buyers, fewer one-and-done"],
    tech: ["Shopify", "Liquid", "GSAP", "Klaviyo"],
    note: "When the brand is the product, restraint pays.",
  },
  {
    id: "HAU-002", name: "Haus", sector: "Beverage / DTC", url: "https://drink.haus",
    blurb: "Turned a craft drink brand into something people actually want to subscribe to — not just try once.",
    problem: "Great product, weak retention. The subscription flow felt like a chore, so people canceled after one box.",
    solution: "Reframed the whole thing as a ritual instead of a transaction. Rebuilt the member portal, added lifecycle emails that actually feel personal.",
    result: ["~44% better subscriber retention", "Roughly 2x LTV", "Big jump in referral conversions"],
    tech: ["Shopify Plus", "Recharge", "Klaviyo", "Framer Motion"],
    note: "People don't subscribe to products. They subscribe to feeling like an insider.",
  },
  {
    id: "SAS-014", name: "B2B SaaS Tool", sector: "SaaS / Devtools",
    blurb: "Tripled trial-to-paid without touching the product — just the way it was sold.",
    problem: "Founders had a great tool but the homepage talked about features and the pricing page felt like a wall. Sign-ups were flat.",
    solution: "Rewrote the homepage around outcomes. Restructured pricing with real social proof and a clean trial → paid path. Tested three variants in parallel.",
    result: ["~3x trial-to-paid conversion", "~21% lower CAC", "+44% MRR in the first 90 days"],
    tech: ["Next.js", "Stripe", "PostHog", "Vercel"],
    note: "Pricing pages do more selling than your sales team. Treat them that way.",
  },
  {
    id: "LCL-027", name: "Local Service Business", sector: "Service / Local",
    blurb: "Took a referral-only business and turned the site into the #1 source of bookings.",
    problem: "The old site was basically a digital business card. Slow on mobile, no clear way to book, and nowhere near the top of local search.",
    solution: "Built a fast, intent-mapped funnel. Booking right at the top. Reviews placed at the moments people actually doubt. Local SEO done properly.",
    result: ["Almost 5x more monthly bookings", "Top-3 local rankings inside 2 months", "Started charging premium and clients said yes"],
    tech: ["Astro", "Tailwind", "Twilio", "Supabase"],
    note: "Local buyers don't browse. They decide in seconds.",
  },
  {
    id: "PRS-009", name: "Personal Brand / Creator", sector: "Authority / Creator",
    blurb: "Took someone with a big audience and finally turned that attention into real revenue.",
    problem: "Huge following, tiny income. The site tried to sell everything, so it sold nothing.",
    solution: "Cut ~80% of the site. Picked one promise, one audience, one offer. Built an application funnel that screens out tire-kickers before they hit the calendar.",
    result: ["~10x more applications per month", "Sales calls closing way faster", "Average contract value roughly 4x'd"],
    tech: ["Framer", "Typeform", "Notion", "Cal.com"],
    note: "Cutting things is a growth strategy. Most people are too scared to try it.",
  },
  {
    id: "AGY-031", name: "Creative Studio", sector: "Agency / Services",
    blurb: "Rebuilt an agency from 'generalist on every brief' into a specialist clients pre-sell themselves on.",
    problem: "They looked and sounded like 50 other agencies. Won deals on price, lost the good ones on prestige.",
    solution: "Narrowed positioning to one vertical. Productized the offer that actually made money. Built proper longform case studies and a qualifying inquiry flow.",
    result: ["+170% on retainer value", "Half the leads, triple the close rate", "Inbound from clients they used to chase"],
    tech: ["Webflow", "GSAP", "HubSpot"],
    note: "When you sound like everyone, you get paid like everyone.",
  },
  {
    id: "DTC-044", name: "DTC Jewelry Brand", sector: "Luxury Ecommerce",
    blurb: "Moved a boutique jewelry brand from 'pretty Instagram' to actual scalable revenue.",
    problem: "Stunning photography buried under a clunky theme. Mobile checkout was painful and the bounce rate showed it.",
    solution: "Custom Shopify build, mobile-first from the ground up. Real product storytelling on PDPs. Post-purchase emails that bring people back.",
    result: ["~2.4x mobile conversion rate", "+52% repeat purchase rate", "Held premium pricing as they scaled"],
    tech: ["Shopify", "Hydrogen", "Klaviyo"],
    note: "If your mobile experience is bad, your brand is bad. There's no separating them anymore.",
  },
  {
    id: "FIN-052", name: "Fintech Platform", sector: "Fintech / B2C",
    blurb: "Took a fintech with a brutal signup drop-off and made onboarding feel like the safest part of the product.",
    problem: "71% of users were bouncing during signup. Trust signals were buried way below the fold.",
    solution: "Rebuilt the signup and KYC flow around transparency. Showed compliance as a feature, not a hurdle. Live trust badges where they actually mattered.",
    result: ["~54% less drop-off during signup", "+38% activated accounts", "NPS up ~29 points in 60 days"],
    tech: ["React", "Plaid", "Auth0", "Vercel"],
    note: "Trust isn't a page on your site. It's a feeling people get the second they land.",
  },
  {
    id: "EDU-061", name: "Cohort Course Launch", sector: "EdTech / Course",
    blurb: "Sold out a $2k cohort with zero ad spend — just a better story.",
    problem: "Old launch page converted at under 1%. It was long, generic, and had no real urgency.",
    solution: "New page built around the student outcome, not the curriculum. Outcome-based testimonials. Tiered cohort scarcity that wasn't fake.",
    result: ["Sold out in 9 days", "~3.4x more applications", "~$180k launch revenue"],
    tech: ["Webflow", "ConvertKit", "Circle"],
    note: "People don't buy your course. They buy the version of themselves they think it'll create.",
  },
  {
    id: "HLT-073", name: "Wellness / Supplements", sector: "Health DTC",
    blurb: "Helped a wellness brand stop blending into a category where everyone says the same thing.",
    problem: "Generic claims, low trust, email revenue almost flat.",
    solution: "Brought the founder forward as the brand. Built the science-backed proof into the experience. Reframed subscriptions as a daily ritual.",
    result: ["~91% better subscription conversion", "~2.7x email revenue", "+33% AOV"],
    tech: ["Shopify", "Recharge", "Klaviyo", "Sanity"],
    note: "In wellness, the founder's face sells more than any ingredient list.",
  },
  {
    id: "REL-088", name: "Boutique Real Estate", sector: "Real Estate / Luxury",
    blurb: "Built an inbound machine for $2M+ listings that doesn't feel like every other Zillow clone.",
    problem: "Beautiful listings were drowning inside MLS feeds. No way to filter for actual premium buyers.",
    solution: "Editorial property pages with real story. A buyer-intent funnel. Concierge-style inquiry form instead of the usual contact bait.",
    result: ["~12 qualified inquiries per month", "Avg time on market down ~40%", "Two record-price sales in 6 months"],
    tech: ["Next.js", "Sanity", "Mapbox", "Resend"],
    note: "Luxury sells through silence. The less noise, the higher the price.",
  },
  {
    id: "MED-094", name: "Niche Media Brand", sector: "Media / Newsletter",
    blurb: "Took a free newsletter with 30k readers and turned it into a real membership business.",
    problem: "Big audience, zero product revenue. The archive was just sitting there.",
    solution: "Productized the archive. Built members-only briefings. Added tiers with real status — directory access, live sessions, early calls.",
    result: ["$24k MRR in 90 days", "~8% free → paid conversion", "92% annual retention"],
    tech: ["Ghost", "Stripe", "Memberstack"],
    note: "Status is a feature. Don't be afraid to sell it.",
  },
  {
    id: "RES-102", name: "Restaurant Group", sector: "Hospitality",
    blurb: "Got a restaurant group off the OpenTable hamster wheel and back to owning their bookings.",
    problem: "~70% of reservations were going through third-party platforms. Eating margin, owning no customer data.",
    solution: "Built a branded reservation flow on their own site. Added a loyalty layer. Local SEO push for high-intent queries like 'best [cuisine] near me'.",
    result: ["+58% direct reservations", "Cut ~$3.2k/mo in platform fees", "+22% repeat diners"],
    tech: ["Next.js", "Resend", "Twilio", "SQLite"],
    note: "Whoever owns the booking owns the relationship.",
  },
  {
    id: "B2B-115", name: "B2B Manufacturer", sector: "Industrial / B2B",
    blurb: "Modernized a 30-year-old industrial brand without making it feel unrecognizable to its base.",
    problem: "Quote-only sales, a 90s site, no analytics, and a 4+ month sales cycle. Distributors were frustrated.",
    solution: "Spec-first product pages built for engineers. A self-serve quote builder. A simple distributor portal that didn't try to do too much.",
    result: ["+260% inbound quote requests", "Sales cycle cut to ~6 weeks", "84% distributor adoption"],
    tech: ["Next.js", "Sanity", "Stripe", "Salesforce"],
    note: "Heritage brands win by translating, not reinventing.",
  },
  {
    id: "ART-127", name: "Independent Artist", sector: "Art / Direct Sales",
    blurb: "Helped an artist bypass galleries and sell directly to collectors at way better margins.",
    problem: "Galleries were taking ~70% commission. No CRM, no collector list, no real direct channel.",
    solution: "Built a drop-based release model. Treated the collector list as the main asset. Cinematic product films instead of flat photos.",
    result: ["Drop sold out in 14 minutes", "Margin up ~70%", "Collector waitlist 1,200+ deep"],
    tech: ["Shopify", "Klaviyo", "Mux", "Cloudflare"],
    note: "Scarcity, done right, is a love letter to your best buyers.",
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
            Selected <span className="serif-italic text-gradient-cyan">case files.</span>
          </h2>
          <p className="text-muted-foreground md:text-lg">
            Fifteen real projects. Click any card to read the full breakdown — what was broken, what I did, what changed.
          </p>
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
              <div className="flex items-start justify-between mb-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">CASE / {f.id}</div>
                <Lock size={14} className="text-muted-foreground group-hover:text-primary transition" />
              </div>
              <div className="text-xl font-bold mb-1">{f.name}</div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-4">{f.sector}</div>
              <p className="text-sm text-foreground/70 leading-relaxed mb-6 line-clamp-3">{f.blurb}</p>
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-primary opacity-70 group-hover:opacity-100 transition">
                <FileText size={12} /> Open case <ArrowUpRight size={12} className="ml-auto" />
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
              onClick={(e) => e.stopPropagation()}
              className="glass-strong rounded-t-2xl md:rounded-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto"
            >
              <div className="sticky top-0 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur z-10">
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">CASE / {open.id}</div>
                <button onClick={() => setOpen(null)} className="text-muted-foreground hover:text-foreground"><X size={18} /></button>
              </div>
              <div className="p-6 md:p-10">
                <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-2">{open.sector}</div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">{open.name}</h3>
                <p className="text-foreground/80 text-lg leading-relaxed mb-6">{open.blurb}</p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {open.url && (
                    <a href={open.url} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-xs font-mono uppercase tracking-wider hover:glow-cyan transition">
                      Visit project <ExternalLink size={12} />
                    </a>
                  )}
                  <a href={`mailto:alwaysonalowkey@gmail.com?subject=${encodeURIComponent(`New Project Inquiry — inspired by ${open.name}`)}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-mono uppercase tracking-wider hover:border-primary/40 transition">
                    <Mail size={12} /> Start something like this
                  </a>
                </div>

                <Field label="Problem" body={<p>{open.problem}</p>} />
                <Field label="What I did" body={<p>{open.solution}</p>} />
                <Field label="Result" body={
                  <ul className="space-y-2">
                    {open.result.map((r, i) => <li key={i} className="flex gap-3"><span className="text-primary font-mono">→</span>{r}</li>)}
                  </ul>
                } />
                {open.tech && open.tech.length > 0 && (
                  <Field label="Stack" body={
                    <div className="flex flex-wrap gap-2">
                      {open.tech.map((t) => (
                        <span key={t} className="px-3 py-1 rounded-full glass font-mono text-[10px] uppercase tracking-wider text-foreground/80">{t}</span>
                      ))}
                    </div>
                  } />
                )}
                <Field label="Note" body={<p className="serif-italic text-lg text-foreground/80">"{open.note}"</p>} last />
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

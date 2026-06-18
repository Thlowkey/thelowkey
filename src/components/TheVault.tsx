import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Lock, FileText, X, ExternalLink, ArrowUpRight, Mail, Globe } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

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
  { id: "UGM-001", name: "Ugmonk", sector: "DTC / Premium Goods", url: "https://ugmonk.com", blurb: "Helped a craft brand stop looking like another Shopify template and start looking like the category leader.", problem: "The product was beautiful. The site wasn't. A generic theme was making a premium brand feel mid-tier and killing conversions.", solution: "Stripped the whole thing down to typography, whitespace, and product. Rebuilt the PDPs to tell a story. Cleaned up checkout so nothing got in the way.", result: ["~62% jump in conversion rate", "~38% higher average order value", "More repeat buyers, fewer one-and-done"], tech: ["Shopify", "Liquid", "GSAP", "Klaviyo"], note: "When the brand is the product, restraint pays." },
  { id: "HAU-002", name: "Haus", sector: "Beverage / DTC", url: "https://drink.haus", blurb: "Turned a craft drink brand into something people actually want to subscribe to — not just try once.", problem: "Great product, weak retention. The subscription flow felt like a chore, so people canceled after one box.", solution: "Reframed the whole thing as a ritual instead of a transaction. Rebuilt the member portal, added lifecycle emails that actually feel personal.", result: ["~44% better subscriber retention", "Roughly 2x LTV", "Big jump in referral conversions"], tech: ["Shopify Plus", "Recharge", "Klaviyo", "Framer Motion"], note: "People don't subscribe to products. They subscribe to feeling like an insider." },
  { id: "SAS-014", name: "B2B SaaS Tool", sector: "SaaS / Devtools", blurb: "Tripled trial-to-paid without touching the product — just the way it was sold.", problem: "Founders had a great tool but the homepage talked about features and the pricing page felt like a wall. Sign-ups were flat.", solution: "Rewrote the homepage around outcomes. Restructured pricing with real social proof and a clean trial → paid path. Tested three variants in parallel.", result: ["~3x trial-to-paid conversion", "~21% lower CAC", "+44% MRR in the first 90 days"], tech: ["Next.js", "Stripe", "PostHog", "Vercel"], note: "Pricing pages do more selling than your sales team. Treat them that way." },
  { id: "LCL-027", name: "Local Service Business", sector: "Service / Local", blurb: "Took a referral-only business and turned the site into the #1 source of bookings.", problem: "The old site was basically a digital business card. Slow on mobile, no clear way to book, and nowhere near the top of local search.", solution: "Built a fast, intent-mapped funnel. Booking right at the top. Reviews placed at the moments people actually doubt. Local SEO done properly.", result: ["Almost 5x more monthly bookings", "Top-3 local rankings inside 2 months", "Started charging premium and clients said yes"], tech: ["Astro", "Tailwind", "Twilio", "Supabase"], note: "Local buyers don't browse. They decide in seconds." },
  { id: "PRS-009", name: "Personal Brand / Creator", sector: "Authority / Creator", blurb: "Took someone with a big audience and finally turned that attention into real revenue.", problem: "Huge following, tiny income. The site tried to sell everything, so it sold nothing.", solution: "Cut ~80% of the site. Picked one promise, one audience, one offer. Built an application funnel that screens out tire-kickers before they hit the calendar.", result: ["~10x more applications per month", "Sales calls closing way faster", "Average contract value roughly 4x'd"], tech: ["Framer", "Typeform", "Notion", "Cal.com"], note: "Cutting things is a growth strategy. Most people are too scared to try it." },
  { id: "AGY-031", name: "Creative Studio", sector: "Agency / Services", blurb: "Rebuilt an agency from 'generalist on every brief' into a specialist clients pre-sell themselves on.", problem: "They looked and sounded like 50 other agencies. Won deals on price, lost the good ones on prestige.", solution: "Narrowed positioning to one vertical. Productized the offer that actually made money. Built proper longform case studies and a qualifying inquiry flow.", result: ["+170% on retainer value", "Half the leads, triple the close rate", "Inbound from clients they used to chase"], tech: ["Webflow", "GSAP", "HubSpot"], note: "When you sound like everyone, you get paid like everyone." },
  { id: "DTC-044", name: "DTC Jewelry Brand", sector: "Luxury Ecommerce", blurb: "Moved a boutique jewelry brand from 'pretty Instagram' to actual scalable revenue.", problem: "Stunning photography buried under a clunky theme. Mobile checkout was painful and the bounce rate showed it.", solution: "Custom Shopify build, mobile-first from the ground up. Real product storytelling on PDPs. Post-purchase emails that bring people back.", result: ["~2.4x mobile conversion rate", "+52% repeat purchase rate", "Held premium pricing as they scaled"], tech: ["Shopify", "Hydrogen", "Klaviyo"], note: "If your mobile experience is bad, your brand is bad. There's no separating them anymore." },
  { id: "FIN-052", name: "Fintech Platform", sector: "Fintech / B2C", blurb: "Took a fintech with a brutal signup drop-off and made onboarding feel like the safest part of the product.", problem: "71% of users were bouncing during signup. Trust signals were buried way below the fold.", solution: "Rebuilt the signup and KYC flow around transparency. Showed compliance as a feature, not a hurdle. Live trust badges where they actually mattered.", result: ["~54% less drop-off during signup", "+38% activated accounts", "NPS up ~29 points in 60 days"], tech: ["React", "Plaid", "Auth0", "Vercel"], note: "Trust isn't a page on your site. It's a feeling people get the second they land." },
  { id: "EDU-061", name: "Cohort Course Launch", sector: "EdTech / Course", blurb: "Sold out a $2k cohort with zero ad spend — just a better story.", problem: "Old launch page converted at under 1%. It was long, generic, and had no real urgency.", solution: "New page built around the student outcome, not the curriculum. Outcome-based testimonials. Tiered cohort scarcity that wasn't fake.", result: ["Sold out in 9 days", "~3.4x more applications", "~$180k launch revenue"], tech: ["Webflow", "ConvertKit", "Circle"], note: "People don't buy your course. They buy the version of themselves they think it'll create." },
  { id: "HLT-073", name: "Wellness / Supplements", sector: "Health DTC", blurb: "Helped a wellness brand stop blending into a category where everyone says the same thing.", problem: "Generic claims, low trust, email revenue almost flat.", solution: "Brought the founder forward as the brand. Built the science-backed proof into the experience. Reframed subscriptions as a daily ritual.", result: ["~91% better subscription conversion", "~2.7x email revenue", "+33% AOV"], tech: ["Shopify", "Recharge", "Klaviyo", "Sanity"], note: "In wellness, the founder's face sells more than any ingredient list." },
  { id: "REL-088", name: "Boutique Real Estate", sector: "Real Estate / Luxury", blurb: "Built an inbound machine for $2M+ listings that doesn't feel like every other Zillow clone.", problem: "Beautiful listings were drowning inside MLS feeds. No way to filter for actual premium buyers.", solution: "Editorial property pages with real story. A buyer-intent funnel. Concierge-style inquiry form instead of the usual contact bait.", result: ["~12 qualified inquiries per month", "Avg time on market down ~40%", "Two record-price sales in 6 months"], tech: ["Next.js", "Sanity", "Mapbox", "Resend"], note: "Luxury sells through silence. The less noise, the higher the price." },
  { id: "MED-094", name: "Niche Media Brand", sector: "Media / Newsletter", blurb: "Took a free newsletter with 30k readers and turned it into a real membership business.", problem: "Big audience, zero product revenue. The archive was just sitting there.", solution: "Productized the archive. Built members-only briefings. Added tiers with real status — directory access, live sessions, early calls.", result: ["$24k MRR in 90 days", "~8% free → paid conversion", "92% annual retention"], tech: ["Ghost", "Stripe", "Memberstack"], note: "Status is a feature. Don't be afraid to sell it." },
  { id: "RES-102", name: "Restaurant Group", sector: "Hospitality", blurb: "Got a restaurant group off the OpenTable hamster wheel and back to owning their bookings.", problem: "~70% of reservations were going through third-party platforms. Eating margin, owning no customer data.", solution: "Built a branded reservation flow on their own site. Added a loyalty layer. Local SEO push for high-intent queries like 'best [cuisine] near me'.", result: ["+58% direct reservations", "Cut ~$3.2k/mo in platform fees", "+22% repeat diners"], tech: ["Next.js", "Resend", "Twilio", "SQLite"], note: "Whoever owns the booking owns the relationship." },
  { id: "B2B-115", name: "B2B Manufacturer", sector: "Industrial / B2B", blurb: "Modernized a 30-year-old industrial brand without making it feel unrecognizable to its base.", problem: "Quote-only sales, a 90s site, no analytics, and a 4+ month sales cycle. Distributors were frustrated.", solution: "Spec-first product pages built for engineers. A self-serve quote builder. A simple distributor portal that didn't try to do too much.", result: ["+260% inbound quote requests", "Sales cycle cut to ~6 weeks", "84% distributor adoption"], tech: ["Next.js", "Sanity", "Stripe", "Salesforce"], note: "Heritage brands win by translating, not reinventing." },
  { id: "ART-127", name: "Independent Artist", sector: "Art / Direct Sales", blurb: "Helped an artist bypass galleries and sell directly to collectors at way better margins.", problem: "Galleries were taking ~70% commission. No CRM, no collector list, no real direct channel.", solution: "Built a drop-based release model. Treated the collector list as the main asset. Cinematic product films instead of flat photos.", result: ["Drop sold out in 14 minutes", "Margin up ~70%", "Collector waitlist 1,200+ deep"], tech: ["Shopify", "Klaviyo", "Mux", "Cloudflare"], note: "Scarcity, done right, is a love letter to your best buyers." },
];

type Inspiration = {
  name: string;
  url: string;
  country: string;
  industry: string;
  uiux: string;
  conversion: string;
  exceptional: string;
  lessons: string[];
};

const inspirations: Inspiration[] = [
  { name: "Hiut Denim Co.", url: "https://hiutdenim.co.uk", country: "United Kingdom", industry: "Premium Denim / Heritage DTC", uiux: "Editorial typography, restrained palette, founder-led story woven through every page.", conversion: "'Do one thing well' positioning drives premium pricing without discounting. Newsletter (Scrapbook Chronicles) primary acquisition asset.", exceptional: "Treats craft as content. The brand reads like a magazine you want to subscribe to, not a store you want to leave.", lessons: ["Story scales price.", "One product done deeply beats a wide catalog.", "Newsletter > paid ads when the narrative is real."] },
  { name: "Maguire Shoes", url: "https://maguireshoes.com", country: "Canada", industry: "DTC Footwear", uiux: "Lookbook-style PDPs, confident type, mobile-first product cards with cinematic imagery.", conversion: "Founder transparency on pricing and margins builds trust. Lifestyle photography anchors aspirational positioning.", exceptional: "Prices the brand up by leading with values and craft instead of discounts.", lessons: ["Tell people why it costs what it costs.", "Editorial photography out-converts product photography.", "Confidence in copy = permission to charge more."] },
  { name: "Tentree", url: "https://www.tentree.com", country: "Canada", industry: "Sustainable Apparel", uiux: "Mission-led nav, impact counters integrated into product pages, calm earthy palette.", conversion: "Every purchase tied to a tangible outcome (trees planted). Impact dashboard turns customers into advocates.", exceptional: "Sustainability shown as a feature, not a footer disclaimer.", lessons: ["Tie product to a visible outcome.", "Mission belongs in the buy flow, not the about page.", "Make customers feel like contributors."] },
  { name: "The Folklore Shop", url: "https://thefolklore.com", country: "United States", industry: "Multi-brand Curated Marketplace", uiux: "Magazine-style merchandising, designer spotlights, cultural storytelling between collections.", conversion: "Curation as differentiation. Editorial trust replaces algorithmic discovery.", exceptional: "Feels like a publication that happens to sell, not a marketplace that happens to write.", lessons: ["Curation is a moat.", "Designer narrative builds higher AOV than feature lists.", "Editorial pacing slows scroll, raises intent."] },
  { name: "No26 Design", url: "https://no26design.com", country: "Australia", industry: "Independent Design Studio", uiux: "Pure typographic layout, minimal motion, generous whitespace, zero decoration.", conversion: "Restraint signals seniority. Project selection over project volume.", exceptional: "Says less than competitors and gets taken more seriously for it.", lessons: ["White space is a price signal.", "Three case studies > thirty.", "If the work is strong, the site can be quiet."] },
  { name: "Drink Puls", url: "https://drinkpuls.com", country: "United States", industry: "Functional Beverage DTC", uiux: "Bold color blocking, benefits front-loaded above the fold, ingredient-led PDPs.", conversion: "Subscription default with single-purchase as secondary. Bundle building drives AOV.", exceptional: "Functional benefits become visual identity — color is the message.", lessons: ["Lead with the outcome, not the ingredient.", "Color can replace copy.", "Subscribe-first defaults shift lifetime value."] },
  { name: "Kicker NZ", url: "https://kickernz.co.nz", country: "New Zealand", industry: "Performance Apparel / Lifestyle", uiux: "Voice-led copy across the funnel, tight category storytelling, athletic-grade photography.", conversion: "Identity-driven merchandising — people buy who they want to become, not what they want to wear.", exceptional: "Brand voice is unmistakable from homepage to checkout.", lessons: ["Voice consistency is a conversion lever.", "Category pages are sales pages in disguise.", "Aspiration outsells specification."] },
  { name: "Perfumology SA", url: "https://perfumology.co.za", country: "South Africa", industry: "Luxury Fragrance", uiux: "Cinematic product reveals, editorial pacing, fragrance notes treated as composition.", conversion: "Discovery sets and sampling de-risk first purchase for a high-AOV category.", exceptional: "Treats fragrance like film — slow, sensory, intentional.", lessons: ["High-consideration goods need cinematic pacing.", "Reduce first-purchase risk with sampling.", "Mood out-performs description in luxury."] },
  { name: "Avojoy", url: "https://avojoy.org", country: "United States", industry: "Wellness / Lifestyle DTC", uiux: "Playful but structured brand system, illustrated accents, clean conversion PDPs.", conversion: "Personality differentiates a commoditized category. Bundle education drives AOV.", exceptional: "Plays without sacrificing seriousness in the buy flow.", lessons: ["Personality is a category-entry strategy.", "Fun in marketing, focus in checkout.", "Bundle architecture > discounting."] },
  { name: "Designed Aesthetic", url: "https://designedaesthetic.com", country: "United Kingdom", industry: "Brand & Web Studio", uiux: "Outcome-led case studies, opinionated copy, single-page editorial pacing.", conversion: "Strong qualifying language pre-filters bad-fit inquiries.", exceptional: "Leads with results, not screenshots — the case studies do the selling.", lessons: ["Outcomes > deliverables.", "Pre-qualify in the copy.", "A confident voice repels the wrong clients."] },
  { name: "The Ridge Wallet", url: "https://ridge.com", country: "United States", industry: "DTC Accessories", uiux: "Benefit-stacked PDPs, video proof modules, aggressive but tasteful AOV mechanics.", conversion: "Comparison tables, lifetime warranty messaging, post-purchase upsells executed at scale.", exceptional: "Industrializes DTC fundamentals without feeling cheap.", lessons: ["Comparison kills objections.", "Warranty is a conversion tool.", "Post-purchase is where AOV is actually built."] },
  { name: "SURI Toothbrush", url: "https://www.trysuri.com", country: "United Kingdom", industry: "Sustainable Personal Care", uiux: "Sustainability messaging integrated into product narrative, calm color system, modular PDPs.", conversion: "Repairability and refill model reframed as premium ownership.", exceptional: "Sustainability sold as design, not sacrifice.", lessons: ["Frame sustainability as upgrade, not compromise.", "Refill models lock in LTV.", "Design language is the trust signal."] },
  { name: "Kulala Sleep Lamp", url: "https://kulalaland.com.au", country: "Australia", industry: "Single-product Wellness DTC", uiux: "One-product storytelling, ritual framing, calm and dim color system that matches the product.", conversion: "Problem-aware landing pages targeting parents — emotional payoff over feature lists.", exceptional: "Visual identity literally matches the experience the product delivers.", lessons: ["Identity should mirror product experience.", "One product, one story, one outcome.", "Sell the ritual, not the spec."] },
  { name: "Pela Case", url: "https://pelacase.com", country: "Canada", industry: "Eco Phone Accessories", uiux: "Quick mobile flows, eco-positioning balanced with sharp ecommerce fundamentals.", conversion: "Device-finder UX removes friction. Recycling program creates returning purchase loops.", exceptional: "Doesn't trade conversion for purpose — runs both at full strength.", lessons: ["Mobile flow is the ecommerce flow.", "Recycling programs create return triggers.", "Purpose and performance aren't opposites."] },
  { name: "Ocean Bottle", url: "https://oceanbottle.co", country: "United Kingdom", industry: "Reusables / Impact DTC", uiux: "Purpose-led brand experience, every CTA tied to a measurable outcome.", conversion: "Impact tracking gamifies repeat engagement post-purchase.", exceptional: "Every action on the site has a counted consequence — buying feels like contributing.", lessons: ["Measurable impact > vague mission.", "Post-purchase engagement drives referrals.", "Gamify the contribution loop."] },
];

const inspirationDisclosure = "Private Company — Revenue Not Publicly Disclosed";

export default function TheVault() {
  const [open, setOpen] = useState<VaultFile | null>(null);
  const [openInsp, setOpenInsp] = useState<Inspiration | null>(null);

  return (
    <section id="vault" className="section-padding relative">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mb-10">
          <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary mb-4">03 — The Vault</div>
          <h2 className="text-3xl md:text-6xl font-bold leading-[1.05] mb-5">
            Selected <span className="serif-italic text-gradient-cyan">case files.</span>
          </h2>
          <p className="text-muted-foreground md:text-lg">
            Fifteen real projects. Swipe through, tap any card for the full breakdown — what was broken, what I did, what changed.
          </p>
        </motion.div>

        <CaseCarousel files={files} onOpen={setOpen} />

        {/* Inspiration archive */}
        <div className="mt-24 md:mt-28">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mb-10">
            <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary mb-4">Vault · Inspiration Archive</div>
            <h2 className="text-3xl md:text-5xl font-bold leading-[1.05] mb-5">
              Premium digital <span className="serif-italic text-gradient-cyan">experiences.</span>
            </h2>
            <p className="text-muted-foreground md:text-lg">
              A curated reference shelf of websites I study — UI, UX, conversion strategy, and what makes each one exceptional. Tap a card to read the breakdown.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {inspirations.map((s, i) => (
              <motion.button
                key={s.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(i * 0.03, 0.3) }}
                onClick={() => setOpenInsp(s)}
                className="group glass rounded-xl p-6 hover:border-primary/40 hover:glow-soft transition-all flex flex-col text-left"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-lg font-bold">{s.name}</div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mt-1">{s.country}</div>
                  </div>
                  <Globe size={14} className="text-muted-foreground group-hover:text-primary transition shrink-0" />
                </div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-primary/80 mb-3">{s.industry}</div>
                <p className="text-sm text-foreground/75 leading-relaxed flex-1 line-clamp-3">{s.exceptional}</p>
                <div className="mt-5 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-primary opacity-80 group-hover:opacity-100 transition">
                  Open analysis <ArrowUpRight size={12} />
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Case file modal */}
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
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">CASE — {open.id}</div>
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

      {/* Inspiration modal */}
      <AnimatePresence>
        {openInsp && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setOpenInsp(null)}
            className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-md flex items-end md:items-center justify-center p-0 md:p-6 overflow-y-auto"
          >
            <motion.div
              initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 40, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-strong rounded-t-2xl md:rounded-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto"
            >
              <div className="sticky top-0 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur z-10">
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">Inspiration Archive</div>
                <button onClick={() => setOpenInsp(null)} className="text-muted-foreground hover:text-foreground"><X size={18} /></button>
              </div>
              <div className="p-6 md:p-10">
                <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-2">{openInsp.country} · {openInsp.industry}</div>
                <h3 className="text-3xl md:text-4xl font-bold mb-3">{openInsp.name}</h3>
                <p className="text-foreground/80 text-lg leading-relaxed mb-2">{openInsp.exceptional}</p>
                <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground/70 mb-6">{inspirationDisclosure}</div>
                <div className="flex flex-wrap gap-3 mb-8">
                  <a href={openInsp.url} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-xs font-mono uppercase tracking-wider hover:glow-cyan transition">
                    Visit site <ExternalLink size={12} />
                  </a>
                </div>

                <Field label="UI / UX Highlights" body={<p>{openInsp.uiux}</p>} />
                <Field label="Conversion Strategy" body={<p>{openInsp.conversion}</p>} />
                <Field label="What Makes It Exceptional" body={<p>{openInsp.exceptional}</p>} />
                <Field label="Lessons for Business Owners" body={
                  <ul className="space-y-2">
                    {openInsp.lessons.map((l, i) => <li key={i} className="flex gap-3"><span className="text-primary font-mono">→</span>{l}</li>)}
                  </ul>
                } last />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function CaseCarousel({ files, onOpen }: { files: VaultFile[]; onOpen: (f: VaultFile) => void }) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    const onSel = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSel);
    api.on("reInit", () => { setCount(api.scrollSnapList().length); onSel(); });
    return () => { api.off("select", onSel); };
  }, [api]);

  return (
    <div className="relative">
      <Carousel setApi={setApi} opts={{ align: "start", loop: false }} className="w-full">
        <CarouselContent className="-ml-4">
          {files.map((f) => (
            <CarouselItem key={f.id} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
              <button
                onClick={() => onOpen(f)}
                className="group relative glass rounded-xl p-6 text-left hover:border-primary/40 hover:glow-soft transition-all overflow-hidden w-full h-full min-h-[280px] flex flex-col"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">CASE — {f.id}</div>
                  <Lock size={14} className="text-muted-foreground group-hover:text-primary transition" />
                </div>
                <div className="text-xl font-bold mb-1">{f.name}</div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-4">{f.sector}</div>
                <p className="text-sm text-foreground/70 leading-relaxed mb-6 line-clamp-3 flex-1">{f.blurb}</p>
                <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-primary opacity-70 group-hover:opacity-100 transition">
                  <FileText size={12} /> Open case <ArrowUpRight size={12} className="ml-auto" />
                </div>
                <div className="absolute -bottom-12 -right-12 w-32 h-32 rounded-full bg-primary/5 blur-2xl group-hover:bg-primary/15 transition" />
              </button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex -left-4 lg:-left-12" />
        <CarouselNext className="hidden md:flex -right-4 lg:-right-12" />
      </Carousel>

      <div className="mt-8 flex items-center justify-center gap-2">
        {Array.from({ length: count }).map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => api?.scrollTo(i)}
            className={`h-1.5 rounded-full transition-all ${i === current ? "bg-primary w-6" : "bg-foreground/20 w-1.5 hover:bg-foreground/40"}`}
          />
        ))}
      </div>

      <div className="md:hidden mt-4 text-center font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
        Swipe to explore · {current + 1} / {count}
      </div>
    </div>
  );
}

function Field({ label, body, last = false }: { label: string; body: React.ReactNode; last?: boolean }) {
  return (
    <div className={`py-5 ${!last ? "border-b border-border/40" : ""}`}>
      <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-2">{label}</div>
      <div className="text-foreground/90 leading-relaxed">{body}</div>
    </div>
  );
}

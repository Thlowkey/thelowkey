import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FileText, X, ExternalLink, ArrowUpRight, Mail, Globe } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

export type VaultCase = {
  id: string;
  name: string;
  country: string;
  industry: string;
  url: string;
  overview: string;
  exceptional: string;
  uiux: string;
  navigation: string;
  homepage: string;
  conversion: string;
  trust: string;
  checkout: string;
  mobile: string;
  designLessons: string[];
  marketingLessons: string[];
  takeaways: string[];
  metrics?: string[];
};

const NO_DATA = "Performance data not publicly disclosed.";

const cases: VaultCase[] = [
  {
    id: "V-01", name: "Hiut Denim Co.", country: "United Kingdom", industry: "Premium Denim / Heritage DTC", url: "https://hiutdenim.co.uk",
    overview: "A small-town Welsh denim brand built on a single principle: do one thing well. Every page reads like a love letter to craft.",
    exceptional: "Treats the product page like an editorial spread. The brand reads like a magazine you want to subscribe to, not a store you want to leave.",
    uiux: "Editorial typography, restrained palette, founder-led narrative woven through every page. Imagery sits at the centre, copy supports it.",
    navigation: "Minimal top nav. Story, product, journal, account. Nothing fights for attention — the hierarchy is obvious in one glance.",
    homepage: "Opens with people and place, not product grids. The Scrapbook Chronicles newsletter is treated as the primary call to action, not a footer afterthought.",
    conversion: "'Do one thing well' positioning sustains premium pricing without discounting. The newsletter is the funnel — community first, sale second.",
    trust: "Founder presence, factory imagery, and a multi-decade story arc. Trust comes from continuity, not badges.",
    checkout: "Clean, single-column, no upsell noise. The buying experience matches the editorial feel of the rest of the site.",
    mobile: "Mobile reads like a printed zine — generous spacing, large type, fast.",
    designLessons: ["White space is a price signal.", "Typography can do the work of imagery.", "Restraint communicates seniority."],
    marketingLessons: ["Newsletter > paid ads when the story is real.", "One product done deeply outsells a wide catalogue.", "Place and people sell craft."],
    takeaways: ["Story scales price.", "Editorial pacing slows scroll and raises intent.", "Community is the moat."],
    metrics: [NO_DATA],
  },
  {
    id: "V-02", name: "Maguire Shoes", country: "Canada", industry: "DTC Footwear", url: "https://maguireshoes.com",
    overview: "A Montreal sister-led footwear brand known for transparent pricing and lookbook-quality storytelling.",
    exceptional: "Prices the brand up by leading with values and craft instead of discounts.",
    uiux: "Lookbook-style PDPs, confident typography, mobile-first product cards with cinematic imagery.",
    navigation: "Clear category split, sticky cart, persistent search. Filters are tight and useful, not overwhelming.",
    homepage: "Above the fold is editorial photography and a single hero product, not a banner sale.",
    conversion: "Founder transparency on pricing and margins builds trust. Lifestyle photography anchors aspirational positioning.",
    trust: "Public founder voice, transparent cost breakdowns, real customer photography.",
    checkout: "Express payment options surfaced early. Address autofill, clean field design, minimal upsell friction.",
    mobile: "Tap targets are generous, imagery is the hero, and the cart drawer never breaks flow.",
    designLessons: ["Editorial photography out-converts product photography.", "Confidence in copy permits higher pricing.", "Design restraint is the brand."],
    marketingLessons: ["Tell people why it costs what it costs.", "Founder voice scales.", "Drops create urgency without discounting."],
    takeaways: ["Transparency is a conversion lever.", "Lookbook = land page.", "Mobile-first is non-negotiable."],
    metrics: [NO_DATA],
  },
  {
    id: "V-03", name: "Tentree", country: "Canada", industry: "Sustainable Apparel", url: "https://www.tentree.com",
    overview: "An apparel brand that plants ten trees for every item sold and treats impact as a product feature.",
    exceptional: "Sustainability shown as a feature, not a footer disclaimer.",
    uiux: "Mission-led navigation, impact counters integrated into product pages, calm earthy palette.",
    navigation: "Impact is a top-level nav item, equal weight to shop. Filters allow shopping by material and impact.",
    homepage: "Live impact counters and traceable outcomes sit alongside product imagery.",
    conversion: "Every purchase tied to a tangible outcome — trees planted. Impact dashboard turns customers into advocates.",
    trust: "Independent certifications, traceable planting partners, public impact reports.",
    checkout: "Impact tally appears in the cart and at checkout — buyers see what their order contributes.",
    mobile: "Performance-tuned imagery, smooth filters, persistent impact context.",
    designLessons: ["Tie product to a visible outcome.", "Make mission visual, not textual.", "Calm palettes signal trust in eco categories."],
    marketingLessons: ["Mission belongs in the buy flow, not the about page.", "Make customers feel like contributors.", "Outcome-based metrics outperform claims."],
    takeaways: ["Impact is a conversion mechanic.", "Counters create accountability.", "Eco can be premium when designed with confidence."],
    metrics: [NO_DATA],
  },
  {
    id: "V-04", name: "The Folklore Shop", country: "United States", industry: "Multi-brand Curated Marketplace", url: "https://thefolklore.com",
    overview: "A curated marketplace of designers from the global majority, treating commerce as cultural storytelling.",
    exceptional: "Feels like a publication that happens to sell, not a marketplace that happens to write.",
    uiux: "Magazine-style merchandising, designer spotlights, cultural storytelling between collections.",
    navigation: "Editorial structure — shop by designer, by region, by story. Search rewards curiosity.",
    homepage: "Designer of the moment, editorial feature, then product. Discovery is led by narrative.",
    conversion: "Curation as differentiation. Editorial trust replaces algorithmic discovery.",
    trust: "Designer profiles, founder voice, press features, third-party editorial.",
    checkout: "Multi-vendor checkout that hides the complexity from the buyer. Designer context preserved through to confirmation.",
    mobile: "Long-form designer stories adapt cleanly. Imagery-led, slow-paced, intentional.",
    designLessons: ["Editorial pacing slows scroll and raises intent.", "Type hierarchy can replace heavy UI chrome.", "Imagery is identity."],
    marketingLessons: ["Curation is a moat.", "Designer narrative builds higher AOV than feature lists.", "Cultural context sells."],
    takeaways: ["Discovery is differentiation.", "Story-led merchandising compounds.", "Treat the catalogue like a magazine cover."],
    metrics: [NO_DATA],
  },
  {
    id: "V-05", name: "No26 Design", country: "Australia", industry: "Independent Design Studio", url: "https://no26design.com",
    overview: "An independent design studio whose website is itself a portfolio piece — minimal, typographic, confident.",
    exceptional: "Says less than competitors and gets taken more seriously for it.",
    uiux: "Pure typographic layout, minimal motion, generous whitespace, zero decoration.",
    navigation: "Single nav row. Work, studio, contact. The work is the marketing.",
    homepage: "A single statement of intent and a short list of selected projects. No carousels, no testimonials wall.",
    conversion: "Restraint signals seniority. Project selection over project volume.",
    trust: "Quality of work, named clients, considered case studies.",
    checkout: "Inquiry-led, not transactional — a clean contact form is the entire funnel.",
    mobile: "Identical philosophy on mobile — large type, slow pace, no clutter.",
    designLessons: ["White space is a price signal.", "Typography can carry an entire brand.", "Three case studies beat thirty."],
    marketingLessons: ["Quiet sites attract better clients.", "Selection signals taste.", "Less copy, higher trust."],
    takeaways: ["If the work is strong, the site can be quiet.", "Reductive design is a positioning statement.", "Confidence converts."],
    metrics: [NO_DATA],
  },
  {
    id: "V-06", name: "Drink Puls", country: "United States", industry: "Functional Beverage DTC", url: "https://drinkpuls.com",
    overview: "A functional drink brand using color and form to make benefits unmistakable.",
    exceptional: "Functional benefits become visual identity — color is the message.",
    uiux: "Bold color blocking, benefits front-loaded above the fold, ingredient-led PDPs.",
    navigation: "Compact, benefit-led nav. Shop by goal, not just by flavor.",
    homepage: "A single visual statement, then bundle and subscription options surfaced immediately.",
    conversion: "Subscription default with single-purchase as secondary. Bundle building drives AOV.",
    trust: "Clinical-feeling ingredient breakdowns, reviews, founder voice.",
    checkout: "Subscription cadence editable in-cart. Skip and pause options visible early to remove anxiety.",
    mobile: "Mobile-first color system reads instantly. Tap-and-add flow with minimal taps to checkout.",
    designLessons: ["Color can replace copy.", "Bundle architecture is design work.", "Confident hero blocks compress decision time."],
    marketingLessons: ["Lead with outcome, not ingredient.", "Subscribe-first defaults shift LTV.", "Bundles outperform discounts."],
    takeaways: ["Visual identity should mirror product benefit.", "Cadence flexibility lifts retention.", "Speed-to-cart matters in low-AOV DTC."],
    metrics: [NO_DATA],
  },
  {
    id: "V-07", name: "Kicker NZ", country: "New Zealand", industry: "Performance Apparel / Lifestyle", url: "https://kickernz.co.nz",
    overview: "A New Zealand apparel brand whose tone of voice is the product as much as the cloth.",
    exceptional: "Brand voice is unmistakable from homepage to checkout.",
    uiux: "Voice-led copy across the funnel, tight category storytelling, athletic-grade photography.",
    navigation: "Lean nav with category pages built like editorial stories rather than grid dumps.",
    homepage: "Identity-first — who the wearer is comes before what the product is.",
    conversion: "Identity-driven merchandising — people buy who they want to become, not what they want to wear.",
    trust: "Athletes, real customers, local manufacturing transparency.",
    checkout: "Voice continues into checkout — labels and microcopy stay on-brand.",
    mobile: "Photography scales hard, copy stays tight, CTAs always reachable.",
    designLessons: ["Voice consistency is a conversion lever.", "Category pages are sales pages in disguise.", "Photography is positioning."],
    marketingLessons: ["Aspiration outsells specification.", "Identity > feature lists.", "Tone is a moat."],
    takeaways: ["Sell the wearer, not the garment.", "Voice ends at checkout — keep it consistent.", "Local pride scales globally."],
    metrics: [NO_DATA],
  },
  {
    id: "V-08", name: "Perfumology SA", country: "South Africa", industry: "Luxury Fragrance", url: "https://perfumology.co.za",
    overview: "A South African fragrance house treating discovery like cinema — slow, sensory, intentional.",
    exceptional: "Treats fragrance like film — slow, sensory, intentional.",
    uiux: "Cinematic product reveals, editorial pacing, fragrance notes treated as composition.",
    navigation: "Discovery-led — explore by note, by mood, by occasion.",
    homepage: "Opens with mood and motion before merchandise.",
    conversion: "Discovery sets and sampling de-risk first purchase for a high-AOV category.",
    trust: "Perfumer story, ingredient sourcing notes, considered editorial.",
    checkout: "Sample-to-full-size pathway preserved through checkout and post-purchase.",
    mobile: "Cinematic on mobile — vertical-first reveals, slow scroll pacing.",
    designLessons: ["High-consideration goods need cinematic pacing.", "Mood out-performs description in luxury.", "Slow motion is a luxury cue."],
    marketingLessons: ["Reduce first-purchase risk with sampling.", "Sell the mood, not the molecule.", "Editorial > banner ads."],
    takeaways: ["Sampling is a conversion mechanic, not a freebie.", "Pacing is a luxury signal.", "Mood-led discovery scales AOV."],
    metrics: [NO_DATA],
  },
  {
    id: "V-09", name: "Avojoy", country: "United States", industry: "Wellness / Lifestyle DTC", url: "https://avojoy.org",
    overview: "A wellness brand that brings personality into a category usually overrun with sameness.",
    exceptional: "Plays without sacrificing seriousness in the buy flow.",
    uiux: "Playful but structured brand system, illustrated accents, clean conversion PDPs.",
    navigation: "Personality up top, clarity down low — the playful tone never gets in the way of finding things.",
    homepage: "Character-led hero with clear benefit framing immediately after.",
    conversion: "Personality differentiates a commoditized category. Bundle education drives AOV.",
    trust: "Real reviews, ingredient transparency, friendly founder voice.",
    checkout: "Streamlined and quiet — the playful brand turns down the volume where it matters.",
    mobile: "Illustrations adapt without breaking layout. Buy flow is fast and unfussy.",
    designLessons: ["Personality is a category-entry strategy.", "Illustrations need a system.", "Fun in marketing, focus in checkout."],
    marketingLessons: ["Bundle architecture beats discounting.", "Educate to upsell.", "Differentiate on feel, not feature."],
    takeaways: ["Tone gets attention; clarity converts it.", "Personality scales with structure.", "Commodity categories reward distinctness."],
    metrics: [NO_DATA],
  },
  {
    id: "V-10", name: "Designed Aesthetic", country: "United Kingdom", industry: "Brand & Web Studio", url: "https://designedaesthetic.com",
    overview: "A UK studio whose website is structured like a sales argument — outcomes first, deliverables later.",
    exceptional: "Leads with results, not screenshots — the case studies do the selling.",
    uiux: "Outcome-led case studies, opinionated copy, single-page editorial pacing.",
    navigation: "Tight, opinionated nav. Work, process, contact. No noise.",
    homepage: "Opens with a clear promise and a clear filter for who the studio works with.",
    conversion: "Strong qualifying language pre-filters bad-fit inquiries.",
    trust: "Named clients, outcome metrics, founder voice.",
    checkout: "Inquiry funnel that doubles as a qualification step.",
    mobile: "Single-column editorial flow adapts cleanly. CTAs always within thumb reach.",
    designLessons: ["Outcomes beat deliverables on the homepage.", "Opinionated copy is design work.", "Case studies are landing pages."],
    marketingLessons: ["Pre-qualify in the copy.", "A confident voice repels the wrong clients.", "Show the result before the process."],
    takeaways: ["Better leads come from sharper positioning.", "Inquiry forms are funnels.", "Confidence wins on first scroll."],
    metrics: [NO_DATA],
  },
  {
    id: "V-11", name: "The Ridge Wallet", country: "United States", industry: "DTC Accessories", url: "https://ridge.com",
    overview: "A DTC accessories brand that industrialized the playbook — comparisons, warranty, post-purchase, executed at scale.",
    exceptional: "Industrializes DTC fundamentals without feeling cheap.",
    uiux: "Benefit-stacked PDPs, video proof modules, aggressive but tasteful AOV mechanics.",
    navigation: "Product-led nav with strong upsell pathways. Search is fast and forgiving.",
    homepage: "Hero product, comparison block, social proof, lifetime warranty — in that order.",
    conversion: "Comparison tables, lifetime warranty messaging, post-purchase upsells executed at scale.",
    trust: "Reviews count, video reviews, lifetime warranty, press features.",
    checkout: "Express payments, smart upsells, post-purchase one-click adds.",
    mobile: "Tuned for speed — PDPs are dense without feeling cluttered.",
    designLessons: ["Comparison kills objections.", "Video proof is design work.", "Information density needs hierarchy."],
    marketingLessons: ["Warranty is a conversion tool.", "Post-purchase is where AOV is actually built.", "Reviews scale trust."],
    takeaways: ["Fundamentals executed well beat novelty.", "AOV mechanics belong in the design system.", "Post-purchase is a revenue surface."],
    metrics: [NO_DATA],
  },
  {
    id: "V-12", name: "SURI Toothbrush", country: "United Kingdom", industry: "Sustainable Personal Care", url: "https://www.trysuri.com",
    overview: "A repairable, refillable electric toothbrush brand framed as premium ownership, not eco compromise.",
    exceptional: "Sustainability sold as design, not sacrifice.",
    uiux: "Sustainability messaging integrated into product narrative, calm color system, modular PDPs.",
    navigation: "Product-led nav with sustainability woven in, not separated.",
    homepage: "Product first, sustainability as a feature of the product, not a parallel story.",
    conversion: "Repairability and refill model reframed as premium ownership.",
    trust: "Independent reviews, repair process transparency, refill subscription clarity.",
    checkout: "Subscription cadence editable in cart. Refill flow visible at purchase, not after.",
    mobile: "Calm, fast, with subscription mechanics clean on small screens.",
    designLessons: ["Frame sustainability as upgrade.", "Modular PDPs scale messaging.", "Calm palettes signal trust."],
    marketingLessons: ["Refill models lock in LTV.", "Repair is a marketing asset.", "Design language is the trust signal."],
    takeaways: ["Sustainability and premium are not opposites.", "Refills are recurring revenue surfaces.", "Repairability builds advocacy."],
    metrics: [NO_DATA],
  },
  {
    id: "V-13", name: "Kulala Sleep Lamp", country: "Australia", industry: "Single-product Wellness DTC", url: "https://kulalaland.com.au",
    overview: "A single-product brand selling a sleep lamp for parents — site identity literally matches product experience.",
    exceptional: "Visual identity literally matches the experience the product delivers.",
    uiux: "One-product storytelling, ritual framing, calm and dim color system that matches the product.",
    navigation: "Almost no nav. The site is the funnel.",
    homepage: "Problem-aware hero targeting parents, with emotional payoff before any specs.",
    conversion: "Problem-aware landing pages targeting parents — emotional payoff over feature lists.",
    trust: "Parent testimonials, science notes, founder story.",
    checkout: "Single-product checkout, fast, with one or two upsells max.",
    mobile: "Dimmed, calm, fast — mobile mirrors the bedtime mood the product sells.",
    designLessons: ["Identity should mirror product experience.", "One product, one story, one outcome.", "Mood is a design system."],
    marketingLessons: ["Sell the ritual, not the spec.", "Problem-aware copy outperforms feature copy.", "Parents buy outcomes."],
    takeaways: ["Single-product brands need single-minded sites.", "Emotional payoff beats spec sheets.", "Identity is experience."],
    metrics: [NO_DATA],
  },
  {
    id: "V-14", name: "Pela Case", country: "Canada", industry: "Eco Phone Accessories", url: "https://pelacase.com",
    overview: "An eco phone accessory brand that refuses to trade conversion for purpose — both run at full strength.",
    exceptional: "Doesn't trade conversion for purpose — runs both at full strength.",
    uiux: "Quick mobile flows, eco-positioning balanced with sharp ecommerce fundamentals.",
    navigation: "Device finder up top, eco story embedded across product pages.",
    homepage: "Device-finder UX above the fold. Eco story is shown through product, not separated.",
    conversion: "Device-finder UX removes friction. Recycling program creates returning purchase loops.",
    trust: "Recycling counters, certifications, customer photos.",
    checkout: "Fast, with recycling enrolment visible at checkout.",
    mobile: "Mobile-first device finder is the entire conversion mechanic.",
    designLessons: ["Mobile flow is the ecommerce flow.", "Eco messaging belongs inside the product page.", "Reduce decision friction with smart finders."],
    marketingLessons: ["Recycling programs create return triggers.", "Purpose and performance aren't opposites.", "Loop programs build LTV."],
    takeaways: ["Friction is the enemy of purpose-led commerce.", "Returning loops compound.", "Mobile is the brand."],
    metrics: [NO_DATA],
  },
  {
    id: "V-15", name: "Ocean Bottle", country: "United Kingdom", industry: "Reusables / Impact DTC", url: "https://oceanbottle.co",
    overview: "A reusable bottle brand where every action on the site has a counted consequence — buying feels like contributing.",
    exceptional: "Every action on the site has a counted consequence — buying feels like contributing.",
    uiux: "Purpose-led brand experience, every CTA tied to a measurable outcome.",
    navigation: "Impact equal to shop. Account is a contribution dashboard, not just an order list.",
    homepage: "Live impact tally, then product. Purpose precedes purchase without blocking it.",
    conversion: "Impact tracking gamifies repeat engagement post-purchase.",
    trust: "Verified collection partners, measurable outcomes, transparent impact reports.",
    checkout: "Impact contribution visible at cart and checkout — every line item has a consequence.",
    mobile: "Counters, dashboards, and impact tallies adapt cleanly on mobile.",
    designLessons: ["Measurable impact belongs in the UI.", "Dashboards make contribution feel real.", "Counters create accountability."],
    marketingLessons: ["Measurable impact > vague mission.", "Post-purchase engagement drives referrals.", "Gamify the contribution loop."],
    takeaways: ["Impact is a product feature.", "Accounts can be contribution dashboards.", "Purpose-led brands win on repeat behaviour."],
    metrics: [NO_DATA],
  },
];

export default function TheVault() {
  const [open, setOpen] = useState<VaultCase | null>(null);

  return (
    <section id="vault" className="section-padding relative">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mb-10">
          <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary mb-4">03 — The Vault</div>
          <h2 className="text-3xl md:text-6xl font-bold leading-[1.05] mb-5">
            Selected <span className="serif-italic text-gradient-cyan">case files.</span>
          </h2>
          <p className="text-muted-foreground md:text-lg">
            A curated reference library of world-class digital experiences. Swipe through, tap any card for the full breakdown — UI, UX, conversion, trust, mobile, and the lessons worth stealing.
          </p>
        </motion.div>

        <CaseCarousel cases={cases} onOpen={setOpen} />
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
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">CASE {open.id}</div>
                <button onClick={() => setOpen(null)} aria-label="Close" className="text-muted-foreground hover:text-foreground"><X size={18} /></button>
              </div>
              <div className="p-6 md:p-10">
                <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-2">{open.country} · {open.industry}</div>
                <h3 className="text-3xl md:text-4xl font-bold mb-3">{open.name}</h3>
                <p className="text-foreground/80 text-lg leading-relaxed mb-6">{open.overview}</p>

                <div className="flex flex-wrap gap-3 mb-8">
                  <a href={open.url} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-xs font-mono uppercase tracking-wider hover:glow-cyan transition">
                    Visit website <ExternalLink size={12} />
                  </a>
                  <a href={`mailto:alwaysonalowkey@gmail.com?subject=${encodeURIComponent(`New Project Inquiry — inspired by ${open.name}`)}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-mono uppercase tracking-wider hover:border-primary/40 transition">
                    <Mail size={12} /> Start something like this
                  </a>
                </div>

                <Field label="Why This Site Is Exceptional" body={<p>{open.exceptional}</p>} />
                <Field label="UI / UX Analysis" body={<p>{open.uiux}</p>} />
                <Field label="Navigation Analysis" body={<p>{open.navigation}</p>} />
                <Field label="Homepage Analysis" body={<p>{open.homepage}</p>} />
                <Field label="Conversion Strategy" body={<p>{open.conversion}</p>} />
                <Field label="Trust Signals" body={<p>{open.trust}</p>} />
                <Field label="Checkout Experience" body={<p>{open.checkout}</p>} />
                <Field label="Mobile Experience" body={<p>{open.mobile}</p>} />
                <Field label="Design Lessons" body={<List items={open.designLessons} />} />
                <Field label="Marketing Lessons" body={<List items={open.marketingLessons} />} />
                <Field label="Key Takeaways" body={<List items={open.takeaways} />} />
                <Field label="Performance Metrics" body={
                  <ul className="space-y-2">
                    {(open.metrics ?? [NO_DATA]).map((m, i) => (
                      <li key={i} className="text-foreground/70 italic">{m}</li>
                    ))}
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

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((l, i) => (
        <li key={i} className="flex gap-3"><span className="text-primary font-mono">→</span>{l}</li>
      ))}
    </ul>
  );
}

function CaseCarousel({ cases, onOpen }: { cases: VaultCase[]; onOpen: (c: VaultCase) => void }) {
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
          {cases.map((c) => (
            <CarouselItem key={c.id} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
              <button
                onClick={() => onOpen(c)}
                className="group relative glass rounded-xl p-6 text-left hover:border-primary/40 hover:glow-soft transition-all overflow-hidden w-full h-full min-h-[300px] flex flex-col"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">CASE {c.id}</div>
                  <Globe size={14} className="text-muted-foreground group-hover:text-primary transition" />
                </div>
                <div className="text-xl font-bold mb-1">{c.name}</div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-1">{c.country}</div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-primary/80 mb-4">{c.industry}</div>
                <p className="text-sm text-foreground/70 leading-relaxed mb-6 line-clamp-3 flex-1">{c.exceptional}</p>
                <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-primary opacity-70 group-hover:opacity-100 transition">
                  <FileText size={12} /> Open analysis <ArrowUpRight size={12} className="ml-auto" />
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

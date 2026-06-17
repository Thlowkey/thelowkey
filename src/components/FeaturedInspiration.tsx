import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

type Site = { name: string; url: string; country: string; highlight: string };

const sites: Site[] = [
  { name: "Hiut Denim Co.", url: "https://hiutdenim.co.uk", country: "United Kingdom", highlight: "Editorial storytelling that makes craft heritage feel modern and aspirational." },
  { name: "Maguire Shoes", url: "https://maguireshoes.com", country: "Canada", highlight: "Lookbook-style PDPs and confident typography that price the brand up, not down." },
  { name: "Tentree", url: "https://www.tentree.com", country: "Canada", highlight: "Mission-led navigation with impact data woven into the buying experience." },
  { name: "The Folklore Shop", url: "https://thefolklore.com", country: "United States", highlight: "Marketplace curation that feels like a magazine, not a feed." },
  { name: "No26 Design", url: "https://no26design.com", country: "Australia", highlight: "Studio site with elite restraint — pure typography, minimal motion, maximum signal." },
  { name: "Drink Puls", url: "https://drinkpuls.com", country: "United States", highlight: "Bold color blocking and functional benefits front-loaded above the fold." },
  { name: "Kicker NZ", url: "https://kickernz.co.nz", country: "New Zealand", highlight: "Tight category storytelling and confident voice-led copy across the funnel." },
  { name: "Perfumology SA", url: "https://perfumology.co.za", country: "South Africa", highlight: "Luxury fragrance experience with cinematic product reveals and editorial pacing." },
  { name: "Avojoy", url: "https://avojoy.org", country: "United States", highlight: "Playful brand system with structured PDPs that still convert seriously." },
  { name: "Designed Aesthetic", url: "https://designedaesthetic.com", country: "United Kingdom", highlight: "Studio portfolio with case-led narrative — outcomes over screenshots." },
  { name: "The Ridge Wallet", url: "https://ridge.com", country: "United States", highlight: "Benefit-stacked PDPs, video proof, and aggressive AOV mechanics done tastefully." },
  { name: "SURI Toothbrush", url: "https://www.trysuri.com", country: "United Kingdom", highlight: "Sustainability messaging integrated into product story without slowing conversion." },
  { name: "Kulala Sleep Lamp", url: "https://kulalaland.com.au", country: "Australia", highlight: "Single-product storytelling done right — clarity, ritual, and emotional payoff." },
  { name: "Pela Case", url: "https://pelacase.com", country: "Canada", highlight: "Eco-positioning balanced with sharp ecommerce fundamentals and quick mobile flows." },
  { name: "Ocean Bottle", url: "https://oceanbottle.co", country: "United Kingdom", highlight: "Purpose-led brand experience where every action has a measurable outcome attached." },
];

export default function FeaturedInspiration() {
  return (
    <section id="inspiration" className="section-padding pt-0 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="max-w-3xl mb-12"
        >
          <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary mb-5">Featured Inspiration & Experience</div>
          <h2 className="text-3xl md:text-5xl font-bold leading-[1.05] mb-5">
            Brands worth <span className="serif-italic text-gradient-cyan">studying.</span>
          </h2>
          <p className="text-muted-foreground md:text-lg">
            A curated reference shelf — premium digital experiences I admire, study, and pull principles from. Click any card to open the site in a new tab.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sites.map((s, i) => (
            <motion.a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: Math.min(i * 0.03, 0.3) }}
              className="group glass rounded-xl p-6 hover:border-primary/40 hover:glow-soft transition-all flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="text-lg font-bold">{s.name}</div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mt-1">{s.country}</div>
                </div>
                <ExternalLink size={14} className="text-muted-foreground group-hover:text-primary transition shrink-0" />
              </div>
              <p className="text-sm text-foreground/75 leading-relaxed flex-1">{s.highlight}</p>
              <div className="mt-5 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-primary opacity-80 group-hover:opacity-100 transition">
                Visit site
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Globe, Search, Target, Mail, Compass, LineChart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const categories = [
  {
    icon: Globe,
    title: "Website Design",
    blurb: "Premium websites engineered to convert, not just impress.",
    items: ["Custom Website Design", "Shopify Store Design", "Landing Page Design", "Conversion-Focused UX/UI", "Website Optimization"],
  },
  {
    icon: Search,
    title: "SEO",
    blurb: "Earn rankings that compound into a long-term revenue channel.",
    items: ["On-Page SEO", "Technical SEO", "Keyword Research", "Content Optimization", "Local SEO"],
  },
  {
    icon: Target,
    title: "Digital Advertising",
    blurb: "Performance ads designed around revenue, not vanity metrics.",
    items: ["Facebook Ads", "Instagram Ads", "Google Ads", "Retargeting Campaigns", "Conversion Tracking"],
  },
  {
    icon: Mail,
    title: "Email Marketing",
    blurb: "Lifecycle systems that turn first-time buyers into repeat revenue.",
    items: ["Email Automation", "Welcome Sequences", "Sales Campaigns", "Newsletter Systems", "Customer Retention Flows"],
  },
  {
    icon: Compass,
    title: "Brand Strategy",
    blurb: "Positioning that makes your brand the obvious choice in its category.",
    items: ["Brand Positioning", "Messaging Strategy", "Customer Journey Mapping", "Conversion Strategy"],
  },
  {
    icon: LineChart,
    title: "Marketing Consulting",
    blurb: "Strategic guidance for founders who need clarity, not opinions.",
    items: ["Funnel Audits", "Growth Strategy", "Customer Acquisition", "Revenue Optimization"],
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-background noise">
      <Navbar />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-10 font-mono uppercase tracking-wider">
            <ArrowLeft size={14} /> Back
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mb-16">
            <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary mb-5">What I Do</div>
            <h1 className="text-4xl md:text-6xl font-bold leading-[1.05] mb-6">
              Strategic services for <span className="serif-italic text-gradient-cyan">serious brands.</span>
            </h1>
            <p className="text-muted-foreground md:text-lg">
              Every engagement is built around one outcome: measurable growth. Below is the full scope of what I offer — pick the part that fits, or combine them into a full system.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="glass rounded-2xl p-7 hover:border-primary/40 transition group"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{c.title}</h3>
                  <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{c.blurb}</p>
                  <ul className="space-y-2">
                    {c.items.map(it => (
                      <li key={it} className="flex items-start gap-2 text-sm text-foreground/85">
                        <span className="text-primary mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="mt-20 glass-strong rounded-2xl p-10 md:p-14 text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Not sure where to <span className="serif-italic text-gradient-cyan">start?</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Send a short note about your business and what you want to grow. I'll come back with a clear recommendation — no pitch deck, no fluff.
            </p>
            <a
              href="mailto:alwaysonalowkey@gmail.com?subject=New%20Project%20Inquiry"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-primary text-primary-foreground text-xs font-mono uppercase tracking-wider hover:glow-cyan transition"
            >
              Start a conversation <ArrowRight size={14} />
            </a>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

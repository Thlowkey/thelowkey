import { motion } from "framer-motion";

const caseStudies = [
  {
    client: "TechFlow SaaS",
    problem: "Low trial-to-paid conversion on a $2M ARR platform",
    strategy: "Complete UX overhaul with conversion-focused landing pages and optimized onboarding flow",
    result: "+340% conversion rate",
    revenue: "$1.2M additional ARR",
  },
  {
    client: "Urban Fashion Co.",
    problem: "Struggling e-commerce store with high cart abandonment",
    strategy: "Redesigned checkout flow, implemented email recovery sequences and retargeting campaigns",
    result: "68% reduction in cart abandonment",
    revenue: "$2.5M in 12 months",
  },
  {
    client: "GreenLeaf Organics",
    problem: "Zero online presence, relying entirely on foot traffic",
    strategy: "Built SEO-optimized e-commerce site with content marketing and local SEO strategy",
    result: "+520% organic traffic",
    revenue: "$890K first year online",
  },
  {
    client: "Nexus Financial",
    problem: "Outdated brand failing to attract high-value clients",
    strategy: "Complete rebrand with authority-positioned website and LinkedIn thought leadership system",
    result: "3x qualified lead volume",
    revenue: "$4.2M in new contracts",
  },
];

const PortfolioSection = () => {
  return (
    <section id="results" className="section-padding bg-primary text-primary-foreground">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <p className="text-accent text-sm font-medium uppercase tracking-[0.25em] mb-6">Results</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Results That Speak Louder
            <br />
            Than <span className="serif-italic font-normal text-accent">Design.</span>
          </h2>
          <p className="text-primary-foreground/60 text-lg max-w-2xl">
            Every project starts with a problem. Here's how I've turned challenges into measurable growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.client}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-sm p-8 hover:bg-primary-foreground/10 transition-all duration-300"
            >
              <p className="text-accent text-sm font-medium uppercase tracking-wider mb-4">{study.client}</p>
              <p className="text-primary-foreground/60 text-sm mb-3"><strong className="text-primary-foreground/80">Challenge:</strong> {study.problem}</p>
              <p className="text-primary-foreground/60 text-sm mb-6"><strong className="text-primary-foreground/80">Strategy:</strong> {study.strategy}</p>
              <div className="flex items-baseline gap-6 pt-4 border-t border-primary-foreground/10">
                <div>
                  <div className="text-2xl font-heading font-bold text-accent">{study.result}</div>
                </div>
                <div>
                  <div className="text-lg font-heading font-bold text-primary-foreground">{study.revenue}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

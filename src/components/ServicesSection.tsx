import { motion } from "framer-motion";

const services = [
  {
    title: "Conversion-Focused Website Architecture",
    who: "Brands ready to turn their website into a revenue engine",
    problem: "Your site looks good but doesn't convert. Visitors leave without taking action.",
    transformation: "A strategically designed website that guides visitors toward conversion at every touchpoint.",
  },
  {
    title: "Revenue-Driven Funnel Systems",
    who: "Businesses scaling beyond referrals and word-of-mouth",
    problem: "You're leaving money on the table with no automated sales system.",
    transformation: "End-to-end funnel architecture that captures, nurtures, and converts leads on autopilot.",
  },
  {
    title: "Brand Authority Positioning",
    who: "Experts and founders ready to own their market",
    problem: "You're competing on price because your brand doesn't command premium perception.",
    transformation: "A brand identity and digital presence that positions you as the obvious choice.",
  },
  {
    title: "Performance Marketing Strategy",
    who: "Growth-stage businesses ready to scale profitably",
    problem: "You're spending on ads but can't track or optimize real ROI.",
    transformation: "Data-driven campaigns across SEO, paid, and social that deliver measurable, scalable growth.",
  },
  {
    title: "Full Digital Growth System",
    who: "Ambitious brands that want everything working together",
    problem: "Fragmented digital efforts with no cohesive strategy.",
    transformation: "An integrated ecosystem — brand, website, funnels, marketing — all designed to compound results.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <p className="text-accent text-sm font-medium uppercase tracking-[0.25em] mb-6">Services</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Not Services.{" "}
            <span className="serif-italic font-normal text-accent">Transformations.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            I don't sell deliverables. I solve problems that are costing you revenue.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group border border-border rounded-sm p-8 hover:border-accent/40 hover:bg-card/50 transition-all duration-300"
            >
              <h3 className="text-xl md:text-2xl font-heading font-bold mb-4 group-hover:text-accent transition-colors">{service.title}</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="text-accent text-xs uppercase tracking-wider mb-1">Who it's for</p>
                  <p className="text-muted-foreground">{service.who}</p>
                </div>
                <div>
                  <p className="text-accent text-xs uppercase tracking-wider mb-1">The problem</p>
                  <p className="text-muted-foreground">{service.problem}</p>
                </div>
                <div>
                  <p className="text-accent text-xs uppercase tracking-wider mb-1">The transformation</p>
                  <p className="text-foreground font-medium">{service.transformation}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

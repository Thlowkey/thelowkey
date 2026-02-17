import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Deep Discovery",
    desc: "I immerse myself in your business, market, and audience. No surface-level briefs — I need to understand the problem before I design the solution.",
  },
  {
    num: "02",
    title: "Strategy Mapping",
    desc: "Every design decision is backed by a strategic framework. I map the user journey, define conversion goals, and architect the experience before a single pixel is placed.",
  },
  {
    num: "03",
    title: "Experience Design",
    desc: "Where strategy becomes visual. I craft interfaces that feel intuitive and premium — every element intentional, every interaction purposeful.",
  },
  {
    num: "04",
    title: "Optimization & Testing",
    desc: "Launch is never the finish line. I test, measure, and refine based on real data to ensure maximum performance and conversion.",
  },
  {
    num: "05",
    title: "Scale & Growth",
    desc: "Once the foundation performs, I help you scale — expanding channels, optimizing spend, and compounding results over time.",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="section-padding bg-muted/40">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <p className="text-accent text-sm font-medium uppercase tracking-[0.25em] mb-6">Process</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            A Proven System.{" "}
            <span className="serif-italic font-normal text-accent">Not Guesswork.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Refined over 2,000+ projects. Every step exists because it drives results.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-8 mb-12 last:mb-0"
            >
              <div className="flex-shrink-0">
                <span className="text-3xl font-heading font-bold text-accent/40">{step.num}</span>
              </div>
              <div className="border-t border-border pt-4 flex-1">
                <h3 className="text-xl font-heading font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

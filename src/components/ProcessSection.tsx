import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Discover", desc: "I dive deep into your business, competitors, and target audience to understand your unique challenges." },
  { num: "02", title: "Strategize", desc: "I develop a comprehensive strategy tailored to your goals, timeline, and budget with clear KPIs." },
  { num: "03", title: "Design & Build", desc: "I create stunning, conversion-focused designs that reflect your brand and resonate with your audience." },
  { num: "04", title: "Launch", desc: "After rigorous testing and refinement, I launch your project with full support and monitoring." },
  { num: "05", title: "Scale", desc: "I continuously optimize and scale your digital presence to drive sustainable growth and max ROI." },
];

const ProcessSection = () => {
  return (
    <section id="process" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium uppercase tracking-wider mb-3">My Process</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">How I Work</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A proven 5-step process refined over 2,000+ successful projects.
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-6 mb-10 last:mb-0"
            >
              <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                <span className="text-primary font-heading font-bold">{step.num}</span>
              </div>
              <div className="pt-3">
                <h3 className="text-xl font-semibold mb-1">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

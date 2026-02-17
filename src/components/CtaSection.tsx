import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-10 md:p-16 text-center glow-primary"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Join 2,000+ clients who trust me to deliver exceptional results. Let's discuss how I can accelerate your growth.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:brightness-110 transition"
            >
              Start Your Project <ArrowRight size={18} />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border border-border text-foreground font-semibold hover:bg-secondary transition"
            >
              View My Work
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;

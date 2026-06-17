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
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Ready to build something
            <br />
            that <span className="serif-italic font-normal text-accent">performs</span> — not just looks good?
          </h2>
          <p className="text-muted-foreground text-lg mb-4 max-w-xl mx-auto">
            I work with a limited number of clients each quarter to make sure every project gets real strategic depth.
          </p>
          <p className="text-accent text-sm font-medium uppercase tracking-wider mb-10">
            Limited availability — serious inquiries only
          </p>
          <a
            href="mailto:alwaysonalowkey@gmail.com?subject=New%20Project%20Inquiry"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all tracking-wide text-lg"
          >
            Apply to work with me <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;

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
            Ready to Build Something
            <br />
            That <span className="serif-italic font-normal text-accent">Performs</span> — Not Just Looks Good?
          </h2>
          <p className="text-muted-foreground text-lg mb-4 max-w-xl mx-auto">
            I work with a limited number of clients each quarter to ensure every project gets the 
            strategic depth and attention it deserves.
          </p>
          <p className="text-accent text-sm font-medium uppercase tracking-wider mb-10">
            Limited availability — serious inquiries only
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-sm bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all tracking-wide text-lg"
          >
            Apply To Work With Me <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;

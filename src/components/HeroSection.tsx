import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />

      <div className="relative container mx-auto px-4 md:px-8 pt-32 pb-20">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-accent text-sm font-medium uppercase tracking-[0.25em] mb-8"
          >
            Digital Growth Architect
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8"
          >
            Designing Digital
            <br />
            Experiences That{" "}
            <span className="serif-italic font-normal text-accent">Quietly</span>
            <br />
            Dominate Markets.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed"
          >
            I build high-converting websites and revenue systems for brands that 
            refuse to blend in. Strategy meets design. Results follow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-start gap-4 mb-20"
          >
            <a
              href="mailto:alwaysonalowkey@gmail.com?subject=New%20Project%20Inquiry"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-sm bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all tracking-wide"
            >
              Work with me <ArrowRight size={18} />
            </a>
            <a
              href="#results"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-sm border border-foreground/20 text-foreground font-semibold hover:bg-foreground/5 transition-all tracking-wide"
            >
              View Case Studies
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap gap-8 md:gap-16 pt-12 border-t border-border/60"
          >
            <div>
              <div className="text-3xl md:text-4xl font-heading font-bold text-foreground">$15M<span className="text-accent">+</span></div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">Revenue Generated</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-heading font-bold text-foreground">2,000<span className="text-accent">+</span></div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">Clients Served</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-heading font-bold text-foreground">5<span className="text-accent">+</span></div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">Years of Impact</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

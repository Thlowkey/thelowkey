import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-accent text-sm font-medium uppercase tracking-[0.25em] mb-6">About</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-10 leading-tight">
              Most Websites Don't Fail
              <br />
              Because of{" "}
              <span className="serif-italic font-normal text-accent">Bad Design.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-6 text-muted-foreground leading-relaxed text-lg"
          >
            <p>
              They fail because of <strong className="text-foreground">no strategy.</strong> A beautiful website without a conversion framework 
              is just an expensive digital brochure. I learned this early — and it changed everything about how I work.
            </p>
            <p>
              I started Low Key with a simple belief: <strong className="text-foreground">design should drive revenue, not just admiration.</strong> Every 
              pixel I place, every word I write, every flow I architect is backed by marketing psychology, data, and years of 
              testing what actually converts.
            </p>
            <p>
              Over 5 years, I've worked with 2,000+ clients — from scrappy startups to established brands — generating 
              over $15M in measurable revenue. Not through hype. Through <strong className="text-foreground">quiet, relentless execution.</strong>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-16 grid sm:grid-cols-3 gap-8"
          >
            <div className="border-t-2 border-accent pt-6">
              <h3 className="font-heading text-xl font-bold mb-2">Philosophy</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Strategy first, design second. I don't decorate — I engineer digital experiences that convert.
              </p>
            </div>
            <div className="border-t-2 border-accent pt-6">
              <h3 className="font-heading text-xl font-bold mb-2">Approach</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Design + Psychology + Marketing. Every project gets the strategic depth agencies charge 10x for.
              </p>
            </div>
            <div className="border-t-2 border-accent pt-6">
              <h3 className="font-heading text-xl font-bold mb-2">Difference</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                You work directly with me. No hand-offs, no juniors. One strategist, fully invested in your growth.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

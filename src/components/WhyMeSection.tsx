import { motion } from "framer-motion";

const reasons = [
  {
    title: "You work directly with me.",
    desc: "No account managers. No hand-offs to juniors. I'm personally involved in every decision, every pixel, every strategy.",
  },
  {
    title: "Strategy drives every design decision.",
    desc: "I don't make things look pretty and hope for the best. Every element has a strategic purpose tied to your revenue goals.",
  },
  {
    title: "Data, not opinions.",
    desc: "My recommendations are backed by analytics, testing, and patterns from 2,000+ projects — not trendy guesswork.",
  },
  {
    title: "Long-term thinking.",
    desc: "I build systems that compound. Not quick fixes that unravel. Your investment should grow in value over time.",
  },
  {
    title: "Uncompromising standards.",
    desc: "I take limited projects per quarter because quality requires focus. If I take you on, you get my full attention.",
  },
];

const WhyMeSection = () => {
  return (
    <section className="section-padding bg-muted/40">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-accent text-sm font-medium uppercase tracking-[0.25em] mb-6">Why Me</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              An Investment.{" "}
              <span className="serif-italic font-normal text-accent">Not an Expense.</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mb-12">
              Agencies give you a team of strangers. I give you one strategist who's fully invested in your outcome.
            </p>
          </motion.div>

          <div className="space-y-6">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-accent mt-2.5" />
                <div>
                  <h3 className="font-heading text-lg font-bold mb-1">{r.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMeSection;

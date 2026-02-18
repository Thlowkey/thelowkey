import { motion } from "framer-motion";

const testimonials = [
  {
    text: "Working with Low Key completely restructured our ecommerce strategy. Within 6 months, our conversion rate increased by 47% and revenue scaled past seven figures. His approach isn't just design — it's calculated growth.",
    name: "Daniel M.",
    role: "Premium Apparel Brand Owner",
  },
  {
    text: "Low Key redesigned our Shopify store and rebuilt our entire funnel. In 90 days, our sales grew by 63%. The clarity in user flow and checkout optimization made an immediate difference.",
    name: "Sarah L.",
    role: "Skincare Founder",
  },
  {
    text: "We had traffic but no real performance. After implementing Low Key's strategy, our average order value increased by 38% and repeat purchases improved significantly.",
    name: "Victor A.",
    role: "Supplement Brand CEO",
  },
  {
    text: "Low Key thinks like a strategist, not a freelancer. Our website now communicates authority, and our bounce rate dropped by 29% within weeks.",
    name: "Amanda T.",
    role: "Business Coach",
  },
  {
    text: "From discovery to launch, every step was structured and intentional. We've generated over $1.2M in tracked revenue since the rebuild.",
    name: "James R.",
    role: "Home Decor Ecommerce Brand",
  },
  {
    text: "The difference between before and after working with Low Key is night and day. Our site now converts consistently and feels like a premium brand.",
    name: "Chloe W.",
    role: "DTC Jewelry Brand Founder",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding bg-card">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <p className="text-accent text-sm font-medium uppercase tracking-[0.25em] mb-6">Testimonials</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Don't Take My Word.{" "}
            <span className="serif-italic font-normal text-accent">Take Theirs.</span>
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`border border-border rounded-sm p-8 hover:border-accent/30 transition-all duration-300 ${i === 0 ? 'md:col-span-2' : ''}`}
            >
              <p className="text-foreground/80 leading-relaxed mb-6 text-sm md:text-base">"{t.text}"</p>
              <div className="border-t border-border pt-4">
                <p className="font-heading font-bold text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

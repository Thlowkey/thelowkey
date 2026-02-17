import { motion } from "framer-motion";

const testimonials = [
  {
    text: "Low Key didn't just redesign our website — he re-engineered our entire online revenue model. Within 90 days, our conversion rate jumped 340% and we added $1.2M in ARR. This isn't a designer. This is a growth strategist.",
    name: "Sarah Johnson",
    role: "CEO, TechFlow",
  },
  {
    text: "I've worked with agencies that charged 5x more and delivered a fraction of the results. Low Key understood our market better than our own team and built a brand presence that attracts exactly the right clients.",
    name: "Michael Chen",
    role: "Founder, GreenLeaf Organics",
  },
  {
    text: "Our Shopify store was bleeding money through cart abandonment. Low Key rebuilt the entire experience and implemented automated recovery flows. We went from struggling to $50K+ monthly revenue in under 6 months.",
    name: "Emily Rodriguez",
    role: "Owner, Artisan Coffee Co.",
  },
  {
    text: "The strategic depth was what set this apart. Every design decision had a reason. Every page had a purpose. Our lead quality improved by 3x because the website now pre-qualifies before they even contact us.",
    name: "David Park",
    role: "Managing Director, Nexus Financial",
  },
  {
    text: "Working with Low Key felt like having a CMO, designer, and strategist in one. He didn't just build what I asked for — he challenged my assumptions and built something that actually worked. Best investment I've made.",
    name: "Amara Osei",
    role: "Founder, Vitality Wellness",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding">
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
              transition={{ delay: i * 0.1 }}
              className={`border border-border rounded-sm p-8 ${i === 0 ? 'md:col-span-2' : ''}`}
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

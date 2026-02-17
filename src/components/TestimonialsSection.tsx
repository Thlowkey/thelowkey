import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Working with Low Key transformed our online presence completely. Our conversion rates increased by 340% within the first quarter.",
    name: "Sarah Johnson",
    role: "CEO, TechFlow",
  },
  {
    text: "The strategic approach to SEO and design resulted in a 5x increase in organic traffic. Truly exceptional work.",
    name: "Michael Chen",
    role: "Founder, GreenLeaf",
  },
  {
    text: "Professional, creative, and results-driven. Our Shopify store went from struggling to generating $50K+ monthly revenue.",
    name: "Emily Rodriguez",
    role: "Owner, Artisan Coffee",
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
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium uppercase tracking-wider mb-3">Testimonials</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">What My Clients Say</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Real results from real businesses.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass rounded-xl p-6"
            >
              <Quote className="text-primary/30 mb-4" size={28} />
              <p className="text-foreground/90 mb-6 leading-relaxed">"{t.text}"</p>
              <div>
                <p className="font-semibold text-sm">{t.name}</p>
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

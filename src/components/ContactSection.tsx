import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", business: "", service: "", budget: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const inputStyles = "w-full px-4 py-3.5 rounded-sm bg-background border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent transition-all";

  return (
    <section id="contact" className="section-padding bg-card">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-accent text-sm font-medium uppercase tracking-[0.25em] mb-6">Contact</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Let's Talk{" "}
              <span className="serif-italic font-normal text-accent">Growth.</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              Tell me about your project and I'll get back to you within 24 hours.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input name="name" placeholder="Your Name *" required value={form.name} onChange={handleChange} className={inputStyles} />
              <input name="email" type="email" placeholder="Email Address *" required value={form.email} onChange={handleChange} className={inputStyles} />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <input name="business" placeholder="Business / Brand Name" value={form.business} onChange={handleChange} className={inputStyles} />
              <select name="service" value={form.service} onChange={handleChange} className={inputStyles}>
                <option value="">What do you need? *</option>
                <option>Conversion-Focused Website</option>
                <option>Revenue Funnel System</option>
                <option>Brand Authority Positioning</option>
                <option>Performance Marketing</option>
                <option>Full Digital Growth System</option>
              </select>
            </div>
            <select name="budget" value={form.budget} onChange={handleChange} className={inputStyles}>
              <option value="">Investment Range *</option>
              <option>$500 – $2,000</option>
              <option>$2,000 – $5,000</option>
              <option>$5,000 – $10,000</option>
              <option>$10,000+</option>
            </select>
            <textarea name="message" placeholder="Tell me about your project, goals, and timeline..." rows={5} value={form.message} onChange={handleChange} className={`${inputStyles} resize-none`} />
            <button type="submit" className="inline-flex items-center gap-2 px-10 py-4 rounded-sm bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-all tracking-wide">
              Submit Inquiry <ArrowRight size={18} />
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 pt-8 border-t border-primary-foreground/10 flex items-center gap-3"
          >
            <Mail size={16} className="text-accent" />
            <span className="text-muted-foreground text-sm">Or reach me directly at <strong className="text-foreground">hello@lowkey.design</strong></span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

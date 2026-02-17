import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", business: "", service: "", budget: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary text-sm font-medium uppercase tracking-wider mb-3">Get In Touch</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Let's Build Something Amazing</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Ready to transform your digital presence? Reach out and let's discuss your project.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass rounded-xl p-5 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="text-primary" size={18} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Email me at</p>
                <p className="font-medium text-sm">hello@lowkey.design</p>
              </div>
            </div>
            <div className="glass rounded-xl p-5 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="text-primary" size={18} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Call me at</p>
                <p className="font-medium text-sm">+1 (234) 567-890</p>
              </div>
            </div>
            <div className="glass rounded-xl p-5 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="text-primary" size={18} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Based in</p>
                <p className="font-medium text-sm">Available Worldwide</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 glass rounded-xl p-6 space-y-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input name="name" placeholder="Full Name *" required value={form.name} onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
              <input name="email" type="email" placeholder="Email Address *" required value={form.email} onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <input name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
              <input name="business" placeholder="Business Name" value={form.business} onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <select name="service" value={form.service} onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary">
                <option value="">Service Interested In *</option>
                <option>Website Design</option>
                <option>E-commerce Store</option>
                <option>SEO Optimization</option>
                <option>Digital Marketing</option>
                <option>Branding</option>
                <option>Conversion Optimization</option>
              </select>
              <select name="budget" value={form.budget} onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary">
                <option value="">Budget Range *</option>
                <option>$100 – $300</option>
                <option>$300 – $700</option>
                <option>$700 – $1,500</option>
                <option>$1,500+</option>
              </select>
            </div>
            <textarea name="message" placeholder="Tell me about your project" rows={4} value={form.message} onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none" />
            <button type="submit" className="w-full py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:brightness-110 transition">
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";

const EMAIL = "alwaysonalowkey@gmail.com";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `New Portfolio Inquiry from ${form.name || "Visitor"}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const inputStyles = "w-full px-4 py-3.5 rounded-lg bg-background/60 border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-all";

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary mb-4">Contact</div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-[1.05]">
              Let's talk <span className="serif-italic text-gradient-cyan">growth.</span>
            </h2>
            <p className="text-muted-foreground md:text-lg">
              Fill this in and hit submit — it will open your email app with everything pre-filled. Send it from there and it lands directly in my inbox.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
            onSubmit={handleSubmit}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input name="name" placeholder="Your Name" required value={form.name} onChange={handleChange} className={inputStyles} />
              <input name="email" type="email" placeholder="Your Email" required value={form.email} onChange={handleChange} className={inputStyles} />
            </div>
            <textarea name="message" placeholder="Tell me about your project, goals, and timeline…" required rows={6} value={form.message} onChange={handleChange} className={`${inputStyles} resize-none`} />
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground text-xs font-mono uppercase tracking-wider hover:glow-cyan transition"
            >
              Submit Inquiry <ArrowRight size={14} />
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-10 flex items-center gap-3 text-sm text-muted-foreground"
          >
            <Mail size={16} className="text-primary" />
            Prefer email? Reach me directly at{" "}
            <a href={`mailto:${EMAIL}`} className="text-foreground font-medium hover:text-primary transition">{EMAIL}</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

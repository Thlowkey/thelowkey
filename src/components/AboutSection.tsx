import { motion } from "framer-motion";
import { Target, Heart, Lightbulb, Award } from "lucide-react";

const values = [
  { icon: Target, title: "Results-Driven", desc: "Every strategy is backed by data and focused on measurable outcomes." },
  { icon: Heart, title: "Client-Centric", desc: "Your success is my success. I become an extension of your team." },
  { icon: Lightbulb, title: "Innovation First", desc: "I stay ahead of trends to give you a competitive edge." },
  { icon: Award, title: "Excellence", desc: "I don't compromise on quality. Every detail matters." },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="text-primary text-sm font-medium uppercase tracking-wider mb-3">About Me</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Your Digital Growth Partner</h2>
          <p className="text-muted-foreground leading-relaxed">
            I'm a certified digital marketer and website designer with over 5 years of experience helping businesses thrive online.
            I've worked with over 2,000 clients and generated more than $15,000,000 in revenue for my clients.
            From startups to established brands, I deliver strategies and designs that produce real, measurable results.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-xl p-5 text-center"
            >
              <div className="w-10 h-10 mx-auto rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <v.icon className="text-primary" size={20} />
              </div>
              <h3 className="font-semibold mb-1">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

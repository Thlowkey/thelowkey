import { motion } from "framer-motion";
import { Globe, TrendingUp, Search, Share2, Mail, Palette } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Design & Development",
    description: "Custom, conversion-focused websites built with cutting-edge technologies that captivate your audience and drive results.",
    tags: ["Custom Development", "Responsive Design", "CMS Integration", "E-commerce"],
  },
  {
    icon: TrendingUp,
    title: "Conversion Rate Optimization",
    description: "Data-driven strategies to turn more visitors into customers through A/B testing, analytics, and UX improvements.",
    tags: ["A/B Testing", "Heat Map Analysis", "User Research", "Funnel Optimization"],
  },
  {
    icon: Search,
    title: "SEO & Google Ads",
    description: "Dominate search rankings and drive qualified traffic with technical SEO and high-performance ad campaigns.",
    tags: ["Technical SEO", "Content Strategy", "PPC Management", "Local SEO"],
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Engaging campaigns that build communities and drive meaningful conversions across all major platforms.",
    tags: ["Content Creation", "Paid Social", "Community Management", "Strategy"],
  },
  {
    icon: Mail,
    title: "Email Marketing & Automation",
    description: "Smart email flows and automation sequences that nurture leads and drive repeat purchases at scale.",
    tags: ["Email Strategy", "Flow Automation", "Segmentation", "A/B Testing"],
  },
  {
    icon: Palette,
    title: "Branding & Creative Strategy",
    description: "Distinctive visual identities that resonate with your audience and stand out in crowded markets.",
    tags: ["Brand Identity", "Logo Design", "Style Guides", "Creative Direction"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium uppercase tracking-wider mb-3">What I Do</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Services That Drive Results</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            End-to-end digital solutions that transform your vision into reality and accelerate business growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-xl p-6 hover:border-primary/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition">
                <service.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

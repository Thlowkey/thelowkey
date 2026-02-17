import { useState } from "react";
import { motion } from "framer-motion";

const categories = ["All", "Web Design", "E-commerce", "Marketing", "Branding"];

const projects = [
  {
    title: "TechFlow SaaS Platform",
    category: "Web Design",
    metric: "+340%",
    metricLabel: "Conversion Rate",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
  },
  {
    title: "Urban Fashion Store",
    category: "E-commerce",
    metric: "$2.5M",
    metricLabel: "Revenue Generated",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
  },
  {
    title: "GreenLeaf Organics",
    category: "Marketing",
    metric: "+520%",
    metricLabel: "Organic Traffic",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=600&fit=crop",
  },
  {
    title: "Nexus Financial",
    category: "Branding",
    metric: "150K+",
    metricLabel: "Brand Impressions",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
  },
  {
    title: "FitLife App",
    category: "Web Design",
    metric: "+85%",
    metricLabel: "User Engagement",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
  },
  {
    title: "Artisan Coffee Co.",
    category: "E-commerce",
    metric: "+280%",
    metricLabel: "Online Sales",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop",
  },
];

const PortfolioSection = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary text-sm font-medium uppercase tracking-wider mb-3">My Work</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Case Studies</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Explore how I've helped brands achieve extraordinary results.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                active === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-xl overflow-hidden group cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                  {project.metric}
                </div>
              </div>
              <div className="p-5">
                <span className="text-xs text-primary uppercase tracking-wider">{project.category}</span>
                <h3 className="text-lg font-semibold mt-1">{project.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{project.metricLabel}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

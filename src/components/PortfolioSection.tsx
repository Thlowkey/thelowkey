import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    name: "Ugmonk",
    url: "https://ugmonk.com",
    review: "Ugmonk delivers a masterclass in minimalist ecommerce design. The homepage immediately establishes premium quality through spacious layouts, muted color palettes, and precise typography. Navigation is simple yet intentional, allowing users to explore products without cognitive overload. The product pages use strong imagery, subtle animations, and frictionless checkout flow to reinforce trust and clarity.",
    takeaways: [
      "Exceptional use of whitespace for premium perception",
      "Strong visual hierarchy with bold product focus",
      "Smooth micro-interactions that enhance experience",
      "Clean product page layout with clear CTAs",
      "Elegant typography system that supports brand authority",
    ],
  },
  {
    name: "Haus",
    url: "https://drink.haus",
    review: "Haus combines lifestyle storytelling with conversion psychology seamlessly. The hero section communicates brand identity within seconds, while the product grid layout keeps browsing intuitive. The checkout experience is fast and distraction-free. Strategic placement of testimonials and press mentions strengthens credibility without cluttering the design.",
    takeaways: [
      "Emotion-driven hero imagery",
      "Clear product segmentation",
      "Balanced typography and color usage",
      "Strong trust-building elements",
      "Seamless mobile responsiveness",
    ],
  },
  {
    name: "Pela Case",
    url: "https://pelacase.com",
    review: "Pela Case demonstrates how sustainability branding can be executed without sacrificing performance. The site uses clear messaging, persuasive eco-benefit highlights, and easy navigation filters. Product discovery is effortless due to structured categories and intuitive UX patterns. Social proof is strategically integrated into the buyer journey.",
    takeaways: [
      "Conversion-focused eco storytelling",
      "Smart use of icons and benefit highlights",
      "Optimized product filtering system",
      "High-performing CTA placement",
      "Clear value proposition above the fold",
    ],
  },
  {
    name: "Ridge",
    url: "https://ridge.com",
    review: "Ridge executes bold simplicity. The dark aesthetic, confident typography, and product-first design create immediate impact. The navigation is streamlined, ensuring users move quickly toward product selection. Strong trust indicators, reviews, and benefit-driven copy push the experience toward conversion without unnecessary friction.",
    takeaways: [
      "Strong, masculine brand consistency",
      "Clear benefit-driven product copy",
      "Sticky CTAs for improved conversion",
      "High-impact hero visuals",
      "Performance-optimized layout structure",
    ],
  },
  {
    name: "Hemlock & Oak",
    url: "https://www.hemlockandoak.com",
    review: "Hemlock & Oak blends editorial elegance with ecommerce performance. The clean typography and structured content blocks create a calm, premium atmosphere. The site excels in storytelling while maintaining strong product visibility. Its mobile experience feels intentional and smooth, reinforcing professionalism.",
    takeaways: [
      "Editorial-inspired layout",
      "Soft color palette with premium feel",
      "Strong storytelling integration",
      "Thoughtful spacing and alignment",
      "Conversion-optimized product descriptions",
    ],
  },
  {
    name: "Kulala",
    url: "https://kulala.co",
    review: "Kulala leverages psychological triggers effectively. The homepage balances education and persuasion through structured sections that guide the visitor logically. Benefit-driven headlines, FAQ placement, and subtle animations create a smooth buying journey. The site feels data-informed and conversion-aware.",
    takeaways: [
      "Clear problem–solution positioning",
      "Strategic FAQ placement",
      "Strong CTA repetition",
      "Informative yet minimal product sections",
      "Optimized flow from awareness to purchase",
    ],
  },
];

const PortfolioSection = () => {
  return (
    <section id="results" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <p className="text-accent text-sm font-medium uppercase tracking-[0.25em] mb-6">Past Projects</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Strategic Design.{" "}
            <span className="serif-italic font-normal text-accent">Measurable Impact.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            A selection of projects where design thinking met conversion strategy — delivering results that matter.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="border border-border rounded-sm p-8 md:p-10 hover:border-accent/30 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold group-hover:text-accent transition-colors">
                    {project.name}
                  </h3>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-accent transition-colors mt-1"
                  >
                    {project.url.replace("https://", "").replace("www.", "")}
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-8 text-sm md:text-base">
                {project.review}
              </p>

              <div>
                <p className="text-accent text-xs uppercase tracking-[0.2em] font-medium mb-4">Design Takeaways</p>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-2">
                  {project.takeaways.map((t) => (
                    <div key={t} className="flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <p className="text-foreground/70 text-sm">{t}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

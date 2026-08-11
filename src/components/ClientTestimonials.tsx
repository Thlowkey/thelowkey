import { motion } from "framer-motion";
import { Star, Quote, ArrowRight } from "lucide-react";

type Review = {
  name: string;
  role: string;
  location: string;
  text: string;
};

const featured: Review = {
  name: "Sarah Mitchell",
  role: "E-commerce Founder",
  location: "United Kingdom",
  text: "Low Key completely changed the way I looked at my store. The design wasn't just beautiful — it actually made the customer journey much clearer. I finally had a website that felt like it represented the quality of my brand.",
};

const reviews: Review[] = [
  {
    name: "Daniel Carter",
    role: "Online Store Owner",
    location: "United States",
    text: "What stood out to me was the strategy behind the work. Low Key didn't just redesign my website and disappear. He took the time to understand what wasn't working and explained exactly what needed to change.",
  },
  {
    name: "Amara Williams",
    role: "Beauty Brand Owner",
    location: "Canada",
    text: "I came in expecting a website redesign, but I got much more than that. The attention to detail, communication and understanding of my brand were impressive. Everything feels more professional now.",
  },
  {
    name: "Michael Anderson",
    role: "E-commerce Entrepreneur",
    location: "Australia",
    text: "The biggest difference was how seriously Low Key approached the project. Every recommendation had a reason behind it. I never felt like I was just being sold another service.",
  },
  {
    name: "Sophia Bennett",
    role: "Digital Business Owner",
    location: "Germany",
    text: "From our first conversation, Low Key understood what I was trying to achieve. The final result was clean, modern and much closer to the vision I had in my head. The entire process felt professional.",
  },
  {
    name: "David Johnson",
    role: "Founder",
    location: "United States",
    text: "I've worked with several freelancers before, but the combination of design and marketing strategy made this experience different. Low Key wasn't only thinking about how the website looked, but how it could actually support the business.",
  },
];

const initials = (n: string) =>
  n.split(" ").map((p) => p[0]).slice(0, 2).join("");

const Stars = ({ size = 13 }: { size?: number }) => (
  <div className="flex items-center gap-0.5" role="img" aria-label="Rated 5 out of 5">
    {Array.from({ length: 5 }).map((_, i) => (
      <motion.span
        key={i}
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05 * i, duration: 0.25 }}
      >
        <Star size={size} className="fill-primary text-primary" />
      </motion.span>
    ))}
  </div>
);

const Avatar = ({ name, large = false }: { name: string; large?: boolean }) => (
  <div
    aria-hidden="true"
    className={`${large ? "h-14 w-14 text-sm" : "h-10 w-10 text-[11px]"} shrink-0 rounded-full grid place-items-center font-mono uppercase tracking-widest bg-primary/10 text-primary border border-primary/25 transition-all duration-300 group-hover:bg-primary/20 group-hover:border-primary/50`}
  >
    {initials(name)}
  </div>
);

const Meta = ({ r, large = false }: { r: Review; large?: boolean }) => (
  <div className="flex items-center gap-3">
    <Avatar name={r.name} large={large} />
    <div className="min-w-0">
      <div className={`font-semibold ${large ? "text-base" : "text-sm"} text-foreground`}>{r.name}</div>
      <div className="text-xs text-muted-foreground truncate">
        {r.role} · {r.location}
      </div>
    </div>
  </div>
);

export default function ClientTestimonials() {
  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-primary/5 blur-[140px] pointer-events-none" />

      <div className="container mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="max-w-2xl mb-10 md:mb-14"
        >
          <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary mb-4">Testimonials</div>
          <h2 className="text-3xl md:text-5xl font-bold leading-[1.05] mb-4">
            Real People. <span className="serif-italic font-normal text-accent">Real Experiences.</span>
          </h2>
          <p className="text-muted-foreground md:text-lg">
            Good work speaks for itself. Here's what some of the people I've worked with have to say about their
            experience with Low Key.
          </p>
        </motion.div>

        <div className="grid gap-4 md:gap-5 lg:grid-cols-3">
          {/* Featured */}
          <motion.figure
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="group lg:col-span-2 lg:row-span-2 glass rounded-2xl p-7 md:p-10 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-primary/30"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">Client Experience</span>
                <Quote size={26} className="text-primary/30" />
              </div>
              <blockquote className="text-lg md:text-2xl leading-relaxed text-foreground/90 font-light">
                “{featured.text}”
              </blockquote>
            </div>
            <figcaption className="mt-8 flex flex-wrap items-center justify-between gap-4">
              <Meta r={featured} large />
              <Stars size={15} />
            </figcaption>
          </motion.figure>

          {reviews.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 * (i + 1) }}
              className={`group glass rounded-2xl p-6 md:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 ${
                i === 3 ? "lg:col-span-2" : ""
              }`}
            >
              <div>
                <Stars />
                <blockquote className="mt-4 text-sm md:text-[15px] leading-relaxed text-foreground/80">
                  “{r.text}”
                </blockquote>
              </div>
              <figcaption className="mt-6">
                <Meta r={r} />
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-base md:text-lg text-foreground/90">
            Built around strategy. <span className="serif-italic text-accent">Delivered with intention.</span>
          </p>
          <p className="mt-3 font-mono text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            UI/UX Design · Shopify · E-commerce · Digital Strategy · Growth
          </p>

          <div className="mt-10">
            <p className="text-sm text-muted-foreground mb-4">Ready to build something better?</p>
            <a
              href="#final"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground text-xs font-mono uppercase tracking-wider hover:glow-cyan transition"
            >
              Use Low Key <ArrowRight size={14} />
            </a>
          </div>

          <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/50">
            Sample reviews shown for design purposes
          </p>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Clock } from "lucide-react";
import { articles } from "@/data/articles";

export default function InsightsBlog() {
  return (
    <section id="insights" className="section-padding relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-12 gap-6 flex-wrap"
        >
          <div className="max-w-2xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary mb-3">Insights & Articles</div>
            <h2 className="text-3xl md:text-5xl font-bold leading-[1.05]">
              Field notes on <span className="serif-italic text-gradient-cyan">growth.</span>
            </h2>
          </div>
          <div className="text-sm text-muted-foreground max-w-sm">
            Working principles, opinionated takes, and lessons pulled from real client work.
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {articles.map((a, i) => (
            <motion.article
              key={a.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: Math.min(i * 0.06, 0.3) }}
              className="glass rounded-2xl overflow-hidden hover:border-primary/40 transition group flex flex-col"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img src={a.image} alt={a.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-3">
                  <span className="text-primary">{a.category}</span>
                  <span className="flex items-center gap-1"><Clock size={10} />{a.readTime}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 leading-snug">{a.title}</h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed flex-1">{a.excerpt}</p>
                <Link
                  to={`/blog/${a.slug}`}
                  className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.3em] text-primary group-hover:gap-3 transition-all"
                >
                  Read more <ArrowUpRight size={14} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getArticle } from "@/data/articles";

export default function BlogArticle() {
  const { slug } = useParams();
  const article = slug ? getArticle(slug) : undefined;
  if (!article) return <Navigate to="/" replace />;

  return (
    <div className="min-h-screen bg-background noise">
      <Navbar />
      <main className="pt-28 pb-20">
        <article className="container mx-auto px-4 md:px-8 max-w-3xl">
          <Link to="/#insights" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 font-mono uppercase tracking-wider">
            <ArrowLeft size={14} /> All articles
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary mb-4">{article.category}</div>
            <h1 className="text-3xl md:text-5xl font-bold leading-[1.1] mb-6">{article.title}</h1>
            <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-wider text-muted-foreground mb-8">
              <span>{article.date}</span>
              <span className="flex items-center gap-1.5"><Clock size={12} />{article.readTime}</span>
            </div>
            <img src={article.image} alt={article.title} className="w-full aspect-[16/9] object-cover rounded-2xl mb-10" loading="lazy" />
          </motion.div>

          <div className="prose-custom space-y-8 text-foreground/90 leading-relaxed">
            <p className="text-lg md:text-xl text-foreground/85">{article.intro}</p>

            {article.sections.map(s => (
              <section key={s.heading}>
                <h2 className="text-2xl md:text-3xl font-bold mb-3">{s.heading}</h2>
                <p>{s.body}</p>
              </section>
            ))}

            <section className="glass rounded-2xl p-7">
              <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary mb-4">Key Takeaways</div>
              <ul className="space-y-3">
                {article.takeaways.map(t => (
                  <li key={t} className="flex gap-3"><span className="text-primary font-mono">→</span>{t}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Conclusion</h2>
              <p>{article.conclusion}</p>
            </section>
          </div>

          <div className="mt-14 glass-strong rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-3">Want this applied to your business?</h3>
            <p className="text-muted-foreground mb-6">Send me a note. I'll respond personally.</p>
            <a
              href={`mailto:alwaysonalowkey@gmail.com?subject=${encodeURIComponent("New Project Inquiry — " + article.title)}`}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-primary text-primary-foreground text-xs font-mono uppercase tracking-wider hover:glow-cyan transition"
            >
              Start a conversation <ArrowRight size={14} />
            </a>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}

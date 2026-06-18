import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Clock } from "lucide-react";
import { articles } from "@/data/articles";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

export default function InsightsBlog() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    const onSel = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSel);
    api.on("reInit", () => { setCount(api.scrollSnapList().length); onSel(); });
    return () => { api.off("select", onSel); };
  }, [api]);

  return (
    <section id="insights" className="section-padding relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-10 gap-6 flex-wrap"
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

        <div className="relative">
          <Carousel setApi={setApi} opts={{ align: "start", loop: false }} className="w-full">
            <CarouselContent className="-ml-5">
              {articles.map((a) => (
                <CarouselItem key={a.slug} className="pl-5 basis-full md:basis-1/2 lg:basis-1/3">
                  <article className="glass rounded-2xl overflow-hidden hover:border-primary/40 transition group flex flex-col h-full">
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
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4 lg:-left-12" />
            <CarouselNext className="hidden md:flex -right-4 lg:-right-12" />
          </Carousel>

          <div className="mt-8 flex items-center justify-center gap-2">
            {Array.from({ length: count }).map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => api?.scrollTo(i)}
                className={`h-1.5 rounded-full transition-all ${i === current ? "bg-primary w-6" : "bg-foreground/20 w-1.5 hover:bg-foreground/40"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Brain, Send, Sparkles } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const suggestions = [
  "Can you redesign my website?",
  "Can you help me get more Shopify sales?",
  "Do you handle SEO and lead gen?",
  "How do we start working together?",
];

type Msg = { role: "user" | "assistant"; content: string };

export default function LiveBrain() {
  const [q, setQ] = useState("");
  const [history, setHistory] = useState<Msg[]>([]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [history, loading]);

  const ask = async (question: string) => {
    if (!question.trim() || loading) return;
    const next: Msg[] = [...history, { role: "user", content: question }];
    setHistory(next);
    setQ("");
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("live-brain", {
        body: { question, history: next.slice(0, -1) },
      });
      if (error) throw error;
      if (data?.error) throw new Error(data.error);
      setHistory([...next, { role: "assistant", content: data?.answer ?? "No response." }]);
    } catch (e: any) {
      toast.error(e.message || "I'm offline for a sec. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="brain" className="section-padding relative grid-bg">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[140px] pointer-events-none" />
      <div className="container mx-auto relative">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mb-12">
          <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary mb-5">// 04 — Talk to Low Key</div>
          <h2 className="text-4xl md:text-6xl font-bold leading-[1.05] mb-6">
            Ask me anything. <span className="serif-italic text-gradient-cyan">I'll reply.</span>
          </h2>
          <p className="text-muted-foreground md:text-lg">
            This is me — not a chatbot. Ask about your site, your funnel, your launch, or whether we should work together. I'll answer like I would on a call.
          </p>
        </motion.div>

        <div className="max-w-3xl glass-strong rounded-2xl overflow-hidden">
          <div className="flex items-center justify-between px-6 py-3 bg-background/40">
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              <span className="relative flex w-2 h-2">
                <span className="absolute inset-0 rounded-full bg-primary pulse-ring" />
                <span className="relative rounded-full bg-primary w-2 h-2" />
              </span>
              Low Key · online
            </div>
            <Brain size={14} className="text-primary" />
          </div>

          <form onSubmit={(e) => { e.preventDefault(); ask(q); }} className="p-6">
            <div className="relative">
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Type your message..."
                className="w-full bg-background/60 border border-border/60 rounded-xl pl-4 pr-14 py-4 text-base focus:outline-none focus:border-primary/60 focus:glow-cyan transition"
                disabled={loading}
              />
              <button
                type="submit"
                disabled={loading || !q.trim()}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center disabled:opacity-40 hover:glow-cyan transition"
              >
                {loading ? <Sparkles size={16} className="animate-spin" /> : <Send size={16} />}
              </button>
            </div>

            {history.length === 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {suggestions.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => ask(s)}
                    className="text-xs px-3 py-1.5 rounded-full border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/40 transition"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </form>

          {(loading || history.length > 0) && (
            <div ref={scrollRef} className="p-6 bg-background/30 space-y-4 max-h-[520px] overflow-y-auto">
              {history.map((m, i) => (
                <div key={i} className={m.role === "user" ? "flex justify-end" : "flex justify-start"}>
                  <div className={`max-w-[85%] rounded-xl px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap ${m.role === "user" ? "bg-primary/15 text-foreground" : "glass text-foreground/90"}`}>
                    {m.role === "assistant" && (
                      <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-primary mb-1.5">Low Key</div>
                    )}
                    {m.content}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="font-mono text-xs text-muted-foreground">Low Key is typing<span className="blink">_</span></div>
              )}
              {!loading && history.length > 0 && history[history.length - 1].role === "assistant" && (
                <div className="pt-2">
                  <a
                    href="mailto:alwaysonalowkey@gmail.com?subject=New%20Project%20Inquiry"
                    className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-primary hover:underline"
                  >
                    → Continue this over email
                  </a>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

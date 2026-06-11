import { useState } from "react";
import { motion } from "framer-motion";
import { Brain, Send, Sparkles } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const suggestions = [
  "How would you improve my website?",
  "How would you increase my Shopify sales?",
  "What mistakes do most businesses make?",
  "What makes a website actually convert?",
];

export default function LiveBrain() {
  const [q, setQ] = useState("");
  const [answer, setAnswer] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const ask = async (question: string) => {
    if (!question.trim() || loading) return;
    setLoading(true);
    setAnswer(null);
    try {
      const { data, error } = await supabase.functions.invoke("live-brain", { body: { question } });
      if (error) throw error;
      if (data?.error) throw new Error(data.error);
      setAnswer(data?.answer ?? "No response.");
    } catch (e: any) {
      toast.error(e.message || "The Brain is offline. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="brain" className="section-padding relative grid-bg">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[140px] pointer-events-none" />
      <div className="container mx-auto relative">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mb-12">
          <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary mb-5">// 04 — Live Brain</div>
          <h2 className="text-4xl md:text-6xl font-bold leading-[1.05] mb-6">
            Ask me anything. <span className="serif-italic text-gradient-cyan">Right now.</span>
          </h2>
          <p className="text-muted-foreground md:text-lg">A direct interface to how I think about websites, conversion, and growth. No funnels. No gatekeeping.</p>
        </motion.div>

        <div className="max-w-3xl glass-strong rounded-2xl overflow-hidden">
          <div className="flex items-center justify-between px-6 py-3 border-b border-border/60 bg-background/40">
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              <span className="relative flex w-2 h-2">
                <span className="absolute inset-0 rounded-full bg-primary pulse-ring" />
                <span className="relative rounded-full bg-primary w-2 h-2" />
              </span>
              Brain.online
            </div>
            <Brain size={14} className="text-primary" />
          </div>

          <form onSubmit={e => { e.preventDefault(); ask(q); }} className="p-6">
            <div className="relative">
              <input
                value={q}
                onChange={e => setQ(e.target.value)}
                placeholder="Type your question..."
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

            <div className="flex flex-wrap gap-2 mt-4">
              {suggestions.map(s => (
                <button
                  key={s}
                  type="button"
                  onClick={() => { setQ(s); ask(s); }}
                  className="text-xs px-3 py-1.5 rounded-full border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/40 transition"
                >
                  {s}
                </button>
              ))}
            </div>
          </form>

          {(loading || answer) && (
            <div className="border-t border-border/60 p-6 bg-background/30">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-3">// Response</div>
              {loading ? (
                <div className="font-mono text-sm text-muted-foreground">
                  <div>&gt; processing query...</div>
                  <div>&gt; consulting 2,000+ engagements...</div>
                  <div>&gt; composing answer<span className="blink">_</span></div>
                </div>
              ) : (
                <div className="text-foreground/90 leading-relaxed whitespace-pre-wrap">{answer}</div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

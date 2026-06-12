import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Zap, AlertTriangle, TrendingUp, Lightbulb, Loader2, ArrowRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

type Insight = { title: string; severity: "critical" | "warning" | "opportunity"; detail: string };
type Result = {
  scores: { firstImpression: number; trust: number; conversion: number; mobile: number; ux: number; salesOpportunities: number };
  summary: string;
  insights: Insight[];
};

const scoreLabels: Record<keyof Result["scores"], string> = {
  firstImpression: "First Impression",
  trust: "Trust",
  conversion: "Conversion",
  mobile: "Mobile",
  ux: "User Experience",
  salesOpportunities: "Sales Opportunities",
};

function Gauge({ value, label, delay }: { value: number; label: string; delay: number }) {
  const color = value >= 75 ? "text-primary" : value >= 50 ? "text-yellow-400" : "text-red-400";
  const stroke = value >= 75 ? "hsl(189 94% 55%)" : value >= 50 ? "hsl(48 96% 60%)" : "hsl(0 84% 60%)";
  const r = 36; const c = 2 * Math.PI * r;
  return (
    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay }} className="glass rounded-2xl p-5 flex items-center gap-4">
      <div className="relative w-20 h-20 shrink-0">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 80 80">
          <circle cx="40" cy="40" r={r} stroke="hsl(222 30% 16%)" strokeWidth="6" fill="none" />
          <motion.circle
            cx="40" cy="40" r={r} stroke={stroke} strokeWidth="6" fill="none" strokeLinecap="round"
            strokeDasharray={c}
            initial={{ strokeDashoffset: c }}
            animate={{ strokeDashoffset: c - (c * value) / 100 }}
            transition={{ duration: 1.2, delay: delay + 0.2, ease: "easeOut" }}
          />
        </svg>
        <div className={`absolute inset-0 flex items-center justify-center font-mono font-bold text-lg ${color}`}>{value}</div>
      </div>
      <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{label}</div>
    </motion.div>
  );
}

export default function RoastLab() {
  const [url, setUrl] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [challenge, setChallenge] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Result | null>(null);
  const [unlocked, setUnlocked] = useState(false);
  const [deep, setDeep] = useState({ name: "", email: "", business: "" });
  const [sending, setSending] = useState(false);

  const run = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return toast.error("Drop a URL to roast.");
    setLoading(true); setResult(null); setUnlocked(false);
    try {
      const { data, error } = await supabase.functions.invoke("roast-website", { body: { url, businessType, challenge } });
      if (error) throw error;
      if (data?.error) throw new Error(data.error);
      setResult(data as Result);
    } catch (err: any) {
      toast.error(err.message || "Roast failed. Try again.");
    } finally { setLoading(false); }
  };

  const unlock = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!deep.name || !deep.email) return toast.error("Name and email required.");
    setSending(true);
    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: { name: deep.name, email: deep.email, business: deep.business, service: "Deep Roast Request", budget: "", message: `Website: ${url}\nBusiness type: ${businessType}\nChallenge: ${challenge}\n\nAI roast summary: ${result?.summary}` },
      });
      if (error) throw error;
      setUnlocked(true);
      toast.success("Deep analysis incoming. I'll respond personally.");
    } catch (err: any) {
      toast.error(err.message || "Couldn't send. Try again.");
    } finally { setSending(false); }
  };

  return (
    <section id="roast" className="section-padding relative">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mb-10">
          <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary mb-3">// 02 — Diagnostic Lab</div>
          <h2 className="text-3xl md:text-5xl font-bold leading-[1.05] mb-3">
            Roast my <span className="serif-italic text-gradient-cyan">website.</span>
          </h2>
          <p className="text-muted-foreground md:text-lg">Drop a URL. Get a live audit dashboard — scored, ranked, and ruthlessly honest.</p>
        </motion.div>

        <div className="glass-strong rounded-2xl p-6 md:p-8">
          <form onSubmit={run} className="grid md:grid-cols-3 gap-3 mb-6">
            <input value={url} onChange={e => setUrl(e.target.value)} placeholder="https://yoursite.com" className="md:col-span-3 bg-background/60 border border-border/60 rounded-lg px-4 py-3 focus:outline-none focus:border-primary/60 transition font-mono text-sm" />
            <input value={businessType} onChange={e => setBusinessType(e.target.value)} placeholder="Business type (Shopify, SaaS, agency...)" className="bg-background/60 border border-border/60 rounded-lg px-4 py-3 focus:outline-none focus:border-primary/60 transition text-sm" />
            <input value={challenge} onChange={e => setChallenge(e.target.value)} placeholder="Biggest challenge" className="bg-background/60 border border-border/60 rounded-lg px-4 py-3 focus:outline-none focus:border-primary/60 transition text-sm" />
            <button disabled={loading} className="bg-primary text-primary-foreground rounded-lg px-6 py-3 font-mono text-xs uppercase tracking-[0.25em] hover:glow-cyan transition disabled:opacity-50 inline-flex items-center justify-center gap-2">
              {loading ? <><Loader2 size={14} className="animate-spin" /> Scanning...</> : <><Zap size={14} /> Run Roast</>}
            </button>
          </form>

          <AnimatePresence>
            {loading && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="font-mono text-xs text-muted-foreground space-y-2 py-6">
                <div>→ Pulling first-impression signals...</div>
                <div>→ Mapping conversion paths...</div>
                <div>→ Stress-testing trust architecture...</div>
                <div className="text-primary">→ Compiling diagnostic report...</div>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {result && !loading && (
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                <div className="font-mono text-sm text-primary border-l-2 border-primary pl-4 py-1">
                  {result.summary}
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {(Object.keys(scoreLabels) as Array<keyof typeof scoreLabels>).map((k, i) => (
                    <Gauge key={k} value={result.scores[k] ?? 0} label={scoreLabels[k]} delay={i * 0.08} />
                  ))}
                </div>
                <div className="space-y-2">
                  {result.insights?.map((ins, i) => {
                    const Icon = ins.severity === "critical" ? AlertTriangle : ins.severity === "warning" ? Lightbulb : TrendingUp;
                    const tone = ins.severity === "critical" ? "text-red-400" : ins.severity === "warning" ? "text-yellow-400" : "text-primary";
                    return (
                      <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }} className="glass rounded-xl p-4 flex gap-4">
                        <Icon size={18} className={`${tone} shrink-0 mt-0.5`} />
                        <div className="flex-1">
                          <div className="font-semibold mb-1">{ins.title}</div>
                          <div className="text-sm text-muted-foreground">{ins.detail}</div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {!unlocked ? (
                  <motion.form initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} onSubmit={unlock} className="glass-strong rounded-xl p-6 mt-6">
                    <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-3">// Unlock the deeper analysis</div>
                    <p className="text-sm text-muted-foreground mb-4">I'll personally review your site and send back a tactical breakdown — what to fix first, what to test, and where the revenue is hiding.</p>
                    <div className="grid sm:grid-cols-3 gap-2 mb-3">
                      <input value={deep.name} onChange={e => setDeep({ ...deep, name: e.target.value })} placeholder="Name" className="bg-background/60 border border-border/60 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary/60" />
                      <input value={deep.email} onChange={e => setDeep({ ...deep, email: e.target.value })} type="email" placeholder="Email" className="bg-background/60 border border-border/60 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary/60" />
                      <input value={deep.business} onChange={e => setDeep({ ...deep, business: e.target.value })} placeholder="Business name" className="bg-background/60 border border-border/60 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary/60" />
                    </div>
                    <button disabled={sending} className="w-full bg-primary text-primary-foreground rounded-lg px-4 py-3 font-mono text-xs uppercase tracking-[0.25em] hover:glow-cyan transition disabled:opacity-50 inline-flex items-center justify-center gap-2">
                      {sending ? "Sending..." : <>Request deep analysis <ArrowRight size={14} /></>}
                    </button>
                  </motion.form>
                ) : (
                  <div className="glass rounded-xl p-6 text-center font-mono text-sm text-primary">// Transmission received. Expect a personal response within 48 hours.</div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

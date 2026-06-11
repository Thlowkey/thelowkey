import { motion } from "framer-motion";
import { useState } from "react";
import { Calendar, FileText, Swords, ArrowRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const options = [
  { id: "call", icon: Calendar, title: "Book a Strategy Call", desc: "60 minutes. Bring your situation. Leave with a plan.", cta: "Book the call" },
  { id: "brief", icon: FileText, title: "Send a Project Brief", desc: "Have it scoped already? Send the brief, I'll send a response in 48 hours.", cta: "Send brief" },
  { id: "challenge", icon: Swords, title: "Challenge Me", desc: "Have a problem nobody's solved? Send it. If I'm intrigued, I'll respond personally.", cta: "Issue challenge" },
];

export default function FinalSection() {
  const [mode, setMode] = useState<"choose" | "form">("choose");
  const [intent, setIntent] = useState("call");
  const [form, setForm] = useState({ name: "", email: "", business: "", message: "" });
  const [sending, setSending] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Name, email, and message are required.");
      return;
    }
    setSending(true);
    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: { ...form, service: intent, budget: "" },
      });
      if (error) throw error;
      toast.success("Transmission received. I'll respond personally.");
      setForm({ name: "", email: "", business: "", message: "" });
      setMode("choose");
    } catch (err: any) {
      toast.error(err.message || "Couldn't send. Try again.");
    } finally {
      setSending(false);
    }
  };

  const pick = (id: string) => { setIntent(id); setMode("form"); };

  return (
    <section id="final" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[160px] pointer-events-none" />
      <div className="container mx-auto relative">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto text-center mb-16">
          <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary mb-6">// 08 — Initiate</div>
          <h2 className="text-4xl md:text-7xl font-bold leading-[1.02] mb-8">
            Ready to build something <span className="serif-italic text-gradient-cyan">worth remembering?</span>
          </h2>
          <p className="text-muted-foreground md:text-xl max-w-2xl mx-auto">Three doors. Pick whichever fits. All of them reach me directly.</p>
        </motion.div>

        {mode === "choose" ? (
          <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {options.map((o, i) => {
              const Icon = o.icon;
              return (
                <motion.button
                  key={o.id}
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => pick(o.id)}
                  className="group glass rounded-2xl p-8 text-left hover:border-primary/40 hover:glow-soft transition-all relative overflow-hidden"
                >
                  <Icon size={28} className="text-primary mb-6" />
                  <h3 className="text-2xl font-bold mb-3">{o.title}</h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed">{o.desc}</p>
                  <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
                    {o.cta} <ArrowRight size={14} className="group-hover:translate-x-1 transition" />
                  </div>
                  <div className="absolute -bottom-16 -right-16 w-40 h-40 rounded-full bg-primary/5 blur-2xl group-hover:bg-primary/15 transition" />
                </motion.button>
              );
            })}
          </div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            onSubmit={submit}
            className="max-w-2xl mx-auto glass-strong rounded-2xl p-8 md:p-10"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">// {options.find(o => o.id === intent)?.title}</div>
              <button type="button" onClick={() => setMode("choose")} className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground">← back</button>
            </div>

            <div className="space-y-5">
              <Field label="Name">
                <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="w-full bg-background/60 border border-border/60 rounded-lg px-4 py-3 focus:outline-none focus:border-primary/60 transition" />
              </Field>
              <Field label="Email">
                <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="w-full bg-background/60 border border-border/60 rounded-lg px-4 py-3 focus:outline-none focus:border-primary/60 transition" />
              </Field>
              <Field label="Business / Site (optional)">
                <input value={form.business} onChange={e => setForm({ ...form, business: e.target.value })} className="w-full bg-background/60 border border-border/60 rounded-lg px-4 py-3 focus:outline-none focus:border-primary/60 transition" />
              </Field>
              <Field label={intent === "challenge" ? "What's the problem nobody's solved?" : "Tell me what you need"}>
                <textarea required rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} className="w-full bg-background/60 border border-border/60 rounded-lg px-4 py-3 focus:outline-none focus:border-primary/60 transition resize-none" />
              </Field>

              <button type="submit" disabled={sending} className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-primary text-primary-foreground font-mono text-xs uppercase tracking-[0.3em] hover:glow-cyan transition disabled:opacity-50">
                {sending ? "Transmitting..." : "Send transmission"} <ArrowRight size={14} />
              </button>
            </div>
          </motion.form>
        )}
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-2">{label}</label>
      {children}
    </div>
  );
}

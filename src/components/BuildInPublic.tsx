import { motion } from "framer-motion";
import { Activity, Cpu, FlaskConical, Rocket, GitBranch } from "lucide-react";

const streams = [
  { icon: FlaskConical, tag: "EXPERIMENT", time: "2h ago", title: "Testing AI-powered conversion gates", detail: "Multi-step quiz funnels for premium DTC. Early lift: +28% qualified leads.", progress: 65 },
  { icon: Rocket, tag: "LAUNCH", time: "1d ago", title: "Shipping the new Vault interface", detail: "Case-file pattern moving to v2 — denser, faster, with inline metrics.", progress: 90 },
  { icon: Cpu, tag: "AI R&D", time: "3d ago", title: "Site auditor prompt engineering", detail: "Iterating on the Roast Lab schema — sharper insights, fewer hedges.", progress: 80 },
  { icon: GitBranch, tag: "CONCEPT", time: "5d ago", title: "Modular Shopify section library", detail: "Drop-in conversion modules: hero, social proof, AOV stacks, exit intent.", progress: 40 },
  { icon: Activity, tag: "RESEARCH", time: "1w ago", title: "Retention pattern study", detail: "Mapping post-purchase flows across 40+ premium brands. Patterns emerging.", progress: 55 },
];

export default function BuildInPublic() {
  return (
    <section id="lab" className="section-padding relative">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-end justify-between mb-10 gap-6 flex-wrap">
          <div className="max-w-2xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary mb-3">// 06 — Command Center</div>
            <h2 className="text-3xl md:text-5xl font-bold leading-[1.05]">
              Live from <span className="serif-italic text-gradient-cyan">the workshop.</span>
            </h2>
          </div>
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            5 active threads
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-3">
          {streams.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="glass rounded-xl p-5 hover:border-primary/30 transition group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition">
                    <Icon size={16} className="text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1 font-mono text-[10px] uppercase tracking-[0.25em]">
                      <span className="text-primary">{s.tag}</span>
                      <span className="text-muted-foreground/60">{s.time}</span>
                    </div>
                    <div className="font-semibold mb-1">{s.title}</div>
                    <div className="text-sm text-muted-foreground mb-3">{s.detail}</div>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-1 rounded-full bg-border/60 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.progress}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: i * 0.06 + 0.2, ease: "easeOut" }}
                          className="h-full bg-primary"
                        />
                      </div>
                      <div className="font-mono text-[10px] text-muted-foreground tabular-nums">{s.progress}%</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

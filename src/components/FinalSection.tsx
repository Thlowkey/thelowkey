import { motion } from "framer-motion";
import { Calendar, FileText, Swords, ArrowRight } from "lucide-react";

const EMAIL = "alwaysonalowkey@gmail.com";

const options = [
  {
    id: "call", icon: Calendar,
    title: "Start a Project",
    desc: "Tell me what you're building. I'll respond personally within 48 hours.",
    cta: "Email me",
    subject: "New Project Inquiry",
    body: "Hey Low Key,\n\nA bit about my project:\n— Goal:\n— Budget:\n— Timeline:\n— Reference sites I like:\n\nThanks,",
  },
  {
    id: "brief", icon: FileText,
    title: "Send a Brief",
    desc: "Already scoped? Drop the brief and I'll come back with a clear yes/no and next steps.",
    cta: "Send brief",
    subject: "Collaboration Request",
    body: "Hey Low Key,\n\nHere's the brief:\n\n",
  },
  {
    id: "challenge", icon: Swords,
    title: "Roast / Audit My Site",
    desc: "Want me to look at your site personally? Send the URL, the goal, and where you're stuck.",
    cta: "Request audit",
    subject: "Website Audit Request",
    body: "Hey Low Key,\n\nMy site: \nMy goal: \nWhere I'm stuck: \n\nWould love your honest take.",
  },
];

const mailto = (subject: string, body: string) =>
  `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

export default function FinalSection() {

  return (
    <section id="final" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[160px] pointer-events-none" />
      <div className="container mx-auto relative">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto text-center mb-12">
          <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary mb-6">08 — Initiate</div>
          <h2 className="text-4xl md:text-6xl font-bold leading-[1.02] mb-6">
            Choose your <span className="serif-italic text-gradient-cyan">next move.</span>
          </h2>
          <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">Three doors. Pick whichever fits. All of them reach me directly.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {options.map((o, i) => {
            const Icon = o.icon;
            return (
              <motion.a
                key={o.id}
                href={mailto(o.subject, o.body)}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group glass rounded-2xl p-8 text-left hover:border-primary/40 hover:glow-soft transition-all relative overflow-hidden block"
              >
                <Icon size={28} className="text-primary mb-6" />
                <h3 className="text-2xl font-bold mb-3">{o.title}</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">{o.desc}</p>
                <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
                  {o.cta} <ArrowRight size={14} className="group-hover:translate-x-1 transition" />
                </div>
                <div className="absolute -bottom-16 -right-16 w-40 h-40 rounded-full bg-primary/5 blur-2xl group-hover:bg-primary/15 transition" />
              </motion.a>
            );
          })}
        </div>

        <div className="mt-10 text-center font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
          Or email me directly:{" "}
          <a href={`mailto:${EMAIL}`} className="text-primary hover:underline normal-case tracking-normal">{EMAIL}</a>
        </div>
      </div>
    </section>
  );
}

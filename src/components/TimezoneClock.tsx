import { useEffect, useState } from "react";
import { Clock, ChevronDown } from "lucide-react";

const ZONES = [
  { label: "Local", tz: Intl.DateTimeFormat().resolvedOptions().timeZone },
  { label: "New York", tz: "America/New_York" },
  { label: "Los Angeles", tz: "America/Los_Angeles" },
  { label: "London", tz: "Europe/London" },
  { label: "Paris", tz: "Europe/Paris" },
  { label: "Dubai", tz: "Asia/Dubai" },
  { label: "Tokyo", tz: "Asia/Tokyo" },
  { label: "Sydney", tz: "Australia/Sydney" },
];

export default function TimezoneClock() {
  const [tz, setTz] = useState<string>(() => localStorage.getItem("lk-tz") || ZONES[0].tz);
  const [now, setNow] = useState(new Date());
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  useEffect(() => { localStorage.setItem("lk-tz", tz); }, [tz]);

  const time = new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false, timeZone: tz,
  }).format(now);
  const label = ZONES.find(z => z.tz === tz)?.label ?? tz.split("/").pop();

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(o => !o)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full glass font-mono text-[10px] uppercase tracking-wider text-foreground/80 hover:text-primary transition"
        aria-label="Select time zone"
      >
        <Clock size={11} className="text-primary" />
        <span className="tabular-nums">{time}</span>
        <span className="text-muted-foreground hidden sm:inline">{label}</span>
        <ChevronDown size={10} className={`transition ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 mt-2 w-52 glass-strong rounded-xl p-1 z-50 max-h-72 overflow-y-auto no-scrollbar">
            {ZONES.map(z => (
              <button
                key={z.tz}
                onClick={() => { setTz(z.tz); setOpen(false); }}
                className={`w-full text-left px-3 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition flex items-center justify-between ${
                  tz === z.tz ? "bg-primary/10 text-primary" : "text-foreground/70 hover:bg-primary/5 hover:text-primary"
                }`}
              >
                <span>{z.label}</span>
                <span className="text-[9px] text-muted-foreground tabular-nums">
                  {new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: z.tz }).format(now)}
                </span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

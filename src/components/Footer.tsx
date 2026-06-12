import lowkeyLogo from "@/assets/lowkey-logo.png";

export default function Footer() {
  return (
    <footer className="py-10 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <img src={lowkeyLogo} alt="Low Key" className="h-7 w-auto brightness-0 invert opacity-80" />
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">// Low Key — Digital Growth Architect</div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:items-center text-sm text-muted-foreground">
            <a href="mailto:alwaysonalowkey@gmail.com" className="hover:text-primary transition font-mono text-xs">alwaysonalowkey@gmail.com</a>
            <span className="hidden md:block">·</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.25em]">© {new Date().getFullYear()} LOW-KEY.OS</span>
          </div>
        </div>
        <div className="mt-6 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground/50 text-center">
          // Hint: a secret waits. Try ↑↑↓↓←→←→
        </div>
      </div>
    </footer>
  );
}

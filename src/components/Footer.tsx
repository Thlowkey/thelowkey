import lowkeyLogo from "@/assets/lowkey-logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-4 md:px-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <img src={lowkeyLogo} alt="Low Key" className="h-8 w-auto brightness-110 saturate-50 sepia-[0.2]" />
          <p className="text-xs text-muted-foreground mt-2 tracking-wide">Elite. Silent. Powerful.</p>
          <a href="mailto:alwaysonalowkey@gmail.com" className="text-xs text-accent hover:text-accent/80 transition-colors mt-1 block">alwaysonalowkey@gmail.com</a>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Low Key. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

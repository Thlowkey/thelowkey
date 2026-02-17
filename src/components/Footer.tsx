const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-4 md:px-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="font-heading font-bold text-lg tracking-tight text-foreground">
            Low<span className="text-accent">Key</span>
          </span>
          <p className="text-xs text-muted-foreground mt-1 tracking-wide">Elite. Silent. Powerful.</p>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Low Key. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

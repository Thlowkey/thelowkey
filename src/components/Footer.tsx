const Footer = () => {
  return (
    <footer className="border-t border-border py-10 px-4 md:px-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center font-heading font-bold text-primary-foreground text-sm">
            L
          </div>
          <span className="font-heading font-semibold text-foreground">
            Low <span className="text-primary">Key</span>
          </span>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Low Key. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

export function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
        <div>
          <span className="text-gradient-brand font-semibold">EMIR.</span> © {new Date().getFullYear()} —
          AI Engineer & Consultant
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-foreground transition">LinkedIn</a>
          <a href="#" className="hover:text-foreground transition">GitHub</a>
          <a href="#" className="hover:text-foreground transition">Instagram</a>
          <a href="mailto:hello@emirsyah.dev" className="hover:text-foreground transition">Email</a>
        </div>
      </div>
    </footer>
  );
}
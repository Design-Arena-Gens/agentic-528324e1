import Link from "next/link";

const navLinks = [
  { name: "Playbook", href: "#playbook" },
  { name: "Deployments", href: "#deploy" },
  { name: "Proof", href: "#proof" },
  { name: "FAQ", href: "#faq" }
];

export function NavBar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="h-9 w-9 rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 shadow-lg shadow-brand-900/40" />
          <div className="text-sm font-semibold leading-tight">
            <span className="block text-white">Renketsu</span>
            <span className="block text-white/60 text-xs uppercase tracking-[0.3em]">
              Trigger Agent
            </span>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-white/70 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="transition hover:text-white"
              prefetch={false}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <Link
          href="https://cal.com/renketsu/intent-intake"
          className="rounded-xl border border-brand-400/50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-brand-200 transition hover:border-brand-200 hover:text-white"
        >
          Get Blueprint
        </Link>
      </div>
    </header>
  );
}

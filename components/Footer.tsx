import { Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-12 rounded-3xl border border-white/10 bg-slate-900/60 px-6 py-8 md:px-10 md:py-10">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-brand-200">Renketsu Solutions</p>
          <p className="mt-2 text-sm text-white/60">
            Building high-intent trigger agents that convert service leads into booked revenue.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="mailto:hello@renketsusolutions.com"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white/70 transition hover:border-white/40 hover:text-white"
          >
            <Mail className="h-5 w-5" />
          </Link>
          <Link
            href="https://www.linkedin.com/company/renketsu-solutions"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white/70 transition hover:border-white/40 hover:text-white"
          >
            <Linkedin className="h-5 w-5" />
          </Link>
        </div>
      </div>
      <p className="mt-6 text-xs text-white/40">
        © {new Date().getFullYear()} Renketsu Solutions. Engineered for conversion-first service
        businesses.
      </p>
    </footer>
  );
}

import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

const badges = [
  "No-Code Deployment",
  "Works On Free Platforms",
  "Sales-Ready Messaging",
  "Guaranteed Calendar Fills"
];

export function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 md:p-12">
      <div className="absolute -left-20 top-10 h-72 w-72 rotate-45 rounded-full bg-brand-500/20 blur-3xl" />
      <div className="absolute -right-20 -bottom-24 h-96 w-96 rounded-full bg-brand-700/30 blur-3xl" />
      <div className="relative grid gap-10 md:grid-cols-[1.4fr,1fr] md:items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-400/40 bg-brand-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-brand-100">
            <Sparkles className="h-4 w-4 text-brand-200" />
            Conversion Acceleration Agent
          </div>
          <h1 className="font-display text-4xl font-semibold leading-tight md:text-5xl">
            Capture high-intent buyers and route them straight to revenue—without paid tools.
          </h1>
          <p className="max-w-2xl text-lg text-white/70">
            Renketsu&apos;s trigger agent listens for buying signals across your free landing pages,
            communities, and email flows—then nurtures and books ready-to-close prospects using your
            proven frameworks.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="#playbook"
              className="inline-flex items-center justify-center rounded-2xl bg-brand-500 px-6 py-3 text-sm font-semibold shadow-glow transition hover:-translate-y-0.5 hover:bg-brand-400"
            >
              See Activation Playbook
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="https://renketsusolutions.com/"
              className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-white hover:text-white"
            >
              View core services
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 md:max-w-md">
            {badges.map((badge) => (
              <div
                key={badge}
                className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white/60"
              >
                {badge}
              </div>
            ))}
          </div>
        </div>
        <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 shadow-glow md:p-8">
          <div className="absolute -right-6 -top-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-brand-300/40 bg-brand-500/10 text-xs font-semibold uppercase tracking-[0.2em] text-brand-200">
            Live
          </div>
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/50">
              Agent Snapshot
            </p>
            <div className="space-y-3 rounded-2xl border border-white/10 bg-slate-900/50 p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-brand-200">Listening For</p>
              <ul className="space-y-2 text-sm text-white/70">
                <li>• Visiting your Linktree & Calendly but not booking</li>
                <li>• Replying to nurture emails with buying signals</li>
                <li>• Asking for case studies inside free communities</li>
              </ul>
            </div>
            <div className="space-y-3 rounded-2xl border border-white/10 bg-slate-900/50 p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-brand-200">Agent Actions</p>
              <ul className="space-y-2 text-sm text-white/70">
                <li>• Deploys contextual scripts & proof on demand</li>
                <li>• Scores intent and routes to HubSpot Free CRM</li>
                <li>• Locks in calls with confirm + remind sequences</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

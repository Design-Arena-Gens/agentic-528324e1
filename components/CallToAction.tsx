import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CallToAction() {
  return (
    <section className="overflow-hidden rounded-3xl border border-brand-400/40 bg-gradient-to-br from-brand-500 via-brand-500/90 to-brand-700 p-6 text-white md:p-12">
      <div className="relative isolate">
        <div className="absolute -left-8 top-4 h-32 w-32 rounded-full bg-white/20 blur-2xl" />
        <div className="absolute -right-16 bottom-0 h-40 w-40 rounded-full bg-slate-950/30 blur-3xl" />
        <div className="relative grid gap-6 md:grid-cols-[2fr,1fr] md:items-center">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-white/70">
              Ready in 7 Business Days
            </p>
            <h2 className="font-display text-3xl font-semibold md:text-4xl">
              Bolt on an intent-driven revenue engine without hiring another SDR.
            </h2>
            <p className="max-w-2xl text-sm text-white/80 md:text-base">
              We blueprint your buyer journey, build a conversion agent tuned to your service offer,
              and deploy it across free tools you already use. Pay only after you approve the
              activation plan.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="https://cal.com/renketsu/intent-intake"
                className="flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-brand-600 shadow-lg shadow-brand-900/30 transition hover:-translate-y-0.5 hover:bg-brand-50"
              >
                Book Intent Blueprint
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="https://renketsusolutions.com/"
                className="flex items-center justify-center rounded-2xl border border-white/40 px-5 py-3 text-sm font-semibold text-white/90 transition hover:border-white hover:text-white"
              >
                Explore Full Site
              </Link>
            </div>
          </div>
          <div className="rounded-3xl border border-white/40 bg-white/10 p-5 text-sm text-white/80 shadow-xl shadow-brand-900/40">
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">What&apos;s inside</p>
            <ul className="mt-4 space-y-3">
              <li>• Buyer intent baselining & platform mapping</li>
              <li>• Conversion agent scripts + data ingestion plan</li>
              <li>• No-code automations + CRM routing architecture</li>
              <li>• Show-up acceleration & fast-close playbooks</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

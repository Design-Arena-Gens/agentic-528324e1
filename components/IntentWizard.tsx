"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { ArrowRight, Bot, Calendar, CheckCircle2, MessageSquare } from "lucide-react";
import clsx from "clsx";

type PersonaKey = "solopreneur" | "agency" | "consultant";

const personaMap: Record<
  PersonaKey,
  {
    title: string;
    description: string;
    hero: string;
  }
> = {
  solopreneur: {
    title: "Solo Expert",
    description: "You handle fulfillment yourself and need more qualified calls without extra hours.",
    hero: "Embed the agent on Calendly, Linktree, or Gumroad to warm leads before booking."
  },
  agency: {
    title: "Boutique Agency",
    description:
      "You manage a delivery team and want a repeatable pipeline that hits meetings booked targets.",
    hero: "Deploy the agent on Notion, ClickUp forms, or free community spaces to pre-commit leads."
  },
  consultant: {
    title: "Fractional Consultant",
    description:
      "You close high-ticket retainers and require qualification plus objection handling upfront.",
    hero: "Activate the agent on LinkedIn DMs, Slack Connect, or free landing pages to qualify instantly."
  }
};

type ChannelKey = "link-in-bio" | "community" | "emailCapture";

const channelInsights: Record<ChannelKey, string> = {
  "link-in-bio": "Use the trigger agent in your Linktree or TapBio to score visitors in 45 seconds.",
  community: "Drop an invite-only agent in Discord, Circle, or Slack to fast-track engaged members.",
  emailCapture: "Pair with free ConvertKit or Mailchimp forms to nurture high intent leads daily."
};

const outcomes = [
  {
    icon: CheckCircle2,
    title: "Intent Qualification",
    description: "Scores leads on urgency, budget, and authority before they reach your inbox."
  },
  {
    icon: MessageSquare,
    title: "Contextual Hooks",
    description: "Auto-crafts responses using your proof, offers, and positioning to keep momentum."
  },
  {
    icon: Calendar,
    title: "Instant Scheduling",
    description: "Pushes only ready-to-buy prospects into your calendar, saving 6+ hours every week."
  }
];

export function IntentWizard() {
  const [persona, setPersona] = useState<PersonaKey>("solopreneur");
  const [channel, setChannel] = useState<ChannelKey>("link-in-bio");
  const [projectedCalls, setProjectedCalls] = useState<number>(8);

  const revenueImpact = useMemo(() => {
    const baseCloseRate = persona === "consultant" ? 0.35 : persona === "agency" ? 0.28 : 0.22;
    const avgDeal = persona === "solopreneur" ? 1800 : persona === "agency" ? 4200 : 5200;
    const meetings = projectedCalls;
    const closes = Math.round(meetings * baseCloseRate);
    const value = closes * avgDeal;
    return { meetings, closes, value, avgDeal };
  }, [persona, projectedCalls]);

  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-950 p-6 md:p-10">
      <div className="absolute inset-0 -translate-x-48 translate-y-16 rounded-full bg-brand-500/30 blur-3xl" />
      <div className="relative grid gap-10 md:grid-cols-[2fr,1fr]">
        <div className="space-y-8">
          <div className="space-y-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
              <Bot size={16} /> High Intent Trigger Agent
            </span>
            <h2 className="font-display text-3xl font-semibold md:text-4xl">
              Launch an always-on closer that works on every free platform you already use.
            </h2>
            <p className="max-w-2xl text-white/70">
              Pick your persona, the platform you want to activate, and see how the agent increases
              booked calls using proven Renketsu playbooks.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {Object.entries(personaMap).map(([key, value]) => (
              <button
                key={key}
                type="button"
                onClick={() => setPersona(key as PersonaKey)}
                className={clsx(
                  "group relative overflow-hidden rounded-2xl border px-4 py-5 text-left transition",
                  persona === key
                    ? "border-brand-400/80 bg-brand-500/10 shadow-glow"
                    : "border-white/10 bg-white/5 hover:border-brand-500/60 hover:bg-brand-500/10"
                )}
              >
                <div className="absolute inset-0 opacity-0 transition group-hover:opacity-20">
                  <div className="absolute left-1/2 top-0 h-full w-1/2 -translate-x-1/2 rounded-full bg-brand-400 blur-3xl" />
                </div>
                <h3 className="font-semibold text-lg">{value.title}</h3>
                <p className="mt-2 text-sm text-white/70">{value.description}</p>
                <p className="mt-3 text-xs font-medium text-brand-200">{value.hero}</p>
              </button>
            ))}
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-semibold uppercase tracking-wide text-brand-200">
                Channel Activation
              </p>
              <div className="flex gap-3">
                {(Object.keys(channelInsights) as ChannelKey[]).map((key) => (
                  <button
                    key={key}
                    onClick={() => setChannel(key)}
                    className={clsx(
                      "flex-1 rounded-xl border px-3 py-2 text-sm font-medium transition",
                      channel === key
                        ? "border-brand-300 bg-brand-400/20 text-white shadow-glow"
                        : "border-white/10 bg-white/5 text-white/70 hover:border-brand-400/40 hover:text-white"
                    )}
                  >
                    {key === "link-in-bio" && "Link in Bio"}
                    {key === "community" && "Community Space"}
                    {key === "emailCapture" && "Email Capture"}
                  </button>
                ))}
              </div>
              <AnimatePresence mode="wait">
                <motion.p
                  key={channel}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="text-sm text-white/70"
                >
                  {channelInsights[channel]}
                </motion.p>
              </AnimatePresence>
            </div>
            <div className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-semibold uppercase tracking-wide text-brand-200">
                Target Booked Calls / Month
              </p>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min={4}
                  max={30}
                  step={1}
                  value={projectedCalls}
                  onChange={(event) => setProjectedCalls(Number(event.target.value))}
                  className="h-2 w-full rounded-full bg-white/10 accent-brand-400"
                />
                <span className="w-12 text-right font-semibold text-xl">{projectedCalls}</span>
              </div>
              <p className="text-sm text-white/60">
                Agent calibrates messaging cadence to hit your booking goal without extra ad spend.
              </p>
            </div>
          </div>
        </div>
        <aside className="relative flex flex-col justify-between rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 via-white/5 to-white/0 p-6">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-200">
              Projected Impact
            </p>
            <div className="space-y-6 rounded-2xl border border-white/10 bg-black/30 p-5 shadow-glow">
              <div>
                <p className="text-xs uppercase tracking-wide text-white/60">Persona</p>
                <p className="text-lg font-semibold">{personaMap[persona].title}</p>
              </div>
              <div className="grid gap-4">
                <ImpactRow label="Qualified Meetings" value={`${revenueImpact.meetings}/mo`} />
                <ImpactRow
                  label="Projected Deals"
                  value={`${revenueImpact.closes} closes`}
                  highlight
                />
                <ImpactRow
                  label="Avg. Engagement Value"
                  value={`$${revenueImpact.avgDeal.toLocaleString()}`}
                />
                <ImpactRow
                  label="Monthly Revenue Unlock"
                  value={`$${revenueImpact.value.toLocaleString()}`}
                  highlight
                />
              </div>
              <button className="gradient-ring relative w-full overflow-hidden rounded-2xl bg-brand-500 px-4 py-3 text-sm font-semibold shadow-glow transition hover:bg-brand-400">
                Generate Activation Blueprint
                <ArrowRight className="ml-2 inline h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="mt-8 space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">Agent Outcomes</p>
            <div className="space-y-3">
              {outcomes.map((outcome) => (
                <div
                  key={outcome.title}
                  className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/5 p-3"
                >
                  <outcome.icon className="mt-0.5 h-5 w-5 text-brand-300" />
                  <div>
                    <p className="text-sm font-semibold">{outcome.title}</p>
                    <p className="text-xs text-white/60">{outcome.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

function ImpactRow({
  label,
  value,
  highlight
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={clsx(
        "flex items-center justify-between rounded-xl border px-3 py-2 text-sm font-medium",
        highlight ? "border-brand-400/40 bg-brand-400/10 text-white" : "border-white/10 bg-white/5"
      )}
    >
      <span className="text-white/60">{label}</span>
      <span className="font-semibold">{value}</span>
    </div>
  );
}

"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Brain, Handshake, MousePointerClick, Rows3 } from "lucide-react";
import clsx from "clsx";

const triggers = [
  {
    id: "idle",
    title: "Idle Traffic",
    icon: MousePointerClick,
    summary: "Website & link-in-bio visitors bounce with no next step.",
    detail:
      "Deploy the agent on Carrd, Typedream, or Notion pages to capture micro-commitments and fast-track the hottest visitors to your DMs or calendar."
  },
  {
    id: "manual",
    title: "Manual Follow-ups",
    icon: Rows3,
    summary: "Prospects vanish midway through your nurture flows.",
    detail:
      "The agent plugs into free CRMs like HubSpot or Notion databases, triggering sequences when purchase intent spikes."
  },
  {
    id: "objections",
    title: "Unanswered Objections",
    icon: Brain,
    summary: "Leads need social proof & clarity before they buy.",
    detail:
      "We ingest your case studies, service breakdown, FAQ, and pricing frameworks to reply with contextual trust-building responses instantly."
  },
  {
    id: "handoff",
    title: "Handoff Drop-offs",
    icon: Handshake,
    summary: "Qualified people don&apos;t show up or ghost.",
    detail:
      "Agent backs every booking with double-confirmation, voice-note reminders, and a frictionless route to reschedule."
  }
] as const;

export function PainPoints() {
  const [active, setActive] = useState<(typeof triggers)[number]["id"]>("idle");

  return (
    <section className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 md:grid-cols-[1.2fr,1fr] md:gap-10 md:p-10">
      <div className="space-y-6">
        <h2 className="font-display text-3xl font-semibold md:text-4xl">
          Target your highest-intent moments before they slip away.
        </h2>
        <p className="max-w-2xl text-white/70">
          Renketsu maps how your buyers research, then activates lightweight AI agents on the free
          platforms they already touch—without engineering headaches.
        </p>
        <div className="grid gap-4">
          {triggers.map((trigger) => (
            <button
              key={trigger.id}
              type="button"
              onClick={() => setActive(trigger.id)}
              className={clsx(
                "flex items-center justify-between rounded-2xl border px-4 py-3 transition",
                active === trigger.id
                  ? "border-brand-400/60 bg-brand-500/10 text-white shadow-glow"
                  : "border-white/10 bg-white/5 text-white/70 hover:border-brand-400/30 hover:text-white"
              )}
            >
              <span className="flex items-center gap-3 text-left text-sm font-medium">
                <trigger.icon className="h-5 w-5 text-brand-300" />
                {trigger.title}
              </span>
              <span className="text-xs uppercase tracking-[0.3em] text-white/40">
                {active === trigger.id ? "Selected" : "Select"}
              </span>
            </button>
          ))}
        </div>
      </div>
      <div className="relative rounded-3xl border border-white/10 bg-slate-900/40 p-6">
        <AnimatePresence mode="wait">
          {triggers.map(
            (trigger) =>
              active === trigger.id && (
                <motion.div
                  key={trigger.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-3">
                    <trigger.icon className="h-6 w-6 text-brand-300" />
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
                      {trigger.summary}
                    </p>
                  </div>
                  <p className="text-base text-white/70">{trigger.detail}</p>
                  <div className="rounded-2xl border border-dashed border-brand-500/60 bg-brand-500/5 p-4 text-sm text-brand-100">
                    <p className="font-semibold uppercase tracking-[0.3em] text-brand-200">
                      Deployment Stack
                    </p>
                    <ul className="mt-3 space-y-2 text-brand-50/90">
                      {trigger.id === "idle" && (
                        <>
                          <li>• Carrd, Typedream, Notion, Softr landing pages</li>
                          <li>• Agent embedded via lightweight HTML script</li>
                          <li>• Pushes qualified leads to free CRMs in real-time</li>
                        </>
                      )}
                      {trigger.id === "manual" && (
                        <>
                          <li>• HubSpot Free, Notion, Airtable automations</li>
                          <li>• Intent scoring triggers in Zapier / Make with no-code</li>
                          <li>• Reply cadences optimized per persona</li>
                        </>
                      )}
                      {trigger.id === "objections" && (
                        <>
                          <li>• Trains on your proof, case studies, SOPs</li>
                          <li>• Syncs with Loom, YouTube, Drive libraries</li>
                          <li>• Dynamic snippets to plug into any chat or email</li>
                        </>
                      )}
                      {trigger.id === "handoff" && (
                        <>
                          <li>• Calendly + Google Calendar confirmations</li>
                          <li>• SMS & email nudges via Twilio, Resend, or MailerLite</li>
                          <li>• Playbooks for rescheduling & offer framing</li>
                        </>
                      )}
                    </ul>
                  </div>
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

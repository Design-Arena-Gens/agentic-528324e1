"use client";

import { motion } from "framer-motion";
import { CheckCheck, ClipboardList, Cog, Gauge } from "lucide-react";

const steps = [
  {
    title: "Intent Mapping Sprint",
    description:
      "We audit your traffic sources, craft 3 high intent trigger points, and document buyer objections using your collateral.",
    icon: ClipboardList,
    deliverable: "Intent Architecture Map"
  },
  {
    title: "Agent & Automations",
    description:
      "Build conversational scripts, ingest proof assets, and assemble no-code automations that sync with your free platforms.",
    icon: Cog,
    deliverable: "Agent Build & Routing"
  },
  {
    title: "Calibration & Launch",
    description:
      "Run live tests with your hottest lead sources, calibrate messaging, and turn on the 24/7 trigger agent.",
    icon: Gauge,
    deliverable: "Activation Checklist"
  },
  {
    title: "Optimize & Scale",
    description:
      "Weekly experiments to increase booking rate, objection clears, and show-up percentages. Hand off playbooks once metrics lock in.",
    icon: CheckCheck,
    deliverable: "Growth Sprints & Reporting"
  }
];

export function Playbook() {
  return (
    <section id="playbook" className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10">
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.3em] text-brand-200">Activation Playbook</p>
        <h2 className="font-display text-3xl font-semibold md:text-4xl">
          The exact process that turns browsers into booked calls.
        </h2>
        <p className="max-w-3xl text-sm text-white/70 md:text-base">
          Every engagement includes done-for-you research, agent setup, and rev ops automation. You
          only approve messaging and watch meetings stack.
        </p>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.35 }}
            className="flex flex-col justify-between rounded-3xl border border-white/10 bg-slate-900/40 p-6"
          >
            <div className="space-y-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-brand-300/40 bg-brand-500/20 text-brand-100">
                <step.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-white">{step.title}</h3>
              </div>
              <p className="text-sm text-white/70">{step.description}</p>
            </div>
            <div className="mt-6 rounded-2xl border border-dashed border-brand-400/40 bg-brand-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-brand-100">
              {step.deliverable}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

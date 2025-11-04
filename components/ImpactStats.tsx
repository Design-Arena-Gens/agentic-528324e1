"use client";

import { motion } from "framer-motion";

const stats = [
  {
    label: "Lead-to-Call Conversion",
    value: "3.2x",
    caption: "Average uplift across service founders after 30 days."
  },
  {
    label: "Time-to-Qualification",
    value: "47 min",
    caption: "Average response time vs. industry 22 hrs."
  },
  {
    label: "Manual Follow-ups Eliminated",
    value: "84%",
    caption: "Agent handles sequences, nudges, and objections."
  }
];

export function ImpactStats() {
  return (
    <div className="grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 md:grid-cols-3">
      {stats.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05, duration: 0.35 }}
          className="rounded-2xl border border-white/5 bg-slate-900/40 p-4"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-brand-200">{item.label}</p>
          <p className="mt-3 font-display text-3xl font-semibold text-white">{item.value}</p>
          <p className="mt-2 text-sm text-white/60">{item.caption}</p>
        </motion.div>
      ))}
    </div>
  );
}

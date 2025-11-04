"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const proof = [
  {
    name: "Celia Grant",
    role: "Founder, AlignOps Agency",
    quote:
      "We plugged the Renketsu trigger agent into a free Notion microsite and booked 17 qualified discovery calls in 21 days—without spending a dollar on ads.",
    avatar: "https://i.pravatar.cc/120?img=32"
  },
  {
    name: "Dhruv Mehta",
    role: "Fractional CMO",
    quote:
      "Prospects finally get the context they need. The agent answers questions using my own frameworks and pushes warmed leads straight to my calendar.",
    avatar: "https://i.pravatar.cc/120?img=47"
  },
  {
    name: "Monica Alvarez",
    role: "Consultant, Solaris CX",
    quote:
      "Qualification used to take 3 emails. Now the agent handles lead scoring, proof points, and reminders. Show-up rates jumped past 92%.",
    avatar: "https://i.pravatar.cc/120?img=15"
  }
];

export function SocialProof() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-brand-200">Service Leaders</p>
          <h2 className="mt-2 font-display text-3xl font-semibold md:text-4xl">
            Trusted by founders compounding recurring revenue on autopilot.
          </h2>
        </div>
        <div className="rounded-full border border-brand-300/40 bg-brand-500/10 px-5 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-brand-200">
          <span>Renketsu Client Stories</span>
        </div>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {proof.map((item, index) => (
          <motion.figure
            key={item.name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            className="relative rounded-3xl border border-white/10 bg-slate-900/40 p-6"
          >
            <div className="flex items-center gap-3">
              <Image
                src={item.avatar}
                alt={item.name}
                width={48}
                height={48}
                className="rounded-full border border-white/20"
              />
              <div>
                <p className="text-sm font-semibold text-white">{item.name}</p>
                <p className="text-xs text-white/50">{item.role}</p>
              </div>
            </div>
            <blockquote className="mt-4 text-sm text-white/70">{item.quote}</blockquote>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}

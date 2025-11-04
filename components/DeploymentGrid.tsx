"use client";

import { motion } from "framer-motion";
import { Globe, Inbox, Link2, MessageCircle } from "lucide-react";

const deployments = [
  {
    icon: Globe,
    title: "Landing Page Embed",
    description:
      "Activate the agent on free landing pages (Carrd, Notion, Typedream). Capture micro-intent and route qualified leads to your CRM instantly.",
    stack: "Carrd + Make + HubSpot Free"
  },
  {
    icon: Link2,
    title: "Link-in-Bio Concierge",
    description:
      "Insert the agent into Linktree, Beacons, or Stan Store to pre-qualify visitors before they hit your booking link.",
    stack: "Linktree + Zapier + Calendly"
  },
  {
    icon: MessageCircle,
    title: "Community DM Automations",
    description:
      "Monitor Discord, Slack, or Circle conversations for buying signals and deliver contextual responses that escalate to calls.",
    stack: "Discord + n8n + Google Sheets"
  },
  {
    icon: Inbox,
    title: "Email Intent Sequences",
    description:
      "Layer the agent on top of free ConvertKit/Mailchimp tiers to score replies and accelerate hot leads into your inbox.",
    stack: "ConvertKit + Airtable + Resend"
  }
];

export function DeploymentGrid() {
  return (
    <section
      id="deploy"
      className="grid gap-6 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 md:grid-cols-2 md:p-10"
    >
      {deployments.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05, duration: 0.35 }}
          className="flex flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-6"
        >
          <div className="space-y-4">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-brand-400/40 bg-brand-500/20 text-brand-100">
              <item.icon className="h-5 w-5" />
            </div>
            <h3 className="font-display text-xl font-semibold text-white">{item.title}</h3>
            <p className="text-sm text-white/70">{item.description}</p>
          </div>
          <div className="mt-6 rounded-2xl border border-dashed border-brand-400/40 bg-brand-500/10 px-4 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-brand-100">
            {item.stack}
          </div>
        </motion.div>
      ))}
    </section>
  );
}

const faqs = [
  {
    question: "What platforms can the trigger agent live on?",
    answer:
      "Anywhere you currently have traffic. We deploy to free landing page tools (Carrd, Typedream, Notion, Softr), link-in-bio hubs, communities (Discord, Circle, Slack), or even email opt-in forms. No paid software required."
  },
  {
    question: "Do I need engineering help to maintain it?",
    answer:
      "No. The agent is powered by no-code automations. You get a visual playbook plus Zapier/Make recipes so you can edit copy, offers, or routing in minutes."
  },
  {
    question: "How does it learn my specific offers?",
    answer:
      "We ingest your existing assets—case studies, slide decks, loom breakdowns, SOPs—and convert them into structured responses the agent can surface on demand."
  },
  {
    question: "How fast can we launch?",
    answer:
      "Blueprint delivered in 72 hours. Agent deployed in 7 business days after kickoff. You approve every flow before it goes live."
  },
  {
    question: "What does success look like?",
    answer:
      "We target at least 10 additional qualified calls per month within 45 days, plus measurable increases in show-up and close rates."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10">
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.3em] text-brand-200">FAQ</p>
        <h2 className="font-display text-3xl font-semibold md:text-4xl">
          Everything you need to know before the blueprint call.
        </h2>
      </div>
      <div className="mt-8 space-y-4">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="group rounded-2xl border border-white/10 bg-slate-900/40 px-6 py-4"
          >
            <summary className="cursor-pointer list-none text-sm font-semibold text-white/80 transition group-open:text-white">
              {faq.question}
            </summary>
            <p className="mt-3 text-sm text-white/60">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

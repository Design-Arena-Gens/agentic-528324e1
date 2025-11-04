"use client";

import { Hero } from "@/components/Hero";
import { NavBar } from "@/components/NavBar";
import { Playbook } from "@/components/Playbook";
import { DeploymentGrid } from "@/components/DeploymentGrid";
import { IntentWizard } from "@/components/IntentWizard";
import { PainPoints } from "@/components/PainPoints";
import { ImpactStats } from "@/components/ImpactStats";
import { SocialProof } from "@/components/SocialProof";
import { FAQ } from "@/components/FAQ";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col gap-10 px-4 pb-16 pt-6 md:gap-12 md:pb-24 md:pt-10">
      <NavBar />
      <main className="space-y-12 md:space-y-16">
        <Hero />
        <ImpactStats />
        <section className="space-y-6">
          <PainPoints />
        </section>
        <section className="space-y-6">
          <IntentWizard />
        </section>
        <Playbook />
        <DeploymentGrid />
        <section id="proof" className="space-y-6">
          <SocialProof />
        </section>
        <FAQ />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

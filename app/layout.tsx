import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Renketsu Solutions | Conversion Acceleration Agent",
  description:
    "Deploy a high-intent trigger agent that qualifies, nurtures, and books calls for Renketsu Solutions across any free platform.",
  openGraph: {
    title: "Renketsu Solutions | Conversion Acceleration Agent",
    description:
      "Launch an AI-driven trigger agent that captures high-intent leads wherever they engage.",
    url: "https://renketsusolutions.com/",
    siteName: "Renketsu Solutions",
    images: [
      {
        url: "https://renketsusolutions.com/wp-content/uploads/2023/09/Renketsu-Gradient.png",
        width: 1200,
        height: 630,
        alt: "Renketsu Solutions Gradient"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    creator: "@RenketsuAI",
    title: "Renketsu Solutions | Conversion Acceleration Agent",
    description:
      "AI agents that capture buying signals and convert services leads automatically.",
    images: ["https://renketsusolutions.com/wp-content/uploads/2023/09/Renketsu-Gradient.png"]
  },
  metadataBase: new URL("https://renketsusolutions.com")
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-950 text-white antialiased">{children}</body>
    </html>
  );
}

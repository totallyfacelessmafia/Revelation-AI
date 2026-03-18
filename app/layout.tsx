import type { Metadata } from "next";
import { Cinzel, DM_Sans } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cinzel",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Revelation Inc. AI — Bespoke AI Systems for Enterprise",
  description:
    "We build AI systems that run your brand presence, publish your content, and grow your audience — so your leadership never has to open another dashboard.",
  keywords: [
    "AI automation",
    "enterprise AI",
    "executive brand management",
    "AI content publishing",
    "digital human synthesis",
    "Ace AI",
    "Revelation Inc",
  ],
  openGraph: {
    title: "Revelation Inc. AI — Bespoke AI Systems for Enterprise",
    description:
      "AI systems that deliver results, not dashboards. Built for executives who refuse to compromise.",
    url: "https://www.revelationinc.ai",
    siteName: "Revelation Inc. AI",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Revelation Inc. AI",
    description:
      "AI systems that deliver results, not dashboards. Built for executives who refuse to compromise.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
  },
  metadataBase: new URL("https://www.revelationinc.ai"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cinzel.variable} ${dmSans.variable} bg-obsidian text-ivory antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

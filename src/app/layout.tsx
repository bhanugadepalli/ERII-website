import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import SiteHeader from "@/components/siteHeader";
import SiteFooter from "@/components/siteFooter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "ERI Advisory | Enterprise Resilience, Data Center Strategy, Infrastructure Risk & Cloud Continuity",

  description:
    "ERI Advisory helps enterprise leaders strengthen operational resilience, data center strategy, infrastructure risk governance, and cloud continuity across complex and regulated environments.",

  keywords: [
    "enterprise resilience",
    "data center strategy",
    "infrastructure risk",
    "cloud continuity",
    "technology risk",
    "cyber resilience",
    "business continuity",
    "colocation advisory",
    "high density data center",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="bg-neutral-50 text-neutral-900">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </body>
      </html>
    </ClerkProvider>
  );
}
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import SiteHeader from "@/components/siteHeader";
import SiteFooter from "@/components/siteFooter";

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
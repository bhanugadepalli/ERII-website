"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const PRIMARY = "#0B3D91";
const ACCENT = "#1F5FBF";
const TINT = "#EEF3FB";

export default function SiteHeader() {
  const pathname = usePathname();

  const navItems = [
    { name: "Programs", href: "/programs" },
    { name: "Self Learning", href: "/self-learning" },
    { name: "Certifications", href: "/certifications" },
    { name: "Advisory", href: "/advisory" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex max-w-6xl items-center px-5 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-header.png"
            alt="Enterprise Resiliency & Infrastructure Institute"
            width={520}
            height={160}
            priority
            className="h-[80px] w-auto md:h-30 lg:h-[100px]"
          />
        </Link>

        {/* Navigation */}
        <nav className="ml-12 hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-2 py-1 text-sm font-semibold transition"
                style={{
                  color: isActive ? PRIMARY : "#1F2937",
                }}
              >
                {item.name}

                {/* Active underline */}
                {isActive && (
                  <span
                    className="absolute left-0 -bottom-2 h-[3px] w-full rounded-full"
                    style={{ backgroundColor: ACCENT }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="ml-auto hidden md:block">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-xl bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-neutral-800"
          >
            Request an enterprise briefing
          </Link>
        </div>
      </div>

      {/* Light blue active background strip */}
      <div
        className="h-[4px] w-full"
        style={{
          background:
            "linear-gradient(to right, transparent, #EEF3FB, transparent)",
        }}
      />
    </header>
  );
}
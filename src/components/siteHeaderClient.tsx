"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SignedIn, SignedOut, useUser } from "@clerk/nextjs";
import { useEffect, useRef, useState } from "react";

const PRIMARY = "#0B3D91";
const ACCENT = "#1F5FBF";
const TINT = "#EEF3FB";

function NavLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <Link
      href={href}
      className="relative px-2 py-1 text-sm font-semibold transition"
      style={{ color: active ? PRIMARY : "#1F2937" }}
    >
      {label}
      {active && (
        <span
          className="absolute left-0 -bottom-2 h-[3px] w-full rounded-full"
          style={{ backgroundColor: ACCENT }}
        />
      )}
    </Link>
  );
}

export default function SiteHeaderClient({
  showCourse,
  isAdmin,
}: {
  showCourse: boolean;
  isAdmin: boolean;
}) {
  const pathname = usePathname();
  const { user, isSignedIn } = useUser();

  const navItems = [
    { name: "Programs", href: "/programs" },
    { name: "Certifications", href: "/certifications" },
    { name: "Advisory", href: "/advisory" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!dropdownRef.current) return;
      if (!dropdownRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const initials =
    (user?.firstName?.[0] ?? "") + (user?.lastName?.[0] ?? "") || (user?.emailAddresses?.[0]?.emailAddress?.[0] ?? "U");

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
            className="h-[56px] w-auto md:h-16 lg:h-[70px]"
          />
        </Link>

        {/* Main nav */}
        <nav className="ml-12 hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              label={item.name}
              active={pathname === item.href}
            />
          ))}

          {/* Paid-only nav link */}
          {showCourse && (
            <NavLink
              href="/self-learning"
              label="Course"
              active={pathname.startsWith("/self-learning")}
            />
          )}
        </nav>

        {/* Right side */}
        <div className="ml-auto flex items-center gap-3">
          <SignedOut>
            <Link
              href="/sign-in"
              className="hidden md:inline-flex items-center rounded-xl border bg-white px-4 py-2 text-sm font-semibold text-neutral-900 hover:bg-neutral-50 transition"
              style={{ borderColor: ACCENT }}
            >
              Sign in
            </Link>
            <Link
              href="/sign-up"
              className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-semibold text-white transition hover:opacity-95"
              style={{ backgroundColor: PRIMARY }}
            >
              Create account
            </Link>
          </SignedOut>

          <SignedIn>
            {/* Account dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setOpen((s) => !s)}
                className="inline-flex items-center gap-3 rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm font-semibold text-neutral-900 shadow-sm hover:bg-neutral-50 transition"
              >
                <span
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-white"
                  style={{ backgroundColor: PRIMARY }}
                >
                  {initials.toUpperCase()}
                </span>
                <span className="hidden md:inline">
                  {user?.firstName ? `${user.firstName}` : "Account"}
                </span>
                <span className="text-neutral-400">▾</span>
              </button>

              {open && (
                <div className="absolute right-0 mt-2 w-56 overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-lg">
                  <div className="px-4 py-3" style={{ backgroundColor: TINT }}>
                    <div className="text-xs text-neutral-600">Signed in as</div>
                    <div className="truncate text-sm font-semibold text-neutral-900">
                      {user?.emailAddresses?.[0]?.emailAddress ?? "—"}
                    </div>
                  </div>

                  <div className="p-2 text-sm">
                    {showCourse && (
                      <Link
                        href="/self-learning"
                        className="block rounded-xl px-3 py-2 font-medium text-neutral-800 hover:bg-neutral-50"
                        onClick={() => setOpen(false)}
                      >
                        Course
                      </Link>
                    )}
                    <Link
                      href="/billing"
                      className="block rounded-xl px-3 py-2 font-medium text-neutral-800 hover:bg-neutral-50"
                      onClick={() => setOpen(false)}
                    >
                      Billing history
                    </Link>

                    {isAdmin && (
                      <Link
                        href="/admin"
                        className="block rounded-xl px-3 py-2 font-medium text-neutral-800 hover:bg-neutral-50"
                        onClick={() => setOpen(false)}
                      >
                        Admin
                      </Link>
                    )}

                    <div className="my-2 border-t border-neutral-200" />

                    {/* Clerk sign-out endpoint (simple + reliable) */}
                    <Link
                      href="/sign-out"
                      className="block rounded-xl px-3 py-2 font-medium text-neutral-800 hover:bg-neutral-50"
                      onClick={() => setOpen(false)}
                    >
                      Sign out
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </SignedIn>
        </div>
      </div>
    </header>
  );
}
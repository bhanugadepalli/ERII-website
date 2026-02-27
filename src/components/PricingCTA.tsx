"use client";

import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import CheckoutButton from "@/components/CheckoutButton";

const PRIMARY = "#0B3D91";
const ACCENT = "#1F5FBF";

export default function PricingCTA({
  hasAccess,
}: {
  hasAccess: boolean;
}) {
  const { isSignedIn } = useUser();

  // ---------- NOT SIGNED IN ----------
  if (!isSignedIn) {
    return (
      <div className="mt-7 space-y-4">
        <div className="flex flex-wrap gap-3">
          <Link
            href="/sign-up"
            className="inline-flex items-center rounded-xl px-6 py-3 text-sm font-semibold text-white transition hover:opacity-95"
            style={{ backgroundColor: PRIMARY }}
          >
            Create account
          </Link>

          <Link
            href="/sign-in"
            className="inline-flex items-center rounded-xl border bg-white px-6 py-3 text-sm font-semibold text-neutral-900 hover:bg-neutral-50 transition"
            style={{ borderColor: ACCENT }}
          >
            Sign in
          </Link>
        </div>

        <div>
          <CheckoutButton />
          <p className="mt-3 text-xs text-neutral-500">
            You will sign in before completing purchase.
          </p>
        </div>
      </div>
    );
  }

  // ---------- SIGNED IN + ALREADY PAID ----------
  if (hasAccess) {
    return (
      <div className="mt-7 space-y-3">
        <Link
          href="/self-learning"
          className="inline-flex w-full items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold text-white transition hover:opacity-95"
          style={{ backgroundColor: PRIMARY }}
        >
          Go to Self Learning
        </Link>

        <p className="text-xs text-neutral-500">
          You already own this course. Lifetime access granted.
        </p>
      </div>
    );
  }

  // ---------- SIGNED IN BUT NOT PAID ----------
  return (
    <div className="mt-7 space-y-3">
      <CheckoutButton />
      <p className="text-xs text-neutral-500">
        Secure payment via Stripe. One-time purchase.
      </p>
    </div>
  );
}
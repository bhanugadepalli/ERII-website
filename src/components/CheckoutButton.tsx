"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const PRIMARY = "#0B3D91";

export default function CheckoutButton() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const startCheckout = async () => {
    try {
      setLoading(true);

      const res = await fetch("/api/stripe/checkout", { method: "POST" });
      const data = (await res.json()) as { url?: string; error?: string };

      // If user is not signed in, your API should return 401
      if (res.status === 401) {
        router.push("/sign-in");
        return;
      }

      if (!res.ok || !data.url) {
        alert(data.error || "Checkout failed. Please try again.");
        return;
      }

      window.location.href = data.url;
    } catch {
      alert("Checkout failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={startCheckout}
      disabled={loading}
      className="inline-flex w-full items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold text-white transition disabled:opacity-60"
      style={{ backgroundColor: PRIMARY }}
    >
      {loading ? "Redirecting…" : "Buy access"}
    </button>
  );
}
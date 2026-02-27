import Link from "next/link";
import { auth, currentUser } from "@clerk/nextjs/server";

const PRIMARY = "#0B3D91";
const ACCENT = "#1F5FBF";
const TINT = "#EEF3FB";

type PurchaseMeta = {
  sessionId?: string;
  amount?: number; // cents
  currency?: string;
  purchasedAt?: string;
  receiptUrl?: string | null;
};

export default async function BillingPage() {
  const { userId } = await auth();
  if (!userId) return null;

  const user = await currentUser();
  const purchase = (user?.publicMetadata?.purchase as PurchaseMeta | undefined) ?? undefined;

  const amount = purchase?.amount ? (purchase.amount / 100).toFixed(2) : null;
  const date = purchase?.purchasedAt ? new Date(purchase.purchasedAt).toLocaleString() : null;

  return (
    <div className="bg-neutral-50">
      <div style={{ background: `linear-gradient(to bottom, ${TINT}, white, #FAFAFA)` }}>
        <section className="mx-auto max-w-6xl px-5 pt-12 pb-10 md:pt-14">
          <h1
            className="border-l-4 pl-4 text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl"
            style={{ borderColor: ACCENT }}
          >
            Billing history
          </h1>
          <p className="mt-4 text-sm leading-7 text-neutral-600">
            Your purchase record for the ERII Self-Learning Program.
          </p>
        </section>
      </div>

      <section className="mx-auto max-w-6xl px-5 pb-16">
        <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
          {!purchase ? (
            <>
              <div className="text-sm text-neutral-600">No purchases found.</div>
              <div className="mt-6">
                <Link
                  href="/pricing"
                  className="inline-flex items-center rounded-xl px-6 py-3 text-sm font-semibold text-white transition hover:opacity-95"
                  style={{ backgroundColor: PRIMARY }}
                >
                  View pricing
                </Link>
              </div>
            </>
          ) : (
            <div className="space-y-4">
              <div className="grid gap-3 md:grid-cols-2 text-sm">
                <div className="rounded-2xl bg-neutral-50 p-4">
                  <div className="text-xs text-neutral-500">Amount</div>
                  <div className="mt-1 font-semibold text-neutral-900">
                    {amount ? `$${amount}` : "—"} {purchase.currency ? purchase.currency : ""}
                  </div>
                </div>
                <div className="rounded-2xl bg-neutral-50 p-4">
                  <div className="text-xs text-neutral-500">Purchased</div>
                  <div className="mt-1 font-semibold text-neutral-900">{date ?? "—"}</div>
                </div>
                <div className="rounded-2xl bg-neutral-50 p-4 md:col-span-2">
                  <div className="text-xs text-neutral-500">Order / Session</div>
                  <div className="mt-1 font-mono text-xs text-neutral-800">
                    {purchase.sessionId ?? "—"}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="/self-learning"
                  className="inline-flex items-center rounded-xl px-6 py-3 text-sm font-semibold text-white transition hover:opacity-95"
                  style={{ backgroundColor: PRIMARY }}
                >
                  Go to course
                </Link>

                {purchase.receiptUrl ? (
                  <a
                    href={purchase.receiptUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-xl border bg-white px-6 py-3 text-sm font-semibold text-neutral-900 hover:bg-neutral-50 transition"
                    style={{ borderColor: ACCENT }}
                  >
                    Download receipt
                  </a>
                ) : (
                  <Link
                    href="/contact"
                    className="inline-flex items-center rounded-xl border bg-white px-6 py-3 text-sm font-semibold text-neutral-900 hover:bg-neutral-50 transition"
                    style={{ borderColor: ACCENT }}
                  >
                    Request receipt
                  </Link>
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
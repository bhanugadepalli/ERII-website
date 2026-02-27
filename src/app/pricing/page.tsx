import Link from "next/link";
import { auth, currentUser } from "@clerk/nextjs/server";
import PricingCTA from "@/components/PricingCTA";

const PRIMARY = "#0B3D91";
const ACCENT = "#1F5FBF";
const TINT = "#EEF3FB";

export default async function PricingPage() {
  const { userId } = await auth();
  const user = userId ? await currentUser() : null;
  const hasAccess = Boolean(user?.publicMetadata?.paidCourseAccess);

  return (
    <div className="bg-neutral-50">
      {/* Hero */}
      <div
        style={{
          background: `linear-gradient(to bottom, ${TINT}, white, #FAFAFA)`,
        }}
      >
        <section className="mx-auto max-w-6xl px-5 pt-12 pb-10 md:pt-14">
          <div className="max-w-3xl">
            <h1
              className="border-l-4 pl-4 text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl"
              style={{ borderColor: ACCENT }}
            >
              Pricing
            </h1>

            <p className="mt-4 text-sm leading-7 text-neutral-600">
              Purchase lifetime access to the ERII Self-Learning Program.
              Enterprise cohort delivery and advisory-integrated programs are
              available separately.
            </p>

            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-xl border bg-white px-6 py-3 text-sm font-semibold text-neutral-900 hover:bg-neutral-50"
                style={{ borderColor: ACCENT }}
              >
                Request enterprise pricing
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Plans */}
      <section className="mx-auto max-w-6xl px-5 pb-16">
        <div className="grid gap-6 md:grid-cols-3">
          {/* Self-Learning */}
          <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
            <div className="text-sm font-semibold" style={{ color: PRIMARY }}>
              Self-Learning Program
            </div>

            <div className="mt-3 text-3xl font-semibold text-neutral-900">
              $1,499{" "}
              <span className="text-base font-medium text-neutral-500">
                one-time payment
              </span>
            </div>

            <p className="mt-3 text-sm leading-6 text-neutral-600">
              Lifetime access to the self-paced curriculum, downloadable models
              and templates, and certification pathway.
            </p>

            <ul className="mt-5 space-y-2 text-sm text-neutral-700">
              <li>• Lifetime access (no subscription)</li>
              <li>• Full module library</li>
              <li>• Downloadable model pack & templates</li>
              <li>• CEDAI™ assessment pathway</li>
              <li>• Future updates included</li>
            </ul>

            {/* ✅ smart CTA: sign-in/sign-up + buy access OR go to course */}
            <PricingCTA hasAccess={hasAccess} />
          </div>

          {/* Enterprise Cohort */}
          <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
            <div className="text-sm font-semibold" style={{ color: PRIMARY }}>
              Enterprise Cohort
            </div>

            <div className="mt-3 text-3xl font-semibold text-neutral-900">
              Custom{" "}
              <span className="text-base font-medium text-neutral-500">
                / cohort
              </span>
            </div>

            <p className="mt-3 text-sm leading-6 text-neutral-600">
              Instructor-led enterprise delivery with custom case work, scoring
              rubric, governance alignment, and executive reporting.
            </p>

            <ul className="mt-5 space-y-2 text-sm text-neutral-700">
              <li>• Cohort workshops + Q&amp;A</li>
              <li>• Applied enterprise case study</li>
              <li>• Custom governance templates</li>
              <li>• Executive summary memo</li>
            </ul>

            <div className="mt-7">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold text-white transition hover:opacity-95"
                style={{ backgroundColor: PRIMARY }}
              >
                Request enterprise proposal
              </Link>
            </div>
          </div>

          {/* Advisory + Program */}
          <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
            <div className="text-sm font-semibold" style={{ color: PRIMARY }}>
              Advisory + Program
            </div>

            <div className="mt-3 text-3xl font-semibold text-neutral-900">
              Custom{" "}
              <span className="text-base font-medium text-neutral-500">
                / engagement
              </span>
            </div>

            <p className="mt-3 text-sm leading-6 text-neutral-600">
              Advisory integrated with training to accelerate roadmap decisions
              with risk-aware financial framing.
            </p>

            <ul className="mt-5 space-y-2 text-sm text-neutral-700">
              <li>• Strategy briefing + roadmap</li>
              <li>• Risk &amp; financial modeling</li>
              <li>• Executive-ready deliverables</li>
              <li>• Optional cohort integration</li>
            </ul>

            <div className="mt-7">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-xl border bg-white px-6 py-3 text-sm font-semibold text-neutral-900 hover:bg-neutral-50"
                style={{ borderColor: ACCENT }}
              >
                Discuss advisory options
              </Link>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-10 rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-neutral-900">FAQ</h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2 text-sm text-neutral-700">
            <div>
              <div className="font-semibold text-neutral-900">
                Is this a subscription?
              </div>
              <p className="mt-2 text-neutral-600">
                No. The $1,499 purchase provides lifetime access. No recurring charges.
              </p>
            </div>
            <div>
              <div className="font-semibold text-neutral-900">
                Can certification be purchased separately?
              </div>
              <p className="mt-2 text-neutral-600">
                No. CEDAI™ credentials are issued as part of the training pathway.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
import Link from "next/link";

const PRIMARY = "#0B3D91";
const ACCENT = "#1F5FBF";
const TINT = "#EEF3FB";

const Card = ({
  title,
  desc,
  bullets,
  href,
  cta,
}: {
  title: string;
  desc: string;
  bullets: string[];
  href: string;
  cta: string;
}) => (
  <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:shadow-md hover:border-neutral-300">
    <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
    <p className="mt-2 text-sm leading-6 text-neutral-600">{desc}</p>

    <ul className="mt-4 space-y-2 text-sm text-neutral-700">
      {bullets.map((b) => (
        <li key={b} className="flex gap-2">
          <span
            className="mt-1 inline-block h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: ACCENT }}
          />
          <span>{b}</span>
        </li>
      ))}
    </ul>

    <div className="mt-5">
      <Link
        href={href}
        className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-semibold text-white transition hover:opacity-95"
        style={{ backgroundColor: PRIMARY }}
      >
        {cta}
      </Link>
    </div>
  </div>
);

export default function AdvisoryPage() {
  return (
    <div className="bg-neutral-50">
      {/* Hero Wash */}
      <div
        style={{
          background: `linear-gradient(to bottom, ${TINT}, white, #FAFAFA)`,
        }}
      >
        <section className="mx-auto max-w-6xl px-5 pt-10 pb-10 md:pt-12">
          <div className="max-w-3xl">
            <h1
              className="border-l-4 pl-4 text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl"
              style={{ borderColor: ACCENT }}
            >
              Advisory & Consulting
            </h1>

            <p className="mt-4 text-sm leading-7 text-neutral-600">
              Time-boxed advisory engagements and executive briefings designed to
              accelerate infrastructure decisions with governance clarity and
              risk-aware financial framing.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-xl px-6 py-3 text-sm font-semibold text-white transition hover:opacity-95"
                style={{ backgroundColor: PRIMARY }}
              >
                Request an advisory briefing
              </Link>

              <Link
                href="/programs"
                className="inline-flex items-center rounded-xl border bg-white px-6 py-3 text-sm font-semibold text-neutral-900 hover:bg-neutral-50"
                style={{ borderColor: ACCENT }}
              >
                View programs
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Offerings */}
      <section className="mx-auto max-w-6xl px-5 pb-14">
        <div className="grid gap-6 md:grid-cols-3">
          <Card
            title="Infrastructure Strategy Briefing"
            desc="Executive review of current state, growth constraints, and top investment moves."
            bullets={[
              "2–4 week engagement",
              "Board-ready summary memo",
              "Risk hotspots + next steps",
            ]}
            href="/contact"
            cta="Request briefing"
          />

          <Card
            title="AI Readiness Assessment"
            desc="Thermal, power, and fabric readiness for AI-density growth."
            bullets={[
              "Site constraints & retrofit risks",
              "Liquid cooling readiness",
              "Prioritized roadmap",
            ]}
            href="/contact"
            cta="Start assessment"
          />

          <Card
            title="Resiliency Governance Workshop"
            desc="Incident command, commissioning governance, and operational drift controls."
            bullets={[
              "Policy + escalation ladder",
              "Table-top simulation",
              "Governance charter alignment",
            ]}
            href="/contact"
            cta="Run a workshop"
          />
        </div>
      </section>

      {/* Delivery model */}
      <section className="mx-auto max-w-6xl px-5 pb-16">
        <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-neutral-900">
            How engagements are delivered
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-neutral-600">
            Engagements are outcome-based and time-boxed. We focus on artifacts
            leaders can use immediately: decision memos, governance charters,
            executive dashboards, and prioritized roadmaps.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3 text-sm text-neutral-700">
            <div className="rounded-2xl p-4" style={{ backgroundColor: TINT }}>
              • Executive interviews + current-state review
            </div>
            <div className="rounded-2xl p-4" style={{ backgroundColor: TINT }}>
              • Financial & risk framing with sensitivity analysis
            </div>
            <div className="rounded-2xl p-4" style={{ backgroundColor: TINT }}>
              • Board-ready deliverables and next-step plan
            </div>
          </div>

          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl px-6 py-3 text-sm font-semibold text-white transition hover:opacity-95"
              style={{ backgroundColor: PRIMARY }}
            >
              Schedule an executive call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
import Link from "next/link";

const PRIMARY = "#0B3D91";
const ACCENT = "#1F5FBF";
const TINT = "#EEF3FB";

const Card = ({
  title,
  desc,
  bullets,
  cta,
  href,
}: {
  title: string;
  desc: string;
  bullets: string[];
  cta: string;
  href: string;
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

export default function ProgramsPage() {
  return (
    <div className="bg-neutral-50">
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
              Executive Programs
            </h1>

            <p className="mt-4 text-sm leading-7 text-neutral-600">
              Delivered self-paced, cohort-based, or enterprise intensive. Each
              program includes executive-ready models, templates, and governance
              artifacts designed for real-world enterprise deployment.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-xl px-6 py-3 text-sm font-semibold text-white transition hover:opacity-95"
                style={{ backgroundColor: PRIMARY }}
              >
                Request syllabus
              </Link>

              <Link
                href="/advisory"
                className="inline-flex items-center rounded-xl border bg-white px-6 py-3 text-sm font-semibold text-neutral-900 hover:bg-neutral-50"
                style={{ borderColor: ACCENT }}
              >
                Advisory options
              </Link>
            </div>
          </div>
        </section>
      </div>

      <section className="mx-auto max-w-6xl px-5 pb-14">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <Card
            title="Data Center Build & Operations"
            desc="End-to-end facility and operations mastery covering capacity planning, power strategy, cooling architecture, commissioning governance, and operational risk management."
            bullets={[
              "6-week / 15-hour structured format",
              "Excel models & planning templates included",
              "Resiliency governance integration (BC/DR/IM)",
              "Executive-level decision framing",
            ]}
            cta="Get syllabus"
            href="/contact"
          />

          <Card
            title="AI Infrastructure Readiness"
            desc="Design and modernize enterprise environments for AI density, liquid cooling transitions, and HPC fabric economics."
            bullets={[
              "Thermal strategy & retrofit constraints",
              "Fabric oversubscription economics",
              "Phased modernization roadmap",
              "Board-ready investment framing",
            ]}
            cta="Discuss your environment"
            href="/contact"
          />

          <Card
            title="Infrastructure Financial Engineering"
            desc="Risk-aware capital planning using NPV, expected loss modeling, sensitivity analysis, and investment sequencing."
            bullets={[
              "Board-grade decision memos",
              "Risk & resiliency economics",
              "Scenario planning frameworks",
              "Model pack included",
            ]}
            cta="See sample models"
            href="/contact"
          />

          <Card
            title="Enterprise Resiliency Management"
            desc="Enterprise Resiliency Planning (Business Continuity Planning), IT Disaster Recovery, IT Service Continuity, Technology Resiliency, Cyber Resiliency, Complex Incident and Crisis Management, and Executive Tabletop Exercise simulation."
            bullets={[
              "Business continuity planning",
              "IT disaster recovery & service continuity",
              "Technology & cyber resiliency",
              "Incident, crisis, and tabletop simulation",
            ]}
            cta="Request syllabus"
            href="/contact"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16">
        <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-neutral-900">
            Enterprise Delivery Options
          </h2>

          <p className="mt-3 max-w-3xl text-sm leading-7 text-neutral-600">
            Programs can be delivered as individual executive enrollments,
            structured enterprise cohorts, or customized internal intensives
            aligned to your organization’s infrastructure roadmap.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3 text-sm text-neutral-700">
            <div className="rounded-2xl p-4" style={{ backgroundColor: TINT }}>
              • Self-paced executive track
            </div>
            <div className="rounded-2xl p-4" style={{ backgroundColor: TINT }}>
              • Cohort-based enterprise delivery
            </div>
            <div className="rounded-2xl p-4" style={{ backgroundColor: TINT }}>
              • Custom advisory-integrated program
            </div>
          </div>

          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl px-6 py-3 text-sm font-semibold text-white transition hover:opacity-95"
              style={{ backgroundColor: PRIMARY }}
            >
              Schedule an enterprise discussion
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
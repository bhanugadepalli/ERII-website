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
  <div className="flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:border-neutral-300 hover:shadow-md">
    <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
    <p className="mt-3 text-sm leading-6 text-neutral-600">{desc}</p>

    <ul className="mt-5 space-y-2 text-sm text-neutral-700">
      {bullets.map((b) => (
        <li key={b} className="flex gap-3">
          <span
            className="mt-2 inline-block h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: ACCENT }}
          />
          <span>{b}</span>
        </li>
      ))}
    </ul>

    <div className="mt-auto pt-6">
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

const DeliveryCard = ({ text }: { text: string }) => (
  <div
    className="flex h-full items-start rounded-2xl p-4 text-sm leading-7 text-neutral-700"
    style={{ backgroundColor: TINT }}
  >
    {text}
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
        <section className="mx-auto max-w-6xl px-5 pb-12 pt-12 md:pb-14 md:pt-16">
          <div className="max-w-4xl">
            <p
              className="text-sm font-semibold uppercase tracking-[0.18em]"
              style={{ color: PRIMARY }}
            >
              Executive Programs
            </p>

            <h1
              className="mt-4 border-l-4 pl-4 text-4xl font-semibold tracking-tight text-neutral-900 md:text-5xl"
              style={{ borderColor: ACCENT }}
            >
              Executive programs for data center, infrastructure, and resilience leaders.
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-neutral-600 md:text-lg">
              Programs are delivered self-paced, cohort-based, or through enterprise
              intensives. Each offering includes executive-ready models, templates,
              and governance artifacts designed for practical enterprise use.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-xl px-6 py-3 text-sm font-semibold text-white transition hover:opacity-95"
                style={{ backgroundColor: PRIMARY }}
              >
                Request Syllabus
              </Link>

              <Link
                href="/advisory"
                className="inline-flex items-center rounded-xl border bg-white px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-50"
                style={{ borderColor: ACCENT }}
              >
                View Advisory Options
              </Link>
            </div>
          </div>
        </section>
      </div>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-3xl">
          <p
            className="text-sm font-semibold uppercase tracking-[0.18em]"
            style={{ color: PRIMARY }}
          >
            Program Portfolio
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
            Structured programs designed for practical decision-making and operational readiness.
          </h2>

          <p className="mt-4 text-base leading-7 text-neutral-600">
            Each program is designed to strengthen leadership capability across
            infrastructure strategy, resilience, financial decision-making, and
            operational discipline.
          </p>
        </div>

        <div className="mt-10 grid auto-rows-fr gap-6 md:grid-cols-2 xl:grid-cols-4">
          <Card
            title="Data Center Build & Operations"
            desc="End-to-end facility and operations coverage across capacity planning, power strategy, cooling architecture, commissioning governance, and operational risk management."
            bullets={[
              "6-week / 15-hour structured format",
              "Excel models and planning templates included",
              "Resiliency governance integration",
              "Executive-level decision framing",
            ]}
            cta="Get Syllabus"
            href="/contact"
          />

          <Card
            title="AI Infrastructure Readiness"
            desc="Design and modernize enterprise environments for AI density, liquid cooling transitions, and high-performance compute economics."
            bullets={[
              "Thermal strategy and retrofit constraints",
              "Fabric oversubscription economics",
              "Phased modernization roadmap",
              "Board-ready investment framing",
            ]}
            cta="Discuss Your Environment"
            href="/contact"
          />

          <Card
            title="Infrastructure Financial Engineering"
            desc="Risk-aware capital planning using NPV, expected loss modeling, sensitivity analysis, and investment sequencing."
            bullets={[
              "Board-grade decision memos",
              "Risk and resiliency economics",
              "Scenario planning frameworks",
              "Model pack included",
            ]}
            cta="See Sample Models"
            href="/contact"
          />

          <Card
            title="Enterprise Resiliency Management"
            desc="Design, govern, and operationalize enterprise resiliency capabilities across continuity strategy, technology recovery, and disruption response."
            bullets={[
              "Business continuity planning",
              "IT disaster recovery and service continuity",
              "Technology and cyber resiliency",
              "Incident, crisis, and tabletop simulation",
            ]}
            cta="Request Syllabus"
            href="/contact"
          />
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-start">
            <div>
              <p
                className="text-sm font-semibold uppercase tracking-[0.18em]"
                style={{ color: PRIMARY }}
              >
                Enterprise Delivery Options
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
                Flexible formats aligned to enterprise learning and transformation goals.
              </h2>

              <p className="mt-4 max-w-3xl text-base leading-7 text-neutral-600">
                Programs can be delivered as individual executive enrollments,
                structured enterprise cohorts, or customized internal intensives
                aligned to your organization’s infrastructure roadmap.
              </p>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-xl px-6 py-3 text-sm font-semibold text-white transition hover:opacity-95"
                  style={{ backgroundColor: PRIMARY }}
                >
                  Schedule an Enterprise Discussion
                </Link>
              </div>
            </div>

            <div className="grid auto-rows-fr gap-4">
              <DeliveryCard text="Self-paced executive track for leaders who need flexibility without sacrificing practical applicability." />
              <DeliveryCard text="Cohort-based enterprise delivery for teams building common language, governance discipline, and execution readiness." />
              <DeliveryCard text="Custom advisory-integrated program design aligned to infrastructure priorities, resilience objectives, and operating model needs." />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
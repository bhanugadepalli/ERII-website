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
    className="flex h-full items-start rounded-2xl p-5 text-sm leading-7 text-neutral-700"
    style={{ backgroundColor: TINT }}
  >
    {text}
  </div>
);

export default function AdvisoryPage() {
  return (
    <div className="bg-neutral-50">
      <section
        style={{
          background: `linear-gradient(to bottom, ${TINT}, white, #FAFAFA)`,
        }}
      >
        <div className="mx-auto max-w-6xl px-5 pb-14 pt-14 md:pb-16 md:pt-18">
          <div className="max-w-4xl">
            <p
              className="text-sm font-semibold uppercase tracking-[0.18em]"
              style={{ color: PRIMARY }}
            >
              Advisory Services
            </p>

            <h1
              className="mt-4 max-w-5xl border-l-4 pl-4 text-4xl font-semibold tracking-tight text-neutral-900 md:text-5xl"
              style={{ borderColor: ACCENT }}
            >
              Enterprise resilience, data center, infrastructure risk, and cloud continuity advisory.
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-neutral-600 md:text-lg">
              ERI Advisory helps enterprise leaders make better infrastructure decisions,
              strengthen operational resilience, improve technology risk oversight,
              and modernize data center and cloud continuity capabilities across
              complex and regulated environments.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-xl px-6 py-3 text-sm font-semibold text-white transition hover:opacity-95"
                style={{ backgroundColor: PRIMARY }}
              >
                Schedule Consultation
              </Link>

              <Link
                href="/programs"
                className="inline-flex items-center rounded-xl border bg-white px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-50"
                style={{ borderColor: ACCENT }}
              >
                View Programs
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-3xl">
          <p
            className="text-sm font-semibold uppercase tracking-[0.18em]"
            style={{ color: PRIMARY }}
          >
            Core Engagements
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
            Advisory offerings built around enterprise outcomes.
          </h2>

          <p className="mt-4 text-base leading-7 text-neutral-600">
            Each engagement is designed to help leadership teams reduce risk,
            improve continuity, and make higher-confidence infrastructure decisions.
          </p>
        </div>

        <div className="mt-10 grid auto-rows-fr gap-6 md:grid-cols-2 xl:grid-cols-3">
          <Card
            title="Enterprise Resilience Assessment"
            desc="Evaluate current-state resilience capabilities, identify critical gaps, and define a practical roadmap across continuity, recovery, and governance."
            bullets={[
              "Enterprise resiliency planning",
              "Business continuity and disaster recovery modernization",
              "Multi-region failover and IT service continuity",
            ]}
            href="/contact"
            cta="Request Assessment"
          />

          <Card
            title="Technology Risk & Oversight Review"
            desc="Strengthen technology risk governance, improve executive visibility, and support enhanced due diligence across critical services and providers."
            bullets={[
              "Technology risk and resiliency management",
              "IT risk and resiliency oversight",
              "Third-party technology service provider risk management",
            ]}
            href="/contact"
            cta="Discuss Oversight"
          />

          <Card
            title="Cyber Resilience Workshop"
            desc="Improve preparedness for cyber disruption through recovery readiness reviews, executive simulations, and operational resilience alignment."
            bullets={[
              "Cyber resiliency strategy",
              "Executive exercise simulation",
              "Recovery readiness and crisis support",
            ]}
            href="/contact"
            cta="Run a Workshop"
          />

          <Card
            title="Cloud Continuity Advisory"
            desc="Design resilient adoption and continuity strategies across public, private, and hybrid cloud environments."
            bullets={[
              "Public, private, and hybrid cloud adoption",
              "Cloud continuity architecture",
              "Resilience-by-design assessments",
            ]}
            href="/contact"
            cta="Plan Continuity"
          />

          <Card
            title="Data Center Strategy & Site Advisory"
            desc="Support major infrastructure decisions affecting uptime, scale, operating discipline, and long-term capacity planning."
            bullets={[
              "Data center site evaluation and selection",
              "Colocation strategy and vendor selection",
              "High-density data center planning",
            ]}
            href="/contact"
            cta="Explore Strategy"
          />

          <Card
            title="Operations, Metrics & Optimization"
            desc="Operationalize resilience and performance through procedures, dashboards, and process improvement."
            bullets={[
              "MOPs and SOPs development",
              "Metrics and reporting automation",
              "Process automation and business optimization",
            ]}
            href="/contact"
            cta="Improve Operations"
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
                How Engagements Are Delivered
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
                Focused, outcome-based advisory built for executive teams.
              </h2>

              <p className="mt-4 max-w-3xl text-base leading-7 text-neutral-600">
                Engagements are time-boxed and designed around artifacts leaders
                can use immediately: executive briefings, decision memos,
                governance frameworks, dashboards, resilience roadmaps, and
                infrastructure recommendations.
              </p>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-xl px-6 py-3 text-sm font-semibold text-white transition hover:opacity-95"
                  style={{ backgroundColor: PRIMARY }}
                >
                  Schedule an Executive Call
                </Link>
              </div>
            </div>

            <div className="grid auto-rows-fr gap-4">
              <DeliveryCard text="Executive interviews, current-state review, and dependency analysis across resilience, risk, data center, and cloud environments." />
              <DeliveryCard text="Risk, continuity, and infrastructure decision framing that helps leadership teams prioritize investments and reduce operational exposure." />
              <DeliveryCard text="Board-ready outputs, practical action plans, and clear next steps for modernization, oversight, and recovery readiness." />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
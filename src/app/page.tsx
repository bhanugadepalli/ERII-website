import Link from "next/link";

const PRIMARY = "#0B3D91";
const PRIMARY_LIGHT = "#EEF3FB";
const PRIMARY_ACCENT = "#1F5FBF";

const Badge = ({ children }: { children: React.ReactNode }) => (
  <div
    className="rounded-2xl px-6 py-4 text-center text-sm font-semibold shadow-sm md:text-base"
    style={{
      background: "linear-gradient(to bottom, white, #f8fafc)",
      color: PRIMARY,
      border: "1px solid #dbe4ef",
    }}
  >
    {children}
  </div>
);

const ServiceCard = ({
  title,
  description,
  bullets,
}: {
  title: string;
  description: string;
  bullets: string[];
}) => (
  <div className="h-full rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
    <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
    <p className="mt-3 text-sm leading-6 text-neutral-600">{description}</p>

    <ul className="mt-5 space-y-2 text-sm text-neutral-700">
      {bullets.map((item) => (
        <li key={item} className="flex gap-3">
          <span
            className="mt-2 inline-block h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: PRIMARY_ACCENT }}
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const ValueCard = ({
  title,
  text,
}: {
  title: string;
  text: string;
}) => (
  <div
    className="h-full rounded-2xl p-5"
    style={{ backgroundColor: PRIMARY_LIGHT }}
  >
    <h3 className="text-base font-semibold text-neutral-900">{title}</h3>
    <p className="mt-2 text-sm leading-6 text-neutral-700">{text}</p>
  </div>
);

const StatCard = ({
  title,
  text,
}: {
  title: string;
  text: string;
}) => (
  <div className="h-full rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
    <div
      className="text-sm font-semibold uppercase tracking-[0.18em]"
      style={{ color: PRIMARY }}
    >
      {title}
    </div>
    <p className="mt-3 text-sm leading-6 text-neutral-600">{text}</p>
  </div>
);

export default function Page() {
  return (
    <div className="bg-neutral-50">
      <section
        style={{
          background: `linear-gradient(to bottom, ${PRIMARY_LIGHT}, white)`,
        }}
      >
        <div className="mx-auto max-w-6xl px-5 pb-20 pt-14 md:pb-24 md:pt-24">
          <div className="max-w-4xl">
            <div className="grid max-w-4xl gap-3 sm:grid-cols-3">
              <Badge>Data Center Advisory</Badge>
              <Badge>Enterprise Resilience</Badge>
              <Badge>IT Risk & Governance</Badge>
            </div>

            <h1
              className="mt-8 max-w-4xl border-l-4 pl-4 text-4xl font-semibold tracking-tight text-neutral-900 md:text-6xl"
              style={{ borderColor: PRIMARY_ACCENT }}
            >
              Build resilient data center and enterprise technology platforms
              that withstand disruption.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-600">
              ERI Advisory helps enterprise leaders strengthen operational
              resilience, technology risk governance, cyber recovery readiness,
              data center strategy, cloud continuity, and mission-critical
              infrastructure performance across complex and regulated
              environments.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/advisory"
                className="inline-flex items-center rounded-xl px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                style={{ backgroundColor: PRIMARY }}
              >
                Explore Advisory Services
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center rounded-xl border px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-white"
                style={{ borderColor: PRIMARY_ACCENT }}
              >
                Schedule Consultation
              </Link>
            </div>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            <StatCard
              title="Resilience & Continuity"
              text="Strengthen continuity strategy, recovery readiness, and operational resilience across critical services."
            />
            <StatCard
              title="Data Center"
              text="Support infrastructure planning, site strategy, operational discipline, and high-density growth decisions."
            />
            <StatCard
              title="Risk"
              text="Improve governance, executive reporting, and oversight across technology, cyber, and third-party dependencies."
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-3xl">
          <p
            className="text-sm font-semibold uppercase tracking-[0.18em]"
            style={{ color: PRIMARY }}
          >
            Core Advisory Services
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
            Advisory services designed for resilience, infrastructure, and risk
            leaders.
          </h2>
          <p className="mt-4 text-base leading-7 text-neutral-600">
            Clear service lines help enterprise buyers quickly understand where
            you create value and how to engage.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <ServiceCard
            title="Enterprise Resilience & Continuity"
            description="Strengthen continuity capabilities and recovery readiness across mission-critical services."
            bullets={[
              "Enterprise resiliency planning",
              "Business continuity and disaster recovery modernization",
              "Multi-region failover and IT service continuity",
            ]}
          />

          <ServiceCard
            title="Technology Risk & Oversight"
            description="Improve governance, independent challenge, and executive visibility for high-risk environments."
            bullets={[
              "Technology risk and resiliency management",
              "Enhanced due diligence and oversight",
              "Third-party technology services provider risk management",
            ]}
          />

          <ServiceCard
            title="Cyber Resilience"
            description="Improve preparedness for cyber disruption and enterprise recovery scenarios."
            bullets={[
              "Cyber resiliency strategy",
              "Executive exercise simulation",
              "Recovery readiness and crisis support",
            ]}
          />

          <ServiceCard
            title="Cloud Continuity"
            description="Design resilient adoption and continuity approaches across public, private, and hybrid environments."
            bullets={[
              "Public, private, and hybrid cloud adoption",
              "Cloud continuity architecture",
              "Resilience-by-design assessments",
            ]}
          />

          <ServiceCard
            title="Data Center & Infrastructure Advisory"
            description="Support major infrastructure decisions that affect uptime, scalability, and operating discipline."
            bullets={[
              "Site evaluation and selection",
              "Colocation strategy and vendor selection",
              "High-density data center planning",
            ]}
          />

          <ServiceCard
            title="Operations, Metrics & Optimization"
            description="Operationalize performance through procedures, dashboards, and process improvement."
            bullets={[
              "MOPs and SOPs development",
              "Metrics and reporting automation",
              "Process automation and business optimization",
            ]}
          />
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p
                className="text-sm font-semibold uppercase tracking-[0.18em]"
                style={{ color: PRIMARY }}
              >
                What Clients Gain
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
                Practical outcomes, stronger resilience, and clearer executive
                direction.
              </h2>
              <p className="mt-4 text-base leading-7 text-neutral-600">
                Clients gain clearer priorities, stronger operational resilience,
                improved data center decision-making, and practical roadmaps for
                continuity, infrastructure modernization, and executive reporting.
              </p>
            </div>

            <div className="grid gap-4">
              <ValueCard
                title="Resilience and continuity strategies aligned to executive priorities"
                text="Advisory support that strengthens critical service continuity, recovery readiness, and enterprise resilience across complex environments."
              />
              <ValueCard
                title="Better data center and infrastructure decisions"
                text="Clearer direction on site strategy, colocation, high-density planning, operational readiness, and infrastructure lifecycle priorities."
              />
              <ValueCard
                title="Actionable roadmaps for risk reduction and modernization"
                text="Prioritized steps for technology risk oversight, cloud continuity, infrastructure modernization, and executive reporting."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
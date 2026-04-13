const PRIMARY = "#0B3D91";
const ACCENT = "#1F5FBF";
const TINT = "#EEF3FB";

const PillarCard = ({
  title,
  text,
}: {
  title: string;
  text: string;
}) => (
  <div className="h-full rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
    <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
    <p className="mt-3 text-sm leading-7 text-neutral-600">{text}</p>
  </div>
);

const PrincipleCard = ({ text }: { text: string }) => (
  <div
    className="flex h-full items-start rounded-2xl p-4 text-sm leading-7 text-neutral-700"
    style={{ backgroundColor: TINT }}
  >
    {text}
  </div>
);

export default function AboutPage() {
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
              About ERI Advisory
            </p>

            <h1
              className="mt-4 border-l-4 pl-4 text-4xl font-semibold tracking-tight text-neutral-900 md:text-5xl"
              style={{ borderColor: ACCENT }}
            >
              Advisory services built for resiliency, infrastructure, and high-consequence decisions.
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-neutral-600 md:text-lg">
              ERI Advisory helps enterprise leaders strengthen operational
              resiliency, improve data center and infrastructure decisions,
              enhance technology risk oversight, and modernize continuity
              capabilities across complex and regulated environments.
            </p>
          </div>
        </section>
      </div>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-3xl">
          <p
            className="text-sm font-semibold uppercase tracking-[0.18em]"
            style={{ color: PRIMARY }}
          >
            What We Do
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
            Practical advisory for enterprise resiliency and mission-critical infrastructure.
          </h2>

          <p className="mt-4 text-base leading-7 text-neutral-600">
            Our work is designed to help executive and operational leaders make
            better decisions across resiliency strategy, data center planning,
            cloud continuity, infrastructure risk, and operational readiness.
          </p>
        </div>

        <div className="mt-10 grid auto-rows-fr gap-6 md:grid-cols-2 xl:grid-cols-3">
          <PillarCard
            title="Enterprise Resiliency"
            text="Support continuity strategy, recovery readiness, resiliency governance, and operational response planning for critical services."
          />
          <PillarCard
            title="Data Center & Infrastructure"
            text="Advise on site strategy, colocation decisions, high-density planning, operational discipline, and infrastructure lifecycle priorities."
          />
          <PillarCard
            title="Technology Risk & Cloud Continuity"
            text="Improve technology risk oversight, third-party dependency understanding, cloud continuity design, and executive reporting clarity."
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
                How We Work
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
                Deliverable-driven, executive-ready, and grounded in real operating environments.
              </h2>

              <p className="mt-4 text-base leading-7 text-neutral-600">
                Our approach is built around practical outputs leaders can use
                immediately: decision frameworks, resiliency roadmaps, governance
                structures, dashboards, operating procedures, and implementation
                priorities.
              </p>

              <p className="mt-4 text-base leading-7 text-neutral-600">
                We focus on clarity, disciplined thinking, and recommendations
                that connect resiliency, infrastructure, and risk to business
                outcomes.
              </p>
            </div>

            <div className="grid auto-rows-fr gap-4">
              <PrincipleCard text="Transparent assumptions that make tradeoffs, constraints, and decision logic visible to stakeholders." />
              <PrincipleCard text="Failure-domain clarity across infrastructure, cloud, operational dependencies, and technology recovery scenarios." />
              <PrincipleCard text="Auditable deliverables that support executive alignment, governance maturity, and practical execution." />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
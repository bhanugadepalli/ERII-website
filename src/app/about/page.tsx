const PRIMARY = "#0B3D91";
const ACCENT = "#1F5FBF";
const TINT = "#EEF3FB";

export default function AboutPage() {
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
              About ERIA Advisory
            </h1>
            <p className="mt-4 text-sm leading-7 text-neutral-600">
              Enterprise Resiliency & Infrastructure Institute (ERII) serves
              enterprise IT and data center operations leaders. We combine
              resiliency governance with modern data center and AI infrastructure
              realities—delivering practical, auditable playbooks and models.
            </p>
          </div>
        </section>
      </div>

      <section className="mx-auto max-w-6xl px-5 pb-14">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
            <h2 className="text-lg font-semibold" style={{ color: PRIMARY }}>
              What we do
            </h2>
            <p className="mt-3 text-sm leading-7 text-neutral-600">
              ERIA Advisory delivers executive education and advisory support
              across data center build & operations, AI infrastructure readiness,
              and enterprise resiliency (BC/DR/Incident Management).
            </p>
            <p className="mt-3 text-sm leading-7 text-neutral-600">
              Our approach is deliverable-driven: models, templates, governance
              charters, and decision frameworks leaders can use immediately.
            </p>
          </div>

          <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
            <h2 className="text-lg font-semibold" style={{ color: PRIMARY }}>
              Principles
            </h2>
            <p className="mt-3 text-sm leading-7 text-neutral-600">
              We focus on transparent assumptions, sensitivity thinking, and
              honest risk communication—so executive stakeholders can make
              decisions with clarity and confidence.
            </p>
            <div className="mt-4 grid gap-3 text-sm text-neutral-700">
              <div className="rounded-2xl p-4" style={{ backgroundColor: TINT }}>
                • Transparent assumptions
              </div>
              <div className="rounded-2xl p-4" style={{ backgroundColor: TINT }}>
                • Failure-domain clarity
              </div>
              <div className="rounded-2xl p-4" style={{ backgroundColor: TINT }}>
                • Auditable deliverables
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
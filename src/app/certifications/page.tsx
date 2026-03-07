import Link from "next/link";

const PRIMARY = "#0B3D91";
const ACCENT = "#1F5FBF";
const TINT = "#EEF3FB";

const LevelCard = ({
  level,
  title,
  desc,
}: {
  level: string;
  title: string;
  desc: string;
}) => (
  <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:shadow-md hover:border-neutral-300">
    <div className="text-xs uppercase tracking-wide text-neutral-500">
      {level}
    </div>
    <div className="mt-2 text-lg font-semibold" style={{ color: PRIMARY }}>
      {title}
    </div>
    <p className="mt-2 text-sm leading-7 text-neutral-600">{desc}</p>
  </div>
);

export default function CertificationsPage() {
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
              Certifications (CEDAI™)
            </h1>

            <p className="mt-4 text-sm leading-7 text-neutral-600">
              Certified Enterprise Data Center & AI Infrastructure (CEDAI™) credentials are earned through ERIA Advisory training
              pathways. We do not sell standalone exams—certification is issued
              upon program completion and applied evaluation.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-xl px-6 py-3 text-sm font-semibold text-white transition hover:opacity-95"
                style={{ backgroundColor: PRIMARY }}
              >
                Add certification to your cohort
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

      {/* Levels */}
      <section className="mx-auto max-w-6xl px-5 pb-14">
        <div className="grid gap-6 md:grid-cols-3">
          <LevelCard
            level="Level 1"
            title="CEDAI™-A (Associate)"
            desc="Foundational literacy across capacity, power, cooling, networking, and operations."
          />
          <LevelCard
            level="Level 2"
            title="CEDAI™-P (Professional)"
            desc="Architecture + financial reasoning + governance execution for enterprise-scale environments."
          />
          <LevelCard
            level="Level 3"
            title="CEDAI™-E (Executive)"
            desc="Board-grade cases and portfolio review: capital strategy, risk governance, and executive communication."
          />
        </div>

        {/* How it works */}
        <div className="mt-8 rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-neutral-900">
            How certification works
          </h2>

          <p className="mt-3 text-sm leading-7 text-neutral-600 max-w-3xl">
            Certifications are structured to reinforce learning outcomes and
            practical execution—not as standalone test-prep products. Enterprise
            cohorts can include instructor-scored capstones and governance
            deliverables.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3 text-sm text-neutral-700">
            <div className="rounded-2xl p-4" style={{ backgroundColor: TINT }}>
              • Assessment aligned to program objectives
            </div>
            <div className="rounded-2xl p-4" style={{ backgroundColor: TINT }}>
              • Applied case work and scenario-based questions
            </div>
            <div className="rounded-2xl p-4" style={{ backgroundColor: TINT }}>
              • Digital badge + certificate with credential ID
            </div>
          </div>

          <div className="mt-6 text-sm text-neutral-600">
            <span className="font-semibold text-neutral-900">Note:</span> CEDAI™
            credentials are issued as part of training pathways. If you need a
            custom enterprise rubric or cohort scoring, we can tailor it.
          </div>

          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl px-6 py-3 text-sm font-semibold text-white transition hover:opacity-95"
              style={{ backgroundColor: PRIMARY }}
            >
              Discuss enterprise certification delivery
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
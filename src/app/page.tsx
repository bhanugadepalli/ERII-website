// src/app/page.tsx
import Link from "next/link";

const PRIMARY = "#0B3D91";
const PRIMARY_HOVER = "#072B6B";
const PRIMARY_LIGHT = "#EEF3FB";
const PRIMARY_ACCENT = "#1F5FBF";

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span
    className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium"
    style={{
      backgroundColor: PRIMARY_LIGHT,
      color: PRIMARY,
      border: `1px solid ${PRIMARY_LIGHT}`,
    }}
  >
    {children}
  </span>
);

const Card = ({
  title,
  desc,
  bullets,
  href,
  cta = "Learn more",
}: {
  title: string;
  desc: string;
  bullets?: string[];
  href: string;
  cta?: string;
}) => (
  <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:shadow-md">
    <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
    <p className="mt-2 text-sm leading-6 text-neutral-600">{desc}</p>

    {bullets?.length ? (
      <ul className="mt-4 space-y-2 text-sm text-neutral-700">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <span
              className="mt-1 inline-block h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: PRIMARY_ACCENT }}
            />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    ) : null}

    <div className="mt-5">
      <Link
        href={href}
        className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-semibold text-white transition"
        style={{ backgroundColor: PRIMARY }}
        onMouseOver={(e) =>
          (e.currentTarget.style.backgroundColor = PRIMARY_HOVER)
        }
        onMouseOut={(e) =>
          (e.currentTarget.style.backgroundColor = PRIMARY)
        }
      >
        {cta}
      </Link>
    </div>
  </div>
);

export default function Page() {
  return (
    <div className="bg-neutral-50">
      {/* Gradient matched to brand */}
      <div
        style={{
          background: `linear-gradient(to bottom, ${PRIMARY_LIGHT}, white)`,
        }}
      >
        <section className="mx-auto max-w-6xl px-5 pt-10 pb-12 md:pt-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge>Executive education</Badge>
                <Badge>Advisory engagements</Badge>
                <Badge>Program certifications (CEDAI™)</Badge>
              </div>

              <h1
                className="mt-6 max-w-xl border-l-4 pl-4 text-4xl font-semibold tracking-tight text-neutral-900 md:text-5xl"
                style={{ borderColor: PRIMARY_ACCENT }}
              >
                Build resilient, AI-ready enterprise infrastructure — with
                capital discipline.
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-neutral-600">
                ERIA Advisory delivers executive programs and advisory support
                across data center build & operations, AI infrastructure
                readiness, resiliency governance, and infrastructure financial
                modeling.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/programs"
                  className="inline-flex items-center rounded-xl px-6 py-3 text-sm font-semibold text-white transition"
                  style={{ backgroundColor: PRIMARY }}
                >
                  Explore Programs
                </Link>

                <Link
                  href="/advisory"
                  className="inline-flex items-center rounded-xl border px-6 py-3 text-sm font-semibold text-neutral-900"
                  style={{ borderColor: PRIMARY_ACCENT }}
                >
                  Advisory Services
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-neutral-200 bg-white p-7 shadow-sm">
              <div
                className="text-sm font-semibold"
                style={{ color: PRIMARY }}
              >
                What You Gain
              </div>

              <div className="mt-4 space-y-4 text-sm text-neutral-700">
                <div
                  className="rounded-2xl p-4"
                  style={{ backgroundColor: PRIMARY_LIGHT }}
                >
                  Executive-ready playbooks and financial models.
                </div>

                <div
                  className="rounded-2xl p-4"
                  style={{ backgroundColor: PRIMARY_LIGHT }}
                >
                  Certification earned through structured assessment.
                </div>

                <div
                  className="rounded-2xl p-4"
                  style={{ backgroundColor: PRIMARY_LIGHT }}
                >
                  Flexible enterprise delivery formats.
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
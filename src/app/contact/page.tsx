const PRIMARY = "#0B3D91";
const ACCENT = "#1F5FBF";
const TINT = "#EEF3FB";

const DetailCard = ({
  title,
  items,
}: {
  title: string;
  items: string[];
}) => (
  <div className="h-full rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
    <h3 className="text-base font-semibold text-neutral-900">{title}</h3>
    <ul className="mt-4 space-y-2 text-sm leading-6 text-neutral-700">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span
            className="mt-2 inline-block h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: ACCENT }}
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default function ContactPage() {
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
              Contact
            </p>

            <h1
              className="mt-4 border-l-4 pl-4 text-4xl font-semibold tracking-tight text-neutral-900 md:text-5xl"
              style={{ borderColor: ACCENT }}
            >
              Start a conversation today!
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-neutral-600 md:text-lg">
              Reach out to discuss advisory engagements, executive workshops,
              enterprise programs, data center strategy, infrastructure priorities,
              or resiliency transformation initiatives. Share your goals,
              timeline, and current environment. We will follow up with next steps!
            </p>
          </div>
        </section>
      </div>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <form
            action="https://formspree.io/f/xbdapbyz"
            method="POST"
            className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm"
          >
            <div className="grid gap-5">
              <div>
                <label className="text-sm font-medium text-neutral-900">
                  Full name
                </label>
                <input
                  name="name"
                  required
                  className="mt-2 w-full rounded-xl border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-neutral-400"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-neutral-900">
                  Work email
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  className="mt-2 w-full rounded-xl border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-neutral-400"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-neutral-900">
                  Company
                </label>
                <input
                  name="company"
                  className="mt-2 w-full rounded-xl border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-neutral-400"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-neutral-900">
                  Interest area
                </label>
                <select
                  name="interest"
                  className="mt-2 w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm outline-none focus:border-neutral-400"
                  defaultValue="Advisory Engagement"
                >
                  <option>Advisory Engagement</option>
                  <option>Enterprise Resiliency Assessment</option>
                  <option>Data Center Strategy</option>
                  <option>Technology Risk & Oversight</option>
                  <option>Cloud Continuity</option>
                  <option>Executive Program</option>
                  <option>Enterprise Cohort</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-neutral-900">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={6}
                  required
                  className="mt-2 w-full rounded-xl border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-neutral-400"
                  placeholder="Tell us about your priorities, environment, timeline, and what kind of support you are looking for."
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold text-white transition hover:opacity-95"
                style={{ backgroundColor: PRIMARY }}
              >
                Submit Request
              </button>

              <p className="text-xs text-neutral-500">
                By submitting, you agree to be contacted by ERI Advisory about
                your inquiry.
              </p>
            </div>
          </form>

          <div className="grid auto-rows-fr gap-4">
            <DetailCard
              title="Helpful details to include"
              items={[
                "Your role and organization type",
                "Current challenge or priority area (data center, resiliency, risk, cloud)",
                "Whether you need advisory, a workshop, or a program",
                "Desired timeline and stakeholders involved",
              ]}
            />

            <DetailCard
              title="Common reasons clients reach out"
              items={[
                "Data center strategy, site selection, or operations maturity",
                "Enterprise resiliency and continuity planning",
                "Technology risk and third-party oversight",
                "Cloud continuity and modernization priorities",
              ]}
            />

            <div
              className="rounded-2xl p-6 text-sm leading-7 text-neutral-700"
              style={{ backgroundColor: TINT }}
            >
              <div className="font-semibold text-neutral-900">
                Response expectations
              </div>
              <p className="mt-3">
                Most inquiries receive a response within 1–2 business days. For
                faster routing, include the business problem you are trying to
                solve and the type of engagement you are considering.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
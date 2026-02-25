const PRIMARY = "#0B3D91";
const ACCENT = "#1F5FBF";
const TINT = "#EEF3FB";

export default function ContactPage() {
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
              Contact
            </h1>

            <p className="mt-4 text-sm leading-7 text-neutral-600">
              Request a syllabus, enterprise cohort proposal, or advisory
              briefing. We typically respond within 1–2 business days.
            </p>
          </div>
        </section>
      </div>

      <section className="mx-auto max-w-3xl px-5 pb-14">
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
                className="mt-2 w-full rounded-xl border border-neutral-300 px-4 py-2 text-sm outline-none focus:border-neutral-400"
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
                className="mt-2 w-full rounded-xl border border-neutral-300 px-4 py-2 text-sm outline-none focus:border-neutral-400"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-neutral-900">
                Company
              </label>
              <input
                name="company"
                className="mt-2 w-full rounded-xl border border-neutral-300 px-4 py-2 text-sm outline-none focus:border-neutral-400"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-neutral-900">
                Interest area
              </label>
              <select
                name="interest"
                className="mt-2 w-full rounded-xl border border-neutral-300 bg-white px-4 py-2 text-sm outline-none focus:border-neutral-400"
                defaultValue="Infrastructure Advisory"
              >
                <option>Infrastructure Advisory</option>
                <option>AI Readiness Assessment</option>
                <option>Executive Training Program</option>
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
                className="mt-2 w-full rounded-xl border border-neutral-300 px-4 py-2 text-sm outline-none focus:border-neutral-400"
                placeholder="Tell us your goals, timeline, and audience size."
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold text-white transition hover:opacity-95"
              style={{ backgroundColor: PRIMARY }}
            >
              Submit request
            </button>

            <p className="text-xs text-neutral-500">
              By submitting, you agree to be contacted by ERIA Advisory about
              your request.
            </p>
          </div>
        </form>

        <div className="mt-8 rounded-2xl border border-neutral-200 bg-white p-6 text-sm text-neutral-600 shadow-sm">
          <div className="font-semibold" style={{ color: PRIMARY }}>
            Tip for faster response
          </div>
          <ul className="mt-3 space-y-2 text-sm text-neutral-700">
            <li>• Your role and org type</li>
            <li>• Audience size (individual vs cohort)</li>
            <li>• Focus area (build/ops, AI readiness, resiliency)</li>
            <li>• Desired timeline</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
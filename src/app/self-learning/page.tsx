import Link from "next/link";
import { auth, currentUser } from "@clerk/nextjs/server";

const PRIMARY = "#0B3D91";
const TINT = "#EEF3FB";

export default async function SelfLearningPage() {
  const { userId } = await auth();
  if (!userId) return null;

  const user = await currentUser(); // ✅ no clerkClient required
  const role = (user?.publicMetadata?.role as string | undefined) ?? "";
const isAdmin = role === "admin";
const paid = Boolean(user?.publicMetadata?.paidCourseAccess) || isAdmin;
 
  if (!paid) {
    return (
      <div className="bg-neutral-50">
        <div
          style={{
            background: `linear-gradient(to bottom, ${TINT}, white, #FAFAFA)`,
          }}
        >
          <section className="mx-auto max-w-3xl px-5 py-16">
            <div className="rounded-3xl border border-neutral-200 bg-white p-10 shadow-sm">
              <div
                className="mb-3 inline-flex rounded-full px-3 py-1 text-xs font-semibold"
                style={{ backgroundColor: TINT, color: PRIMARY }}
              >
                Paid access required
              </div>

              <h1 className="text-3xl font-semibold text-neutral-900">
                Self-Learning Program
              </h1>

              <p className="mt-4 text-sm leading-7 text-neutral-600">
                This is a paid course. Purchase access to unlock the full
                self-learning curriculum.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/pricing"
                  className="inline-flex items-center rounded-xl bg-neutral-900 px-6 py-3 text-sm font-semibold text-white hover:bg-neutral-800 transition"
                >
                  View pricing
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-xl border border-neutral-300 bg-white px-6 py-3 text-sm font-semibold text-neutral-900 hover:bg-neutral-50 transition"
                >
                  Enterprise access
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-neutral-50">
      <div
        style={{
          background: `linear-gradient(to bottom, ${TINT}, white, #FAFAFA)`,
        }}
      >
        <section className="mx-auto max-w-6xl px-5 py-16">
          <h1 className="text-3xl font-semibold text-neutral-900">
            Self-Learning Program
          </h1>
          <p className="mt-3 text-sm text-neutral-600">
            (Placeholder) Your paid course content will go here.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold text-neutral-900">
                Module Library
              </div>
              <p className="mt-2 text-sm text-neutral-600">
                Placeholder for modules, lessons, and diagrams.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold text-neutral-900">
                Downloadables
              </div>
              <p className="mt-2 text-sm text-neutral-600">
                Placeholder for playbooks, templates, and model packs.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold text-neutral-900">
                Assessments
              </div>
              <p className="mt-2 text-sm text-neutral-600">
                Placeholder for quizzes and certification pathway.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
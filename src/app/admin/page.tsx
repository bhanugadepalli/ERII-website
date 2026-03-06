import { auth, clerkClient } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const { userId } = await auth();

  if (!userId) redirect("/");

  const { users } = await clerkClient();
  const user = await users.getUser(userId);

  const isAdmin = user.publicMetadata?.role === "admin";

  if (!isAdmin) redirect("/");

  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <h1 className="text-3xl font-semibold text-neutral-900">
        Admin Dashboard
      </h1>

      <p className="mt-3 text-neutral-600">
        Manage users and course access.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border bg-white p-6">
          <div className="font-semibold">Grant Course Access</div>
          <p className="text-sm text-neutral-600 mt-2">
            Manually give users paid course access.
          </p>
        </div>

        <div className="rounded-2xl border bg-white p-6">
          <div className="font-semibold">View Purchases</div>
          <p className="text-sm text-neutral-600 mt-2">
            Review Stripe purchases and course enrollment.
          </p>
        </div>

        <div className="rounded-2xl border bg-white p-6">
          <div className="font-semibold">User Management</div>
          <p className="text-sm text-neutral-600 mt-2">
            Manage course access roles.
          </p>
        </div>
      </div>
    </div>
  );
}
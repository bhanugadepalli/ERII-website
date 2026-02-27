import { auth, currentUser } from "@clerk/nextjs/server";

export default async function AdminPage() {
  const { userId } = await auth();
  if (!userId) return null;

  const user = await currentUser();
  const role = (user?.publicMetadata?.role as string | undefined) ?? "";

  if (role !== "admin") {
    return (
      <div className="mx-auto max-w-3xl px-5 py-16">
        <h1 className="text-2xl font-semibold text-neutral-900">Not authorized</h1>
        <p className="mt-3 text-neutral-600">Admin access required.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <h1 className="text-3xl font-semibold text-neutral-900">Admin</h1>
      <p className="mt-3 text-neutral-600">
        Placeholder: manage users, grant access, view purchases.
      </p>
    </div>
  );
}
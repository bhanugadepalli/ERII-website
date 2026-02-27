import { SignOutButton } from "@clerk/nextjs";

export default function SignOutPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <h1 className="text-2xl font-semibold text-neutral-900">Sign out</h1>
      <p className="mt-3 text-neutral-600">Confirm sign out.</p>
      <div className="mt-6">
        <SignOutButton>
          <button className="rounded-xl bg-neutral-900 px-6 py-3 text-sm font-semibold text-white hover:bg-neutral-800">
            Sign out
          </button>
        </SignOutButton>
      </div>
    </div>
  );
}
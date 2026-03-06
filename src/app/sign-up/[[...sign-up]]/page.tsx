import { SignUp } from "@clerk/nextjs";

export default function Page() {
  const pk = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
  return (
    
    <div className="mx-auto max-w-6xl px-5 py-16">
      <div className="mb-6 rounded-xl border border-red-300 bg-red-50 p-4 text-sm text-red-800">
        DEBUG: sign-up route is rendering
      </div>

      <div className="mb-6 rounded-xl border border-blue-300 bg-blue-50 p-4 text-sm text-blue-800">
        DEBUG: Clerk component should appear below
      </div>
      
       <div className="mb-6 rounded-xl border border-yellow-300 bg-yellow-50 p-4 text-sm text-yellow-900">
        DEBUG: Publishable key present?{" "}
        <strong>{pk ? `YES (${pk.slice(0, 12)}...)` : "NO"}</strong>
      </div>

      <SignUp />

      <div className="mt-6 rounded-xl border border-green-300 bg-green-50 p-4 text-sm text-green-800">
        DEBUG: If you can see this but no sign-up form, Clerk is not initializing correctly.
      </div>
    </div>
  );
}
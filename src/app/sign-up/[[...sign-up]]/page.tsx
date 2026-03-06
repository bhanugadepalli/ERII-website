"use client";

import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-neutral-50 px-5 py-16">
      <div className="w-full max-w-md rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm">
        <h1 className="text-2xl font-semibold text-neutral-900">
          Create your account
        </h1>

        <p className="mt-2 text-sm text-neutral-600">
          Sign up to access ERII training programs and certification pathways.
        </p>

        <div className="mt-6">
          <SignUp
            appearance={{
              elements: {
                card: "shadow-none border-0",
              },
            }}
            redirectUrl="/pricing"
          />
        </div>
      </div>
    </div>
  );
}
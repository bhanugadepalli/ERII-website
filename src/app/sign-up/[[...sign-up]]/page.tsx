import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <SignUp />
    </div>
  );
}
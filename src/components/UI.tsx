import Link from "next/link";

export const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="mx-auto max-w-6xl px-5">{children}</div>
);

export const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-700">
    {children}
  </span>
);

export const Button = ({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) => {
  const cls =
    variant === "primary"
      ? "inline-flex items-center rounded-xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white hover:bg-neutral-800"
      : "inline-flex items-center rounded-xl border border-neutral-300 bg-white px-5 py-3 text-sm font-semibold text-neutral-900 hover:bg-neutral-100";

  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
};

export const Card = ({
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
  <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
    <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
    <p className="mt-2 text-sm leading-6 text-neutral-600">{desc}</p>
    {bullets?.length ? (
      <ul className="mt-4 space-y-2 text-sm text-neutral-700">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-neutral-900" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    ) : null}
    <div className="mt-5">
      <Link
        href={href}
        className="inline-flex items-center rounded-xl bg-neutral-900 px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800"
      >
        {cta}
      </Link>
    </div>
  </div>
);

export const SectionTitle = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) => (
  <div>
    <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
      {title}
    </h1>
    {subtitle ? (
      <p className="mt-3 max-w-3xl text-sm leading-7 text-neutral-600">
        {subtitle}
      </p>
    ) : null}
  </div>
);
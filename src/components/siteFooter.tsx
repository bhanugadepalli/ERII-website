import Link from "next/link";
import { Container } from "./UI";

export default function SiteFooter() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <Container>
        <div className="grid gap-10 py-12 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-900">
              ERI Advisory
            </div>
            <p className="mt-3 max-w-md text-sm leading-6 text-neutral-600">
              Advisory services for enterprise resilience, data center strategy,
              infrastructure risk, cloud continuity, and mission-critical
              operations.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold text-neutral-900">Explore</div>
            <ul className="mt-3 space-y-2 text-sm text-neutral-600">
              <li>
                <Link className="transition hover:text-neutral-900" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-neutral-900" href="/advisory">
                  Advisory
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-neutral-900" href="/programs">
                  Programs
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-neutral-900" href="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-neutral-900" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold text-neutral-900">Advisory Focus</div>
            <ul className="mt-3 space-y-2 text-sm text-neutral-600">
              <li>Enterprise resiliency</li>
              <li>Data center strategy</li>
              <li>Infrastructure risk</li>
              <li>Cloud continuity</li>
              <li>Operational readiness</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-200 py-6 text-xs text-neutral-500">
          © 2012 ERI Advisory. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
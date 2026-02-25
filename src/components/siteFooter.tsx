import Link from "next/link";
import { Container } from "./UI";

export default function siteFooter() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <Container>
        <div className="grid gap-8 py-10 md:grid-cols-3">
          <div>
            <div className="text-sm font-semibold text-neutral-900">ERII</div>
            <p className="mt-2 text-sm leading-6 text-neutral-600">
              Executive education and advisory services for enterprise data
              center, AI infrastructure, and resiliency governance. Certifications
              are issued as part of training pathways.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold text-neutral-900">Explore</div>
            <ul className="mt-3 space-y-2 text-sm text-neutral-600">
              <li><Link className="hover:underline" href="/programs">Programs</Link></li>
              <li><Link className="hover:underline" href="/certifications">Certifications</Link></li>
              <li><Link className="hover:underline" href="/advisory">Advisory</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold text-neutral-900">Governance</div>
            <ul className="mt-3 space-y-2 text-sm text-neutral-600">
              <li><Link className="hover:underline" href="/about">Ethics & principles</Link></li>
              <li><Link className="hover:underline" href="/contact">Enterprise partnerships</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-200 py-6 text-xs text-neutral-500">
          © {2012} Enterprise Resiliency & Infrastructure Advisory (ERIA). All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
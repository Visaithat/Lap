import Link from 'next/link';
import Image from 'next/image';
import { Clock, Mail, MapPin, Phone, PhoneCall } from 'lucide-react';
import { T } from '@/components/i18n';

/**
 * Dark blue 4-column footer. All section headings sit on the same
 * baseline (uppercase eyebrow) so the columns align vertically; the
 * 24/7 hotline gets its own highlighted card.
 *
 * Server component — no client interactivity beyond <T />, which is
 * already a client island.
 */
export function Footer() {
  return (
    <footer className="bg-lap-primary-900 mt-0 pt-4 pb-6 text-white">
      <div className="lap-container grid gap-6 md:grid-cols-12 md:gap-8 lg:gap-12 pb-6">
        {/* Brand */}
        <div className="md:col-span-4">
          <FooterHeading>
            <T lo="ກ່ຽວກັບເຮົາ" en="About us" />
          </FooterHeading>
          <div className="mb-4 flex items-center gap-3">
            <Image
              src="/img/lap-logo.png"
              alt="Lanexang Assurance logo"
              width={44}
              height={44}
              className="h-11 w-11 shrink-0"
            />
            <span className="leading-tight font-bold">
              Lanexang Assurance
              <br />
              <span className="text-xs font-normal opacity-70">
                Public Company Limited
              </span>
            </span>
          </div>
          <p className="mb-5 max-w-prose text-sm leading-relaxed text-white/70">
            <T id="footer.tagline" />
          </p>
          <div className="flex items-center gap-2.5">
            <SocialLink label="Facebook" href="https://www.facebook.com/lanexang.lap">
              <FacebookIcon />
            </SocialLink>
            <SocialLink label="YouTube" href="https://www.youtube.com/@lanexangassurance2800">
              <YouTubeIcon />
            </SocialLink>
            <SocialLink label="TikTok" href="https://www.tiktok.com/@lanexang.assurance">
              <TikTokIcon />
            </SocialLink>
          </div>
        </div>

        {/* Quick links */}
        <nav className="md:col-span-3" aria-label="Footer">
          <FooterHeading>
            <T id="footer.quickLinks" />
          </FooterHeading>
          <ul className="space-y-2.5 text-sm text-white/80">
            <FooterLink href="/" id="footer.links.home" />
            <FooterLink href="/products/eco" id="footer.links.vehicle" />
            <FooterLink href="/products/loan" id="footer.links.loan" />
            <FooterLink href="/about/history" id="footer.links.history" />
            <FooterLink href="/downloads" id="footer.links.downloads" />
            <FooterLink href="/contact" id="footer.links.contact" />
          </ul>
        </nav>

        {/* Contact */}
        <div className="md:col-span-5">
          <FooterHeading>
            <T id="footer.contact.title" />
          </FooterHeading>

          {/* 24/7 hotline highlight — placed first so it sits near the top of the column */}
          <div className="border-lap-accent-500/30 bg-lap-accent-500/10 mb-4 flex items-center justify-between gap-4 rounded-xl border px-4 py-2.5">
            <div className="flex items-center gap-2 text-xs font-semibold text-white/80 uppercase tracking-wider">
              <Clock className="text-lap-accent-500 h-4 w-4" aria-hidden />
              <T id="footer.contact.service247" />
            </div>
            <a
              href="tel:1819"
              className="text-lap-accent-500 hover:text-lap-accent-300 inline-flex items-center gap-1.5 text-base font-bold tabular-nums"
            >
              <PhoneCall className="h-4 w-4" aria-hidden />
              1819
            </a>
          </div>

          <address className="space-y-3 text-sm text-white/80 not-italic">
            <div className="flex gap-3">
              <MapPin className="text-lap-accent-500 mt-0.5 h-4 w-4 shrink-0" aria-hidden />
              <span className="leading-relaxed">
                <T id="footer.contact.address" />
              </span>
            </div>
            <div className="flex gap-3">
              <Mail className="text-lap-accent-500 mt-0.5 h-4 w-4 shrink-0" aria-hidden />
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=Contract@lap.com.la"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-lap-accent-500"
              >
                Contract@lap.com.la
              </a>
            </div>
            <div className="flex gap-3">
              <Phone className="text-lap-accent-500 mt-0.5 h-4 w-4 shrink-0" aria-hidden />
              <div className="space-y-1">
                <a
                  href="tel:0309029999"
                  className="hover:text-lap-accent-500 block tabular-nums"
                >
                  030 902 9999
                </a>
                <a
                  href="tel:02098556666"
                  className="hover:text-lap-accent-500 block tabular-nums"
                >
                  020 9855 6666
                </a>
              </div>
            </div>
          </address>
        </div>
      </div>

      <div className="lap-container mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50">
        <T id="footer.legal.copyright" />
        <span className="flex gap-4">
          <a href="#" className="hover:text-white">
            <T id="footer.legal.privacy" />
          </a>
          <a href="#" className="hover:text-white">
            <T id="footer.legal.terms" />
          </a>
        </span>
      </div>
    </footer>
  );
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-3 text-sm font-semibold tracking-wider text-white/60 uppercase">
      {children}
    </h3>
  );
}

function SocialLink({
  label,
  href,
  children,
}: {
  label: string;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="hover:bg-lap-accent-500 hover:text-lap-primary-900 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors"
    >
      {children}
    </a>
  );
}

function FacebookIcon() {
  return (
    <svg
      role="img"
      aria-hidden
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
    >
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06C2 17.08 5.66 21.24 10.44 22v-7.03H7.9v-2.91h2.54V9.84c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22C18.34 21.24 22 17.08 22 12.06Z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg
      role="img"
      aria-hidden
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
    >
      <path d="M23.5 6.2a3 3 0 0 0-2.12-2.13C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.52A3 3 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.8 3 3 0 0 0 2.12 2.13c1.88.52 9.38.52 9.38.52s7.5 0 9.38-.52A3 3 0 0 0 23.5 17.8 31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.8ZM9.6 15.57V8.43L15.82 12 9.6 15.57Z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg
      role="img"
      aria-hidden
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.93a8.16 8.16 0 0 0 4.77 1.52V7a4.85 4.85 0 0 1-1.84-.31Z" />
    </svg>
  );
}

function FooterLink({ href, id }: { href: string; id: string }) {
  return (
    <li>
      <Link className="hover:text-lap-accent-500 transition-colors" href={href}>
        <T id={id} />
      </Link>
    </li>
  );
}

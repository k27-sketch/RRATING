import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

export default function SiteFooter({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const base = `/${locale}`;
  const year = new Date().getFullYear();

  const links = [
    { href: `${base}/about`, label: dict.nav.about },
    { href: `${base}/methodology`, label: dict.nav.methodology },
    { href: `${base}/contact`, label: dict.nav.contact },
    { href: `${base}/reports`, label: dict.nav.reports },
  ];

  return (
    <footer className="mt-auto bg-navy-950 text-navy-100">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-gold-500 text-sm font-bold text-navy-950">
              T
            </span>
            <span className="text-base font-bold text-white">{dict.meta.siteName}</span>
          </div>
          <p className="mt-4 text-sm text-navy-100/70">{dict.footer.tagline}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gold-400">
            {dict.footer.linksHeading}
          </h3>
          <ul className="mt-4 space-y-2">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-navy-100/80 hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gold-400">
            {dict.footer.addressLabel}
          </h3>
          <p className="mt-4 text-sm text-navy-100/80">{dict.footer.address}</p>
          <p className="mt-3 text-sm text-navy-100/80">
            {dict.footer.phoneLabel}: {dict.footer.phone}
          </p>
          <p className="mt-1 text-sm text-navy-100/80">
            {dict.footer.emailLabel}: {dict.footer.email}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gold-400">
            {dict.footer.legalHeading}
          </h3>
          <p className="mt-4 text-xs leading-relaxed text-navy-100/60">
            {dict.footer.disclaimer}
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-5 text-center text-xs text-navy-100/60">
        © {year} {dict.meta.siteName}. {dict.footer.rights}
      </div>
    </footer>
  );
}

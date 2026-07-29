import Link from "next/link";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { notFound } from "next/navigation";
import HeroCarousel from "@/components/hero-carousel";
import QuickLinks from "@/components/quick-links";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const dict = getDictionary(locale);
  const base = `/${locale}`;

  return (
    <>
      <HeroCarousel locale={locale} dict={dict} />
      <QuickLinks locale={locale} dict={dict} />

      <section className="border-b border-navy-100 bg-navy-50">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="text-center text-sm font-semibold uppercase tracking-wide text-navy-800/70">
            {dict.home.trustBarHeading}
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {dict.home.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-navy-900 sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-xs text-navy-800/70 sm:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-900">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            {dict.home.ctaHeading}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-navy-100/80">
            {dict.home.ctaBody}
          </p>
          <Link
            href={`${base}/contact`}
            className="mt-8 inline-block rounded-full bg-gold-500 px-7 py-3 text-sm font-semibold text-navy-950 transition-colors hover:bg-gold-400"
          >
            {dict.home.ctaButton}
          </Link>
        </div>
      </section>
    </>
  );
}

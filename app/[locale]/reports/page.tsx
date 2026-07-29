import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { notFound } from "next/navigation";
import PageHero from "@/components/page-hero";
import { FileDown } from "lucide-react";

export default async function ReportsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const dict = getDictionary(locale);
  const { reports } = dict;

  return (
    <>
      <PageHero title={reports.heroTitle} subtitle={reports.heroSubtitle} />

      <section id="search" className="scroll-mt-24 mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-xl font-bold text-navy-900">{reports.searchHeading}</h2>
        <form className="mt-4 flex max-w-xl gap-3" role="search">
          <input
            type="search"
            placeholder={reports.searchPlaceholder}
            className="flex-1 rounded-full border border-navy-100 px-5 py-3 text-sm text-navy-900 outline-none focus:border-navy-600"
          />
          <button
            type="submit"
            className="rounded-full bg-navy-800 px-6 py-3 text-sm font-semibold text-white hover:bg-navy-700"
          >
            {locale === "ar" ? "بحث" : "Search"}
          </button>
        </form>
      </section>

      <section id="regulatory" className="scroll-mt-24 border-t border-navy-100 bg-navy-50">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="text-xl font-bold text-navy-900">{reports.regulatoryHeading}</h2>
          <p className="mt-2 text-sm text-navy-800/70">{reports.regulatorySubheading}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {reports.regulatory.map((item) => (
              <a
                key={item.href}
                href={item.href}
                download
                className="group flex items-center justify-between gap-4 rounded-xl border border-navy-100 bg-white p-5 transition-shadow hover:shadow-lg"
              >
                <div>
                  <h3 className="font-semibold text-navy-900">{item.title}</h3>
                  <p className="mt-1 text-xs text-navy-800/60">
                    {item.date} · {item.sizeLabel}
                  </p>
                </div>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy-50 text-navy-800 transition-colors group-hover:bg-gold-100 group-hover:text-gold-600">
                  <FileDown className="h-5 w-5" strokeWidth={1.75} />
                  <span className="sr-only">{reports.regulatoryDownload}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { notFound } from "next/navigation";
import PageHero from "@/components/page-hero";

export default async function MethodologyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const dict = getDictionary(locale);
  const { methodology } = dict;

  return (
    <>
      <PageHero title={methodology.heroTitle} subtitle={methodology.heroSubtitle} />

      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-2xl font-bold text-navy-900">{methodology.overviewHeading}</h2>
        <p className="mt-4 leading-relaxed text-navy-800/80">{methodology.overviewBody}</p>
      </section>

      <section id="definitions" className="scroll-mt-24 border-y border-navy-100 bg-navy-50">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-2xl font-bold text-navy-900">
            {methodology.definitionsHeading}
          </h2>
          <div className="mt-8 overflow-hidden rounded-xl border border-navy-100 bg-white">
            {methodology.definitions.map((d, i) => (
              <div
                key={d.grade}
                className={`flex gap-6 px-6 py-4 ${i !== 0 ? "border-t border-navy-100" : ""}`}
              >
                <div className="w-24 shrink-0 font-bold text-navy-900">{d.grade}</div>
                <p className="text-sm leading-relaxed text-navy-800/80">{d.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="types" className="scroll-mt-24 mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-2xl font-bold text-navy-900">{methodology.typesHeading}</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {methodology.types.map((t) => (
            <div key={t.title} className="rounded-xl border border-navy-100 p-6">
              <h3 className="font-semibold text-navy-900">{t.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-800/70">{t.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-navy-100 bg-navy-50">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <div className="grid gap-6 sm:grid-cols-2">
            <div id="consulting" className="scroll-mt-24 rounded-xl border border-navy-100 bg-white p-6">
              <h2 className="text-lg font-bold text-navy-900">{methodology.consultingHeading}</h2>
              <p className="mt-2 text-sm leading-relaxed text-navy-800/70">
                {methodology.consultingBody}
              </p>
            </div>
            <div id="esg" className="scroll-mt-24 rounded-xl border border-navy-100 bg-white p-6">
              <h2 className="text-lg font-bold text-navy-900">{methodology.esgHeading}</h2>
              <p className="mt-2 text-sm leading-relaxed text-navy-800/70">
                {methodology.esgBody}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="recent-ratings" className="scroll-mt-24 border-b border-navy-100 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="text-xl font-bold text-navy-900">{dict.reports.tableHeading}</h2>
          <div className="mt-6 overflow-x-auto rounded-xl border border-navy-100 bg-white">
            <table className="w-full min-w-[560px] text-start text-sm">
              <thead className="bg-navy-50 text-navy-900">
                <tr>
                  <th className="px-5 py-3 text-start font-semibold">
                    {dict.reports.tableColumns.issuer}
                  </th>
                  <th className="px-5 py-3 text-start font-semibold">
                    {dict.reports.tableColumns.sector}
                  </th>
                  <th className="px-5 py-3 text-start font-semibold">
                    {dict.reports.tableColumns.rating}
                  </th>
                  <th className="px-5 py-3 text-start font-semibold">
                    {dict.reports.tableColumns.outlook}
                  </th>
                  <th className="px-5 py-3 text-start font-semibold">
                    {dict.reports.tableColumns.date}
                  </th>
                </tr>
              </thead>
              <tbody>
                {dict.reports.sampleRows.map((row, i) => (
                  <tr
                    key={row.issuer}
                    className={i !== 0 ? "border-t border-navy-100" : ""}
                  >
                    <td className="px-5 py-3 font-medium text-navy-900">{row.issuer}</td>
                    <td className="px-5 py-3 text-navy-800/80">{row.sector}</td>
                    <td className="px-5 py-3 font-semibold text-navy-900">{row.rating}</td>
                    <td className="px-5 py-3 text-navy-800/80">{row.outlook}</td>
                    <td className="px-5 py-3 text-navy-800/80">{row.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-navy-800/50">{dict.reports.disclaimer}</p>
        </div>
      </section>

      <section className="border-y border-navy-100 bg-white">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-2xl font-bold text-navy-900">{methodology.processHeading}</h2>
          <ol className="mt-8 space-y-4">
            {methodology.process.map((step, i) => (
              <li key={step} className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy-800 text-sm font-bold text-gold-400">
                  {i + 1}
                </span>
                <p className="pt-1 text-navy-800/80">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="faq" className="scroll-mt-24 mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-2xl font-bold text-navy-900">{methodology.faqHeading}</h2>
        <div className="mt-8 space-y-6">
          {methodology.faqs.map((f) => (
            <div key={f.q}>
              <h3 className="font-semibold text-navy-900">{f.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-800/70">{f.a}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

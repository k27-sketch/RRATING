import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { notFound } from "next/navigation";
import PageHero from "@/components/page-hero";

export default async function RatingsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const dict = getDictionary(locale);
  const { reports, ratingsPage } = dict;

  return (
    <>
      <PageHero title={ratingsPage.heroTitle} subtitle={ratingsPage.heroSubtitle} />

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="overflow-x-auto rounded-xl border border-navy-100">
          <table className="w-full min-w-[560px] text-start text-sm">
            <thead className="bg-navy-50 text-navy-900">
              <tr>
                <th className="px-5 py-3 text-start font-semibold">
                  {reports.tableColumns.issuer}
                </th>
                <th className="px-5 py-3 text-start font-semibold">
                  {reports.tableColumns.sector}
                </th>
                <th className="px-5 py-3 text-start font-semibold">
                  {reports.tableColumns.rating}
                </th>
                <th className="px-5 py-3 text-start font-semibold">
                  {reports.tableColumns.outlook}
                </th>
                <th className="px-5 py-3 text-start font-semibold">
                  {reports.tableColumns.date}
                </th>
              </tr>
            </thead>
            <tbody>
              {reports.sampleRows.map((row, i) => (
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
        <p className="mt-3 text-xs text-navy-800/50">{reports.disclaimer}</p>
      </section>
    </>
  );
}

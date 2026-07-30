import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { notFound } from "next/navigation";
import PageHero from "@/components/page-hero";

export default async function FaqPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const dict = getDictionary(locale);
  const { methodology, faqPage } = dict;

  return (
    <>
      <PageHero title={faqPage.heroTitle} subtitle={faqPage.heroSubtitle} />

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="space-y-6">
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

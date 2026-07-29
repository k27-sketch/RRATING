import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { notFound } from "next/navigation";
import PageHero from "@/components/page-hero";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const dict = getDictionary(locale);
  const { about } = dict;

  return (
    <>
      <PageHero title={about.heroTitle} subtitle={about.heroSubtitle} />

      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-2xl font-bold text-navy-900">{about.profileHeading}</h2>
        <p className="mt-4 leading-relaxed text-navy-800/80">{about.profileBody}</p>
      </section>

      <section className="border-y border-navy-100 bg-navy-50">
        <div className="mx-auto grid max-w-4xl gap-8 px-6 py-16 sm:grid-cols-2">
          <div>
            <h2 className="text-xl font-bold text-navy-900">{about.missionHeading}</h2>
            <p className="mt-3 leading-relaxed text-navy-800/80">{about.missionBody}</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-navy-900">&nbsp;</h2>
            <p className="mt-3 leading-relaxed text-navy-800/80">{about.visionBody}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-2xl font-bold text-navy-900">{about.milestonesHeading}</h2>
        <ol className="mt-8 space-y-6 border-s-2 border-gold-500 ps-6">
          {about.milestones.map((m) => (
            <li key={m.year}>
              <div className="text-sm font-semibold uppercase tracking-wide text-gold-600">
                {m.year}
              </div>
              <p className="mt-1 text-navy-800/80">{m.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-t border-navy-100 bg-navy-50">
        <div className="mx-auto grid max-w-4xl gap-8 px-6 py-16 sm:grid-cols-2">
          <div>
            <h2 className="text-xl font-bold text-navy-900">{about.leadershipHeading}</h2>
            <p className="mt-3 leading-relaxed text-navy-800/80">{about.leadershipBody}</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-navy-900">{about.networkHeading}</h2>
            <p className="mt-3 leading-relaxed text-navy-800/80">{about.networkBody}</p>
          </div>
        </div>
      </section>
    </>
  );
}

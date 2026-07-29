import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { notFound } from "next/navigation";
import PageHero from "@/components/page-hero";
import ContactForm from "@/components/contact-form";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const dict = getDictionary(locale);
  const { contact, footer } = dict;

  return (
    <>
      <PageHero title={contact.heroTitle} subtitle={contact.heroSubtitle} />

      <section className="mx-auto grid max-w-5xl gap-12 px-6 py-16 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="text-xl font-bold text-navy-900">{contact.formHeading}</h2>
          <p className="mt-2 text-sm text-navy-800/60">{contact.formNote}</p>
          <div className="mt-6">
            <ContactForm dict={dict} />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold text-navy-900">{contact.infoHeading}</h2>
          <div className="mt-4 space-y-4 rounded-xl border border-navy-100 bg-navy-50 p-6 text-sm">
            <div>
              <div className="font-semibold text-navy-900">{contact.officeHeading}</div>
              <p className="mt-1 text-navy-800/80">{footer.address}</p>
            </div>
            <div>
              <div className="font-semibold text-navy-900">{footer.phoneLabel}</div>
              <p className="mt-1 text-navy-800/80">{footer.phone}</p>
            </div>
            <div>
              <div className="font-semibold text-navy-900">{footer.emailLabel}</div>
              <p className="mt-1 text-navy-800/80">{footer.email}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

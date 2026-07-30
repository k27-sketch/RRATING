import Link from "next/link";
import { BarChart3, Calculator, BookOpen, Briefcase, Leaf, HelpCircle, Send } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

export default function QuickLinks({
  locale,
  dict,
}: {
  locale: string;
  dict: Dictionary;
}) {
  const base = `/${locale}`;
  const { quickLinks } = dict.home;

  const items = [
    { icon: BarChart3, label: quickLinks.creditRatings, href: `${base}/methodology` },
    { icon: Calculator, label: quickLinks.valuation, href: `${base}/methodology#valuation` },
    { icon: BookOpen, label: quickLinks.research, href: `${base}/methodology#research` },
    { icon: Briefcase, label: quickLinks.consulting, href: `${base}/methodology#consulting` },
    { icon: Leaf, label: quickLinks.esg, href: `${base}/methodology#esg` },
    { icon: HelpCircle, label: quickLinks.faqs, href: `${base}/methodology#faq` },
    { icon: Send, label: quickLinks.contact, href: `${base}/contact` },
  ];

  return (
    <section className="border-b border-navy-100 bg-white">
      <div className="mx-auto max-w-3xl px-6 py-14">
        <div className="grid grid-cols-3 gap-x-4 gap-y-10 sm:grid-cols-4 lg:grid-cols-7">
          {items.map(({ icon: Icon, label, href }) => (
            <Link
              key={label}
              href={href}
              className="group flex flex-col items-center gap-3 text-center"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-navy-50 text-navy-800 transition-colors group-hover:bg-gold-100 group-hover:text-gold-600">
                <Icon className="h-6 w-6" strokeWidth={1.75} />
              </span>
              <span className="text-xs font-medium leading-snug text-navy-800/80 sm:text-sm">
                {label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

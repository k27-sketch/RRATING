"use client";

import { useState } from "react";
import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import LocaleSwitch from "./locale-switch";

export default function SiteHeader({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const [open, setOpen] = useState(false);
  const base = `/${locale}`;

  const links = [
    { href: `${base}`, label: dict.nav.home },
    { href: `${base}/about`, label: dict.nav.about },
    { href: `${base}/methodology`, label: dict.nav.methodology },
    { href: `${base}/contact`, label: dict.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-navy-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link href={base} className="flex items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-navy-800 text-base font-bold text-gold-400">
            T
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-lg font-bold tracking-tight text-navy-900">
              {locale === "ar" ? "تصنيف" : "TASNEEF"}
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-600">
              {locale === "ar" ? "للتصنيف الائتماني" : "Credit Rating Agency"}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-navy-800/80 transition-colors hover:text-navy-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <LocaleSwitch locale={locale} />
          <Link
            href={`${base}/contact`}
            className="rounded-full bg-gold-500 px-4 py-2 text-sm font-semibold text-navy-950 transition-colors hover:bg-gold-400"
          >
            {dict.nav.requestRating}
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-navy-100 text-navy-900 md:hidden"
          aria-label="Menu"
          aria-expanded={open}
        >
          <span className="sr-only">Toggle navigation</span>
          <div className="flex flex-col gap-1">
            <span className="h-0.5 w-5 bg-current" />
            <span className="h-0.5 w-5 bg-current" />
            <span className="h-0.5 w-5 bg-current" />
          </div>
        </button>
      </div>

      {open && (
        <div className="border-t border-navy-100 bg-white px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-navy-800/80"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={`${base}/contact`}
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-gold-500 px-4 py-2 text-center text-sm font-semibold text-navy-950"
            >
              {dict.nav.requestRating}
            </Link>
            <div className="mt-2">
              <LocaleSwitch locale={locale} />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

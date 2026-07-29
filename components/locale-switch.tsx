"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe } from "lucide-react";
import { locales, type Locale } from "@/lib/i18n/config";

function swapLocale(pathname: string, target: Locale) {
  const segments = pathname.split("/");
  segments[1] = target;
  return segments.join("/") || `/${target}`;
}

export default function LocaleSwitch({ locale }: { locale: Locale }) {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-1 text-sm font-medium">
      <Globe className="h-4 w-4 text-navy-800/50" aria-hidden />
      {locales.map((code) => (
        <Link
          key={code}
          href={swapLocale(pathname, code)}
          className={
            code === locale
              ? "rounded-full bg-navy-800 px-3 py-1 text-white"
              : "rounded-full px-3 py-1 text-navy-800/70 hover:text-navy-800"
          }
          aria-current={code === locale ? "true" : undefined}
        >
          {code === "ar" ? "AR" : "EN"}
        </Link>
      ))}
    </div>
  );
}

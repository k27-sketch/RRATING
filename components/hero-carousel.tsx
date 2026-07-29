"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

export default function HeroCarousel({
  locale,
  dict,
}: {
  locale: string;
  dict: Dictionary;
}) {
  const base = `/${locale}`;
  const { home } = dict;

  const slides = [
    {
      eyebrow: home.heroEyebrow,
      title: home.heroTitle,
      subtitle: home.heroSubtitle,
      cta: { label: home.heroCta, href: `${base}/reports` },
      secondaryCta: { label: home.heroSecondaryCta, href: `${base}/about` },
    },
    {
      eyebrow: home.heroSlide2Eyebrow,
      title: home.heroSlide2Title,
      subtitle: home.heroSlide2Subtitle,
      cta: { label: home.heroCta, href: `${base}/methodology` },
      secondaryCta: { label: home.heroSecondaryCta, href: `${base}/about` },
    },
  ];

  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((v) => (v + 1) % slides.length);
    }, 7000);
    return () => clearInterval(id);
  }, [slides.length]);

  const slide = slides[active];

  return (
    <section className="relative overflow-hidden bg-navy-950 text-white">
      <Image
        src="/hero-kafd-day.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/75 to-navy-950/40"
      />

      <div className="relative mx-auto flex min-h-[360px] max-w-6xl flex-col justify-center px-6 py-20 sm:min-h-[420px] sm:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-400">
          {slide.eyebrow}
        </p>
        <h1 className="mt-5 max-w-2xl text-balance text-4xl font-bold leading-tight sm:text-6xl">
          {slide.title}
        </h1>
        <p className="mt-6 max-w-xl text-lg text-navy-100/85">{slide.subtitle}</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href={slide.cta.href}
            className="rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-navy-950 transition-colors hover:bg-gold-400"
          >
            {slide.cta.label}
          </Link>
          <Link
            href={slide.secondaryCta.href}
            className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            {slide.secondaryCta.label}
          </Link>
        </div>
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl justify-center gap-2 px-6 pb-8">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Slide ${i + 1}`}
            aria-current={i === active}
            className={`h-1.5 rounded-full transition-all ${
              i === active ? "w-8 bg-gold-400" : "w-4 bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>

      <p className="absolute bottom-2 end-3 z-10 text-[10px] text-white/40">
        {locale === "ar" ? "الصورة: " : "Photo: "}Ahmed /{" "}
        <a
          href="https://commons.wikimedia.org/wiki/File:King_Abdullah_Financial_District_20230411_114859.jpg"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-white/70"
        >
          Wikimedia Commons
        </a>{" "}
        (CC BY-SA 4.0)
      </p>
    </section>
  );
}

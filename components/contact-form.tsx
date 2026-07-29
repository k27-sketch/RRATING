"use client";

import { useState } from "react";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

export default function ContactForm({ dict }: { dict: Dictionary }) {
  const [submitted, setSubmitted] = useState(false);
  const { fields } = dict.contact;

  if (submitted) {
    return (
      <div className="rounded-xl border border-navy-100 bg-navy-50 p-6 text-navy-900">
        {dict.contact.formNote}
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="grid gap-4 sm:grid-cols-2"
    >
      <input
        required
        placeholder={fields.name}
        className="rounded-lg border border-navy-100 px-4 py-3 text-sm text-navy-900 outline-none focus:border-navy-600"
      />
      <input
        placeholder={fields.company}
        className="rounded-lg border border-navy-100 px-4 py-3 text-sm text-navy-900 outline-none focus:border-navy-600"
      />
      <input
        required
        type="email"
        placeholder={fields.email}
        className="rounded-lg border border-navy-100 px-4 py-3 text-sm text-navy-900 outline-none focus:border-navy-600"
      />
      <input
        placeholder={fields.phone}
        className="rounded-lg border border-navy-100 px-4 py-3 text-sm text-navy-900 outline-none focus:border-navy-600"
      />
      <input
        placeholder={fields.subject}
        className="rounded-lg border border-navy-100 px-4 py-3 text-sm text-navy-900 outline-none focus:border-navy-600 sm:col-span-2"
      />
      <textarea
        required
        placeholder={fields.message}
        rows={5}
        className="rounded-lg border border-navy-100 px-4 py-3 text-sm text-navy-900 outline-none focus:border-navy-600 sm:col-span-2"
      />
      <button
        type="submit"
        className="rounded-full bg-navy-800 px-6 py-3 text-sm font-semibold text-white hover:bg-navy-700 sm:col-span-2 sm:w-fit"
      >
        {fields.submit}
      </button>
    </form>
  );
}

"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex min-h-[300px] flex-col items-center justify-center text-center">
        <div className="mb-4 h-12 w-12 rounded-full border border-gold/40 bg-gold/10 p-3">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-gold"
          >
            <path d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-[var(--font-cinzel)] text-lg uppercase tracking-[0.1em] text-gold">
          Inquiry Received
        </h3>
        <p className="mt-3 font-[var(--font-inter)] text-sm text-ivory/50">
          We&apos;ll be in touch within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-2 block font-[var(--font-inter)] text-[10px] uppercase tracking-[0.18em] text-ivory/35">
            Full Name
          </label>
          <input
            className="w-full rounded border border-white/[0.08] bg-white/[0.03] px-4 py-3 font-[var(--font-inter)] text-sm text-ivory placeholder:text-ivory/25 transition-colors focus:border-gold/40 focus:outline-none"
            type="text"
            name="name"
            required
          />
        </div>
        <div>
          <label className="mb-2 block font-[var(--font-inter)] text-[10px] uppercase tracking-[0.18em] text-ivory/35">
            Email
          </label>
          <input
            className="w-full rounded border border-white/[0.08] bg-white/[0.03] px-4 py-3 font-[var(--font-inter)] text-sm text-ivory placeholder:text-ivory/25 transition-colors focus:border-gold/40 focus:outline-none"
            type="email"
            name="email"
            required
          />
        </div>
      </div>
      <div>
        <label className="mb-2 block font-[var(--font-inter)] text-[10px] uppercase tracking-[0.18em] text-ivory/35">
          Company
        </label>
        <input
          className="w-full rounded border border-white/[0.08] bg-white/[0.03] px-4 py-3 font-[var(--font-inter)] text-sm text-ivory placeholder:text-ivory/25 transition-colors focus:border-gold/40 focus:outline-none"
          type="text"
          name="company"
        />
      </div>
      <div>
        <label className="mb-2 block font-[var(--font-inter)] text-[10px] uppercase tracking-[0.18em] text-ivory/35">
          What do you need?
        </label>
        <textarea
          className="min-h-32 w-full rounded border border-white/[0.08] bg-white/[0.03] px-4 py-3 font-[var(--font-inter)] text-sm text-ivory placeholder:text-ivory/25 transition-colors focus:border-gold/40 focus:outline-none"
          name="message"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full rounded border border-gold/60 bg-gold/10 px-8 py-4 font-[var(--font-inter)] text-sm uppercase tracking-[0.14em] text-gold transition-all duration-300 hover:border-gold hover:bg-gold hover:text-obsidian"
      >
        Submit Inquiry
      </button>
    </form>
  );
}

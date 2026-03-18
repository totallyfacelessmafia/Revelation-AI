"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "#hero", label: "Home" },
  { href: "#problem", label: "Why" },
  { href: "#ace", label: "Ace AI" },
  { href: "#difference", label: "About" },
  { href: "#contact", label: "Inquiry" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-gold/10 bg-obsidian/70 backdrop-blur-xl">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6 md:h-20 md:px-10">
          <Link
            href="#hero"
            className="relative overflow-hidden font-[var(--font-cinzel)] text-[11px] uppercase tracking-[0.25em] text-gold md:text-xs"
          >
            <span className="relative inline-block px-1">Revelation Inc.</span>
            <span className="gold-foil-shimmer" aria-hidden="true" />
          </Link>

          <nav className="hidden items-center gap-10 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-[var(--font-inter)] text-[11px] uppercase tracking-[0.18em] text-ivory/60 transition-colors duration-300 hover:text-gold"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded border border-gold/40 px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-gold transition-colors hover:bg-gold/10 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      <aside
        className={`fixed right-0 top-0 z-40 h-full w-72 transform border-l border-gold/20 bg-obsidian/95 px-7 pt-24 backdrop-blur-2xl transition-transform duration-300 md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-7">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="font-[var(--font-inter)] text-sm uppercase tracking-[0.18em] text-ivory/70 transition hover:text-gold"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
}

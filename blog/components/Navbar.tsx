"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/general-ai-tools", label: "General AI Tools" },
  { href: "/agents", label: "Agents" },
  { href: "/ai-in-the-real-world", label: "AI in the Real World" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 isolate bg-background border-b border-sage-light overflow-hidden"
      style={{ willChange: "auto", backgroundColor: 'oklch(0.94 0.02 145)' }}
    >
      <div className="mx-auto flex max-w-4xl flex-col gap-4 px-6 py-3">
        <div className="flex items-baseline gap-0">
          <span className="font-serif font-normal text-sage-dark text-xl">
            Cricket's AI 
          </span>
          <span className="font-serif font-normal text-sage-dark text-xl">
            Journey
          </span>
          <span className="font-hand text-sage text-2xl ml-2 not-italic">
            — embracing AI, one honest review at a time
          </span>
        </div>

        <div className="pb-2">
          <div className="flex items-center justify-between gap-4">
            <nav aria-label="Main navigation" className="hidden gap-6 md:flex">
              {links.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className="font-sans text-sage-dark text-sm tracking-normal transition hover:text-sage focus-visible:ring-2 focus-visible:ring-sage focus-visible:outline-none"
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <button
              type="button"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="md:hidden rounded-md border border-sage-light bg-background px-3 py-2 text-sm text-sage-dark focus-visible:ring-2 focus-visible:ring-sage focus-visible:outline-none"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              {menuOpen ? "✕ Close" : "☰ Menu"}
            </button>
          </div>
        </div>
      </div>

      {menuOpen ? (
        <nav aria-label="Main navigation" className="w-full border-b border-sage-light bg-background px-6 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className="block text-sage-dark text-sm tracking-normal transition hover:text-sage focus-visible:ring-2 focus-visible:ring-sage focus-visible:outline-none"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </nav>
      ) : null}
    </header>
  );
}

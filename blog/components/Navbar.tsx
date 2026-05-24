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
    <header className="sticky top-0 z-50 bg-cream border-b border-border">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-headline text-ink text-xl">
          My AI Journey
        </Link>

        <button
          type="button"
          className="md:hidden rounded-md border border-border bg-white/80 px-3 py-2 text-sm font-semibold text-ink shadow-sm"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  `text-ink transition hover:text-sage ` +
                  (active ? "underline decoration-sage font-semibold" : "")
                }
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {menuOpen ? (
        <nav className="border-t border-border bg-cream px-6 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={
                    `block text-ink transition hover:text-sage ` +
                    (active ? "underline decoration-sage font-semibold" : "")
                  }
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

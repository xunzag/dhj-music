"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#music", label: "Music" },
  { href: "/#events", label: "Events" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/simply-music", label: "Simply Music" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isSimplyMusic = pathname.startsWith("/simply-music");

  const logo = isSimplyMusic
    ? { src: "/images/simply-music-clear.png", alt: "Simply Music Inc.", href: "/simply-music", w: 160, h: 48 }
    : { src: "/images/dhj-logo.png", alt: "DHJ Indie Show", href: "/", w: 130, h: 52 };

  const ctaLabel = isSimplyMusic ? "Apply Now" : "Listen Now";
  const ctaHrefFinal = isSimplyMusic ? "/simply-music#apply" : "/#music";

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-cream/95 backdrop-blur-md border-b border-brown/10 shadow-sm"
          : "bg-cream/80 backdrop-blur-sm border-b border-transparent"
      )}
    >
      <nav className="max-w-[1200px] mx-auto px-5 sm:px-10 h-[76px] flex items-center justify-between gap-6">
        {/* Logo — swaps between DHJ and Simply Music based on route */}
        <Link href={logo.href} className="flex-shrink-0">
          <Image
            src={logo.src}
            alt={logo.alt}
            width={logo.w}
            height={logo.h}
            className="h-14 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                "text-[13px] font-semibold tracking-wide transition-colors duration-200",
                link.href === "/simply-music"
                  ? "text-burgundy hover:text-burgundy-deep"
                  : "text-nav-text hover:text-burgundy"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={ctaHrefFinal}
            className="inline-flex items-center text-[12px] font-bold tracking-[0.14em] uppercase text-cream bg-burgundy hover:bg-burgundy-deep px-5 py-[10px] rounded-sm transition-colors duration-200"
          >
            {ctaLabel}
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[6px] group"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span
            className={clsx(
              "block w-6 h-[2px] bg-brown transition-transform duration-300 origin-center",
              open && "rotate-45 translate-y-[8px]"
            )}
          />
          <span
            className={clsx(
              "block w-6 h-[2px] bg-brown transition-opacity duration-200",
              open && "opacity-0"
            )}
          />
          <span
            className={clsx(
              "block w-6 h-[2px] bg-brown transition-transform duration-300 origin-center",
              open && "-rotate-45 -translate-y-[8px]"
            )}
          />
        </button>
      </nav>

      {/* Mobile menu panel */}
      <div
        className={clsx(
          "md:hidden border-t border-brown/10 bg-cream overflow-hidden transition-all duration-300",
          open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                "text-[15px] font-semibold",
                link.href === "/simply-music" ? "text-burgundy" : "text-brown"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={ctaHrefFinal}
            className="inline-flex items-center justify-center text-[12px] font-bold tracking-[0.14em] uppercase text-cream bg-burgundy px-5 py-3 rounded-sm mt-2"
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </header>
  );
}

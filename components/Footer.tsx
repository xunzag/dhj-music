import Link from "next/link";

const exploreLinks = [
  { href: "/#about", label: "About" },
  { href: "/#music", label: "Music" },
  { href: "/#events", label: "Events" },
  { href: "/#gallery", label: "Gallery" },
];

const moreLinks = [
  { href: "/simply-music", label: "Simply Music Inc." },
  { href: "/#contact", label: "Contact" },
  { href: "/simply-music#apply", label: "Apply to Be Featured" },
];

export default function Footer() {
  return (
    <footer className="bg-darkest text-[#d9cfc0]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-10 pt-16 pb-8">
        <div className="flex flex-wrap justify-between gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="max-w-xs">
            <p className="font-serif font-bold text-[28px] text-cream leading-tight mb-3">
              The DHJ Indie Show
            </p>
            <p className="text-[10px] font-extrabold tracking-[0.3em] text-gold-light uppercase">
              Celebrating Music · Inspiring Audiences · Building Legacy
            </p>
            <p className="mt-5 text-[14px] text-[#a09587] leading-relaxed">
              Hosted by Doris Hall-James — a singer, performer, and lifelong advocate for
              independent artists.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-14 flex-wrap">
            <div>
              <p className="text-[11px] font-extrabold tracking-[0.2em] uppercase text-muted mb-5">
                Explore
              </p>
              <ul className="flex flex-col gap-3">
                {exploreLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-[14px] text-[#d9cfc0] hover:text-cream transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-extrabold tracking-[0.2em] uppercase text-muted mb-5">
                More
              </p>
              <ul className="flex flex-col gap-3">
                {moreLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-[14px] text-[#d9cfc0] hover:text-cream transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mt-8">
          <p className="text-[12px] text-muted">
            © {new Date().getFullYear()} The DHJ Indie Show · Doris Hall-James. All rights reserved.
          </p>
          <a
            href="mailto:simplymusic@verizon.net"
            className="text-[12px] text-muted hover:text-gold-light transition-colors"
          >
            simplymusic@verizon.net
          </a>
        </div>
      </div>
    </footer>
  );
}

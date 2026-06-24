import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateIn from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "Events — The DHJ Indie Show",
  description:
    "Stay updated on upcoming live performances, appearances, and special events from Doris Hall-James.",
};

interface Event {
  id: string;
  title: string;
  date: string;
  venue: string;
  location: string;
  type: string;
  ticketUrl?: string;
}

/* ── Add events here when scheduled ── */
const upcomingEvents: Event[] = [];

const pastHighlights = [
  { year: "2024", title: "DHJ Indie Showcase", venue: "Private Venue", location: "New York, NY" },
  { year: "2023", title: "Simply Music Live", venue: "Community Theater", location: "New Jersey" },
  { year: "2022", title: "Independent Artist Night", venue: "Local Stage", location: "Tri-State Area" },
];

export default function EventsPage() {
  return (
    <>
      <Navbar />

      {/* ─── HERO ─── */}
      <section className="relative pt-[76px] min-h-[55vh] flex items-end overflow-hidden bg-darkest">
        <Image
          src="/images/gallery3.jpg"
          alt="DHJ Indie Show live"
          fill
          priority
          className="object-cover object-center opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-darkest via-darkest/50 to-transparent" />

        {/* Decorative side line */}
        <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3 z-10">
          <span className="w-px h-16 bg-gold-light/40" />
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-gold-light/50 [writing-mode:vertical-rl]">
            Live &amp; Upcoming
          </span>
          <span className="w-px h-16 bg-gold-light/40" />
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 sm:px-10 pb-16 sm:pb-24 w-full">
          <p className="text-[11px] font-extrabold tracking-[0.3em] uppercase text-gold-light mb-4">
            Live Performances &amp; Events
          </p>
          <h1 className="font-serif font-semibold text-[clamp(40px,6vw,76px)] leading-[0.95] text-cream">
            Experience<br />
            <span className="italic font-medium text-gold-light">Doris Live</span>
          </h1>
        </div>
      </section>

      {/* ─── UPCOMING EVENTS ─── */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="max-w-[1000px] mx-auto px-6 sm:px-10">
          <AnimateIn>
            <p className="text-[11px] font-extrabold tracking-[0.28em] uppercase text-burgundy mb-4">
              Upcoming
            </p>
            <h2 className="font-serif font-semibold text-[clamp(26px,3.5vw,40px)] text-brown mb-12">
              Scheduled Performances
            </h2>
          </AnimateIn>

          {upcomingEvents.length > 0 ? (
            <div className="flex flex-col gap-4">
              {upcomingEvents.map((ev) => (
                <AnimateIn key={ev.id}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 p-7 bg-warm border border-gold/25 rounded-sm hover-lift">
                    <div className="flex gap-6 items-start">
                      <div className="bg-burgundy text-cream rounded-sm px-3 py-2 text-center min-w-[56px]">
                        <p className="font-serif font-semibold text-[22px] leading-none">{ev.date.split(" ")[1]}</p>
                        <p className="text-[10px] font-bold tracking-widest uppercase mt-0.5">{ev.date.split(" ")[0]}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-gold mb-1">{ev.type}</p>
                        <h3 className="font-serif font-semibold text-[20px] text-brown">{ev.title}</h3>
                        <p className="text-[14px] text-mid mt-1">{ev.venue} · {ev.location}</p>
                      </div>
                    </div>
                    {ev.ticketUrl && (
                      <a href={ev.ticketUrl} className="inline-flex items-center text-[11px] font-bold tracking-[0.12em] uppercase text-cream bg-burgundy hover:bg-burgundy-deep px-5 py-2.5 rounded-sm transition-colors whitespace-nowrap">
                        Get Tickets
                      </a>
                    )}
                  </div>
                </AnimateIn>
              ))}
            </div>
          ) : (
            <AnimateIn>
              <div className="bg-warm border border-gold/25 rounded-sm p-12 text-center">
                <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-burgundy/8 flex items-center justify-center">
                  <svg className="w-7 h-7 text-burgundy/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                </div>
                <h3 className="font-serif font-semibold text-[24px] text-brown mb-3">
                  Dates being announced soon
                </h3>
                <p className="text-mid text-[15px] leading-relaxed mb-8 max-w-[400px] mx-auto">
                  New performances and appearances are coming. Sign up to be the first
                  to know when events are announced.
                </p>
                <a
                  href="mailto:simplymusic@verizon.net?subject=Event%20Updates"
                  className="inline-flex items-center text-[11px] font-bold tracking-[0.14em] uppercase text-cream bg-burgundy hover:bg-burgundy-deep px-7 py-3.5 rounded-sm transition-colors"
                >
                  Get Notified
                </a>
              </div>
            </AnimateIn>
          )}
        </div>
      </section>

      {/* ─── PAST HIGHLIGHTS ─── */}
      <section className="bg-warm py-20 sm:py-24">
        <div className="max-w-[1000px] mx-auto px-6 sm:px-10">
          <AnimateIn>
            <p className="text-[11px] font-extrabold tracking-[0.28em] uppercase text-burgundy mb-4">
              Past Highlights
            </p>
            <h2 className="font-serif font-semibold text-[clamp(24px,3.2vw,36px)] text-brown mb-10">
              A history of unforgettable nights
            </h2>
          </AnimateIn>
          <div className="flex flex-col divide-y divide-brown/10">
            {pastHighlights.map((p, i) => (
              <AnimateIn key={p.title} delay={(Math.min(i + 1, 5) as 1|2|3|4|5)}>
                <div className="flex items-center gap-8 py-6">
                  <span className="font-serif font-semibold text-[22px] text-gold/60 min-w-[52px]">{p.year}</span>
                  <div>
                    <p className="font-semibold text-[16px] text-brown">{p.title}</p>
                    <p className="text-[13px] text-mid mt-0.5">{p.venue} · {p.location}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BOOKING CTA ─── */}
      <section className="bg-burgundy-deep py-20 sm:py-24 relative overflow-hidden">
        <div className="max-w-[720px] mx-auto px-6 sm:px-10 text-center relative z-10">
          <AnimateIn>
            <h2 className="font-serif font-semibold text-[clamp(28px,3.8vw,44px)] text-cream mb-5">
              Interested in booking Doris?
            </h2>
            <p className="text-[17px] leading-[1.8] text-cream/70 mb-10">
              For booking inquiries, private events, or corporate performances,
              get in touch with us directly.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center text-[12px] font-bold tracking-[0.14em] uppercase text-burgundy-deep bg-gold-light hover:bg-gold-pale px-8 py-4 rounded-sm transition-colors"
            >
              Get in Touch
            </Link>
          </AnimateIn>
        </div>
      </section>

      <Footer />
    </>
  );
}

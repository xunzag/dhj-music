import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateIn from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "Music — The DHJ Indie Show",
  description:
    "Explore the music of Doris Hall-James — soulful performances, heartfelt storytelling, and a voice that connects people.",
};

const features = [
  {
    icon: "🎤",
    title: "Live Performances",
    desc: "Powerful stage presence and memorable live shows that leave audiences inspired.",
  },
  {
    icon: "🎵",
    title: "Original Songs",
    desc: "Heartfelt originals that blend soul, R&B, and authentic storytelling.",
  },
  {
    icon: "🎬",
    title: "Studio Recordings",
    desc: "Professional recordings that capture the full depth and warmth of Doris's voice.",
  },
  {
    icon: "🎧",
    title: "Exclusive Content",
    desc: "Behind-the-scenes moments, interviews, and exclusive content for fans.",
  },
];

export default function MusicPage() {
  return (
    <>
      <Navbar />

      {/* ─── HERO ─── */}
      <section className="relative pt-[76px] min-h-[65vh] flex items-end overflow-hidden">
        <Image
          src="/images/performance.jpg"
          alt="Doris Hall-James performing"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-darkest via-darkest/55 to-darkest/10" />

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 sm:px-10 pb-16 sm:pb-24 w-full">
          <p className="text-[11px] font-extrabold tracking-[0.3em] uppercase text-gold-light mb-4">
            The Music
          </p>
          <h1 className="font-serif font-semibold text-[clamp(42px,6.5vw,80px)] leading-[0.95] text-cream mb-5">
            A Voice With<br />
            <span className="italic font-medium text-gold-light">Purpose</span>
          </h1>
          <p className="text-[16px] sm:text-[18px] text-cream/70 max-w-[520px] leading-[1.75]">
            Music has always been at the heart of Doris Hall-James&rsquo; journey —
            soulful, heartfelt, and built to last.
          </p>
        </div>
      </section>

      {/* ─── MAIN CONTENT ─── */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <AnimateIn>
            <p className="text-[11px] font-extrabold tracking-[0.28em] uppercase text-burgundy mb-5">
              What We Offer
            </p>
            <h2 className="font-serif font-semibold text-[clamp(28px,3.5vw,44px)] leading-[1.1] text-brown mb-6">
              Music that connects people and creates lasting memories
            </h2>
            <p className="text-[17px] leading-[1.85] text-mid mb-5">
              Through soulful performances and heartfelt storytelling, the DHJ Indie Show
              delivers music that connects people, evokes emotion, and creates memories
              that endure long after the final note.
            </p>
            <p className="text-[17px] leading-[1.85] text-mid mb-10">
              Explore featured songs, live performances, recordings, and exclusive content
              from Doris Hall-James — a voice that has stood the test of time and continues
              to move audiences everywhere.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/gallery" className="inline-flex items-center text-[12px] font-bold tracking-[0.14em] uppercase text-cream bg-burgundy hover:bg-burgundy-deep px-7 py-3.5 rounded-sm transition-colors">
                View Gallery
              </Link>
              <Link href="/#contact" className="inline-flex items-center text-[12px] font-bold tracking-[0.14em] uppercase text-brown border border-brown/30 hover:border-brown px-7 py-3.5 rounded-sm transition-colors">
                Book a Performance
              </Link>
            </div>
          </AnimateIn>

          <AnimateIn delay={2}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-[0_24px_50px_-20px_rgba(33,26,20,0.4)]">
              <Image
                src="/images/gallery1.jpg"
                alt="DHJ Indie Show performance"
                fill
                sizes="(max-width:1024px) 90vw, 44vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-darkest/40 to-transparent" />
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ─── FEATURES GRID ─── */}
      <section className="bg-warm py-20 sm:py-24">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          <AnimateIn>
            <p className="text-[11px] font-extrabold tracking-[0.28em] uppercase text-burgundy mb-4 text-center">
              What to Expect
            </p>
            <h2 className="font-serif font-semibold text-[clamp(26px,3.2vw,38px)] leading-[1.1] text-brown text-center mb-12">
              The full DHJ music experience
            </h2>
          </AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f, i) => (
              <AnimateIn key={f.title} delay={(Math.min(i + 1, 5) as 1|2|3|4|5)}>
                <div className="bg-warm-light border border-brown/10 rounded-sm p-7 hover-lift h-full">
                  <p className="text-3xl mb-4">{f.icon}</p>
                  <h3 className="font-serif font-semibold text-[19px] text-brown mb-2">{f.title}</h3>
                  <p className="text-[14px] leading-[1.7] text-mid-light">{f.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECOND IMAGE SECTION ─── */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 grid grid-cols-1 lg:grid-cols-[0.45fr_0.55fr] gap-12 lg:gap-16 items-center">
          <AnimateIn>
            <div className="relative aspect-[3/4] max-w-[380px] mx-auto lg:mx-0 overflow-hidden rounded-sm shadow-[0_24px_50px_-20px_rgba(33,26,20,0.4)] bg-warm">
              <Image
                src="/images/gallery2.jpg"
                alt="Doris Hall-James on stage"
                fill
                sizes="(max-width:1024px) 80vw, 35vw"
                className="object-cover"
              />
            </div>
          </AnimateIn>
          <AnimateIn delay={1}>
            <blockquote className="border-l-2 border-gold pl-6 mb-8">
              <p className="font-serif font-medium italic text-[clamp(22px,2.8vw,32px)] text-brown leading-[1.4]">
                &ldquo;Every note is a story. Every performance is a gift.&rdquo;
              </p>
              <cite className="not-italic block mt-4 text-[12px] font-bold tracking-[0.2em] uppercase text-gold">
                — Doris Hall-James
              </cite>
            </blockquote>
            <p className="text-[17px] leading-[1.85] text-mid mb-8">
              From intimate studio sessions to full stage productions, Doris brings the
              same passion and authenticity to every performance. Her music is more than
              entertainment — it&rsquo;s a connection.
            </p>
            <Link href="/events" className="inline-flex items-center gap-2 text-[12px] font-bold tracking-[0.14em] uppercase text-burgundy border-b border-burgundy pb-0.5 hover:opacity-70 transition-opacity">
              See Upcoming Events →
            </Link>
          </AnimateIn>
        </div>
      </section>

      <Footer />
    </>
  );
}

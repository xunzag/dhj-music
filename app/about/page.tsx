import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateIn from "@/components/AnimateIn";


export const metadata: Metadata = {
  title: "About Doris Hall-James — The DHJ Indie Show",
  description:
    "Learn about Doris Hall-James — singer, performer, entrepreneur, and lifelong advocate for independent artists.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* ─── HERO ─── */}
      <section className="pt-[76px] bg-darkest overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 py-20 sm:py-28 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-end">
          {/* Left — text */}
          <div>
            <p className="text-[11px] font-extrabold tracking-[0.3em] uppercase text-gold-light mb-6">
              About Doris Hall-James
            </p>
            <h1 className="font-serif font-semibold text-[clamp(44px,6.5vw,86px)] leading-[0.92] text-cream">
              The Story<br />
              Behind<br />
              <span className="italic font-medium text-gold-light">the Music</span>
            </h1>
            {/* gold rule */}
            <div className="mt-10 flex items-center gap-5">
              <span className="h-px w-16 bg-gold/40" />
              <p className="text-[13px] text-cream/50 leading-relaxed max-w-[420px]">
                Singer · Performer · Entrepreneur · Advocate
              </p>
            </div>
          </div>

          {/* Right — portrait inset, visible only on large screens */}
          <div className="hidden lg:block relative w-[220px] self-end">
            {/* offset border */}
            <div className="absolute -inset-2 -right-2 border border-gold/25 rounded-sm" />
            <div className="relative aspect-[3/5] overflow-hidden rounded-sm bg-brown">
              <Image
                src="/images/dorris1.jpg"
                alt="Doris Hall-James"
                fill
                priority
                sizes="220px"
                className="object-cover object-[center_12%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-darkest/50 to-transparent" />
            </div>
          </div>
        </div>

        {/* Bottom fade into cream */}
        <div className="h-20 bg-gradient-to-b from-darkest to-cream" />
      </section>

      {/* ─── BIO ─── */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-14 lg:gap-20 items-start">

          {/* Portrait */}
          <AnimateIn>
            <div className="relative max-w-[400px] mx-auto lg:mx-0 sticky top-28">
              <div className="absolute inset-3 -right-3 -bottom-3 border border-gold/40 rounded-sm" />
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm shadow-[0_24px_50px_-20px_rgba(33,26,20,0.4)] bg-warm">
                <Image
                  src="/images/about-page.jpg"
                  alt="Doris Hall-James"
                  fill
                  sizes="(max-width:1024px) 80vw, 35vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </AnimateIn>

          {/* Text */}
          <div className="space-y-8">
            <AnimateIn delay={1}>
              <p className="text-[11px] font-extrabold tracking-[0.28em] uppercase text-burgundy mb-3">
                About Doris Hall-James
              </p>
              <h2 className="font-serif font-semibold text-[clamp(28px,3.5vw,42px)] leading-[1.1] text-brown">
                A singer, performer, and advocate for independent artists
              </h2>
            </AnimateIn>

            <AnimateIn delay={2}>
              <p className="text-[17px] leading-[1.85] text-mid">
                Doris Hall-James is a singer, performer, entrepreneur, and advocate for
                independent artists. Her lifelong dedication to music has allowed her to
                connect with audiences across generations while creating opportunities for
                meaningful artistic expression.
              </p>
              <p className="text-[17px] leading-[1.85] text-mid mt-5">
                Known for her distinctive voice and passion for entertainment, Doris continues
                to build a legacy that celebrates originality, talent, and the enduring power
                of music. Whether on stage, in the studio, or connecting with fans, her work
                represents a commitment to creativity, culture, and community.
              </p>
              <p className="text-[17px] leading-[1.85] text-mid mt-5">
                Beyond performing, Doris founded Simply Music Inc. — a platform dedicated to
                giving independent creators the exposure they deserve through interviews,
                spotlight features, and media opportunities.
              </p>
            </AnimateIn>

            {/* Quote */}
            <AnimateIn delay={3}>
              <blockquote className="border-l-2 border-gold pl-6 py-2 my-8">
                <p className="font-serif font-medium italic text-[clamp(20px,2.4vw,26px)] text-burgundy leading-[1.45]">
                  &ldquo;Her mission is simple: inspire, entertain, and uplift through every performance.&rdquo;
                </p>
              </blockquote>
            </AnimateIn>

            {/* Highlights */}
            <AnimateIn delay={4}>
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-brown/10">
                {[
                  { value: "20+", label: "Years Performing" },
                  { value: "100+", label: "Performances" },
                  { value: "1", label: "Unique Voice" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="font-serif font-semibold text-[34px] text-burgundy leading-none">{s.value}</p>
                    <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-mid mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </AnimateIn>

            <AnimateIn delay={5}>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="/music" className="inline-flex items-center text-[12px] font-bold tracking-[0.14em] uppercase text-cream bg-burgundy hover:bg-burgundy-deep px-7 py-3.5 rounded-sm transition-colors">
                  Explore the Music
                </Link>
                <Link href="/simply-music" className="inline-flex items-center text-[12px] font-bold tracking-[0.14em] uppercase text-burgundy border border-burgundy/40 hover:border-burgundy px-7 py-3.5 rounded-sm transition-colors">
                  Simply Music Inc.
                </Link>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ─── QUOTE BANNER ─── */}
      <section className="bg-burgundy-deep py-20 sm:py-24">
        <AnimateIn>
          <div className="max-w-[800px] mx-auto px-6 sm:px-10 text-center">
            <p className="font-serif font-medium italic text-[clamp(24px,3.2vw,38px)] text-cream leading-[1.4]">
              &ldquo;Music has the power to unite people, inspire change, and create
              unforgettable moments. Thank you for being part of this journey.&rdquo;
            </p>
            <p className="mt-6 text-[12px] font-bold tracking-[0.22em] uppercase text-gold-light">
              — Doris Hall-James
            </p>
          </div>
        </AnimateIn>
      </section>

      <Footer />
    </>
  );
}

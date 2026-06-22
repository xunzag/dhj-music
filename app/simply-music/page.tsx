import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ApplyForm from "@/components/ApplyForm";
import AnimateIn from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "Simply Music Inc. — Be Seen, Heard & Discovered",
  description:
    "Simply Music Inc. gives independent creators — musicians, authors, podcasters, entrepreneurs — a platform to reach new audiences through interviews and spotlight features hosted by Doris Hall-James.",
};

const benefits = [
  {
    num: "01",
    title: "Reach a wider audience",
    desc: "Reach thousands of viewers and listeners and share your story with an engaged, music-loving community.",
  },
  {
    num: "02",
    title: "Build credibility",
    desc: "Build credibility and visibility through professional interviews and spotlight features crafted around you.",
  },
  {
    num: "03",
    title: "Connect with professionals",
    desc: "Join a network of independent creators and industry professionals who champion authentic voices.",
  },
  {
    num: "04",
    title: "Expand your brand",
    desc: "Grow your personal or business brand with the right exposure at the right time.",
  },
  {
    num: "05",
    title: "Share your story",
    desc: "Tell your story your way through interviews and promotional features built entirely around you.",
  },
];

const creatorTypes = ["Musicians", "Authors", "Podcasters", "Entrepreneurs", "Creators"];

export default function SimplyMusicPage() {
  return (
    <>
      <Navbar />

      {/* ─── HERO — split screen (photo left, text right) ─────── */}
      <section className="relative flex flex-col lg:flex-row min-h-screen pt-[76px] overflow-hidden">

        {/* LEFT — full-height photo panel */}
        <div className="relative lg:w-[44%] h-[60vw] lg:h-auto min-h-[380px] bg-brown order-last lg:order-first">
          <Image
            src="/images/dorris2.jpg"
            alt="Doris Hall-James"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 44vw"
            className="object-cover object-[center_18%]"
          />
          {/* Gradient blending into right text panel on desktop */}
          <div className="hidden lg:block absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-burgundy-deep to-transparent z-10" />
          {/* Bottom fade on mobile */}
          <div className="lg:hidden absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-burgundy-deep to-transparent" />
        </div>

        {/* RIGHT — dark text panel */}
        <div className="relative z-10 flex items-center bg-burgundy-deep lg:w-[56%] px-6 sm:px-12 lg:pl-14 xl:pl-20 lg:pr-16 py-24 lg:py-28">
          <div className="max-w-[560px] w-full">

            {/* Label */}
            <div className="flex items-center gap-4 mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <span className="block w-10 h-px bg-gold-light animate-line-grow" />
              <span className="text-[11px] font-extrabold tracking-[0.28em] uppercase text-gold-light">
                A Platform for Independent Creators
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-serif leading-[0.92] tracking-tight text-cream mb-8 animate-fade-up"
              style={{ fontSize: "clamp(50px,6.2vw,88px)", animationDelay: "0.16s" }}
            >
              <span className="block font-semibold">Be seen,</span>
              <span className="block font-semibold">be heard,</span>
              <span className="block font-medium italic text-gold-light">be discovered.</span>
            </h1>

            {/* Description */}
            <p
              className="text-[17px] sm:text-[18px] leading-[1.8] text-cream/72 mb-8 animate-fade-up"
              style={{ animationDelay: "0.24s" }}
            >
              Simply Music Inc. gives independent creators a professional platform —
              connecting them with meaningful exposure through interviews, spotlight
              features, and media opportunities hosted by Doris Hall-James.
            </p>

            {/* Creator type pills */}
            <div className="flex flex-wrap gap-2 mb-10 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              {creatorTypes.map((type) => (
                <span
                  key={type}
                  className="text-[11px] font-semibold tracking-[0.08em] uppercase text-cream/75 border border-cream/22 rounded-full px-4 py-[7px]"
                >
                  {type}
                </span>
              ))}
            </div>

            {/* CTA */}
            <Link
              href="#apply"
              className="inline-flex items-center gap-2 text-[12px] font-bold tracking-[0.14em] uppercase text-burgundy-deep bg-gold-light hover:bg-gold-pale px-8 py-4 rounded-sm transition-colors duration-200 animate-fade-up"
              style={{ animationDelay: "0.36s" }}
            >
              Apply to Be Featured
            </Link>

            {/* Stat strip */}
            <div
              className="flex gap-8 pt-8 border-t border-cream/12 mt-10 animate-fade-up"
              style={{ animationDelay: "0.44s" }}
            >
              {[
                { value: "20+", label: "Years in Entertainment" },
                { value: "All", label: "Creator Types Welcome" },
                { value: "1", label: "Authentic Platform" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-serif font-semibold text-[28px] text-gold-light leading-none">
                    {s.value}
                  </p>
                  <p className="text-[10px] font-bold tracking-[0.1em] uppercase text-cream/45 mt-1">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Full-width bottom fade — blends hero into the mission section below */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-warm pointer-events-none z-40" />
      </section>

      {/* ─── MISSION ─────────────────────────────────────────── */}
      <section className="bg-warm py-24 sm:py-32">
        <div className="max-w-[840px] mx-auto px-5 sm:px-10 text-center">
          <AnimateIn>
            <p className="text-[11px] font-extrabold tracking-[0.28em] uppercase text-burgundy mb-5">
              Our Mission
            </p>
            <h2 className="font-serif font-semibold text-[clamp(28px,3.8vw,44px)] leading-[1.1] text-brown mb-7">
              A professional platform for creative voices
            </h2>
            <p className="text-[17px] sm:text-[18px] leading-[1.85] text-mid">
              Our mission is to provide creators with a professional platform where their stories,
              talents, and businesses can reach new audiences. Through interviews, promotional
              features, and community engagement, we help creative voices gain the visibility
              they deserve — because every story matters.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ─── DORIS SPOTLIGHT ─────────────────────────────────────────── */}
      <section className="bg-cream py-24 sm:py-32 border-y border-brown/10">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.46fr] gap-14 lg:gap-20 items-center">

            {/* Quote */}
            <div>
              {/* Decorative large open-quote */}
              <p
                aria-hidden
                className="font-serif text-[120px] sm:text-[160px] leading-[0.7] text-burgundy/10 select-none mb-2"
              >
                &ldquo;
              </p>
              <blockquote className="-mt-2">
                <p className="font-serif font-medium italic text-[clamp(26px,3.2vw,42px)] text-brown leading-[1.36] mb-7">
                  Every creator deserves a stage. Simply Music gives them one.
                </p>
                <div className="flex items-center gap-4">
                  <span className="block w-8 h-px bg-gold" />
                  <cite className="not-italic">
                    <span className="block text-[13px] font-bold tracking-[0.2em] uppercase text-burgundy">
                      Doris Hall-James
                    </span>
                    <span className="block text-[13px] text-mid mt-0.5">
                      Founder, Simply Music Inc.
                    </span>
                  </cite>
                </div>
              </blockquote>
            </div>

            {/* Portrait — natural portrait frame, no cropping weirdness */}
            <div className="mx-auto lg:mx-0 w-full max-w-[300px] sm:max-w-[340px]">
              <div className="relative">
                {/* Offset border accent */}
                <div className="absolute inset-3 -right-3 -bottom-3 border border-gold/45 rounded-sm pointer-events-none" />
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm shadow-[0_24px_54px_-20px_rgba(33,26,20,0.45)] bg-warm">
                  <Image
                    src="/images/dorris1.jpg"
                    alt="Doris Hall-James — Founder of Simply Music Inc."
                    fill
                    sizes="(max-width: 1024px) 80vw, 30vw"
                    className="object-cover object-[center_12%]"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── WHY JOIN ─────────────────────────────────────────── */}
      <section className="py-24 sm:py-32">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-10">
          <div className="text-center mb-14">
            <AnimateIn>
              <p className="text-[11px] font-extrabold tracking-[0.28em] uppercase text-burgundy mb-5">
                Why Join?
              </p>
              <h2 className="font-serif font-semibold text-[clamp(30px,4vw,46px)] leading-[1.06] text-brown">
                What being featured gives you
              </h2>
            </AnimateIn>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b, i) => (
              <AnimateIn key={b.num} delay={(Math.min(i + 1, 5) as 1 | 2 | 3 | 4 | 5)}>
                <div className="bg-warm-light border border-brown/10 rounded-sm p-9 hover-lift h-full">
                  <p className="font-serif font-semibold text-[34px] text-gold leading-none mb-5">
                    {b.num}
                  </p>
                  <h3 className="font-serif font-semibold text-[22px] text-brown mb-3 leading-tight">
                    {b.title}
                  </h3>
                  <p className="text-[15px] leading-[1.72] text-mid-light">{b.desc}</p>
                </div>
              </AnimateIn>
            ))}

            {/* CTA card */}
            <AnimateIn delay={5}>
              <div className="bg-burgundy rounded-sm p-9 flex flex-col justify-center hover-lift h-full">
                <h3 className="font-serif font-semibold text-[24px] text-cream mb-4 leading-tight">
                  Ready to be featured?
                </h3>
                <p className="text-cream/70 text-[15px] leading-relaxed mb-6">
                  Applications are reviewed on a rolling basis. Apply today and take the next step.
                </p>
                <Link
                  href="#apply"
                  className="inline-flex items-center text-[11px] font-bold tracking-[0.12em] uppercase text-gold-light border-b border-gold-light pb-0.5 hover:opacity-75 transition-opacity"
                >
                  Apply now →
                </Link>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─────────────────────────────────────────── */}
      <section className="bg-warm py-20 sm:py-28">
        <div className="max-w-[960px] mx-auto px-5 sm:px-10 text-center">
          <AnimateIn>
            <p className="text-[11px] font-extrabold tracking-[0.28em] uppercase text-burgundy mb-5">
              How It Works
            </p>
            <h2 className="font-serif font-semibold text-[clamp(28px,3.5vw,40px)] leading-[1.1] text-brown mb-12">
              Three simple steps
            </h2>
          </AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {[
              { step: "1", label: "Apply", desc: "Fill out the application form below with details about your work and what you'd like to share." },
              { step: "2", label: "Connect", desc: "Doris or her team will reach out to schedule an interview or spotlight feature." },
              { step: "3", label: "Get Featured", desc: "Your story reaches our audience across social media, web, and media channels." },
            ].map((s, i) => (
              <AnimateIn key={s.step} delay={(Math.min(i + 1, 5) as 1 | 2 | 3 | 4 | 5)}>
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-burgundy text-cream font-serif font-semibold text-[22px] flex items-center justify-center mb-5">
                    {s.step}
                  </div>
                  <h3 className="font-serif font-semibold text-[20px] text-brown mb-3">{s.label}</h3>
                  <p className="text-[15px] leading-[1.72] text-mid">{s.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── APPLY FORM ─────────────────────────────────────────── */}
      <section id="apply" className="bg-burgundy-deep py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")" }} />
        <div className="max-w-[720px] mx-auto px-5 sm:px-10 relative z-10">
          <div className="text-center mb-12">
            <AnimateIn>
              <p className="text-[11px] font-extrabold tracking-[0.28em] uppercase text-cream/40 mb-5">
                Get Started
              </p>
              <h2 className="font-serif font-semibold text-[clamp(32px,4vw,50px)] leading-[1.06] text-cream mb-5">
                Apply to be featured
              </h2>
              <p className="text-[17px] leading-[1.8] text-cream/70">
                Tell us about your work and what you&rsquo;d like to share. We&rsquo;ll be in touch
                about interview and spotlight opportunities.
              </p>
            </AnimateIn>
          </div>
          <AnimateIn delay={1}>
            <ApplyForm />
          </AnimateIn>
        </div>
      </section>

      {/* ─── BACK TO DHJ ─────────────────────────────────────────── */}
      <section className="bg-darkest py-10">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-10 flex flex-wrap items-center justify-between gap-4">
          <p className="text-[13px] text-[#a09587]">
            Part of the DHJ Indie Show family
          </p>
          <Link
            href="/"
            className="text-[12px] font-bold tracking-[0.12em] uppercase text-gold-light hover:text-cream transition-colors"
          >
            ← Back to DHJ Indie Show
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import ContactForm from "@/components/ContactForm";
import AnimateIn from "@/components/AnimateIn";

/* ─── Events data — add events here as they're scheduled ─── */
interface Event {
  id: string;
  title: string;
  date: string;
  venue: string;
  location: string;
  ticketUrl?: string;
}
const events: Event[] = [
  // { id: "1", title: "An Evening with DHJ", date: "August 12, 2026", venue: "The Roxy", location: "Los Angeles, CA", ticketUrl: "#" },
];

export default function Home() {
  return (
    <>
      <Navbar />

      {/* ─── HERO — split screen ───────────────────────────────────── */}
      <section
        id="top"
        className="relative flex flex-col lg:flex-row min-h-[92vh] pt-[76px] overflow-hidden"
      >
        {/* LEFT — text panel */}
        <div className="relative z-10 flex items-center bg-cream lg:w-[54%] px-6 sm:px-12 lg:pl-16 xl:pl-24 py-16 lg:py-0">
          <div className="max-w-[540px]">
            {/* Label */}
            <div
              className="flex items-center gap-4 mb-7 animate-fade-up"
              style={{ animationDelay: "0.05s" }}
            >
              <span className="block w-10 h-px bg-burgundy animate-line-grow" />
              <span className="text-[11px] font-extrabold tracking-[0.3em] uppercase text-burgundy">
                The Official Site
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-serif leading-[0.9] tracking-tight text-brown mb-8 animate-fade-up"
              style={{ fontSize: "clamp(54px,7vw,94px)", animationDelay: "0.1s" }}
            >
              <span className="block font-semibold">The DHJ</span>
              <span className="block font-medium italic text-burgundy">Indie Show</span>
            </h1>

            {/* Sub */}
            <p
              className="text-[17px] sm:text-[18px] leading-[1.82] text-mid mb-10 animate-fade-up"
              style={{ animationDelay: "0.22s" }}
            >
              Celebrating music, creativity, and the power of independent
              artistry. Join Doris Hall-James on a journey through unforgettable
              performances, inspiring stories, and a lifelong passion for
              entertainment.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-4 mb-14 animate-fade-up"
              style={{ animationDelay: "0.32s" }}
            >
              <Link
                href="/#music"
                className="inline-flex items-center gap-2 text-[12px] font-bold tracking-[0.14em] uppercase text-cream bg-burgundy hover:bg-burgundy-deep px-8 py-4 rounded-sm transition-colors duration-200"
              >
                Listen Now
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center text-[12px] font-bold tracking-[0.14em] uppercase text-brown border border-brown/30 hover:border-brown px-8 py-4 rounded-sm transition-colors duration-200"
              >
                Contact Us
              </Link>
            </div>

            {/* Stat strip */}
            <div
              className="flex gap-8 pt-8 border-t border-brown/12 animate-fade-up"
              style={{ animationDelay: "0.42s" }}
            >
              {[
                { value: "20+", label: "Years Performing" },
                { value: "∞", label: "Stories Told" },
                { value: "1", label: "Unique Voice" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-serif font-semibold text-[28px] text-burgundy leading-none">
                    {s.value}
                  </p>
                  <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-mid mt-1">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT — full-height image panel */}
        <div className="relative lg:w-[46%] h-[55vw] lg:h-auto min-h-[380px] bg-warm">
          <Image
            src="/images/dorris1.jpg"
            alt="Doris Hall-James"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 46vw"
            className="object-cover object-[center_20%]"
          />
          {/* Gradient blending edge on desktop */}
          <div className="hidden lg:block absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-cream to-transparent z-10" />
          {/* Bottom fade on mobile */}
          <div className="lg:hidden absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-cream to-transparent" />

          {/* Floating name badge */}
          <div className="absolute bottom-8 left-8 z-20 bg-darkest/75 backdrop-blur-sm px-4 py-3 rounded-sm">
            <p className="text-[10px] font-extrabold tracking-[0.28em] uppercase text-gold-light">
              Doris Hall-James
            </p>
            <p className="text-[11px] text-cream/60 mt-0.5">Singer · Performer · Entrepreneur</p>
          </div>
        </div>

        {/* Full-width bottom fade — bleeds hero into the welcome section */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-cream pointer-events-none z-40" />
      </section>

      {/* ─── WELCOME ─────────────────────────────────────────── */}
      <section className="py-24 sm:py-32">
        <div className="max-w-[860px] mx-auto px-5 sm:px-10 text-center">
          <AnimateIn>
            <p className="text-[11px] font-extrabold tracking-[0.28em] uppercase text-burgundy mb-5">
              Welcome
            </p>
            <h2 className="font-serif font-semibold text-[clamp(32px,4vw,46px)] leading-[1.1] text-brown mb-7">
              Welcome to the official DHJ Indie Show
            </h2>
            <p className="text-[17px] sm:text-[18px] leading-[1.85] text-mid">
              The DHJ Indie Show is a celebration of music, performance, and artistic expression
              led by Doris Hall-James. With decades of experience in the entertainment industry,
              Doris continues to inspire audiences through powerful vocals, memorable performances,
              and a commitment to keeping authentic music alive. Whether on stage, in the studio,
              or connecting with fans, the DHJ Indie Show represents a passion for creativity,
              culture, and community.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ─── ABOUT ─────────────────────────────────────────── */}
      <section id="about" className="bg-warm py-24 sm:py-32">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-10 grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-20 items-center">
          {/* Portrait */}
          <AnimateIn>
            <div className="relative max-w-[420px] mx-auto lg:mx-0">
              <div className="absolute inset-3 -right-3 -bottom-3 border border-gold/40 rounded-sm pointer-events-none" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-[0_28px_54px_-24px_rgba(33,26,20,0.45)] bg-gold/20">
                <Image
                  src="/images/dorris2.jpg"
                  alt="Doris Hall-James — portrait"
                  fill
                  sizes="(max-width: 1024px) 80vw, 35vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </AnimateIn>

          {/* Text */}
          <div>
            <AnimateIn delay={1}>
              <p className="text-[11px] font-extrabold tracking-[0.28em] uppercase text-burgundy mb-5">
                About Doris Hall-James
              </p>
              <h2 className="font-serif font-semibold text-[clamp(30px,3.5vw,44px)] leading-[1.1] text-brown mb-6">
                A singer, performer, and advocate for independent artists
              </h2>
            </AnimateIn>
            <AnimateIn delay={2}>
              <p className="text-[17px] leading-[1.82] text-mid mb-6">
                Doris Hall-James is a singer, performer, entrepreneur, and advocate for
                independent artists. Her lifelong dedication to music has allowed her to connect
                with audiences across generations while creating opportunities for meaningful
                artistic expression.
              </p>
              <p className="text-[17px] leading-[1.82] text-mid mb-8">
                Known for her distinctive voice and passion for entertainment, Doris continues to
                build a legacy that celebrates originality, talent, and the enduring power of music.
              </p>
              <blockquote className="border-t border-gold/40 pt-6">
                <p className="font-serif font-medium italic text-[clamp(20px,2.4vw,26px)] leading-[1.45] text-burgundy">
                  &ldquo;Her mission is simple: inspire, entertain, and uplift through every performance.&rdquo;
                </p>
              </blockquote>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ─── MUSIC ─────────────────────────────────────────── */}
      <section id="music" className="py-24 sm:py-32">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-10 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div>
            <AnimateIn>
              <p className="text-[11px] font-extrabold tracking-[0.28em] uppercase text-burgundy mb-5">
                The Music
              </p>
              <h2 className="font-serif font-semibold text-[clamp(36px,5vw,58px)] leading-[1.04] text-brown mb-6">
                A Voice With Purpose
              </h2>
            </AnimateIn>
            <AnimateIn delay={1}>
              <p className="text-[17px] leading-[1.82] text-mid mb-5">
                Music has always been at the heart of Doris Hall-James&rsquo; journey. Through
                soulful performances and heartfelt storytelling, the DHJ Indie Show delivers
                music that connects people, evokes emotion, and creates lasting memories.
              </p>
              <p className="text-[17px] leading-[1.82] text-mid mb-10">
                Explore featured songs, live performances, recordings, and exclusive content
                from Doris Hall-James — a voice that has stood the test of time.
              </p>
              <Link
                href="/#gallery"
                className="inline-flex items-center text-[12px] font-bold tracking-[0.14em] uppercase text-cream bg-burgundy hover:bg-burgundy-deep px-8 py-4 rounded-sm transition-colors duration-200"
              >
                Explore Gallery
              </Link>
            </AnimateIn>
          </div>

          {/* Performance photo */}
          <AnimateIn delay={2} className="order-first lg:order-last">
            <div className="relative aspect-square overflow-hidden rounded-sm shadow-[0_28px_54px_-24px_rgba(33,26,20,0.45)]">
              <Image
                src="/images/performance.jpg"
                alt="Doris Hall-James performing"
                fill
                sizes="(max-width: 1024px) 90vw, 42vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-darkest/40 via-transparent to-transparent" />
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ─── EVENTS ─────────────────────────────────────────── */}
      <section id="events" className="bg-warm py-24 sm:py-32">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-10">
          <div className="text-center mb-14">
            <AnimateIn>
              <p className="text-[11px] font-extrabold tracking-[0.28em] uppercase text-burgundy mb-5">
                Live Performances &amp; Events
              </p>
              <h2 className="font-serif font-semibold text-[clamp(30px,4vw,46px)] leading-[1.06] text-brown mb-5 max-w-[700px] mx-auto">
                Experience the energy, passion, and artistry — live
              </h2>
              <p className="text-[17px] sm:text-[18px] leading-[1.8] text-mid max-w-[560px] mx-auto">
                Stay updated on upcoming performances, appearances, and special events
                from Doris Hall-James.
              </p>
            </AnimateIn>
          </div>

          {events.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {events.map((ev) => (
                <AnimateIn key={ev.id}>
                  <div className="bg-warm-light border border-gold/30 rounded-sm p-7 hover-lift">
                    <p className="text-[11px] font-extrabold tracking-[0.2em] uppercase text-gold mb-3">
                      {ev.date}
                    </p>
                    <h3 className="font-serif font-semibold text-[22px] text-brown mb-1">{ev.title}</h3>
                    <p className="text-mid text-[14px] mb-5">
                      {ev.venue} · {ev.location}
                    </p>
                    {ev.ticketUrl && (
                      <a
                        href={ev.ticketUrl}
                        className="inline-flex text-[11px] font-bold tracking-[0.14em] uppercase text-burgundy border-b border-burgundy pb-0.5"
                      >
                        Get Tickets →
                      </a>
                    )}
                  </div>
                </AnimateIn>
              ))}
            </div>
          ) : (
            <AnimateIn>
              <div className="max-w-[640px] mx-auto bg-warm-light border border-gold/30 rounded-sm p-10 text-center">
                <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-burgundy/8 flex items-center justify-center">
                  <svg className="w-7 h-7 text-burgundy/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                </div>
                <p className="font-serif font-semibold text-[26px] text-brown mb-3 leading-tight">
                  Upcoming events announced soon
                </p>
                <p className="text-mid text-[15px] leading-relaxed mb-8">
                  Stay in touch to be the first to know about upcoming performances,
                  appearances, and special events from Doris Hall-James.
                </p>
                <a
                  href="mailto:simplymusic@verizon.net?subject=Event%20Updates%20from%20DHJ%20Indie%20Show"
                  className="inline-flex items-center text-[11px] font-bold tracking-[0.14em] uppercase text-cream bg-burgundy hover:bg-burgundy-deep px-7 py-3.5 rounded-sm transition-colors duration-200"
                >
                  Get Notified
                </a>
              </div>
            </AnimateIn>
          )}
        </div>
      </section>

      {/* ─── GALLERY ─────────────────────────────────────────── */}
      <section id="gallery" className="py-24 sm:py-32">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-10">
          <div className="text-center mb-12">
            <AnimateIn>
              <p className="text-[11px] font-extrabold tracking-[0.28em] uppercase text-burgundy mb-5">
                Photo &amp; Media Gallery
              </p>
              <h2 className="font-serif font-semibold text-[clamp(30px,4vw,46px)] leading-[1.06] text-brown mb-5 max-w-[700px] mx-auto">
                Memorable moments, performances &amp; highlights
              </h2>
              <p className="text-[17px] leading-[1.8] text-mid max-w-[560px] mx-auto">
                Take a closer look at behind-the-scenes experiences and highlights from
                the journey of Doris Hall-James and the DHJ Indie Show.
              </p>
            </AnimateIn>
          </div>
          <AnimateIn delay={1}>
            <Gallery />
          </AnimateIn>
        </div>
      </section>

      {/* ─── FEATURED QUOTE ─────────────────────────────────────────── */}
      <section className="bg-burgundy-deep py-28 sm:py-36 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")" }} />
        <div className="max-w-[880px] mx-auto px-5 sm:px-10 text-center relative z-10">
          <AnimateIn>
            <p className="text-[11px] font-extrabold tracking-[0.28em] uppercase text-cream/40 mb-8">
              Featured Message
            </p>
            <blockquote>
              <p className="font-serif font-medium italic text-[clamp(26px,3.5vw,42px)] leading-[1.38] text-cream mb-8">
                &ldquo;Music has the power to unite people, inspire change, and create unforgettable
                moments. Thank you for being part of this journey.&rdquo;
              </p>
              <cite className="not-italic text-[13px] font-bold tracking-[0.22em] uppercase text-gold-light">
                Doris Hall-James
              </cite>
            </blockquote>
          </AnimateIn>
        </div>
      </section>

      {/* ─── SIMPLY MUSIC TEASER ─────────────────────────────────────────── */}
      <section className="py-24 sm:py-32">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-10 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div>
            <AnimateIn>
              <p className="text-[11px] font-extrabold tracking-[0.28em] uppercase text-burgundy mb-5">
                Also from Doris Hall-James
              </p>
              <h2 className="font-serif font-semibold text-[clamp(30px,3.8vw,46px)] leading-[1.06] text-brown mb-6">
                Simply Music Inc. — a platform for independent creators
              </h2>
            </AnimateIn>
            <AnimateIn delay={1}>
              <p className="text-[17px] leading-[1.82] text-mid max-w-[500px] mb-8">
                Beyond the show, Doris gives musicians, authors, entrepreneurs, podcasters,
                and creators meaningful exposure through interviews and spotlight features.
                Be seen, heard, and discovered.
              </p>
              <Link
                href="/simply-music"
                className="inline-flex items-center gap-2 text-[13px] font-bold tracking-[0.12em] uppercase text-burgundy border-b border-burgundy pb-1 hover:opacity-70 transition-opacity"
              >
                Explore Simply Music →
              </Link>
            </AnimateIn>
          </div>

          {/* Simply Music logo card */}
          <AnimateIn delay={2}>
            <div className="bg-warm-light border border-gold/40 rounded-sm p-12 flex items-center justify-center shadow-[0_22px_50px_-28px_rgba(33,26,20,0.35)] hover-lift">
              <Image
                src="/images/simply-music-clear.png"
                alt="Simply Music Incorporated"
                width={340}
                height={180}
                className="w-full max-w-[300px] h-auto object-contain"
              />
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ─── CONTACT ─────────────────────────────────────────── */}
      <section id="contact" className="bg-warm py-24 sm:py-32">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-10 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-start">
          {/* Heading */}
          <div className="lg:pt-2">
            <AnimateIn>
              <p className="text-[11px] font-extrabold tracking-[0.28em] uppercase text-burgundy mb-5">
                Contact
              </p>
              <h2 className="font-serif font-semibold text-[clamp(36px,4.5vw,52px)] leading-[1.05] text-brown mb-6">
                Let&rsquo;s connect
              </h2>
              <p className="text-[17px] leading-[1.82] text-mid mb-8">
                Interested in booking, collaborations, media inquiries, or learning more about the
                DHJ Indie Show? We&rsquo;d love to hear from you.
              </p>
              <div className="flex flex-col gap-3 text-[14px] text-mid">
                <a href="mailto:simplymusic@verizon.net" className="flex items-center gap-2 hover:text-burgundy transition-colors">
                  <svg className="w-4 h-4 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  simplymusic@verizon.net
                </a>
              </div>
            </AnimateIn>
          </div>

          {/* Form */}
          <AnimateIn delay={1}>
            <ContactForm />
          </AnimateIn>
        </div>
      </section>

      <Footer />
    </>
  );
}

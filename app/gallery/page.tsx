import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import AnimateIn from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "Gallery — The DHJ Indie Show",
  description:
    "Memorable moments, performances, and highlights from the journey of Doris Hall-James and the DHJ Indie Show.",
};

export default function GalleryPage() {
  return (
    <>
      <Navbar />

      {/* ─── HERO ─── */}
      <section className="pt-[76px] bg-darkest relative overflow-hidden">
        {/* Photo strip background — small tiled thumbnails for texture */}
        <div className="absolute inset-0 grid grid-cols-4 opacity-20 pointer-events-none">
          {[
            "/images/gallery1.jpg",
            "/images/gallery2.jpg",
            "/images/gallery3.jpg",
            "/images/gallery4.jpg",
          ].map((src) => (
            <div key={src} className="relative overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-darkest/80 via-darkest/60 to-darkest" />

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 sm:px-10 py-24 sm:py-32 text-center">
          <p className="text-[11px] font-extrabold tracking-[0.3em] uppercase text-gold-light mb-5">
            Photo &amp; Media Gallery
          </p>
          <h1 className="font-serif font-semibold text-[clamp(40px,6vw,76px)] leading-[0.95] text-cream mb-5">
            Moments That<br />
            <span className="font-medium italic text-gold-light">Tell the Story</span>
          </h1>
          <p className="text-[16px] sm:text-[18px] text-cream/60 max-w-[500px] mx-auto leading-[1.75]">
            Behind-the-scenes, on stage, and everything in between.
          </p>
        </div>
      </section>

      {/* ─── GALLERY GRID ─── */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          <AnimateIn>
            <p className="text-[13px] text-mid mb-8 text-center">
              Click any photo to view full screen. Use arrow keys or swipe to navigate.
            </p>
          </AnimateIn>
          <AnimateIn delay={1}>
            <Gallery />
          </AnimateIn>
        </div>
      </section>

      {/* ─── BOTTOM CTA ─── */}
      <section className="bg-warm py-16 sm:py-20">
        <div className="max-w-[680px] mx-auto px-6 sm:px-10 text-center">
          <AnimateIn>
            <h2 className="font-serif font-semibold text-[clamp(24px,3vw,36px)] text-brown mb-4">
              Want more content?
            </h2>
            <p className="text-[16px] leading-[1.8] text-mid mb-8">
              Follow the DHJ Indie Show journey and stay connected for the latest
              photos, performances, and updates from Doris Hall-James.
            </p>
            <a
              href="mailto:simplymusic@verizon.net?subject=Stay%20Connected%20with%20DHJ"
              className="inline-flex items-center text-[12px] font-bold tracking-[0.14em] uppercase text-cream bg-burgundy hover:bg-burgundy-deep px-7 py-3.5 rounded-sm transition-colors"
            >
              Stay Connected
            </a>
          </AnimateIn>
        </div>
      </section>

      <Footer />
    </>
  );
}

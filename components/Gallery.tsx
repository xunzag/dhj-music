"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import clsx from "clsx";

const photos = [
  { src: "/images/gallery1.jpg", alt: "On Stage" },
  { src: "/images/gallery2.jpg", alt: "Live Performance" },
  { src: "/images/gallery3.jpg", alt: "Studio Session" },
  { src: "/images/gallery4.jpg", alt: "Behind the Scenes" },
  { src: "/images/dorris1.jpg", alt: "Portrait" },
  { src: "/images/dorris2.jpg", alt: "Event Night" },
  { src: "/images/performance.jpg", alt: "Performance Highlight" },
  { src: "/images/96419935_2714627695437098_2960583500446564352_n.jpg", alt: "DHJ Promo" },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const close = useCallback(() => setLightbox(null), []);
  const prev = useCallback(
    () => setLightbox((i) => (i === null ? null : (i - 1 + photos.length) % photos.length)),
    []
  );
  const next = useCallback(
    () => setLightbox((i) => (i === null ? null : (i + 1) % photos.length)),
    []
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, close, prev, next]);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {photos.map((photo, i) => (
          <button
            key={photo.src}
            onClick={() => setLightbox(i)}
            className="group relative aspect-[4/3] overflow-hidden rounded-sm bg-warm border border-gold/20 hover-lift cursor-pointer"
            aria-label={`View photo: ${photo.alt}`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-darkest/0 group-hover:bg-darkest/25 transition-colors duration-300" />
            <span className="absolute bottom-0 left-0 right-0 p-3 text-[11px] font-bold tracking-[0.15em] uppercase text-cream opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-darkest/70 to-transparent">
              {photo.alt}
            </span>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-darkest/95 flex items-center justify-center"
          onClick={close}
        >
          {/* Close */}
          <button
            className="absolute top-5 right-5 text-cream/70 hover:text-cream text-3xl leading-none font-light z-10"
            onClick={close}
            aria-label="Close"
          >
            ×
          </button>

          {/* Prev */}
          <button
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-cream/60 hover:text-cream z-10 text-4xl leading-none font-thin p-2"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous"
          >
            ‹
          </button>

          {/* Image */}
          <div
            className="relative w-full max-w-4xl max-h-[90vh] mx-16 sm:mx-24 aspect-[4/3]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photos[lightbox].src}
              alt={photos[lightbox].alt}
              fill
              sizes="90vw"
              className="object-contain"
              priority
            />
          </div>

          {/* Next */}
          <button
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-cream/60 hover:text-cream z-10 text-4xl leading-none font-thin p-2"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next"
          >
            ›
          </button>

          {/* Caption + counter */}
          <div className="absolute bottom-6 left-0 right-0 text-center">
            <p className="text-[12px] font-bold tracking-[0.2em] uppercase text-cream/60">
              {photos[lightbox].alt}
            </p>
            <p className="text-[11px] text-cream/30 mt-1">
              {lightbox + 1} / {photos.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, Images } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const galleryImages = [
  { src: "/treatment-room.jpeg", alt: "Treatment Room",      label: "Treatment Room"      },
  { src: "/dental-equipment.jpeg", alt: "Dental Equipment",    label: "Dental Equipment"    },
  { src: "/reception-room.jpeg", alt: "Reception Area",      label: "Reception Area"      },
  { src: "/sterilisation-unit.jpeg", alt: "Sterilisation Unit",  label: "Sterilisation Unit"  },
  { src: "/panoramic-view.jpeg", alt: "Panoramic View",      label: "Panoramic View"      },
];

const GAP = 16;

// Placeholder shown until real images are added
const Placeholder = ({ label }: { label: string }) => (
  <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-primary/5 border border-primary/15 rounded-xl">
    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
      <Images className="w-6 h-6 text-primary/50" />
    </div>
    <span className="text-xs text-muted-foreground text-center px-2">{label}</span>
  </div>
);

const GallerySection = () => {
  const [cur, setCur]           = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [cardW, setCardW]       = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({});
  const outerRef                = useRef<HTMLDivElement>(null);

  // ── Touch refs for swipe (mobile only) ──────────────────────────────────
  const touchStartX = useRef<number>(0);
  const touchEndX   = useRef<number>(0);

  // Mobile detection
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)");
    const handler = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsMobile(e.matches);
      setCur(0);
    };
    handler(mq);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Pixel-exact card width
  const measure = useCallback(() => {
    if (!outerRef.current) return;
    const containerW = outerRef.current.offsetWidth;
    const pv = isMobile ? 1 : 3;
    setCardW((containerW - GAP * (pv - 1)) / pv);
  }, [isMobile]);

  useEffect(() => {
    measure();
    const ro = new ResizeObserver(measure);
    if (outerRef.current) ro.observe(outerRef.current);
    return () => ro.disconnect();
  }, [measure]);

  // Close lightbox on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((i) => i !== null ? Math.min(galleryImages.length - 1, i + 1) : null);
      if (e.key === "ArrowLeft")  setLightbox((i) => i !== null ? Math.max(0, i - 1) : null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const perView  = isMobile ? 1 : 3;
  const maxCur   = galleryImages.length - perView;
  const isStart  = cur === 0;
  const isEnd    = cur === maxCur;
  const offset   = cardW > 0 ? cur * (cardW + GAP) : 0;
  const dotCount = maxCur + 1;

  const prev = () => setCur((c) => Math.max(0, c - 1));
  const next = () => setCur((c) => Math.min(maxCur, c + 1));

  // ── Touch handlers ───────────────────────────────────────────────────────
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const delta = touchStartX.current - touchEndX.current;
    if (Math.abs(delta) > 40) {   // ignore tiny accidental touches
      if (delta > 0) next();      // swipe left  → next slide
      else           prev();      // swipe right → prev slide
    }
  };

  return (
    <div className="w-full">

      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl text-secondary mb-3">
          Clinic <span className="text-primary">Gallery</span>
        </h2>
        <p className="font-body text-muted-foreground max-w-lg mx-auto">
          Explore Our Advanced, Hygienic & Patient-Friendly Clinic.
        </p>
      </div>

      {/* Carousel wrapper */}
      <div className="relative border border-primary/15 bg-primary/[0.03] rounded-2xl p-5 md:p-6">

        {/* Arrows */}
        <div className="flex justify-center sm:justify-end gap-2 mb-4 sm:mb-0 sm:absolute sm:top-5 sm:right-5 z-10">
          <button
            onClick={prev}
            disabled={isStart}
            className={cn(
              "w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-150",
              isStart
                ? "border-primary/15 text-primary/25 cursor-not-allowed"
                : "border-primary/40 text-primary hover:bg-primary hover:text-white hover:border-primary active:scale-95 cursor-pointer"
            )}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={next}
            disabled={isEnd}
            className={cn(
              "w-9 h-9 rounded-full flex items-center justify-center transition-all duration-150",
              isEnd
                ? "bg-primary/20 text-white/30 cursor-not-allowed"
                : "bg-primary text-white hover:bg-primary/80 active:scale-95 cursor-pointer"
            )}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Track — touch handlers attached here for mobile swipe */}
        <div
          ref={outerRef}
          className="overflow-hidden sm:mt-10 sm:pt-1"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ gap: GAP, transform: `translateX(-${offset}px)` }}
          >
            {galleryImages.map((img, i) => (
              <div
                key={img.alt}
                className="flex-shrink-0 cursor-pointer group"
                style={{ width: cardW > 0 ? cardW : undefined }}
                onClick={() => setLightbox(i)}
              >
                <div className="relative overflow-hidden rounded-xl border border-primary/15 bg-primary/5 aspect-[4/3] md:aspect-[4/5]">

                  {/* Image or placeholder */}
                  {!imgErrors[i] ? (
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={() => setImgErrors((prev) => ({ ...prev, [i]: true }))}
                    />
                  ) : (
                    <Placeholder label={img.label} />
                  )}

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-300 rounded-xl flex items-end">
                    <div className="w-full px-3 pb-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="inline-block text-xs font-semibold text-white bg-primary/80 px-2.5 py-1 rounded-lg">
                        {img.label}
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: dotCount }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCur(i)}
              className={cn(
                "rounded-full border-none cursor-pointer transition-all duration-300",
                i === cur
                  ? "w-6 h-2.5 bg-primary"
                  : "w-2.5 h-2.5 bg-primary/25 hover:bg-primary/50"
              )}
            />
          ))}
        </div>

      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-10 right-0 text-white/70 hover:text-white text-sm font-medium transition-colors"
            >
              Close ✕
            </button>

            {/* Image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-primary/20">
              {!imgErrors[lightbox] ? (
                <Image
                  src={galleryImages[lightbox].src}
                  alt={galleryImages[lightbox].alt}
                  fill
                  className="object-cover"
                  onError={() => setImgErrors((prev) => ({ ...prev, [lightbox as number]: true }))}
                />
              ) : (
                <Placeholder label={galleryImages[lightbox].label} />
              )}
            </div>

            {/* Label + counter */}
            <div className="flex items-center justify-between mt-3 px-1">
              <span className="text-sm font-semibold text-white">
                {galleryImages[lightbox].label}
              </span>
              <span className="text-xs text-white/50">
                {lightbox + 1} / {galleryImages.length}
              </span>
            </div>

            {/* Lightbox prev/next */}
            <button
              onClick={() => setLightbox((i) => Math.max(0, (i ?? 0) - 1))}
              disabled={lightbox === 0}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 border border-white/20 text-white flex items-center justify-center hover:bg-primary transition-all duration-150 disabled:opacity-20 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setLightbox((i) => Math.min(galleryImages.length - 1, (i ?? 0) + 1))}
              disabled={lightbox === galleryImages.length - 1}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 border border-white/20 text-white flex items-center justify-center hover:bg-primary transition-all duration-150 disabled:opacity-20 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default GallerySection;
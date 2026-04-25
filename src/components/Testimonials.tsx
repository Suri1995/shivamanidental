"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  { name: "Bharath Katla",   role: "Root Canal Patient",  text: "I came here with my tooth ache problem solved in single visit only patient friendly,hygienic environment,reasonable price i advice people who are suffering with teeth problem consult dr shankar", rating: 5 },
  { name: "Prince Anil Varma",    role: "Parent of Patient",   text: "Extremely professional, knowledgeable, and always takes time to answer all of my questions thoroughly. Besides, every appointment is on time.", rating: 5 },
  { name: "Lakshmi P.", role: "Cosmetic Dentistry",  text: "Got my smile makeover done here. The cosmetic dentistry team transformed my confidence. Highly recommend!", rating: 5 },
  { name: "Ravi T.",    role: "Implant Patient",     text: "The dental implant procedure was smooth and the results are outstanding. Feels completely natural!", rating: 5 },
  { name: "Sunita M.",  role: "Orthodontic Patient", text: "My braces treatment was handled with so much care. Excellent results and friendly staff throughout.", rating: 5 },
  { name: "Kiran B.",   role: "General Checkup",     text: "Very thorough check-up and cleaning. The clinic is spotless and the staff is incredibly professional.", rating: 5 },
];

const GAP = 20;

const Testimonials = () => {
  const [cur, setCur]           = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [cardW, setCardW]       = useState(0);
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

  // Pixel-exact card width from container
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

  const perView  = isMobile ? 1 : 3;
  const maxCur   = testimonials.length - perView; // 3 desktop, 5 mobile

  const isStart  = cur === 0;
  const isEnd    = cur === maxCur;

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

  // Pixel-exact — last stop always shows exactly perView cards flush
  const offset   = cardW > 0 ? cur * (cardW + GAP) : 0;
  const dotCount = maxCur + 1;

  return (
    <div className="w-full">

      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl text-secondary mb-3">
          What Our{" "}<span className="text-primary">Patients</span>{" "}Say
        </h2>
        <p className="font-body text-muted-foreground max-w-lg mx-auto">
          Hear what our patients have to say about their experience.
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

        {/* Track outer — touch handlers for mobile swipe */}
        <div
          ref={outerRef}
          className="overflow-hidden sm:mt-10 sm:pt-1"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              gap: GAP,
              transform: `translateX(-${offset}px)`,
            }}
          >
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="flex-shrink-0"
                style={{ width: cardW > 0 ? cardW : undefined }}
              >
                <div className="relative flex flex-col justify-between p-5 rounded-xl border border-primary/15 bg-card overflow-hidden hover:border-primary/40 hover:-translate-y-0.5 transition-all duration-200 h-full">

                  {/* Decorative quote */}
                  <span className="absolute -top-3 -left-1 text-8xl font-serif leading-none text-primary/10 select-none pointer-events-none">
                    "
                  </span>

                  <div className="relative z-10">
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="font-body text-sm text-foreground/80 leading-relaxed mb-5 italic">
                      "{t.text}"
                    </p>
                  </div>
                  <div className="flex flex-col">
                  {/* Divider */}
                  <div className="w-full h-px bg-primary/10 mb-4" />

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <span className="text-xs font-bold text-primary">
                        {t.name.split(" ").map((n) => n[0]).join("")}
                      </span>
                    </div>
                    <div>
                      <p className="font-heading text-sm font-semibold text-foreground leading-tight">
                        {t.name}
                      </p>
                      {/* <p className="text-xs text-muted-foreground mt-0.5">{t.role}</p> */}
                    </div>
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
    </div>
  );
};

export default Testimonials;
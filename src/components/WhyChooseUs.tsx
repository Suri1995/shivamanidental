"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import {
  Award, Users, Clock, ShieldCheck, Sparkles, HeartHandshake,
  ChevronLeft, ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const reasons = [
  { icon: Award,          title: "10+ Years Experience",  desc: "Decades of trusted dental expertise serving thousands of patients." },
  { icon: Users,          title: "Expert Team",           desc: "Board-certified specialists across all dental disciplines." },
  { icon: Clock,          title: "Flexible Hours",        desc: "Convenient scheduling including evenings and weekends." },
  { icon: ShieldCheck,    title: "Advanced Technology",   desc: "State-of-the-art equipment for precise, painless treatments." },
  { icon: Sparkles,       title: "Personalized Care",     desc: "Customized treatment plans tailored to your unique needs." },
  { icon: HeartHandshake, title: "Patient First",         desc: "Compassionate care in a warm, welcoming environment." },
];

const GAP = 16; // px — must match the gap-4 below

const WhyChooseUs = () => {
  const [cur, setCur]             = useState(0);
  const [isMobile, setIsMobile]   = useState(false);
  const [cardW, setCardW]         = useState(0);
  const outerRef                  = useRef<HTMLDivElement>(null);

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

  // Measure exact card width from container — never from window
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

  const perView = isMobile ? 1 : 3;
  const maxCur  = reasons.length - perView; // 3 desktop, 5 mobile

  const isStart = cur === 0;
  const isEnd   = cur === maxCur;

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

  // Pixel-exact offset — guarantees last stop shows exactly perView cards flush
  const offset = cardW > 0 ? cur * (cardW + GAP) : 0;

  const dotCount = maxCur + 1;

  return (
    <div className="w-full">

      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl text-secondary mb-3">
          Why Choose <span className="text-primary">Us</span>
        </h2>
        <p className="font-body text-muted-foreground max-w-lg mx-auto">
          We combine expertise with empathy to deliver exceptional dental experiences.
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

        {/* Track outer — clips overflow; touch handlers for mobile swipe */}
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
            {reasons.map((r) => (
              <div
                key={r.title}
                className="flex-shrink-0"
                style={{ width: cardW > 0 ? cardW : undefined }}
              >
                <div className="relative flex flex-col gap-4 p-5 rounded-xl border border-primary/20 bg-primary/5 hover:border-primary hover:-translate-y-0.5 transition-all duration-200 overflow-hidden group h-full">

                  {/* Decorative quote */}
                  <span className="absolute -top-2 -left-1 text-7xl font-serif leading-none text-primary/10 select-none pointer-events-none">
                    "
                  </span>

                  {/* Icon + title */}
                  <div className="flex items-center gap-3 relative z-10">
                    <div className="w-11 h-11 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors duration-200">
                      <r.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-heading text-base font-semibold text-foreground">
                      {r.title}
                    </h3>
                  </div>
                  <div className="flex flex-col gap-4">
                  {/* Divider */}
                  <div className="w-full h-px bg-primary/15 mb-4" />

                  {/* Description */}
                  <p className="font-body text-sm text-muted-foreground leading-relaxed relative z-10">
                    {r.desc}
                  </p>
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

export default WhyChooseUs;
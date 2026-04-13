"use client";

import { CalendarCheck, Phone, Star, ShieldCheck } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden mt-[60px] md:mt-0">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: "url('/initial-banner-bg.jpg')" }}
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-[#021E18]/60 backdrop-blur-[2px]" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/25 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      {/* Main content */}
      <div className="lg:mt-16">
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-[4.5rem] max-w-7xl mx-auto flex flex-col items-center">

          {/* Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/12 border border-primary/40 mb-6 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-[11px] font-semibold tracking-[.09em] uppercase text-primary-foreground/80">
              Advanced &amp; Pain-Free Treatments
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-[clamp(28px,5vw,54px)] font-extrabold leading-[1.15] tracking-tight text-white mb-4 text-balance">
            Your Smile, Our Expertise
            <span className="block text-primary mt-1.5">
              Trusted Dental Care in Nalgonda
            </span>
          </h1>

          {/* Description */}
          <p className="text-[clamp(14px,1.8vw,17px)] leading-[1.8] text-white/85 mb-8 max-w-[90%] sm:max-w-2xl">
            Experience world-class dental care with advanced technology and a compassionate team dedicated to giving you a perfect, confident smile.
          </p>

          {/* ✅ NEW: Cards (inline, responsive) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10 w-full max-w-2xl">

            {/* Rating */}
            <div className="group flex items-center gap-2.5 bg-[rgba(10,50,40,0.70)] border border-primary/30 rounded-xl px-3.5 py-2.5 backdrop-blur-md transition-all duration-300 hover:scale-[1.04] hover:border-primary/60">
              <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                <Star className="w-4 h-4 text-white fill-white" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">4.9 / 5 Rating</p>
                <p className="text-[11px] text-white/60">500+ reviews</p>
              </div>
            </div>

            {/* Available */}
            <div className="group flex items-center gap-2.5 bg-[rgba(10,50,40,0.70)] border border-primary/30 rounded-xl px-3.5 py-2.5 backdrop-blur-md transition-all duration-300 hover:scale-[1.04] hover:border-green-400/60">

              <span className="relative flex w-7 h-7">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
                <span className="relative inline-flex rounded-full w-7 h-7 bg-green-400"></span>
              </span>

              <div>
                <p className="text-sm font-bold text-white">Available Today</p>
                <p className="text-[11px] text-white/60">Slots open now</p>
              </div>
            </div>

            {/* ISO */}
            <div className="group flex items-center gap-2.5 bg-[rgba(10,50,40,0.70)] border border-primary/30 rounded-xl px-3.5 py-2.5 backdrop-blur-md transition-all duration-300 hover:scale-[1.04] hover:border-primary/60">
              <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                <ShieldCheck className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">ISO Certified</p>
                <p className="text-[11px] text-white/60">Sterilised equipment</p>
              </div>
            </div>

          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-9 w-full sm:w-auto">

            <a href="#contact" className="group relative w-full sm:w-auto justify-center inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-white text-sm font-bold overflow-hidden transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-primary/50">
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition duration-300" />
              <span className="absolute -left-full top-0 h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:left-full transition-all duration-700" />
              <span className="relative z-10 flex items-center gap-2 group-hover:scale-[1.03]">
                <CalendarCheck className="w-[17px] h-[17px] group-hover:scale-110 group-hover:-rotate-6 transition" />
                Start Your Treatment
              </span>
            </a>

            <a href="#contact" className="group relative w-full sm:w-auto justify-center inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white/5 backdrop-blur-md text-white text-sm font-bold border border-white/30 overflow-hidden transition-all duration-300 hover:bg-white/10">
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition duration-300" />
              <span className="absolute inset-0 rounded-xl border border-white/0 group-hover:border-white/40 transition duration-300" />
              <span className="relative z-10 flex items-center gap-2 group-hover:scale-[1.03]">
                <Phone className="w-[17px] h-[17px] group-hover:rotate-12 group-hover:scale-110 transition" />
                Call Us Now
              </span>
            </a>

          </div>

          {/* Divider */}
          <div className="w-full sm:w-72 h-px bg-white/90 mb-8" />

          {/* Stats */}
          <div className="flex justify-center">
  <div className="grid grid-cols-3 gap-4 sm:gap-8 text-center">

    {[
      { num: "15+", label: "Years Experience" },
      { num: "10K+", label: "Happy Patients" },
      { num: "20+", label: "Treatments" },
    ].map((s, i) => (
      <div
        key={s.label}
        className="flex flex-col items-center relative px-2 sm:px-4"
      >
        {/* Number */}
        <div className="text-[clamp(20px,3vw,32px)] font-extrabold text-primary leading-none">
          {s.num}
        </div>

        {/* Label */}
        <div className="text-[10px] sm:text-[11px] text-white/60 mt-2 tracking-[.08em] uppercase">
          {s.label}
        </div>

        {/* Divider (only between items on desktop) */}
        {i !== 0 && (
          <span className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 h-8 w-px bg-white/20" />
        )}
      </div>
    ))}

  </div>
</div>

        </div>
      </div>
    </section>
  );
}
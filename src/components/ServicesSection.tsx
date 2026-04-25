"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    image: "/tooth-whitening.webp",
    title: "Teeth Whitening",
    desc: "Get a brighter smile in just one visit with safe and effective whitening.",
    highlight: "Instant visible results",
  },
  {
    image: "/dental-implant.webp",
    title: "Dental Implants",
    desc: "Replace missing teeth with strong, natural-looking permanent solutions.",
    highlight: "Long-lasting & comfortable",
  },
  {
    image: "/root-canal.webp",
    title: "Root Canal",
    desc: "Save your damaged tooth with painless and advanced procedures.",
    highlight: "Pain-free treatment",
  },
  {
    image: "/braces-aligners.webp",
    title: "Braces & Aligners",
    desc: "Straighten your teeth with modern braces and invisible aligners.",
    highlight: "Perfect smile transformation",
  },
  {
    image: "/dental-cleaning.webp",
    title: "Teeth Cleaning",
    desc: "Remove plaque, stains, and maintain healthy gums with deep cleaning.",
    highlight: "Fresh & healthy smile",
  },
  {
    image: "/pediatric-dentistry.webp",
    title: "Pediatric Dentistry",
    desc: "Gentle and friendly dental care specially designed for children.",
    highlight: "Safe & comfortable for kids",
  },
];

const VISIBLE_COUNT = 3;

const ServicesSection = () => {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? services : services.slice(0, VISIBLE_COUNT);

  return (
    <div>
      {/* Heading — unchanged */}
      <h2 className="text-3xl md:text-4xl text-secondary mb-2 text-center">
        Complete Dental Care for a <span className="text-primary">Healthy, Confident Smile</span>
      </h2>
      <p className="font-body text-muted-foreground mb-10 text-center">
        Advanced treatments • Experienced dentists • Affordable pricing.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {visible.map((s, i) => (
          <div
            key={s.title}
            style={{
              animationDelay: expanded && i >= VISIBLE_COUNT ? `${(i - VISIBLE_COUNT) * 60}ms` : "0ms",
            }}
            className={cn(
              "group relative flex flex-col p-6 rounded-2xl border border-primary/10 bg-card overflow-hidden",
              "hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30",
              "transition-all duration-300 ease-out",
              expanded && i >= VISIBLE_COUNT && "animate-fade-slide-in",
            )}
          >
            {/* Top accent bar */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary/60 via-primary to-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />

            {/* Subtle bg glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10 flex flex-col flex-1">

              {/* Icon + Title side by side */}
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 shrink-0 relative">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="font-heading text-[17px] font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {s.title}
                </h3>
              </div>

              {/* Description */}
              <p className="font-body text-sm text-muted-foreground leading-relaxed flex-1 mb-5">
                {s.desc}
              </p>

              {/* Highlight pill */}
              <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/5 group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-300">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <span className="text-[12px] font-semibold text-primary leading-tight">
                  {s.highlight}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Toggle Button */}
      <div className="flex justify-center mt-8">
        <button
          onClick={() => setExpanded((p) => !p)}
          className={cn(
            "inline-flex items-center gap-2 px-7 py-3 rounded-full",
            "border-[1.5px] border-primary text-primary bg-transparent",
            "text-sm font-bold tracking-wide",
            "hover:bg-primary hover:text-white",
            "active:scale-[.97] transition-all duration-200",
          )}
        >
          {expanded ? "View Less" : "View More"}
          <ChevronDown className={cn("w-4 h-4 transition-transform duration-300", expanded && "rotate-180")} />
        </button>
      </div>
    </div>
  );
};

export default ServicesSection;
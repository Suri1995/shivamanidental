"use client";

import { useState } from "react";
import { Smile, ShieldCheck, Sparkles, HeartPulse, Scan, Baby, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  { icon: Smile,      title: "General Dentistry",  desc: "Comprehensive check-ups, cleanings, and preventive care for your entire family." },
  { icon: Sparkles,   title: "Cosmetic Dentistry",  desc: "Teeth whitening, veneers, and smile makeovers for a radiant smile." },
  { icon: ShieldCheck,title: "Dental Implants",     desc: "Permanent tooth replacement with natural-looking, durable implants." },
  { icon: HeartPulse, title: "Root Canal",          desc: "Pain-free root canal therapy to save and restore damaged teeth." },
  { icon: Scan,       title: "Orthodontics",        desc: "Braces and aligners for perfectly aligned, beautiful teeth." },
  { icon: Baby,       title: "Pediatric Dentistry", desc: "Gentle, child-friendly dental care in a fun and comfortable environment." },
];

const VISIBLE_COUNT = 3;

const ServicesSection = () => {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? services : services.slice(0, VISIBLE_COUNT);

  return (
    <div>
      <h2 className="text-3xl md:text-4xl text-secondary mb-2">
        Our <span className="text-primary">Services</span>
      </h2>
      <p className="font-body text-muted-foreground mb-8 max-w-md">
        Comprehensive dental solutions tailored to your needs.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {visible.map((s, i) => (
          <div
            key={s.title}
            style={{
              animationDelay: expanded && i >= VISIBLE_COUNT ? `${(i - VISIBLE_COUNT) * 60}ms` : "0ms",
            }}
            className={cn(
              "group p-6 rounded-xl border border-border bg-card cursor-pointer",
              "hover:bg-primary hover:-translate-y-1",
              "transition-all duration-200 ease-out",
              expanded && i >= VISIBLE_COUNT && "animate-fade-slide-in",
            )}
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-200">
              <s.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-200" />
            </div>
            <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-white transition-colors duration-200 mb-2">
              {s.title}
            </h3>
            <p className="font-body text-sm text-muted-foreground group-hover:text-white/80 transition-colors duration-200 leading-relaxed">
              {s.desc}
            </p>
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
          <ChevronDown
            className={cn(
              "w-4 h-4 transition-transform duration-300",
              expanded && "rotate-180",
            )}
          />
        </button>
      </div>
    </div>
  );
};

export default ServicesSection;
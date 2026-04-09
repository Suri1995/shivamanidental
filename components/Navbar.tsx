"use client";

import Image from "next/image";
import { CalendarCheck } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="section-container flex items-center justify-between h-16 md:h-20">
        <a href="#home" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Image
            src="/assets/logo.png"
            alt="Shivamani Dental"
            width={40}
            height={40}
            className="h-10 w-10 object-contain"
            priority
          />
          <span className="font-heading font-bold text-lg text-secondary">
            Shivamani <span className="text-primary">Dental</span>
          </span>
        </a>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-heading text-sm font-semibold hover:opacity-90 transition-all duration-300 hover:scale-105"
        >
          <CalendarCheck className="w-4 h-4" />
          Book Appointment
        </a>
      </div>
    </nav>
  );
}

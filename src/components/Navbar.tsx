import { CalendarCheck, Phone } from "lucide-react";
import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="section-container flex items-center justify-between h-[78px] md:h-20">
        <a href="#home" className="flex items-center gap-2 hidden md:block">
          <Image
  src="/logo.png"
  alt="Shivamani Dental"
  width={200}
  height={40}
  className="object-contain"
/>
        </a>

        <a href="#home" className="flex items-center gap-2 md:hidden">
          <Image
  src="/logo.png"
  alt="Shivamani Dental"
  width={144}
  height={40}
  className="object-contain"
/>
        </a>

        <a
          href="tel:+918682230410"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-heading text-sm md:text-lg font-semibold hover:opacity-90 transition-opacity"
        >
          <Phone className="w-4 h-4 md:w-[17px] md:h-[17px]" />
          8682230410
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

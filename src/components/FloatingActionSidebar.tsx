"use client";

import { CalendarCheck, MapPin, Stethoscope, LucideIcon } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";
import WhatsappIcon from "public/whatsapp-icon.png";

type LucideAction = {
  type:   "icon";
  icon:   LucideIcon;
  label:  string;
  href:   string;
  color:  string;
  pulse?: boolean;
};

type ImageAction = {
  type:   "image";
  icon:   StaticImageData;
  label:  string;
  href:   string;
  color:  string;
  pulse?: boolean;
};

type Action = LucideAction | ImageAction;

const actions: Action[] = [
  {
    type:  "icon",
    icon:  CalendarCheck,
    label: "Book Appointment",
    href:  "#contact",
    color: "bg-primary hover:bg-primary/90",
    pulse: true,
  },
  {
    type:  "image",
    icon:  WhatsappIcon,
    label: "WhatsApp",
    href:  "https://wa.me/8682230410",
    color: "bg-primary hover:bg-primary/90",
  },
  {
    type:  "icon",
    icon:  MapPin,
    label: "Location",
    href:  "https://www.google.com/maps/dir/?api=1&destination=Shivamani+Dental+Hospital+Nalgonda",
    color: "bg-primary hover:bg-primary/90",
  },
  {
    type:  "icon",
    icon:  Stethoscope,
    label: "Services",
    href:  "#services",
    color: "bg-primary hover:bg-primary/90",
  },
];

const FloatingActionSidebar = () => {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-3 pr-4">
      {actions.map((action, i) => (
        <a
          key={action.label}
          href={action.href}
          target={action.href.startsWith("http") ? "_blank" : undefined}
          rel={action.href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="group relative flex items-center justify-end"
          style={{ animationDelay: `${i * 0.08}s` }}
        >

          {/* Tooltip */}
          <span className="
            absolute right-[52px]
            whitespace-nowrap px-3 py-1.5
            rounded-lg bg-secondary/95 border border-border
            font-body text-xs font-semibold text-secondary-foreground
            opacity-0 translate-x-2 pointer-events-none
            group-hover:opacity-100 group-hover:translate-x-0
            transition-all duration-200 ease-out shadow-sm
          ">
            {action.label}
            <span className="absolute right-[-5px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-secondary/95 border-r border-t border-border rotate-45" />
          </span>

          {/* Pulse ring */}
          {action.pulse && (
            <span className="absolute inset-0 rounded-xl bg-primary/30 animate-ping pointer-events-none" />
          )}

          {/* Button */}
          <span className={cn(
            "relative w-11 h-11 rounded-xl flex items-center justify-center overflow-hidden",
            "text-white shadow-lg transition-all duration-200",
            "group-hover:scale-110 group-hover:rounded-2xl group-hover:shadow-xl active:scale-95",
            action.color,
          )}>
            <span className="absolute inset-0 rounded-[inherit] bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

            {action.type === "icon" && (
              <action.icon className="w-[18px] h-[18px] relative z-10" />
            )}

            {action.type === "image" && (
              <Image
                src={action.icon}
                alt={action.label}
                width={24}
                height={24}
                className="relative z-10 object-contain"
              />
            )}
          </span>

        </a>
      ))}
    </div>
  );
};

export default FloatingActionSidebar;
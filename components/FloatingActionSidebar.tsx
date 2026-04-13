"use client";

import { motion } from "framer-motion";
import { CalendarCheck, Phone, MessageCircle, MapPin, Stethoscope } from "lucide-react";

const actions = [
  { icon: CalendarCheck, label: "Book Appointment", href: "#contact" },
  { icon: Phone, label: "Call Us", href: "tel:+918682230410" },
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/918682230410" },
  { icon: MapPin, label: "Location", href: "#contact" },
  { icon: Stethoscope, label: "Services", href: "#services" },
];

export default function FloatingActionSidebar() {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-2 pr-3">
      {actions.map((action, i) => (
        <motion.a
          key={action.label}
          href={action.href}
          target={action.href.startsWith("http") ? "_blank" : undefined}
          rel={action.href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="group relative flex items-center justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          whileHover={{ x: -10 }}
        >
          {/* Tooltip */}
          <motion.span
            className="absolute right-14 whitespace-nowrap px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground font-body text-xs font-medium pointer-events-none"
            initial={{ opacity: 0, x: 10 }}
            whileHover={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
          >
            {action.label}
          </motion.span>

          {/* Icon button */}
          <motion.span
            className="w-11 h-11 rounded-xl bg-primary text-primary-foreground flex items-center justify-center shadow-[var(--shadow-card)]"
            whileHover={{ scale: 1.15, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <action.icon className="w-5 h-5" />
          </motion.span>
        </motion.a>
      ))}
    </div>
  );
}

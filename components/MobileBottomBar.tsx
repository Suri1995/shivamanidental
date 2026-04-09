"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, CalendarCheck } from "lucide-react";

export default function MobileBottomBar() {
  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-card border-t border-border shadow-[var(--shadow-elevated)]"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-3 divide-x divide-border">
        {[
          { icon: Phone, label: "Call", href: "tel:+919876543210", color: "text-primary" },
          { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/919876543210", color: "text-accent" },
          { icon: CalendarCheck, label: "Book", href: "#contact", color: "text-primary" },
        ].map((item, idx) => (
          <motion.a
            key={item.label}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className={`flex flex-col items-center gap-1 py-3 ${item.color}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <item.icon className="w-5 h-5" />
            <span className="font-body text-xs font-medium">{item.label}</span>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}

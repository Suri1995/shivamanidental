"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CalendarCheck, Gift, Clock } from "lucide-react";
import sticky1 from "@/public/assets/sticky-1.jpg";
import sticky2 from "@/public/assets/sticky-2.jpg";
import sticky3 from "@/public/assets/sticky-3.jpg";

export default function StickyOfferPanel() {
  return (
    <div className="hidden xl:block sticky top-[120px] self-start w-[280px] shrink-0">
      <motion.div
        className="rounded-2xl bg-card border border-border shadow-[var(--shadow-elevated)] p-6 space-y-5"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-2">
          <Gift className="w-5 h-5 text-accent" />
          <span className="font-heading text-sm font-bold text-foreground">Special Offer</span>
        </div>

        <motion.div
          className="gradient-primary rounded-xl p-4 text-center"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="font-heading text-3xl font-bold text-primary-foreground">20% OFF</div>
          <div className="font-body text-sm text-primary-foreground/80 mt-1">First Visit Consultation</div>
        </motion.div>

        {/* 3 Images */}
        <div className="grid grid-cols-3 gap-2">
          {[sticky1, sticky2, sticky3].map((img, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src={img}
                alt={`Dental clinic ${idx + 1}`}
                className="w-full h-20 object-cover rounded-lg"
              />
            </motion.div>
          ))}
        </div>

        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <Clock className="w-4 h-4 text-primary mt-0.5" />
            <div>
              <div className="font-body text-sm font-medium text-foreground">Mon - Sat</div>
              <div className="font-body text-xs text-muted-foreground">9:00 AM – 8:00 PM</div>
            </div>
          </div>
        </div>

        <motion.a
          href="#contact"
          className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-accent text-accent-foreground font-heading text-sm font-semibold hover:opacity-90 transition-opacity"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <CalendarCheck className="w-4 h-4" />
          Claim Offer
        </motion.a>

        <p className="font-body text-xs text-muted-foreground text-center">
          Limited time. No obligations.
        </p>
      </motion.div>
    </div>
  );
}

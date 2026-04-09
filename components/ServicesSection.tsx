"use client";

import { motion } from "framer-motion";
import { Smile, ShieldCheck, Sparkles, HeartPulse, Scan, Baby } from "lucide-react";

const services = [
  { icon: Smile, title: "General Dentistry", desc: "Comprehensive check-ups, cleanings, and preventive care for your entire family." },
  { icon: Sparkles, title: "Cosmetic Dentistry", desc: "Teeth whitening, veneers, and smile makeovers for a radiant smile." },
  { icon: ShieldCheck, title: "Dental Implants", desc: "Permanent tooth replacement with natural-looking, durable implants." },
  { icon: HeartPulse, title: "Root Canal", desc: "Pain-free root canal therapy to save and restore damaged teeth." },
  { icon: Scan, title: "Orthodontics", desc: "Braces and aligners for perfectly aligned, beautiful teeth." },
  { icon: Baby, title: "Pediatric Dentistry", desc: "Gentle, child-friendly dental care in a fun and comfortable environment." },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ServicesSection() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-8"
      >
        <h2 className="text-3xl md:text-4xl text-secondary mb-2">
          Our <span className="text-primary">Services</span>
        </h2>
        <p className="font-body text-muted-foreground mb-8 max-w-md">
          Comprehensive dental solutions tailored to your needs.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {services.map((s) => (
          <motion.div
            key={s.title}
            className="group p-6 rounded-xl border border-border bg-card hover-lift cursor-pointer hover:bg-primary transition-colors duration-300"
            variants={itemVariants}
            whileHover={{ scale: 1.05, translateY: -8 }}
          >
            <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4 group-hover:bg-primary-foreground/20 transition-colors">
              <s.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
            </div>
            <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary-foreground transition-colors mb-2">
              {s.title}
            </h3>
            <p className="font-body text-sm text-muted-foreground group-hover:text-primary-foreground/80 transition-colors leading-relaxed">
              {s.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

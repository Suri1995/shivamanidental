"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CalendarCheck, Phone } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

export default function HeroSection() {
  return (
    <section id="home" className="pt-20 md:pt-24">
      <div className="section-container flex flex-col md:flex-row items-center gap-8 md:gap-16 py-12 md:py-20">
        {/* Text */}
        <motion.div
          className="flex-1 space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.span
            className="inline-block px-4 py-1.5 rounded-full bg-muted text-primary font-heading text-xs font-semibold tracking-wide uppercase"
            variants={itemVariants}
          >
            Premium Dental Care
          </motion.span>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl leading-tight text-secondary"
            variants={itemVariants}
          >
            Your Smile,{" "}
            <span className="text-primary">Our Passion</span>
          </motion.h1>

          <motion.p
            className="font-body text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed"
            variants={itemVariants}
          >
            Experience world-class dental care with state-of-the-art technology
            and a compassionate team dedicated to your oral health and beautiful smile.
          </motion.p>

          <motion.div className="flex flex-wrap gap-4 pt-2" variants={itemVariants}>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-heading text-sm font-semibold hover:opacity-90 transition-all duration-300 hover:scale-105"
            >
              <CalendarCheck className="w-4 h-4" />
              Book Appointment
            </a>
            <a
              href="tel:+919876543210"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-primary text-primary font-heading text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              Call Us
            </a>
          </motion.div>

          <motion.div className="flex gap-8 pt-4" variants={itemVariants}>
            {[
              { num: "15+", label: "Years Experience" },
              { num: "10K+", label: "Happy Patients" },
              { num: "25+", label: "Expert Dentists" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-heading text-2xl font-bold text-primary">{s.num}</div>
                <div className="font-body text-xs text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          className="flex-1 relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-elevated)]">
            <Image
              src="/assets/hero-dentist.jpg"
              alt="Professional dentist at Shivamani Dental"
              className="w-full h-auto object-cover"
              width={600}
              height={600}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent" />
          </div>

          {/* Floating badge */}
          <motion.div
            className="absolute -bottom-4 -left-4 md:-left-8 bg-card rounded-xl p-4 shadow-[var(--shadow-elevated)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-heading text-lg">★</span>
              </div>
              <div>
                <div className="font-heading text-sm font-bold text-foreground">4.9/5 Rating</div>
                <div className="font-body text-xs text-muted-foreground">500+ Reviews</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

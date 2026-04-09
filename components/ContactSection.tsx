"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactSection() {
  return (
    <div>
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-3xl md:text-4xl text-secondary mb-3">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="font-body text-muted-foreground max-w-lg mx-auto">
          Schedule your appointment or reach out with any questions.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Form */}
        <motion.div
          className="bg-card rounded-2xl border border-border p-8 shadow-[var(--shadow-card)]"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className="font-heading text-xl font-bold text-foreground mb-6">Book an Appointment</h3>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
              />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
            />
            <select className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all" defaultValue="">
              <option value="" disabled>
                Select Service
              </option>
              <option>General Dentistry</option>
              <option>Cosmetic Dentistry</option>
              <option>Dental Implants</option>
              <option>Root Canal</option>
              <option>Orthodontics</option>
              <option>Pediatric Dentistry</option>
            </select>
            <textarea
              placeholder="Your Message"
              rows={3}
              className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all resize-none"
            />
            <motion.button
              type="submit"
              className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-heading text-sm font-semibold hover:opacity-90 transition-opacity"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Submit Appointment
            </motion.button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {[
            { icon: MapPin, title: "Visit Us", lines: ["123 Dental Avenue, MG Road", "Bangalore, Karnataka 560001"] },
            { icon: Phone, title: "Call Us", lines: ["+91 98765 43210", "+91 80 4567 8901"] },
            { icon: Mail, title: "Email Us", lines: ["info@shivamanidental.com", "appointments@shivamanidental.com"] },
            { icon: Clock, title: "Working Hours", lines: ["Mon - Sat: 9:00 AM – 8:00 PM", "Sunday: 10:00 AM – 2:00 PM"] },
          ].map((item, idx) => (
            <motion.div
              key={item.title}
              className="flex gap-4 p-4 rounded-xl border border-border bg-card hover-lift"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, translateY: -4 }}
            >
              <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-heading text-sm font-semibold text-foreground mb-1">{item.title}</h4>
                {item.lines.map((l) => (
                  <p key={l} className="font-body text-sm text-muted-foreground">
                    {l}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

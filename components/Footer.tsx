"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import logoImg from "@/public/assets/logo.png";

export default function Footer() {
  return (
    <motion.footer
      className="gradient-secondary text-secondary-foreground mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Image
                src={logoImg}
                alt="Shivamani Dental"
                width={32}
                height={32}
                className="h-8 w-8 object-contain"
              />
              <span className="font-heading font-bold text-lg text-secondary-foreground">
                Shivamani Dental
              </span>
            </div>
            <p className="font-body text-sm text-secondary-foreground/70 leading-relaxed">
              Premium dental care with advanced technology and compassionate service.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-heading text-sm font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Services", "About", "Contact"].map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase()}`}
                    className="font-body text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-heading text-sm font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {["General Dentistry", "Cosmetic Dentistry", "Dental Implants", "Orthodontics"].map((s) => (
                <li key={s}>
                  <a href="#services" className="font-body text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-heading text-sm font-semibold mb-4">Contact</h4>
            <div className="space-y-2 font-body text-sm text-secondary-foreground/70">
              <p>123 Dental Avenue, MG Road</p>
              <p>Bangalore, Karnataka 560001</p>
              <p>+91 98765 43210</p>
              <p>info@shivamanidental.com</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-secondary-foreground/10 mt-10 pt-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="font-body text-xs text-secondary-foreground/50">
            © {new Date().getFullYear()} Shivamani Dental. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}

"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "services", label: "Our Services" },
  { id: "why-choose-us", label: "Why Choose Us" },
  { id: "team", label: "Our Team" },
  { id: "testimonials", label: "Testimonials" },
  { id: "faqs", label: "FAQs" },
  { id: "contact", label: "Contact" },
];

export default function SectionNavSidebar() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      className="hidden lg:block sticky top-[120px] self-start w-[200px] shrink-0"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <ul className="space-y-1">
        {sections.map(({ id, label }, idx) => (
          <motion.li
            key={id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.05, duration: 0.4 }}
          >
            <a
              href={`#${id}`}
              className={`block pl-4 py-2 border-l-2 font-body text-sm transition-all duration-300 ${
                active === id
                  ? "border-accent text-accent font-medium"
                  : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
              }`}
            >
              {label}
            </a>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
}

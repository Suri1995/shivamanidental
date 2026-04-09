"use client";

import { motion } from "framer-motion";

const doctors = [
  { name: "Dr. Shivamani", role: "Chief Dental Surgeon", initials: "DS" },
  { name: "Dr. Priya Sharma", role: "Orthodontist", initials: "PS" },
  { name: "Dr. Rajesh Kumar", role: "Endodontist", initials: "RK" },
  { name: "Dr. Anitha Rao", role: "Pediatric Dentist", initials: "AR" },
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

export default function DoctorsTeam() {
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
          Our <span className="text-primary">Team</span>
        </h2>
        <p className="font-body text-muted-foreground max-w-lg mx-auto">
          Meet the skilled professionals behind your beautiful smile.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {doctors.map((d) => (
          <motion.div
            key={d.name}
            className="bg-card rounded-2xl p-6 text-center hover-lift shadow-[var(--shadow-card)] border border-border"
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -8 }}
          >
            <motion.div
              className="w-24 h-24 rounded-full gradient-primary mx-auto mb-4 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="font-heading text-2xl font-bold text-primary-foreground">{d.initials}</span>
            </motion.div>
            <h3 className="font-heading text-base font-semibold text-foreground">{d.name}</h3>
            <p className="font-body text-sm text-primary mt-1">{d.role}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

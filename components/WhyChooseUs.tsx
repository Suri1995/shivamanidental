"use client";

import { motion } from "framer-motion";
import { Award, Users, Clock, ShieldCheck, Sparkles, HeartHandshake } from "lucide-react";

const reasons = [
  { icon: Award, title: "15+ Years Experience", desc: "Decades of trusted dental expertise serving thousands of patients." },
  { icon: Users, title: "Expert Team", desc: "Board-certified specialists across all dental disciplines." },
  { icon: Clock, title: "Flexible Hours", desc: "Convenient scheduling including evenings and weekends." },
  { icon: ShieldCheck, title: "Advanced Technology", desc: "State-of-the-art equipment for precise, painless treatments." },
  { icon: Sparkles, title: "Personalized Care", desc: "Customized treatment plans tailored to your unique needs." },
  { icon: HeartHandshake, title: "Patient First", desc: "Compassionate care in a warm, welcoming environment." },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
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

export default function WhyChooseUs() {
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
          Why Choose <span className="text-primary">Us</span>
        </h2>
        <p className="font-body text-muted-foreground max-w-lg mx-auto">
          We combine expertise with empathy to deliver exceptional dental experiences.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {reasons.map((r) => (
          <motion.div
            key={r.title}
            className="flex gap-4 p-5 rounded-xl hover-lift transition-all"
            variants={itemVariants}
            whileHover={{ scale: 1.03, backgroundColor: "hsl(var(--muted))" }}
          >
            <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center shrink-0">
              <r.icon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-heading text-base font-semibold text-foreground mb-1">{r.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

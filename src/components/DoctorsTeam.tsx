"use client";

import { Award, Star, Stethoscope, GraduationCap, Phone } from "lucide-react";
import Image from "next/image";

const doctor = {
  name: "Dr. G. Shankar",
  role: "Chief Dental Surgeon",
  experience: "15+ Years",
  patients: "10,000+",
  rating: "4.9",
  qualifications: ["BDS", "MDS Oral Surgery", "FICD Fellow"],
  specializations: ["Implantology", "Cosmetic Dentistry", "Oral Surgery"],
  image: "/shankar-image.jpeg",
};

const DoctorsTeam = () => {
  return (
    <div className="w-full">

      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl text-secondary mb-3">
          Your <span className="text-primary">Doctor</span>
        </h2>
        <p className="font-body text-muted-foreground max-w-lg mx-auto">
          Meet the Expert Behind Your Perfect Smile.
        </p>
      </div>

      {/* Card */}
      <div className="relative max-w-3xl mx-auto">

        {/* Decorative rings */}
        <div className="
          absolute -top-5 left-1/2 -translate-x-1/2
          w-40 h-40 rounded-full
          border-2 border-dashed border-primary/20
          animate-[spin_18s_linear_infinite]
          pointer-events-none
        " />
        <div className="
          absolute -top-2 left-1/2 -translate-x-1/2
          w-28 h-28 rounded-full
          border border-primary/10
          animate-[spin_10s_linear_infinite_reverse]
          pointer-events-none
        " />

        <div className="
          relative bg-card border border-primary/15 rounded-3xl
          flex flex-col md:flex-row items-center gap-8
          p-8 md:p-10
          animate-[fadeSlideUp_.5s_ease_forwards]
        ">

          {/* Avatar */}
          <div className="relative shrink-0 group">
            <div className="absolute inset-0 rounded-full bg-primary/20 scale-110 group-hover:scale-125 transition-transform duration-500" />

            <div className="relative w-36 h-36 rounded-full overflow-hidden border-[3px] border-primary shadow-lg">
              <Image
                src={doctor.image}
                alt={doctor.name}
                fill
                className="object-cover object-top"
              />
            </div>

            {/* Online badge */}
            <span className="absolute bottom-2 right-2 w-4 h-4 rounded-full bg-green-400 border-2 border-card" />
          </div>

          {/* Info */}
          <div className="flex-1 text-center md:text-left">

            {/* Name + role */}
            <div className="mb-4">
              <h3 className="font-heading text-2xl font-bold text-foreground mb-1">
                {doctor.name}
              </h3>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wide">
                <Stethoscope className="w-3 h-3" />
                {doctor.role}
              </span>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-5">
              {[
                { icon: Award, label: "Experience", value: doctor.experience },
                { icon: Phone, label: "Patients",   value: doctor.patients  },
                { icon: Star,  label: "Rating",     value: doctor.rating    },
              ].map((s) => (
                <div
                  key={s.label}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl bg-primary/5 border border-primary/15"
                >
                  <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center">
                    <s.icon className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground leading-none mb-0.5">{s.label}</p>
                    <p className="text-sm font-bold text-foreground">{s.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Qualifications */}
            <div className="mb-4">
              <div className="flex items-center gap-1.5 mb-2 justify-center md:justify-start">
                <GraduationCap className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Qualifications</span>
              </div>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {doctor.qualifications.map((q) => (
                  <span
                    key={q}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium bg-primary/8 border border-primary/20 text-primary"
                  >
                    {q}
                  </span>
                ))}
              </div>
            </div>

            {/* Specializations */}
            <div>
              <div className="flex items-center gap-1.5 mb-2 justify-center md:justify-start">
                <Star className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Specializations</span>
              </div>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {doctor.specializations.map((s) => (
                  <span
                    key={s}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium bg-card border border-border text-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default DoctorsTeam;
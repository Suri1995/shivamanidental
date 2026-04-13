"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
import { faqs } from "@/data/faqs"; // ✅ import from data

const FAQsSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (i: number) => setOpen((prev) => (prev === i ? null : i));

  return (
    <div className="w-full">

      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl text-secondary mb-3">
          Frequently Asked <span className="text-primary">Questions</span>
        </h2>
        <p className="font-body text-muted-foreground max-w-lg mx-auto">
          Find quick answers to common questions about our services.
        </p>
      </div>

      {/* FAQ list */}
      <div className="max-w-3xl mx-auto space-y-3">
        {faqs.map((faq, i) => {
          const isOpen = open === i;
          return (
            <div
              key={i}
              className={cn(
                "rounded-xl border overflow-hidden transition-all duration-300",
                isOpen
                  ? "border-primary/40 bg-primary/[0.03]"
                  : "border-primary/15 bg-card hover:border-primary/30"
              )}
            >
              {/* Trigger */}
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left group"
              >
                {/* Number + question */}
                <div className="flex items-center gap-4 min-w-0">
                  <span
                    className={cn(
                      "flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold transition-all duration-300",
                      isOpen
                        ? "bg-primary text-white"
                        : "bg-primary/10 text-primary group-hover:bg-primary/20"
                    )}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <span
                    className={cn(
                      "font-heading text-sm font-semibold transition-colors duration-200 truncate",
                      isOpen
                        ? "text-primary"
                        : "text-foreground group-hover:text-primary"
                    )}
                  >
                    {faq.question} {/* ✅ changed */}
                  </span>
                </div>

                {/* Icon */}
                <span
                  className={cn(
                    "flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-300",
                    isOpen
                      ? "bg-primary border-primary text-white"
                      : "border-primary/30 text-primary group-hover:border-primary group-hover:bg-primary/10"
                  )}
                >
                  {isOpen ? (
                    <Minus className="w-3.5 h-3.5" />
                  ) : (
                    <Plus className="w-3.5 h-3.5" />
                  )}
                </span>
              </button>

              {/* Animated answer */}
              <div
                className={cn(
                  "grid transition-all duration-300 ease-in-out",
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                )}
              >
                <div className="overflow-hidden">
                  <div className="px-5 pb-5 pt-0">
                    {/* Divider */}
                    <div className="w-full h-px bg-primary/10 mb-4" />

                    <p className="font-body text-sm text-muted-foreground leading-relaxed pl-11">
                      {faq.answer} {/* ✅ changed */}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default FAQsSection;
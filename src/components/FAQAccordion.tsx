"use client";

import { useState } from "react";

interface FAQAccordionProps {
  faqs: { question: string; answer: string }[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;

        return (
          <div
            key={i}
            className="rounded-xl overflow-hidden transition-all duration-300"
            style={{
              background: "var(--bg-card)",
              border: `1px solid ${isOpen ? "var(--electric-blue)" : "var(--card-border)"}`,
            }}
          >
            <button
              onClick={() => toggle(i)}
              className="w-full flex items-center justify-between gap-4 p-5 text-left cursor-pointer bg-transparent border-none"
              style={{ color: "var(--text-primary)" }}
              aria-expanded={isOpen}
            >
              <span className="font-display text-base font-semibold leading-snug">
                {faq.question}
              </span>
              <span
                className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-lg transition-transform duration-300"
                style={{
                  background: isOpen
                    ? "rgba(37, 99, 235, 0.15)"
                    : "rgba(37, 99, 235, 0.06)",
                  color: "var(--electric-blue)",
                  transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                }}
              >
                +
              </span>
            </button>

            <div
              className="overflow-hidden transition-all duration-300"
              style={{
                maxHeight: isOpen ? "300px" : "0px",
                opacity: isOpen ? 1 : 0,
              }}
            >
              <p
                className="px-5 pb-5 text-[15px] leading-[1.7]"
                style={{ color: "var(--text-secondary)" }}
              >
                {faq.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

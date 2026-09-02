"use client";

import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

export function FAQ({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.question} className="border-b border-stone-light/60 last:border-0">
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 py-4 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-display font-semibold text-base text-ink">
                {item.question}
              </span>
              <span
                className={`font-display text-xl text-signal shrink-0 transition-transform ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>
            <p
              className={`font-body text-sm text-stone leading-relaxed pr-8 ${
                isOpen ? "pb-4" : "hidden"
              }`}
            >
              {item.answer}
            </p>
          </div>
        );
      })}
    </div>
  );
}

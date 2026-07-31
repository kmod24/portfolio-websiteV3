"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const things = [
  {
    title: "everyday essentials",
    caption:
      "a list of things i carry with me everyday, whether it's going to a coffee shop, the gym, or just strolling around the city",
    content:
      "- sony xm5 headphones \n - peak design everyday backpack 20L \n - gentle monster lo lou sunglasses \n - fitbit charge 6",
  },
];

export function ThingsPanel() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selected = selectedIndex !== null ? things[selectedIndex] : null;

  return (
    <div className="relative min-h-0 flex-1">
      <AnimatePresence mode="wait">
        {selected ? (
          <motion.article
            key={`thing-${selectedIndex}`}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute inset-0 flex flex-col overflow-hidden rounded-2xl border-2 border-[var(--accent-blue)] bg-[var(--bento-inner)] p-6"
          >
            <button
              type="button"
              onClick={() => setSelectedIndex(null)}
              className="mb-4 w-fit cursor-pointer text-sm text-white/70 transition-opacity hover:text-white"
            >
              ← back
            </button>

            <h3 className="w-fit text-2xl font-semibold text-white underline decoration-[var(--accent-blue)] decoration-2 underline-offset-4">
              {selected.title}
            </h3>

            <div className="mt-5 min-h-0 flex-1 overflow-y-auto text-sm leading-relaxed text-white/90">
              <p className="whitespace-pre-line">{selected.content}</p>
            </div>
          </motion.article>
        ) : (
          <motion.div
            key="things-list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute inset-0 grid grid-cols-1 content-start gap-3 overflow-y-auto sm:grid-cols-2"
          >
            {things.map((thing, index) => (
              <button
                key={thing.title}
                type="button"
                onClick={() => setSelectedIndex(index)}
                className="flex min-h-[200px] cursor-pointer flex-col rounded-2xl border-2 border-transparent bg-[var(--bento-inner)] p-4 text-left transition-colors hover:border-[var(--accent-blue)]"
              >
                <h3 className="w-fit text-lg font-semibold text-white underline decoration-[var(--accent-blue)] decoration-2 underline-offset-4">
                  {thing.title}
                </h3>
                <p className="mt-3 text-sm text-white/80">{thing.caption}</p>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

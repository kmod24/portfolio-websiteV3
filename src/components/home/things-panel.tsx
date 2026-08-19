"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const things = [
  {
    title: "everyday essentials",
    caption:
      "a list of things i carry with me everyday, whether it's going to a coffee shop, the gym, or just strolling around the city",
    content:
      "- sony xm5 headphones\n- peak design everyday backpack 20L\n- gentle monster lo lou sunglasses\n- fitbit charge 6\n- iongaf sweaty",
  },
  {
    title: "books, movies, & music",
    caption: "a list of books, movies, and music i've enjoyed recently",
    content:
      "books:\ncurrent reads: bending reality by victoria song, zero to one - peter thiel, the daily stoic - ryan holiday\n\nmovies:\nsome recently watched movies include rewatching the hunger games trilogy, blade runner 2049, spider-man brand new day, and I plan on watching the odyssey by the end of august.\n\nmusic:\ni've been listening to a lot of edm music lately, which include artists such as alesso, porter robinson, isoknock. It's great for working out and keeping me motivated when I'm studying.",
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

            <div className="mt-5 flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto text-sm leading-relaxed text-white/90">
              {selected.content.split(/\n\n+/).map((block, index) => (
                <p key={index} className="whitespace-pre-line">
                  {block.trim()}
                </p>
              ))}
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

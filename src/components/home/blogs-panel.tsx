"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const blogs = [
  {
    title: "Abroad in Japan",
    date: "7/30/2026",
    description:
      "my exchange program experience spending a semester abroad in Japan!",
    content:
      "During my Spring semester of college, I decided to go abroad and do an exchange program in Osaka, Japan. Many thoughts filled my head -- I would be going alone, I wasn't the best at speaking Japanese, and I would pretty much be on my own figuring things out. \n\n But it turns out I was completely wrong. As soon I landed in Kansai International Airport, I was greeted by kind Japanese workers and began to take in the reality that would be mine for the next 5 months. \n\n (to be continued)",
  },
];

export function BlogsPanel() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selected = selectedIndex !== null ? blogs[selectedIndex] : null;

  return (
    <div className="relative min-h-0 flex-1">
      <AnimatePresence mode="wait">
        {selected ? (
          <motion.article
            key={`blog-${selectedIndex}`}
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

            <span className="absolute top-6 right-6 w-fit pb-px text-xs text-white">
              {selected.date}
            </span>

            <h3 className="w-fit pr-20 text-2xl font-semibold text-white underline decoration-[var(--accent-blue)] decoration-2 underline-offset-4">
              {selected.title}
            </h3>

            <div className="mt-5 min-h-0 flex-1 overflow-y-auto text-sm leading-relaxed text-white/90">
              <p className="whitespace-pre-line">{selected.content}</p>
            </div>
          </motion.article>
        ) : (
          <motion.div
            key="blog-list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute inset-0 flex flex-col gap-3 overflow-y-auto"
          >
            {blogs.map((blog, index) => (
              <button
                key={blog.title}
                type="button"
                onClick={() => setSelectedIndex(index)}
                className="relative flex min-h-[140px] cursor-pointer flex-col rounded-2xl border-2 border-transparent bg-[var(--bento-inner)] p-5 text-left transition-colors hover:border-[var(--accent-blue)]"
              >
                <span className="absolute top-4 right-5 w-fit pb-px text-xs text-white">
                  {blog.date}
                </span>

                <h3 className="w-fit pr-16 text-xl font-semibold text-white underline decoration-[var(--accent-blue)] decoration-2 underline-offset-4">
                  {blog.title}
                </h3>

                <p className="mt-3 pr-16 text-sm leading-relaxed text-white/80">
                  {blog.description}
                </p>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

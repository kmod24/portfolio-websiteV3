"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import type { BlogPost } from "@/lib/mdx";

type BlogsPanelProps = {
  posts: BlogPost[];
};

export function BlogsPanel({ posts }: BlogsPanelProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selected = selectedIndex !== null ? posts[selectedIndex] : null;

  return (
    <div className="relative min-h-0 flex-1">
      <AnimatePresence mode="wait">
        {selected ? (
          <motion.article
            key={`blog-${selected.slug}`}
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

            <div className="mt-5 flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto text-sm leading-relaxed text-white/90">
              {selected.content.split(/\n\n+/).map((block, index) => {
                const text = block.trim();
                if (text.startsWith("## ")) {
                  return (
                    <h4
                      key={index}
                      className="pt-2 text-base font-semibold text-white"
                    >
                      {text.replace(/^##\s+/, "")}
                    </h4>
                  );
                }
                return <p key={index}>{text}</p>;
              })}
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
            {posts.length === 0 ? (
              <p className="text-sm text-white/60">no posts yet.</p>
            ) : (
              posts.map((blog, index) => (
                <button
                  key={blog.slug}
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
              ))
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

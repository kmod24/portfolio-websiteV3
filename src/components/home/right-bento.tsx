"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import { BioPanel } from "@/components/home/bio-panel";
import { BlogsPanel } from "@/components/home/blogs-panel";
import { ProjectsPanel } from "@/components/home/projects-panel";
import { SiteNav } from "@/components/home/site-nav";
import { ThingsPanel } from "@/components/home/things-panel";
import type { BlogPost } from "@/lib/mdx";
import type { NavId } from "@/lib/site";

type RightBentoProps = {
  posts: BlogPost[];
};

export function RightBento({ posts }: RightBentoProps) {
  const [active, setActive] = useState<NavId>("home");

  const panels: Record<NavId, React.ReactNode> = {
    home: <BioPanel />,
    projects: <ProjectsPanel />,
    blogs: <BlogsPanel posts={posts} />,
    things: <ThingsPanel />,
  };

  return (
    <div className="flex h-[min(600px,70dvh)] min-h-[480px] w-full flex-col overflow-hidden rounded-[1.75rem] bg-[var(--bento-outer)] p-4 sm:p-5 md:rounded-[2rem] md:p-6 lg:h-[600px] lg:min-h-0 lg:p-7">
      <SiteNav active={active} onChange={setActive} />

      <div className="relative min-h-0 flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="absolute inset-0 flex flex-col"
          >
            {panels[active]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

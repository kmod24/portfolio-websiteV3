"use client";

import { useState } from "react";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import { PROFILE_RADIUS, PROFILE_SLIDE_COUNT } from "@/lib/site";
import { cn } from "@/lib/utils";

export type ProfileSlide = {
  src: string;
  /** Shown to the right of the photo. Leave empty/omit for no caption (e.g. first photo). */
  caption?: string;
  /** Zoom factor for the image (1 = normal, 1.2 = 20% closer, etc.). */
  zoom?: number;
};

type ProfileCarouselProps = {
  slides?: ProfileSlide[];
  className?: string;
};

export function ProfileCarousel({
  slides: slidesProp,
  className,
}: ProfileCarouselProps) {
  const slides = Array.from({ length: PROFILE_SLIDE_COUNT }, (_, i) => {
    const slide = slidesProp?.[i];
    return slide ?? null;
  });

  const [active, setActive] = useState(0);
  const current = slides[active];
  const caption = active === 0 ? undefined : current?.caption;

  const goPrev = () => {
    setActive((index) => (index - 1 + slides.length) % slides.length);
  };

  const goNext = () => {
    setActive((index) => (index + 1) % slides.length);
  };

  return (
    <div
      className={cn("relative flex w-full max-w-[250px] flex-col items-center gap-5", className)}
      style={{ ["--profile-radius" as string]: PROFILE_RADIUS }}
    >
      <div className="relative w-full">
        <div
          className="relative h-[280px] w-full overflow-hidden bg-[var(--profile-empty)]"
          style={{ borderRadius: "var(--profile-radius)" }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="absolute inset-0"
            >
              {current?.src ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={current.src}
                  alt={caption ?? `Profile ${active + 1}`}
                  className="size-full object-cover"
                  style={{
                    transform: `scale(${current.zoom ?? 1})`,
                    transformOrigin: "center center",
                  }}
                />
              ) : null}
            </motion.div>
          </AnimatePresence>
        </div>

        <AnimatePresence mode="wait">
          {caption ? (
            <motion.p
              key={`caption-${active}`}
              initial={{ opacity: 0, x: 6 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 6 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="pointer-events-none absolute top-1/2 left-[calc(100%+1rem)] w-max max-w-[140px] -translate-y-1/2 text-left text-[13px] leading-snug tracking-wide text-white/90 lowercase"
            >
              {caption}
            </motion.p>
          ) : null}
        </AnimatePresence>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          aria-label="Previous profile photo"
          onClick={goPrev}
          className="text-white/90 transition-opacity hover:opacity-70"
        >
          <CircleArrowLeft
            className="size-6"
            strokeWidth={1.5}
            absoluteStrokeWidth
          />
        </button>

        <div className="flex items-center gap-2.5" role="tablist" aria-label="Profile photos">
          {slides.map((_, index) => {
            const isActive = index === active;
            return (
              <button
                key={index}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`Show profile photo ${index + 1}`}
                onClick={() => setActive(index)}
                className={cn(
                  "size-2.5 rounded-full transition-colors duration-200",
                  isActive ? "bg-[var(--accent-red)]" : "bg-white hover:bg-white/70",
                )}
              />
            );
          })}
        </div>

        <button
          type="button"
          aria-label="Next profile photo"
          onClick={goNext}
          className="text-white/90 transition-opacity hover:opacity-70"
        >
          <CircleArrowRight
            className="size-6"
            strokeWidth={1.5}
            absoluteStrokeWidth
          />
        </button>
      </div>
    </div>
  );
}

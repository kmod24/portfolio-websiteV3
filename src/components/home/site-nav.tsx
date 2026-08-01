"use client";

import { site, type NavId } from "@/lib/site";

type SiteNavProps = {
  active: NavId;
  onChange: (id: NavId) => void;
};

export function SiteNav({ active, onChange }: SiteNavProps) {
  return (
    <nav
      aria-label="Primary"
      className="flex shrink-0 flex-wrap items-center justify-center gap-x-5 gap-y-2 px-1 pb-4 pt-0.5 sm:gap-x-6"
    >
      {site.nav.map((item) => {
        const isActive = item.id === active;

        return (
          <button
            key={item.id}
            type="button"
            onClick={() => onChange(item.id)}
            aria-current={isActive ? "page" : undefined}
            className="inline-flex items-baseline gap-1.5 text-[17px] tracking-wide text-white lowercase hover:opacity-80 cursor-pointer sm:text-[20px]"
          >
            <span className="text-[var(--accent-blue)]">#</span>
            <span>{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}

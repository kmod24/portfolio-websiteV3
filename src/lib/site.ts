export const site = {
  name: "kyle",
  socials: [
    {
      label: "instagram",
      href: "https://www.instagram.com/kylemodina",
      icon: "instagram" as const,
    },
    {
      label: "youtube",
      href: "https://www.youtube.com/@kmod24",
      icon: "youtube" as const,
    },
    {
      label: "linkedin",
      href: "https://www.linkedin.com/in/kmod24/",
      icon: "linkedin" as const,
    },
    {
      label: "github",
      href: "https://github.com/kmod24",
      icon: "github" as const,
    },
    {
      label: "resume",
      href: "/Resume.pdf",
      emoji: "📝",
    },
  ],
  nav: [
    { id: "home", label: "home" },
    { id: "projects", label: "projects" },
    { id: "blogs", label: "blogs" },
    { id: "things", label: "things" },
  ],
} as const;

export type NavId = (typeof site.nav)[number]["id"];

/** Number of profile image slots in the carousel. */
export const PROFILE_SLIDE_COUNT = 6;

/**
 * Adjust profile image corner radius here (or via `--profile-radius` in CSS).
 * Example values: "1.5rem", "2rem", "48px", "9999px"
 */
export const PROFILE_RADIUS = "2.75rem";

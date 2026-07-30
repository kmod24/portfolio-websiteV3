const projects = [
  {

    title: "BrainrotGPT",
    caption: "turns complex terms into brainrot explanations",
    href: "https://brainrot-gpt-mu.vercel.app/",
    tags: ["react", "typescript"],
  },
  {
    title: "Poker Buy-In Tracker",
    caption: "a bento box inspired buy-in tracker for poker games",
    href: "https://pok-er-buyintracker.vercel.app/",
    tags: ["next.js", "typescript"],
  },
  {
    title: "Moodboard",
    caption: "turns a few words into a mood board showing songs, images, coffees, and outfits",
    href: "https://github.com/kmod24/moodboard",
    tags: ["react", "node.js"],
  },
  {
    title: "Coffeedex",
    caption: "a coffee tracker app that lists favorite coffees and recommends cafes nearby",
    href: "https://github.com/kmod24/coffeedex",
    tags: ["swiftui", "firebase"],
  },
  {
    title: "Portfolio Website V1",
    caption: "my very first website coded through NextJS and TailwindCSS!",
    href: "https://portfolio-website-bice-ten-71.vercel.app/",
    tags: ["next.js", "typescript"],
  },
  {
    title: "Portfolio Website V2",
    caption: "my second website focusing on simplicity and a clean design! ",
    href: "portfolio-website-v2-dr6tws3es-kyles-projects-ed583bf3.vercel.app",
    tags:["react", "typescript"],
  },
];

export function ProjectsPanel() {
  return (
    <div className="grid min-h-0 flex-1 grid-cols-2 gap-3 overflow-y-auto content-start">
      {projects.map((project) => (
        <a
        key={project.title}
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-h-[200px] flex-col cursor-pointer rounded-2xl border-2 border-transparent bg-[var(--bento-inner)] p-4 transition-colors hover:border-[var(--accent-blue)]"
      >
        <h3 className="text-lg font-semibold text-white">
          {project.title}
        </h3>
        <p className="mt-3 text-sm text-white/80">
          {project.caption}
        </p>

        <div className="mt-auto flex flex-wrap gap-2 pt-4">
          {project.tags?.map((tag) => (
            <span
            key={tag}
            className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white lowercase"
            >
              {tag}
            </span>
          ))}

        </div>

        
      </a>
      ))}
      </div>
  );
}
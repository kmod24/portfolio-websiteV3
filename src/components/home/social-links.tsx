import { socialIcons } from "@/components/icons/social";
import { site } from "@/lib/site";

export function SocialLinks() {
  return (
    <ul className="mx-auto mt-10 flex w-fit flex-col gap-4">
      {site.socials.map((social) => {
        const Icon =
          "icon" in social ? socialIcons[social.icon] : null;

        return (
          <li key={social.label}>
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid grid-cols-[18px_auto] items-center gap-3 text-white transition-opacity hover:opacity-80"
            >
              {Icon ? (
                <Icon className="size-[18px] shrink-0 justify-self-center" />
              ) : (
                <span
                  aria-hidden
                  className="justify-self-center text-[15px] leading-none"
                >
                  {"emoji" in social ? social.emoji : null}
                </span>
              )}
              <span className="w-fit justify-self-start border-b border-[var(--accent-red)] pb-px text-left text-[15px] leading-none tracking-wide lowercase">
                {social.label}
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

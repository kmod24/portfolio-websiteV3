import Image from "next/image";

import { ProfileCarousel } from "@/components/home/profile-carousel";
import { RightBento } from "@/components/home/right-bento";
import { SocialLinks } from "@/components/home/social-links";

export default function Home() {
  return (
    <main className="relative flex min-h-dvh items-center justify-center bg-black px-4 py-20 text-white sm:px-6 sm:py-16 lg:px-10 lg:py-12">
      <Image
        src="/logo.png"
        alt="Kyle logo"
        width={48}
        height={48}
        className="absolute top-5 left-5 z-10 size-10 object-contain sm:top-6 sm:left-6 sm:size-10"
        priority
      />

      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-center lg:gap-32 xl:gap-50">
        <aside className="flex w-full max-w-[280px] shrink-0 flex-col items-center">
          <ProfileCarousel
            slides={[
              { src: "/pfp.jpeg", zoom: 1.1 },
              { src: "/fujime.png", caption: "mt. fuji, japan" },
              { src: "/hokme.png", caption: "snow in hokkaido" },
              { src: "/naoshima.png", caption: "naoshima art island" },
              { src: "/gradme.png", caption: "graduation day @csulb" },
              { src: "/costarica.png", caption: "costa rica vibes", zoom: 1.2 },
            ]}
          />
          <SocialLinks />
        </aside>

        <section className="w-full min-w-0 max-w-[520px]">
          <RightBento />
        </section>
      </div>
    </main>
  );
}

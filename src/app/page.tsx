import Image from "next/image";

import { ProfileCarousel } from "@/components/home/profile-carousel";
import { RightBento } from "@/components/home/right-bento";
import { SocialLinks } from "@/components/home/social-links";

export default function Home() {
  return (
    <main className="relative min-h-dvh bg-black px-5 py-8 text-white sm:px-8 sm:py-10 lg:px-12 lg:py-12">
      <Image
        src="/logo.png"
        alt="Kyle logo"
        width={48}
        height={48}
        className="absolute top-5 left-5 z-10 size-12 object-contain sm:top-6 sm:left-6 sm:size-10"
        priority
      />

      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-10 lg:justify-between lg:flex-row lg:items-start lg:gap-12 xl:gap-16">
        <aside className="flex w-full shrink-0 flex-col items-center lg:ml-36 lg:mt-15 lg:w-[280px]">
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

        <section className="min-w-0 w-full max-w-[520px] lg:mr-30 lg:mt-3">
          <RightBento />
        </section>
      </div>
    </main>
  );
}

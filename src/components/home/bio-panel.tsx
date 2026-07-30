export function BioPanel() {
  return (
    <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-[1.75rem] bg-[var(--bento-inner)] px-7 pt-4 pb-7 md:rounded-[2rem] md:px-8 md:pt-5 md:pb-8">
      <h1 className="mb-5 shrink-0 text-[3rem] font-normal leading-tight tracking-tight text-white lowercase">
        hi, i&apos;m{" "}
        <span className="font-semibold underline decoration-[var(--accent-blue)] decoration-[0.06em] underline-offset-[0.18em]">
          kyle
        </span>
      </h1>

      <div className="flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto text-[0.98rem] leading-[1.6] tracking-[0.01em] text-white lowercase">
        <p>
          i&apos;m a software engineer and graduating cs student eager to embark on
          my new chapter into the world of tech! i&apos;m very passionate about
          ai, full-stack development, and building scalable systems through
          cloud computing and distributed systems.
        </p>
        <p>
          when i&apos;m not coding, i&apos;m probably rock climbing, hiking,
          playing basketball with friends, learning new languages, playing video
          games, or making travel plans ✈️
        </p>
        <p>
          i strive to live true to myself and stay unapologetically me. always
          love meeting new people, feel free to reach out - always down for a
          coffee chat :)
        </p>
      </div>
    </div>
  );
}

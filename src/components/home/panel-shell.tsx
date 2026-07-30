export function PanelShell({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-[1.75rem] bg-[var(--bento-inner)] px-7 py-7 md:rounded-[2rem] md:px-8 md:py-8">
      <h2 className="mb-5 shrink-0 text-[2.1rem] font-normal leading-tight tracking-tight text-white lowercase">
        {title}
      </h2>
      <div className="min-h-0 flex-1 overflow-y-auto text-[1rem] leading-[1.6] text-white lowercase">
        {children}
      </div>
    </div>
  );
}

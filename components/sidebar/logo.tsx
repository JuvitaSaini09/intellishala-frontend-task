type LogoProps = {
  letter: string;
};

export function Logo({ letter }: LogoProps) {
  return (
    <div
      aria-hidden="true"
      className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#0057F3] text-[15px] font-bold leading-none text-white"
    >
      {letter}
    </div>
  );
}

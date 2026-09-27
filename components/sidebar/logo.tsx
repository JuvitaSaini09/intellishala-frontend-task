type LogoProps = {
  letter: string;
};

export function Logo({ letter }: LogoProps) {
  return (
    <div
      aria-hidden="true"
      className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand text-[15px] font-bold leading-none text-white"
    >
      {letter}
    </div>
  );
}

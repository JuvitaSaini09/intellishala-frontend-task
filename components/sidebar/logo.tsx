type LogoProps = {
  letter: string;
};

export function Logo({ letter }: LogoProps) {
  return (
    <div
      aria-hidden="true"
      className="flex size-10 shrink-0 items-center justify-center rounded-[10px] bg-[#2355EA] text-[26px] font-semibold leading-none text-white"
    >
      {letter}
    </div>
  );
}

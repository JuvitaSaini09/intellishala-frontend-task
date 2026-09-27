type TitleProps = {
  children: string;
};

export function Title({ children }: TitleProps) {
  return (
    <span className="truncate text-[22px] font-semibold tracking-[-0.02em] text-[#1a1a1a]">
      {children}
    </span>
  );
}

type TitleProps = {
  children: string;
};

export function Title({ children }: TitleProps) {
  return (
    <span className="truncate text-[17px] font-semibold tracking-[-0.02em] text-[#2C2C2E]">
      {children}
    </span>
  );
}

import type { ReactNode } from "react";
import { pageRangeLabel } from "./format";

type PaginationProps = {
  page: number;
  pageCount: number;
  pageSize: number;
  total: number;
  onPageChange: (page: number) => void;
};

export function Pagination({
  page,
  pageCount,
  pageSize,
  total,
  onPageChange,
}: PaginationProps) {
  const pages = Array.from({ length: pageCount }, (_, index) => index + 1);

  return (
    <div className="flex flex-col gap-3 border-t border-line py-4 min-[960px]:flex-row min-[960px]:items-center min-[960px]:justify-between">
      <p className="text-sm text-muted">
        {pageRangeLabel(page, pageSize, total)}
      </p>
      <div className="flex flex-wrap items-center gap-2">
        <PageButton
          label="Previous page"
          disabled={page === 1}
          onClick={() => onPageChange(page - 1)}
        >
          <Chevron direction="left" />
        </PageButton>
        {pages.map((item) => (
          <PageButton
            key={item}
            label={`Page ${item}`}
            isActive={item === page}
            onClick={() => onPageChange(item)}
          >
            {item}
          </PageButton>
        ))}
        <PageButton
          label="Next page"
          disabled={page === pageCount}
          onClick={() => onPageChange(page + 1)}
        >
          <Chevron direction="right" />
        </PageButton>
      </div>
    </div>
  );
}

type PageButtonProps = {
  children: ReactNode;
  label: string;
  onClick: () => void;
  disabled?: boolean;
  isActive?: boolean;
};

function PageButton({
  children,
  label,
  onClick,
  disabled,
  isActive,
}: PageButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      aria-current={isActive ? "page" : undefined}
      disabled={disabled}
      onClick={onClick}
      className={[
        "flex size-8 cursor-pointer items-center justify-center rounded-lg border text-sm",
        isActive
          ? "border-brand bg-brand text-white"
          : "border-[#E4E7EC] bg-white text-[#8B919C] hover:bg-[#F4F6F8] disabled:cursor-default disabled:opacity-40",
      ].join(" ")}
    >
      {children}
    </button>
  );
}

function Chevron({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="size-3.5"
    >
      {direction === "left" ? (
        <path d="M10 3.5 5.5 8 10 12.5" />
      ) : (
        <path d="M6 3.5 10.5 8 6 12.5" />
      )}
    </svg>
  );
}

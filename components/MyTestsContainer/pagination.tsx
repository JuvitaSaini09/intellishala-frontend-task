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
    <div className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-sm text-muted">
        {pageRangeLabel(page, pageSize, total)}
      </p>
      <div className="flex items-center gap-1">
        <PageButton
          label="Previous page"
          disabled={page === 1}
          onClick={() => onPageChange(page - 1)}
        >
          ‹
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
          ›
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
        "flex size-8 cursor-pointer items-center justify-center rounded-md text-sm",
        isActive
          ? "bg-brand text-white"
          : "text-muted hover:bg-[#F4F6F8] disabled:cursor-default disabled:opacity-40",
      ].join(" ")}
    >
      {children}
    </button>
  );
}

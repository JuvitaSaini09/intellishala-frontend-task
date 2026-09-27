"use client";

import { useEffect, useId, useRef, useState } from "react";

type FilterOption = {
  value: string;
  label: string;
};

type FilterSelectProps = {
  label: string;
  value: string;
  options: FilterOption[];
  onChange: (value: string) => void;
  className?: string;
};

export function FilterSelect({
  label,
  value,
  options,
  onChange,
  className = "",
}: FilterSelectProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();
  const selected = options.find((option) => option.value === value);
  const displayLabel = selected?.label ?? options[0]?.label ?? "";

  useEffect(() => {
    if (!open) return;

    function handlePointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className={`relative ${className}`}>
      <span className="sr-only">{label}</span>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((current) => !current)}
        className={`flex h-9 w-full cursor-pointer items-center justify-between gap-2 rounded-lg border bg-white px-3 text-left text-sm text-[#535c6f] outline-none transition-colors ${
          open
            ? "border-brand"
            : "border-field hover:border-[#D0D4DD] focus-visible:border-brand"
        }`}
      >
        <span className="truncate">{displayLabel}</span>
        <ChevronIcon open={open} />
      </button>

      {open ? (
        <ul
          id={listId}
          role="listbox"
          aria-label={label}
          className="absolute top-[calc(100%+6px)] right-0 left-0 z-50 max-h-64 overflow-auto rounded-xl border border-field bg-white py-1.5 shadow-[0_8px_24px_rgba(16,24,40,0.12)]"
        >
          {options.map((option) => {
            const isSelected = option.value === value;
            return (
              <li key={option.value || "all"} role="presentation">
                <button
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => {
                    onChange(option.value);
                    setOpen(false);
                  }}
                  className={`flex w-full cursor-pointer items-center gap-2 px-3 py-2 text-left text-sm transition-colors ${
                    isSelected
                      ? "bg-brand font-medium text-white"
                      : "text-[#4A4A4A] hover:bg-[#F5F7FA]"
                  }`}
                >
                  <span className="flex size-4 shrink-0 items-center justify-center">
                    {isSelected ? <CheckIcon /> : null}
                  </span>
                  <span className="truncate">{option.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`size-3.5 shrink-0 text-[#6B7280] transition-transform ${
        open ? "rotate-180" : ""
      }`}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.25}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="size-3.5 text-white"
    >
      <path d="m5 12 5 5L20 7" />
    </svg>
  );
}

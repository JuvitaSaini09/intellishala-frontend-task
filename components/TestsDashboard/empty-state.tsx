type EmptyStateProps = {
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
};

export function EmptyState({
  title,
  description,
  actionLabel,
  onAction,
}: EmptyStateProps) {
  return (
    <div className="px-6 py-16 text-center">
      <h2 className="text-base font-semibold text-[#2C2C2E]">{title}</h2>
      <p className="mt-1 text-sm text-[#6E727A]">{description}</p>
      {actionLabel && onAction ? (
        <button
          type="button"
          onClick={onAction}
          className="mt-4 h-9 cursor-pointer rounded-lg border border-[#D7DCE5] bg-white px-3 text-sm font-medium text-[#2C2C2E] hover:bg-[#F4F6F8]"
        >
          {actionLabel}
        </button>
      ) : null}
    </div>
  );
}

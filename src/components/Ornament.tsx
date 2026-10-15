/** Hairline divider with a centred lozenge, in gold. */
export function Ornament({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`ornament ${className}`}>
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor">
        <path d="M7 1 13 7 7 13 1 7Z" />
        <path d="M7 4.5 9.5 7 7 9.5 4.5 7Z" fill="currentColor" stroke="none" />
      </svg>
    </div>
  );
}

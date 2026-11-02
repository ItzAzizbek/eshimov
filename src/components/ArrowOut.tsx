export function ArrowOut({ size = 14, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill="none"
      className={`transition-transform duration-500 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${className}`}
      aria-hidden
    >
      <path d="M3 11 L11 3 M5 3 L11 3 L11 9" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}

export function ArrowDown({ size = 14, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" className={className} aria-hidden>
      <path d="M7 2 L7 12 M3 8 L7 12 L11 8" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}

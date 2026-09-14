export function Sparkle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 2c.6 4.2 1.4 6.1 3.5 8.5C17.9 12.6 19.8 13.4 24 14c-4.2.6-6.1 1.4-8.5 3.5C13.4 19.9 12.6 21.8 12 26c-.6-4.2-1.4-6.1-3.5-8.5C6.1 15.4 4.2 14.6 0 14c4.2-.6 6.1-1.4 8.5-3.5C10.6 8.1 11.4 6.2 12 2Z"
        fill="currentColor"
        transform="scale(0.85) translate(1.5,1)"
      />
    </svg>
  );
}

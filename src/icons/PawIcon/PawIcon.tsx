export function PawIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className={className}
      aria-hidden="true"
    >
      <ellipse cx="5.5" cy="10.5" rx="1.8" ry="2.3" />
      <ellipse cx="9.5" cy="8.5" rx="1.8" ry="2.3" />
      <ellipse cx="14.5" cy="8.5" rx="1.8" ry="2.3" />
      <ellipse cx="18.5" cy="10.5" rx="1.8" ry="2.3" />
      <path d="M17 17c0 2.76-2.24 5-5 5s-5-2.24-5-5c0-1.86 1.02-3.48 2.54-4.33.32-.18.68-.28 1.04-.28h2.84c.36 0 .72.1 1.04.28C15.98 13.52 17 15.14 17 17z" />
    </svg>
  );
}

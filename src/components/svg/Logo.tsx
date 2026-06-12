export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 44"
      aria-label="StayView"
    >
      <text
        fontFamily="var(--font-geist-sans), system-ui, sans-serif"
        fontWeight="700"
        fontSize="28"
        letterSpacing="-1"
        x="0"
        y="32"
      >
        <tspan fill="#7352c7">Stay</tspan>
        <tspan fill="currentColor">View</tspan>
      </text>
      <rect x="0" y="40" width="36" height="2.5" rx="1.25" fill="#7352c7" />
    </svg>
  );
}

export function LogoLight({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 44"
      aria-label="StayView"
    >
      <text
        fontFamily="var(--font-geist-sans), system-ui, sans-serif"
        fontWeight="700"
        fontSize="28"
        letterSpacing="-1"
        x="0"
        y="32"
      >
        <tspan fill="#9b7fe0">Stay</tspan>
        <tspan fill="#ffffff">View</tspan>
      </text>
      <rect x="0" y="40" width="36" height="2.5" rx="1.25" fill="#9b7fe0" />
    </svg>
  );
}

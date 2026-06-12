export function HeroIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 560 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect x="40" y="48" width="480" height="320" rx="16" fill="#1a1028" stroke="#7352c7" strokeWidth="1.5" />
      <rect x="56" y="64" width="448" height="36" rx="8" fill="#2d1b4e" />
      <circle cx="76" cy="82" r="6" fill="#ef4444" opacity="0.8" />
      <circle cx="96" cy="82" r="6" fill="#f59e0b" opacity="0.8" />
      <circle cx="116" cy="82" r="6" fill="#22c55e" opacity="0.8" />
      <rect x="56" y="116" width="120" height="236" rx="8" fill="#2d1b4e" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect key={i} x="68" y={128 + i * 36} width="96" height="24" rx="4" fill={i === 1 ? "#7352c7" : "#3d2a5c"} />
      ))}
      <text x="68" y="110" fill="#9b7fe0" fontSize="10" fontFamily="system-ui">StayView</text>
      {[0, 1, 2, 3].map((row) =>
        [0, 1, 2, 3, 4].map((col) => {
          const colors = ["#22c55e", "#7352c7", "#f59e0b", "#64748b", "#ef4444"];
          const c = colors[(row + col) % colors.length];
          return (
            <g key={`${row}-${col}`}>
              <rect
                x={192 + col * 58}
                y={116 + row * 58}
                width="50"
                height="50"
                rx="8"
                fill={c}
                opacity={0.25 + (col % 3) * 0.15}
                stroke={c}
                strokeWidth="1"
              />
              <text
                x={217 + col * 58}
                y={146 + row * 58}
                textAnchor="middle"
                fill="#fff"
                fontSize="11"
                fontWeight="600"
                fontFamily="system-ui"
              >
                {100 + row * 5 + col}
              </text>
            </g>
          );
        }),
      )}
      <rect x="192" y="348" width="296" height="4" rx="2" fill="#7352c7" opacity="0.5" />
      <path
        d="M420 360h80M460 340v40"
        stroke="#9b7fe0"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.6"
      />
      <circle cx="480" cy="80" r="20" fill="#7352c7" opacity="0.3" />
      <path
        d="M472 80l6 6 12-14"
        stroke="#c4b5fd"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

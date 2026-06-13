export function StayViewProductIllustration({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 320 200" fill="none" aria-hidden>
      <rect width="320" height="200" rx="12" fill="#f4f2f8" />
      <rect x="16" y="16" width="288" height="168" rx="8" fill="#fff" stroke="#e8e4f0" />
      <rect x="28" y="28" width="88" height="144" rx="6" fill="#7352c7" fillOpacity="0.08" />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect
          key={i}
          x={36}
          y={40 + i * 26}
          width="72"
          height="18"
          rx="4"
          fill={i === 1 ? "#7352c7" : "#7352c7"}
          fillOpacity={i === 1 ? 0.35 : 0.12}
        />
      ))}
      {[0, 1, 2].map((row) =>
        [0, 1, 2].map((col) => (
          <rect
            key={`${row}-${col}`}
            x={128 + col * 58}
            y={40 + row * 58}
            width="50"
            height="50"
            rx="6"
            fill="#7352c7"
            fillOpacity={0.15 + (row + col) * 0.08}
            stroke="#7352c7"
            strokeWidth="1"
            strokeOpacity="0.3"
          />
        )),
      )}
      <circle cx="268" cy="44" r="8" fill="#22c55e" fillOpacity="0.8" />
      <text x="28" y="188" fill="#7352c7" fontSize="10" fontFamily="system-ui" fontWeight="600">
        StayView · Front desk
      </text>
    </svg>
  );
}

export function OutletProductIllustration({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 320 200" fill="none" aria-hidden>
      <rect width="320" height="200" rx="12" fill="#f4f2f8" />
      <rect x="16" y="16" width="288" height="168" rx="8" fill="#fff" stroke="#e8e4f0" />
      <rect x="28" y="36" width="120" height="80" rx="6" fill="#7352c7" fillOpacity="0.1" stroke="#7352c7" strokeOpacity="0.25" />
      {[0, 1, 2].map((i) => (
        <rect key={i} x={36 + i * 38} y={44} width="32" height="24" rx="4" fill="#7352c7" fillOpacity="0.2" />
      ))}
      <rect x="160" y="36" width="132" height="120" rx="6" fill="#faf9fc" stroke="#e8e4f0" />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x={172} y={48 + i * 26} width="108" height="18" rx="4" fill="#7352c7" fillOpacity={0.08 + i * 0.04} />
      ))}
      <path d="M160 156h132" stroke="#7352c7" strokeWidth="2" strokeOpacity="0.4" />
      <text x="172" y="172" fill="#7352c7" fontSize="11" fontFamily="system-ui" fontWeight="700">
        Total · Room 204
      </text>
      <text x="28" y="188" fill="#7352c7" fontSize="10" fontFamily="system-ui" fontWeight="600">
        Outlet · Restaurant POS
      </text>
    </svg>
  );
}

export function ChannelManagerIllustration({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 320 200" fill="none" aria-hidden>
      <rect width="320" height="200" rx="12" fill="#f4f2f8" />
      <rect x="16" y="16" width="288" height="168" rx="8" fill="#fff" stroke="#e8e4f0" />
      <rect x="120" y="52" width="80" height="80" rx="8" fill="#7352c7" fillOpacity="0.15" stroke="#7352c7" strokeOpacity="0.4" />
      <text x="136" y="98" fill="#7352c7" fontSize="11" fontFamily="system-ui" fontWeight="700">
        PMS
      </text>
      {[
        { x: 36, y: 40, label: "OTA" },
        { x: 36, y: 100, label: "Airbnb" },
        { x: 228, y: 40, label: "GDS" },
        { x: 228, y: 100, label: "Direct" },
      ].map(({ x, y, label }) => (
        <g key={label}>
          <rect x={x} y={y} width="56" height="36" rx="6" fill="#7352c7" fillOpacity="0.1" stroke="#7352c7" strokeOpacity="0.25" />
          <text x={x + 28} y={y + 22} fill="#7352c7" fontSize="9" fontFamily="system-ui" fontWeight="600" textAnchor="middle">
            {label}
          </text>
          <path
            d={`M${x + (x < 120 ? 56 : 0)} ${y + 18} H${x < 120 ? 120 : 228}`}
            stroke="#7352c7"
            strokeWidth="1.5"
            strokeOpacity="0.35"
            strokeDasharray="4 3"
          />
        </g>
      ))}
      <circle cx="160" cy="148" r="6" fill="#22c55e" fillOpacity="0.9" />
      <text x="172" y="152" fill="#6b6578" fontSize="9" fontFamily="system-ui">
        Live sync
      </text>
      <text x="28" y="188" fill="#7352c7" fontSize="10" fontFamily="system-ui" fontWeight="600">
        Channel Manager · OTA sync
      </text>
    </svg>
  );
}

export function BookingEngineIllustration({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 320 200" fill="none" aria-hidden>
      <rect width="320" height="200" rx="12" fill="#f4f2f8" />
      <rect x="16" y="16" width="288" height="168" rx="8" fill="#fff" stroke="#e8e4f0" />
      <rect x="28" y="28" width="264" height="28" rx="6" fill="#7352c7" fillOpacity="0.12" />
      <rect x="40" y="36" width="48" height="12" rx="3" fill="#7352c7" fillOpacity="0.3" />
      <rect x="200" y="34" width="72" height="16" rx="8" fill="#7352c7" fillOpacity="0.25" />
      <rect x="28" y="68" width="120" height="88" rx="6" fill="#7352c7" fillOpacity="0.08" stroke="#e8e4f0" />
      <rect x="40" y="80" width="96" height="12" rx="3" fill="#7352c7" fillOpacity="0.2" />
      {[0, 1, 2].map((i) => (
        <rect key={i} x={40} y={100 + i * 18} width={80 - i * 10} height="10" rx="2" fill="#7352c7" fillOpacity={0.12 + i * 0.04} />
      ))}
      <rect x="160" y="68" width="132" height="88" rx="6" fill="#faf9fc" stroke="#7352c7" strokeOpacity="0.2" />
      <text x="172" y="88" fill="#7352c7" fontSize="9" fontFamily="system-ui" fontWeight="600">
        Check availability
      </text>
      {[0, 1, 2].map((i) => (
        <rect key={i} x={172} y={96 + i * 22} width="108" height="16" rx="4" fill="#7352c7" fillOpacity={0.08 + i * 0.05} />
      ))}
      <rect x="172" y="148" width="108" height="22" rx="6" fill="#7352c7" fillOpacity="0.35" />
      <text x="226" y="163" fill="#fff" fontSize="9" fontFamily="system-ui" fontWeight="700" textAnchor="middle">
        Book now
      </text>
      <text x="28" y="188" fill="#7352c7" fontSize="10" fontFamily="system-ui" fontWeight="600">
        Booking Engine · Direct bookings
      </text>
    </svg>
  );
}

type IconProps = { className?: string };

export function FrontDeskIcon({ className = "" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <rect x="6" y="10" width="36" height="28" rx="4" stroke="#7352c7" strokeWidth="2" />
      <path d="M6 18h36M14 26h8M14 32h12" stroke="#9b7fe0" strokeWidth="2" strokeLinecap="round" />
      <circle cx="36" cy="30" r="4" fill="#7352c7" />
    </svg>
  );
}

export function FolioIcon({ className = "" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <path d="M12 8h20l8 8v28H12V8z" stroke="#7352c7" strokeWidth="2" strokeLinejoin="round" />
      <path d="M32 8v8h8M16 22h16M16 28h12M16 34h8" stroke="#9b7fe0" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function FbIcon({ className = "" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <ellipse cx="24" cy="30" rx="14" ry="6" stroke="#7352c7" strokeWidth="2" />
      <path d="M18 30V18h12v12" stroke="#7352c7" strokeWidth="2" strokeLinejoin="round" />
      <path d="M20 14h8M22 10h4" stroke="#9b7fe0" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function InventoryIcon({ className = "" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <path d="M8 16l16-8 16 8v20l-16 8-16-8V16z" stroke="#7352c7" strokeWidth="2" strokeLinejoin="round" />
      <path d="M24 8v36M8 16l16 8 16-8" stroke="#9b7fe0" strokeWidth="2" />
    </svg>
  );
}

export function ReportsIcon({ className = "" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <rect x="8" y="8" width="32" height="32" rx="4" stroke="#7352c7" strokeWidth="2" />
      <path d="M16 32V24M24 32V16M32 32V20" stroke="#9b7fe0" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function PlatformIcon({ className = "" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <circle cx="24" cy="24" r="16" stroke="#7352c7" strokeWidth="2" />
      <ellipse cx="24" cy="24" rx="8" ry="16" stroke="#9b7fe0" strokeWidth="2" />
      <path d="M8 24h32" stroke="#9b7fe0" strokeWidth="2" />
    </svg>
  );
}

export const featureIconMap = {
  frontdesk: FrontDeskIcon,
  folios: FolioIcon,
  fb: FbIcon,
  inventory: InventoryIcon,
  reports: ReportsIcon,
  platform: PlatformIcon,
} as const;

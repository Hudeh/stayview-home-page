import type { ReactNode } from "react";

type AnimatedHeadlineProps = {
  as?: "h1" | "h2" | "h3";
  className?: string;
  children?: ReactNode;
  /** Split into line wrappers for staggered clip reveal */
  lines?: ReactNode[];
};

export function AnimatedHeadline({
  as: Tag = "h2",
  className = "",
  children,
  lines,
}: AnimatedHeadlineProps) {
  const content = lines ?? [children];

  return (
    <Tag className={`headline-reveal ${className}`.trim()}>
      {content.map((line, i) => (
        <span key={i} className="headline-line" style={{ ["--line-i" as string]: i }}>
          <span className="headline-line-inner">{line}</span>
        </span>
      ))}
    </Tag>
  );
}

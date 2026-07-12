import Image from "next/image";

type ProductShotProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
  sizes?: string;
};

/** Framed product screenshot — browser chrome + soft shadow */
export function ProductShot({
  src,
  alt,
  width,
  height,
  priority = false,
  className = "",
  sizes = "(max-width: 1024px) 100vw, 560px",
}: ProductShotProps) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_24px_60px_-20px_rgba(18,10,36,0.45)] ${className}`}
    >
      <div className="flex items-center gap-1.5 border-b border-border bg-surface px-3 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" aria-hidden />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" aria-hidden />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" aria-hidden />
        <span className="ml-3 h-5 flex-1 rounded-md bg-background" aria-hidden />
      </div>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes={sizes}
        className="h-auto w-full"
      />
    </div>
  );
}

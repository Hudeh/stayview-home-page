import Image from "next/image";

type ProductShotProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
  sizes?: string;
  variant?: "light" | "dark";
};

export function ProductShot({
  src,
  alt,
  width,
  height,
  priority = false,
  className = "",
  sizes = "(max-width: 1024px) 100vw, 560px",
  variant = "light",
}: ProductShotProps) {
  const dark = variant === "dark";

  return (
    <div className={`${dark ? "shot-frame" : "shot-frame-light"} ${className}`}>
      <div
        className={`flex items-center gap-1.5 border-b px-3 py-2.5 ${
          dark ? "border-white/10 bg-[#1a1230]" : "border-border bg-[#f3f0f8]"
        }`}
      >
        <span className="h-2 w-2 rounded-full bg-[#ff5f57]" aria-hidden />
        <span className="h-2 w-2 rounded-full bg-[#febc2e]" aria-hidden />
        <span className="h-2 w-2 rounded-full bg-[#28c840]" aria-hidden />
        <span
          className={`ml-3 h-4 flex-1 rounded ${dark ? "bg-white/10" : "bg-white"}`}
          aria-hidden
        />
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

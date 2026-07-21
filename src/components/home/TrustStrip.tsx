import { Reveal } from "@/components/ui/Reveal";
import { platformStats } from "@/lib/content";

const stripItems = [
  ...platformStats,
  { value: "24×7", label: "Live chat support" },
];

export function TrustStrip() {
  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <Reveal>
          <ul className="grid grid-cols-2 divide-border sm:grid-cols-3 lg:grid-cols-5 lg:divide-x">
            {stripItems.map((item) => (
              <li
                key={item.label}
                className="flex flex-col justify-center px-0 py-4 sm:px-4 lg:px-6 lg:py-2 first:lg:pl-0 last:lg:pr-0"
              >
                <p className="font-display text-xl font-bold tracking-tight text-brand-ink sm:text-2xl">
                  {item.value}
                </p>
                <p className="mt-1 text-xs font-medium tracking-wide text-muted uppercase">
                  {item.label}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

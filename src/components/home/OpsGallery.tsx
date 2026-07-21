import { ProductShot } from "@/components/home/ProductShot";
import { Reveal } from "@/components/ui/Reveal";
import { productScreenshots } from "@/lib/content";

const galleryIds = [
  "night-audit",
  "outlet-pos",
  "hr-dashboard",
  "laundry-management",
] as const;

export function OpsGallery() {
  const shots = galleryIds
    .map((id) => productScreenshots.find((s) => s.id === id))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const [featured, ...rest] = shots;

  return (
    <section className="ink-band noise relative overflow-hidden border-b border-white/10 py-20 text-white sm:py-28">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.2em] text-brand-light uppercase">
            Operations proof
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-5xl">
            Built for the work after check-in
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/65">
            Night audit, Outlet POS, HR, and laundry — the screens your teams open
            every day, not marketing mockups.
          </p>
        </Reveal>

        {featured ? (
          <Reveal className="mt-14" as="figure">
            <ProductShot
              src={featured.src}
              alt={featured.alt}
              width={featured.width}
              height={featured.height}
              variant="dark"
              sizes="(max-width: 1024px) 100vw, 1100px"
            />
            <figcaption className="mt-5 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <p className="font-display text-xl font-semibold">{featured.title}</p>
              <p className="text-sm text-white/55">{featured.caption}</p>
            </figcaption>
          </Reveal>
        ) : null}

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {rest.map((shot, i) => (
            <Reveal key={shot.id} delayMs={i * 90} as="figure" className="flex flex-col gap-3">
              <ProductShot
                src={shot.src}
                alt={shot.alt}
                width={shot.width}
                height={shot.height}
                variant="dark"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
              <figcaption>
                <p className="font-display font-semibold">{shot.title}</p>
                <p className="mt-1 text-sm text-white/55">{shot.caption}</p>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

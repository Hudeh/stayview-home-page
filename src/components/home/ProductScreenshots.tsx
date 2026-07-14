import { productScreenshots } from "@/lib/content";
import { ProductShot } from "@/components/home/ProductShot";

export function ProductScreenshots() {
  return (
    <section className="border-b border-border bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">
            Inside the product
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Built for real hotel operations
          </h2>
          <p className="mt-4 text-lg text-muted">
            From the morning dashboard to night audit, HR, and Outlet POS — the
            same StayView experience your team uses every day.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {productScreenshots.map((shot) => (
            <figure key={shot.id} className="flex flex-col gap-3">
              <ProductShot
                src={shot.src}
                alt={shot.alt}
                width={shot.width}
                height={shot.height}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
              />
              <figcaption>
                <p className="font-semibold text-foreground">{shot.title}</p>
                <p className="mt-0.5 text-sm text-muted">{shot.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

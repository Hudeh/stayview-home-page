import { platformStats, testimonials } from "@/lib/content";

export function SocialProof() {
  return (
    <section className="border-y border-border bg-[#0d0818] py-20 text-white sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {platformStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-white sm:text-4xl">{stat.value}</p>
              <p className="mt-2 text-sm text-white/50">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">
            What hotel teams say
          </h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t) => (
              <blockquote
                key={t.role + t.location}
                className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-8"
              >
                <p className="flex-1 text-sm leading-relaxed text-white/80">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-6 border-t border-white/10 pt-4">
                  <cite className="not-italic">
                    <span className="text-sm font-semibold text-white">{t.role}</span>
                  </cite>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

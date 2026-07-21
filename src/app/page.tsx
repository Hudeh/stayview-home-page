import { CtaBanner } from "@/components/home/CtaBanner";
import { Hero } from "@/components/home/Hero";
import { OpsGallery } from "@/components/home/OpsGallery";
import { PlatformChapters } from "@/components/home/PlatformChapters";
import { TrustStrip } from "@/components/home/TrustStrip";
import { WhyStayView } from "@/components/home/WhyStayView";
import { PricingCards } from "@/components/pricing/PricingCards";
import { BlogCard } from "@/components/blog/BlogCard";
import { Reveal } from "@/components/ui/Reveal";
import { blogPosts } from "@/lib/content";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <PlatformChapters />
      <OpsGallery />
      <WhyStayView />
      <section className="surface-grid border-b border-border py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold tracking-[0.2em] text-brand uppercase">
              Pricing
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-5xl">
              Plans that scale with your rooms
            </h2>
            <p className="mt-5 text-lg text-muted">
              Transparent NGN pricing by room count and branches. Start with a demo —
              we&apos;ll recommend the right tier.
            </p>
          </Reveal>
          <div className="mt-16">
            <PricingCards />
          </div>
          <p className="mt-10 text-center text-sm text-muted">
            Prices shown per billing cycle in NGN. F&amp;B-only and full PMS modes available.
          </p>
        </div>
      </section>
      <section className="bg-surface py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold tracking-[0.2em] text-brand uppercase">
                Blog
              </p>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-5xl">
                From the blog
              </h2>
              <p className="mt-4 text-lg text-muted">
                Insights on hotel operations, F&amp;B, and technology.
              </p>
            </div>
            <Link
              href="/blog"
              className="text-sm font-semibold text-brand hover:text-brand-dark"
            >
              View all posts →
            </Link>
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {blogPosts.slice(0, 2).map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}

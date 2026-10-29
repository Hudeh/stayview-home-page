import { CtaBanner } from "@/components/home/CtaBanner";
import { Hero } from "@/components/home/Hero";
import { OpsGallery } from "@/components/home/OpsGallery";
import { PlatformChapters } from "@/components/home/PlatformChapters";
import { TrustStrip } from "@/components/home/TrustStrip";
import { WhyStayView } from "@/components/home/WhyStayView";
import { PricingCards } from "@/components/pricing/PricingCards";
import { BlogCard } from "@/components/blog/BlogCard";
import { AnimatedHeadline } from "@/components/ui/AnimatedHeadline";
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
      <section className="surface-grid surface-vector-muted border-b border-border py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal variant="none" stagger className="mx-auto max-w-2xl text-center">
            <p className="stagger-item text-sm font-semibold tracking-[0.2em] text-brand uppercase">
              Pricing
            </p>
            <AnimatedHeadline
              className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-5xl"
              lines={["Priced by your rooms.", "Add only what you use."]}
            />
            <p className="stagger-item mt-5 text-lg text-muted">
              Hotel Core starts at ₦70,000 a month for up to 20 rooms. Laundry, POS, accounting,
              and the rest are add-ons.
            </p>
          </Reveal>
          <div className="mt-16">
            <PricingCards />
          </div>
          <p className="mt-10 text-center text-sm text-muted">
            Yearly cloud billing includes 2 months.{" "}
            <Link href="/pricing" className="font-semibold text-brand hover:underline">
              See add-ons, restaurant, and on-prem prices
            </Link>
          </p>
        </div>
      </section>
      <section className="surface-vector py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal
            variant="none"
            stagger
            className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end"
          >
            <div>
              <p className="stagger-item text-sm font-semibold tracking-[0.2em] text-brand uppercase">
                Blog
              </p>
              <AnimatedHeadline className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-5xl">
                From the blog
              </AnimatedHeadline>
              <p className="stagger-item mt-4 text-lg text-muted">
                Insights on hotel operations, F&amp;B, and technology.
              </p>
            </div>
            <Link
              href="/blog"
              className="stagger-item text-sm font-semibold text-brand hover:text-brand-dark"
            >
              View all posts →
            </Link>
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {blogPosts.slice(0, 2).map((post, i) => (
              <Reveal key={post.slug} delayMs={i * 100} variant="up">
                <BlogCard post={post} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}

import { CtaBanner } from "@/components/home/CtaBanner";
import { FeaturePreview } from "@/components/home/FeaturePreview";
import { Hero } from "@/components/home/Hero";
import { ProductUseCases } from "@/components/home/ProductUseCases";
import { SocialProof } from "@/components/home/SocialProof";
import { SupportOnboarding } from "@/components/home/SupportOnboarding";
import { TrustBar } from "@/components/home/TrustBar";
import { WhyStayView } from "@/components/home/WhyStayView";
import { PricingCards } from "@/components/pricing/PricingCards";
import { BlogCard } from "@/components/blog/BlogCard";
import { blogPosts } from "@/lib/content";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProductUseCases />
      <WhyStayView />
      <FeaturePreview />
      <SocialProof />
      <SupportOnboarding />
      <TrustBar />
      <section className="border-y border-border bg-surface py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Simple, transparent pricing
            </h2>
            <p className="mt-4 text-lg text-muted">
              Plans aligned to room count and branches. Start with a demo — we&apos;ll
              recommend the right tier.
            </p>
          </div>
          <div className="mt-16">
            <PricingCards />
          </div>
          <p className="mt-8 text-center text-sm text-muted">
            Prices shown per billing cycle in NGN. F&B-only and full PMS product modes available.
          </p>
        </div>
      </section>
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">From the blog</h2>
              <p className="mt-4 text-lg text-muted">
                Insights on hotel operations, F&B, and technology.
              </p>
            </div>
            <Link href="/blog" className="text-sm font-semibold text-brand hover:text-brand-dark">
              View all posts →
            </Link>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
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

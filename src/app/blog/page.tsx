import type { Metadata } from "next";
import { BlogCard } from "@/components/blog/BlogCard";
import { blogPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description: "Hotel operations, F&B, and PMS insights from the StayView team.",
};

export default function BlogPage() {
  return (
    <>
      <section className="border-b border-border bg-surface py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Blog</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
            Practical guides for general managers, front office managers, and
            finance teams running modern hotels.
          </p>
        </div>
      </section>
      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:grid-cols-2 sm:px-6">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </>
  );
}

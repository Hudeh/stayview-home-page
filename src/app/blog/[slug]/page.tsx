import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Post not found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <article className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Link href="/blog" className="text-sm font-semibold text-brand hover:text-brand-dark">
          ← Back to blog
        </Link>
        <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-muted">
          <span className="rounded-md bg-brand/10 px-3 py-1 font-medium text-brand">
            {post.category}
          </span>
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("en-NG", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <span>{post.readTime} read</span>
          <span>· {post.author}</span>
        </div>
        <h1 className="mt-6 font-display text-4xl font-bold tracking-tight sm:text-5xl">
          {post.title}
        </h1>
        <p className="mt-6 text-xl leading-relaxed text-muted">{post.excerpt}</p>
        <div className="prose prose-lg mt-12 max-w-none">
          {post.content.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="mb-6 leading-relaxed text-foreground/90">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="mt-16 rounded-2xl border border-border bg-brand/5 p-8 text-center">
          <h2 className="text-xl font-semibold">See StayView in action</h2>
          <p className="mt-2 text-muted">Book a demo tailored to your property.</p>
          <Link
            href="/demo"
            className="mt-6 inline-flex rounded-full bg-brand px-8 py-3 text-sm font-semibold text-white hover:bg-brand-dark"
          >
            Book a demo
          </Link>
        </div>
      </div>
    </article>
  );
}

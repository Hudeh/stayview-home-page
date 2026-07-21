import Link from "next/link";
import type { BlogPost } from "@/lib/content";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group flex flex-col border border-border bg-background transition-colors hover:border-brand/40">
      <div className="h-1 bg-gradient-to-r from-brand to-brand-light" />
      <div className="flex flex-1 flex-col p-8">
        <div className="flex items-center gap-3 text-xs font-medium tracking-wider text-muted uppercase">
          <span className="text-brand">{post.category}</span>
          <span aria-hidden>·</span>
          <span>{post.readTime}</span>
        </div>
        <h3 className="mt-4 font-display text-xl font-semibold transition-colors group-hover:text-brand sm:text-2xl">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{post.excerpt}</p>
        <div className="mt-8 flex items-center justify-between border-t border-border pt-5 text-sm">
          <span className="text-muted">
            {new Date(post.date).toLocaleDateString("en-NG", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
          <Link
            href={`/blog/${post.slug}`}
            className="font-semibold text-brand hover:text-brand-dark"
          >
            Read more →
          </Link>
        </div>
      </div>
    </article>
  );
}

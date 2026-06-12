import Link from "next/link";
import type { BlogPost } from "@/lib/content";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="card-hover group flex flex-col rounded-2xl border border-border bg-surface overflow-hidden">
      <div className="h-2 bg-gradient-to-r from-brand to-brand-light" />
      <div className="flex flex-1 flex-col p-8">
        <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-wider text-muted">
          <span className="rounded-full bg-brand/10 px-3 py-1 text-brand">{post.category}</span>
          <span>{post.readTime}</span>
        </div>
        <h3 className="mt-4 text-xl font-semibold group-hover:text-brand transition-colors">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{post.excerpt}</p>
        <div className="mt-6 flex items-center justify-between border-t border-border pt-6 text-sm">
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

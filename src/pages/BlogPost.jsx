import { Link, useParams } from "react-router-dom";
import BlogLayout from "../components/BlogLayout";
import MarkdownContent from "../components/MarkdownContent";
import { getPostBySlug } from "../data/posts";

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <BlogLayout>
        <h1 className="font-heading text-2xl font-semibold">Post not found</h1>
        <p className="text-muted mt-2">
          <Link to="/blog" className="link-accent">
            Back to blog
          </Link>
        </p>
      </BlogLayout>
    );
  }

  return (
    <BlogLayout>
      <article>
        <time className="text-sm font-mono text-muted">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}{" "}
          · {post.readTime}
        </time>
        <h1 className="mt-3 font-heading text-3xl md:text-4xl font-semibold leading-tight">
          {post.title}
        </h1>
        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-0.5 rounded bg-surface border border-border text-muted"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-10">
          <MarkdownContent content={post.content} />
        </div>
      </article>
    </BlogLayout>
  );
}

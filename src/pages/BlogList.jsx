import { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import BlogLayout from "../components/BlogLayout";
import { posts } from "../data/posts";

export default function BlogList() {
  const [tag, setTag] = useState("all");
  const allTags = [...new Set(posts.flatMap((p) => p.tags))];

  const filtered =
    tag === "all" ? posts : posts.filter((p) => p.tags.includes(tag));

  const sorted = [...filtered].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <BlogLayout backTo="/" backLabel="Home">
      <h1 className="font-heading text-3xl md:text-4xl font-semibold">Blog</h1>
      <p className="text-muted mt-2">
        Writing about software, tools, and lessons learned.
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setTag("all")}
          className={`px-3 py-1 text-sm rounded-full border transition-colors ${
            tag === "all"
              ? "bg-accent/15 border-accent text-accent"
              : "border-border text-muted hover:border-accent/40"
          }`}
        >
          All
        </button>
        {allTags.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTag(t)}
            className={`px-3 py-1 text-sm rounded-full border transition-colors ${
              tag === t
                ? "bg-accent/15 border-accent text-accent"
                : "border-border text-muted hover:border-accent/40"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <ul className="mt-10 space-y-6">
        {sorted.map((post) => (
          <li key={post.slug}>
            <Link
              to={`/blog/${post.slug}`}
              className="card block p-6 hover:border-accent/40 transition-colors group"
            >
              <div className="flex items-center gap-2 text-xs text-muted font-mono">
                <Calendar size={12} />
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
                <span>·</span>
                {post.readTime}
              </div>
              <h2 className="mt-2 font-heading text-xl font-semibold group-hover:text-accent transition-colors">
                {post.title}
              </h2>
              <p className="mt-2 text-muted">{post.excerpt}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {post.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-0.5 rounded bg-bg border border-border text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </BlogLayout>
  );
}

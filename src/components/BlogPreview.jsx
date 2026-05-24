import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { getLatestPosts } from "../data/posts";
import { useReducedMotion } from "../hooks/useReducedMotion";

export default function BlogPreview() {
  const reduced = useReducedMotion();
  const latest = getLatestPosts(3);

  return (
    <section id="blog" className="section-padding">
      <motion.div
        initial={reduced ? {} : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="section-title">Blog</h2>
            <p className="section-subtitle">
              Notes on building software and lessons from the field.
            </p>
          </div>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm link-accent"
          >
            View all posts
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latest.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={reduced ? {} : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Link
                to={`/blog/${post.slug}`}
                className="card block p-6 h-full hover:border-accent/40 transition-colors group"
              >
                <div className="flex items-center gap-2 text-xs text-muted font-mono">
                  <Calendar size={12} />
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                  <span>·</span>
                  {post.readTime}
                </div>
                <h3 className="mt-3 font-heading text-lg font-semibold group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-muted line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded bg-bg border border-border text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

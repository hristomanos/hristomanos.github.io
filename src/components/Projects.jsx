import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, GitBranch, X } from "lucide-react";
import { projects, projectCategories } from "../data/projects";
import { useReducedMotion } from "../hooks/useReducedMotion";

export default function Projects() {
  const reduced = useReducedMotion();
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState(null);

  const filtered =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-padding">
      <motion.div
        initial={reduced ? {} : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          Selected work — click a card for more detail.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {projectCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-1.5 text-sm rounded-full border transition-colors ${
                filter === cat.id
                  ? "bg-accent/15 border-accent text-accent"
                  : "border-border text-muted hover:border-accent/40"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-10 grid sm:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={reduced ? {} : { opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduced ? {} : { opacity: 0, scale: 0.98 }}
                className="card overflow-hidden cursor-pointer group"
                onClick={() => setSelected(project)}
              >
                <div className="aspect-video bg-bg overflow-hidden">
                  <img
                    src={project.image}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-heading text-lg font-semibold group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span className="text-xs px-2 py-0.5 rounded bg-accent/15 text-accent shrink-0">
                        Featured
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-sm text-muted line-clamp-2">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-bg/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="card max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 md:p-8"
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start gap-4">
                <h3 className="font-heading text-2xl font-semibold">
                  {selected.title}
                </h3>
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  className="p-2 text-muted hover:text-text"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
              </div>
              <p className="mt-4 text-muted leading-relaxed">
                {selected.longDescription}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {selected.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded border border-border text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex gap-4">
                {selected.links.live && (
                  <a
                    href={selected.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 link-accent text-sm"
                  >
                    <ExternalLink size={16} />
                    
                  </a>
                )}
                {selected.links.github && (
                  <a
                    href={selected.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 link-accent text-sm"
                  >
                    <GitBranch size={16} />
                    Source
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

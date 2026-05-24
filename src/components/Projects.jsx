import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, GitBranch, X } from "lucide-react";
import { projects, projectCategories } from "../data/projects";
import { useReducedMotion } from "../hooks/useReducedMotion";

export default function Projects() {
  const reduced = useReducedMotion();
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const filtered =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);
  const selectedImages = selected?.images?.length
    ? selected.images
    : selected?.image
      ? [selected.image]
      : [];
  const hasMultipleImages = selectedImages.length > 1;

  const openProject = (project) => {
    setSelected(project);
    setSelectedImageIndex(0);
  };

  const closeProject = () => {
    setSelected(null);
    setSelectedImageIndex(0);
  };

  const showPreviousImage = () => {
    setSelectedImageIndex((current) =>
      current === 0 ? selectedImages.length - 1 : current - 1,
    );
  };

  const showNextImage = () => {
    setSelectedImageIndex((current) =>
      current === selectedImages.length - 1 ? 0 : current + 1,
    );
  };

  useEffect(() => {
    document.body.classList.toggle("project-modal-open", Boolean(selected));

    return () => {
      document.body.classList.remove("project-modal-open");
    };
  }, [selected]);

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
                onClick={() => openProject(project)}
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
                        className="inline-flex items-center rounded-full border border-border px-2.5 py-1 text-xs text-muted transition-colors group-hover:border-accent/40 group-hover:text-text"
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
            onClick={closeProject}
          >
            <motion.div
              className="card max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button - positioned absolutely */}
              <button
                type="button"
                onClick={closeProject}
                className="absolute top-4 right-4 p-2 text-muted hover:text-text z-10"
                aria-label="Close"
              >
                <X size={24} />
              </button>

              {/* Image gallery */}
              <div className="bg-bg overflow-hidden">
                <div className="relative aspect-video">
                  <img
                    src={selectedImages[selectedImageIndex]}
                    alt={`${selected.title} screenshot ${selectedImageIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                  {hasMultipleImages && (
                    <>
                      <button
                        type="button"
                        onClick={showPreviousImage}
                        className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-bg/80 text-text backdrop-blur hover:border-accent/50 hover:text-accent transition-colors"
                        aria-label="Previous project image"
                      >
                        <ChevronLeft size={22} />
                      </button>
                      <button
                        type="button"
                        onClick={showNextImage}
                        className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-bg/80 text-text backdrop-blur hover:border-accent/50 hover:text-accent transition-colors"
                        aria-label="Next project image"
                      >
                        <ChevronRight size={22} />
                      </button>
                    </>
                  )}
                </div>

                {hasMultipleImages && (
                  <div className="flex gap-2 overflow-x-auto border-t border-border p-3">
                    {selectedImages.map((image, index) => (
                      <button
                        key={image}
                        type="button"
                        onClick={() => setSelectedImageIndex(index)}
                        className={`h-16 w-24 shrink-0 overflow-hidden rounded-md border transition-colors ${
                          selectedImageIndex === index
                            ? "border-accent"
                            : "border-border hover:border-accent/50"
                        }`}
                        aria-label={`Show project image ${index + 1}`}
                      >
                        <img
                          src={image}
                          alt=""
                          className="h-full w-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                {/* Title and meta */}
                <div className="mb-6">
                  <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-2">
                    {selected.title}
                  </h2>
                  {selected.year && (
                    <p className="text-lg text-muted">{selected.year}</p>
                  )}
                </div>

                {/* Description */}
                <p className="text-base text-muted leading-relaxed mb-8">
                  {selected.longDescription}
                </p>

                {/* Tech stack */}
                <div className="mb-8">
                  <h3 className="text-sm font-mono text-muted uppercase tracking-widest mb-4">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selected.tech.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center px-3 py-1.5 rounded-full border border-border text-sm text-muted hover:border-accent/50 hover:text-accent transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-4 pt-6 border-t border-border">
                  {selected.links.live && (
                    <a
                      href={selected.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-accent/30 text-accent hover:bg-accent/10 hover:border-accent transition-all"
                    >
                      <ExternalLink size={18} />
                      View Live
                    </a>
                  )}
                  {selected.links.github && (
                    <a
                      href={selected.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-muted hover:border-accent hover:text-accent transition-all"
                    >
                      <GitBranch size={18} />
                      View Source
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

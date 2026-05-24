import { motion } from "framer-motion";
import { site } from "../data/site";
import { useReducedMotion } from "../hooks/useReducedMotion";

export default function About() {
  const reduced = useReducedMotion();

  return (
    <section id="about" className="section-padding">
      <motion.div
        initial={reduced ? {} : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">About</h2>
        <p className="section-subtitle">
          A bit more context on who I am and what I bring to a team.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4 text-muted leading-relaxed">
            {site.bio.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <div className="space-y-4">
            {site.stats.map((stat) => (
              <div key={stat.label} className="card p-5">
                <p className="font-heading text-2xl font-semibold text-accent">
                  {stat.value}
                </p>
                <p className="text-sm text-muted mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

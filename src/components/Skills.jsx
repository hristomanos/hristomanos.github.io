import { motion } from "framer-motion";
import { skillGroups } from "../data/skills";
import { useReducedMotion } from "../hooks/useReducedMotion";

export default function Skills() {
  const reduced = useReducedMotion();

  return (
    <section id="skills" className="section-padding">
      <motion.div
        initial={reduced ? {} : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">
          Technologies and tools I use to ship products.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={reduced ? {} : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.08 }}
              className="card p-6"
            >
              <h3 className="font-heading font-semibold text-lg mb-4">
                {group.title}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="inline-flex items-center gap-2 px-3 py-1.5 text-sm rounded-md bg-bg border border-border text-muted hover:border-accent/40 hover:text-text transition-colors"
                  >
                    {skill.icon && (
                      <img
                        src={skill.icon}
                        alt=""
                        className="h-4 w-4 shrink-0 object-contain"
                        loading="lazy"
                      />
                    )}
                    {skill.name}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

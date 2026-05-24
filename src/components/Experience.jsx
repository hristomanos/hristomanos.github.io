import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { experience } from "../data/experience";
import { useReducedMotion } from "../hooks/useReducedMotion";

export default function Experience() {
  const reduced = useReducedMotion();

  return (
    <section id="experience" className="section-padding">
      <motion.div
        initial={reduced ? {} : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">
          Where I've been.
        </p>

        <div className="mt-10 relative">
          <div className="absolute left-[11px] md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-12">
            {experience.map((job, i) => (
              <motion.article
                key={`${job.company}-${job.period}`}
                initial={reduced ? {} : { opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative md:grid md:grid-cols-2 md:gap-8 ${
                  i % 2 === 0 ? "" : "md:direction-rtl"
                }`}
              >
                <div
                  className={`md:col-start-1 ${
                    i % 2 === 0 ? "md:text-right md:pr-12" : "md:col-start-2 md:pl-12"
                  } hidden md:block`}
                >
                  <p className="font-mono text-sm text-accent">{job.period}</p>
                  <p className="text-muted text-sm mt-1">{job.location}</p>
                </div>

                <div
                  className={`pl-10 md:pl-0 ${
                    i % 2 === 0
                      ? "md:col-start-2 md:pl-12"
                      : "md:col-start-1 md:pr-12 md:text-right"
                  }`}
                >
                  <div
                    className={`absolute left-0 md:left-1/2 w-6 h-6 rounded-full border-2 border-accent bg-bg flex items-center justify-center md:-translate-x-1/2 ${
                      i % 2 === 0 ? "" : ""
                    }`}
                  >
                    {job.type === "education" ? (
                      <GraduationCap size={12} className="text-accent" />
                    ) : (
                      <Briefcase size={12} className="text-accent" />
                    )}
                  </div>

                  <div className="card p-6 text-left">
                    <p className="font-mono text-sm text-accent md:hidden">
                      {job.period}
                    </p>
                    <h3 className="font-heading text-xl font-semibold mt-1">
                      {job.role}
                    </h3>
                    <p className="text-muted">
                      {job.company} · {job.location}
                    </p>
                    <p className="mt-3 text-muted text-sm leading-relaxed">
                      {job.description}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {job.highlights.map((item) => (
                        <li
                          key={item}
                          className="text-sm text-muted flex gap-2 before:content-['▹'] before:text-accent before:shrink-0"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

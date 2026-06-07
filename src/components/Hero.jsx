import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { site } from "../data/site";
import MagneticButton from "./MagneticButton";
import { useReducedMotion } from "../hooks/useReducedMotion";

export default function Hero() {
  const reduced = useReducedMotion();

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center pt-24 pb-16 relative"
    >
      <div className="grid md:grid-cols-[1fr_auto] gap-12 items-center">
        <motion.div
          initial={reduced ? {} : { opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="relative mx-auto md:mx-0 order-first md:order-none"
        >
          <div className="absolute inset-0 rounded-2xl bg-accent/20 blur-3xl scale-90" />
          <img
            src={site.avatar}
            alt={site.name}
            className="relative w-56 h-56 md:w-72 md:h-72 rounded-2xl object-cover border border-border shadow-2xl"
            width={288}
            height={288}
          />
        </motion.div>

        <div className="order-last md:order-none">
          {site.available && (
            <motion.div
              initial={reduced ? {} : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs font-mono mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Available for opportunities
            </motion.div>
          )}

          <motion.p
            initial={reduced ? {} : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted font-mono text-sm mb-3"
          >
            {site.title} · {site.location}
          </motion.p>

          <motion.h1
            initial={reduced ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]"
          >
            Christomanos{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-300">
              Anastasiou
            </span>
          </motion.h1>

          <motion.p
            initial={reduced ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="mt-6 text-lg md:text-xl text-muted max-w-2xl leading-relaxed"
          >
            {site.tagline}
          </motion.p>

          <motion.div
            initial={reduced ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <MagneticButton>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-bg font-medium hover:bg-accent/90 transition-colors"
              >
                <Mail size={18} />
                Get in touch
              </a>
            </MagneticButton>
            <MagneticButton>
              <a
                href={site.resumeUrl}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-text hover:border-accent/50 transition-colors"
                download
              >
                <Download size={18} />
                Download CV
              </a>
            </MagneticButton>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        initial={reduced ? {} : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted hover:text-accent transition-colors"
        aria-label="Scroll to about"
      >
        <ArrowDown size={24} className="animate-bounce" />
      </motion.a>
    </section>
  );
}

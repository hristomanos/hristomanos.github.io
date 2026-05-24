import { motion } from "framer-motion";
import { useReducedMotion } from "../hooks/useReducedMotion";

const orbs = [
  { size: 280, x: "10%", y: "15%", delay: 0 },
  { size: 200, x: "75%", y: "25%", delay: 2 },
  { size: 160, x: "60%", y: "70%", delay: 4 },
];

export default function FloatingOrbs() {
  const reduced = useReducedMotion();
  if (reduced) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-accent/5 blur-3xl"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 12 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: orb.delay,
          }}
        />
      ))}
    </div>
  );
}

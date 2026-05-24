import { useRef } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "../hooks/useReducedMotion";

export default function MagneticButton({ children, className = "", ...props }) {
  const ref = useRef(null);
  const reduced = useReducedMotion();

  const handleMouseMove = (e) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
  };

  const handleMouseLeave = () => {
    if (ref.current) ref.current.style.transform = "";
  };

  return (
    <motion.div
      ref={ref}
      className={`inline-block transition-transform duration-200 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={reduced ? {} : { scale: 0.97 }}
    >
      {children}
    </motion.div>
  );
}

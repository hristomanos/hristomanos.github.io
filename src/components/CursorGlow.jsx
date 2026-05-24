import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "../hooks/useReducedMotion";

export default function CursorGlow() {
  const reduced = useReducedMotion();
  const glowRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (reduced) return;
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;

    const onMove = (e) => {
      const el = glowRef.current;
      if (el) {
        el.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      }
      setVisible(true);
    };

    const onLeave = (e) => {
      if (!e.relatedTarget) setVisible(false);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseout", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseout", onLeave);
    };
  }, [reduced]);

  if (reduced || !visible) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[15] hidden md:block mix-blend-soft-light"
      aria-hidden
    >
      <div
        ref={glowRef}
        className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full will-change-transform"
        style={{
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, rgba(52, 211, 153, 0.45) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}

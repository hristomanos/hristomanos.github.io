import { useEffect, useState } from "react";
import { useLenis } from "../context/LenisContext";
import { useReducedMotion } from "../hooks/useReducedMotion";

function getNativeProgress() {
  const docHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  return docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
}

export default function ScrollProgress() {
  const lenis = useLenis();
  const reduced = useReducedMotion();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (reduced) return undefined;

    const update = () => {
      setProgress(lenis ? lenis.progress * 100 : getNativeProgress());
    };

    if (lenis) {
      const unsubscribe = lenis.on("scroll", update);
      update();
      return unsubscribe;
    }

    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, [lenis, reduced]);

  if (reduced) return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[60] h-0.5 bg-transparent"
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className="h-full bg-accent"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

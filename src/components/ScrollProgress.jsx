import { useEffect, useState } from "react";
import { useLenis } from "../context/LenisContext";

function getNativeProgress() {
  const docHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  return docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
}

export default function ScrollProgress() {
  const lenis = useLenis();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
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
  }, [lenis]);

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

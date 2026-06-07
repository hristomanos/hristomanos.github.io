import { useEffect, useState } from "react";

function getReducedMotionPreference() {
  if (typeof window === "undefined") return false;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
  const smallScreen = window.matchMedia("(max-width: 768px)").matches;

  return prefersReducedMotion || coarsePointer || smallScreen;
}

export function useReducedMotion() {
  const [reduced, setReduced] = useState(() => getReducedMotionPreference());

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointerQuery = window.matchMedia("(pointer: coarse)");
    const screenQuery = window.matchMedia("(max-width: 768px)");

    const update = () => setReduced(getReducedMotionPreference());

    motionQuery.addEventListener("change", update);
    pointerQuery.addEventListener("change", update);
    screenQuery.addEventListener("change", update);

    return () => {
      motionQuery.removeEventListener("change", update);
      pointerQuery.removeEventListener("change", update);
      screenQuery.removeEventListener("change", update);
    };
  }, []);

  return reduced;
}

import { useEffect } from "react";
import { site } from "../data/site";

const KONAMI = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

export default function EasterEgg() {
  useEffect(() => {
    let index = 0;

    const onKeyDown = (e) => {
      if (e.key === KONAMI[index]) {
        index += 1;
        if (index === KONAMI.length) {
          index = 0;
          console.log(
            `%c${site.name}`,
            "color:#34D399;font-size:20px;font-weight:bold;"
          );
          console.log("Thanks for exploring the source. Happy coding!");
        }
      } else {
        index = e.key === KONAMI[0] ? 1 : 0;
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return null;
}

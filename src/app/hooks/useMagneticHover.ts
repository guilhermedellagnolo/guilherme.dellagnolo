import { useEffect, useRef } from "react";
import gsap from "gsap";

type MagneticElement = HTMLElement | null;

export function useMagneticHover() {
  const ref = useRef<MagneticElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const xTo = gsap.quickTo(element, "x", {
      duration: 0.4,
      ease: "elastic.out(1, 0.3)",
    });
    const yTo = gsap.quickTo(element, "y", {
      duration: 0.4,
      ease: "elastic.out(1, 0.3)",
    });

    const handleMove = (event: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const offsetX = event.clientX - (rect.left + rect.width / 2);
      const offsetY = event.clientY - (rect.top + rect.height / 2);

      xTo(offsetX * 0.2);
      yTo(offsetY * 0.2);
    };

    const handleLeave = () => {
      xTo(0);
      yTo(0);
    };

    element.addEventListener("mousemove", handleMove);
    element.addEventListener("mouseleave", handleLeave);

    return () => {
      element.removeEventListener("mousemove", handleMove);
      element.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return ref;
}


export const tapScale = {
  whileTap: {
    scale: 0.98,
    transition: {
      type: "tween" as const,
      duration: 0.2,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

export const defaultEase = [0.25, 1, 0.5, 1];

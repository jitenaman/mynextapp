export const fadeIn = (
  direction: "up" | "down" | "left" | "right",
  delay: number,
  value: number = 40
) => {
  return {
    hidden: {
      y: direction === "up" ? value : direction === "down" ? -value : 0,
      x: direction === "left" ? value : direction === "right" ? -value : 0,
      opacity: 0.5,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

export const opacity = (delay: number, value: number = 40) => {
  return {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.4,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

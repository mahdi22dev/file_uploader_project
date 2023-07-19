export const navbarVariants = {
  open: {
    opacity: 1,
    x: "0",
    transition: {
      type: "spring",
      stiffness: 230,
      damping: 25,
      velocity: 10,
      duration: 0.2,
      opacity: { duration: 0.5 },
    },
  },
  closed: {
    opacity: 0,
    x: "100vw",
    transition: { duration: 0.4, opacity: { duration: 0.4 } },
  },
};

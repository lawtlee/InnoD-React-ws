const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

const fadeOutVariants = {
    visible: {opacity: 1},
    hidden: {opacity: 0},
};

const colorChangeVariants = {
    initial: { backgroundColor: "#FAFBED" }, // Initial background color
    target: { backgroundColor: "#DB4848" }, // Target background color
  };

export { fadeInVariants, colorChangeVariants, fadeOutVariants }
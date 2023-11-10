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

const fadeIn = (x_val: number, y_val: number, scale_val: number) => {
    // console.log(scale)
    return {
        hidden: {
            x: x_val,
            y: y_val,
            opacity: 0,
            scale: scale_val,
        },
        show: {
            x: x_val,
            y: y_val,
            opacity: 1,
            scale: scale_val,
        },
    };
}

export { fadeInVariants, colorChangeVariants, fadeOutVariants, fadeIn }
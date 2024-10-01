export const dropDown = {
    initial: {
        opacity: 0,
        y: "-100%"
    },

    animate: {
        opacity: 1,
        y: 0,
        transition: {type: "easeIn", duration: 0.5}
    }
}

export const slideUp = {
    initial: {
        y: "0"
    },

    exit: {
        y: "-100vh",
        transition: {duration : 0.8, ease: [0.76,0,0.24,1],delay: 0.2}
    }
}


export const heroText = {
    initial: {
        y: "100%"
    },

    animate: (i: number) => ({
        y: 0,
        transition: {duration: 0.5, delay: 0.02 * i}
    }),
}

import type { Variants } from 'framer-motion';

export const fadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: 30,
    rotateX: 10,
    scale: 0.95
  },
  whileInView: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  },
};

export const staggerContainer: Variants = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export const fadeIn: Variants = {
  initial: {
    opacity: 0,
    scale: 0.95,
    filter: "blur(10px)"
  },
  whileInView: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
};

export const heroImage: Variants = {
  initial: {
    opacity: 0,
    scale: 0.8,
    rotateY: 15,
    z: -100,
  },
  whileInView: {
    opacity: 1,
    scale: 1,
    rotateY: 0,
    z: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1.2
    }
  },
  hover: {
    scale: 1.05,
    rotateY: -5,
    z: 50,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.6
    }
  }
};

export const floating: Variants = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const heroTitle: Variants = {
  initial: {
    opacity: 0,
    y: 20,
    rotateX: 90,
    scale: 0.9
  },
  whileInView: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 1
    }
  }
};

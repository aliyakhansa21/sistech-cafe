"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { RiCupFill, RiArrowRightLine, RiArrowDownLine, RiSparklingLine } from "react-icons/ri";

/* Animation variant helpers */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const, delay },
  }),
};

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18 } },
};

const floatVariant: Variants = {
  animate: {
    y: [0, -12, 0],
    transition: { repeat: Infinity, duration: 3.5, ease: "easeInOut" as const },
  },
};

// Home Page
export default function HomePage() {
  return (
    <section
      className="relative flex flex-col items-center justify-center flex-grow overflow-hidden px-6 pt-32 pb-20 text-center"
      aria-label="Hero section"
    >
      {/* Decorative gradient blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-pink-200 opacity-30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-pink-300 opacity-20 blur-3xl"
      />

      {/* Floating coffee icon */}
      <motion.div
        variants={floatVariant}
        animate="animate"
        aria-hidden="true"
        className="text-6xl text-[#F472B6] mb-6"
      >
        <RiCupFill />
      </motion.div>

      {/*  Staggered text entrance  */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="flex flex-col items-center gap-5 max-w-3xl"
      >
        {/* Badge */}
        <motion.span
          custom={0}
          variants={fadeUp}
          className="inline-block px-4 py-1.5 rounded-full bg-pink-100 text-[#F472B6] text-xs font-bold tracking-widest uppercase"
        >
          <span className="inline-flex items-center gap-1.5">
            <RiSparklingLine className="text-sm" />
            Welcome to our cafe
          </span>
        </motion.span>

        {/* Main heading */}
        <motion.h1
          custom={0.05}
          variants={fadeUp}
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-[#1a1a2e] leading-[1.1]"
        >
          SISTECH{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F472B6] to-[#c084fc]">
            CAFE
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          custom={0.1}
          variants={fadeUp}
          className="text-base md:text-xl text-[#1a1a2e]/60 font-medium max-w-xl leading-relaxed"
        >
          Local Coffee brewed by{" "}
          <span className="text-[#F472B6] font-semibold">
            Extraordinary Women
          </span>{" "}
          in Indonesia
        </motion.p>

        {/* CTA button */}
        <motion.div custom={0.15} variants={fadeUp}>
          <Link href="/menu" id="hero-cta-btn">
            <motion.span
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 mt-2 px-8 py-3.5 rounded-full bg-[#F472B6] text-white font-bold text-sm shadow-lg shadow-pink-200 hover:bg-[#ec4899] transition-colors duration-200 cursor-pointer"
            >
              See our Menu
              <RiArrowRightLine className="text-base" />
            </motion.span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
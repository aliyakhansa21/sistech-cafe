"use client";

import { motion, type Variants } from "framer-motion";
import { RiTeamLine, RiHeartLine, RiLeafLine } from "react-icons/ri";

// Team/value card data
const VALUES = [
  {
    id: "value-women",
    icon: <RiTeamLine className="text-3xl text-[#F472B6]" />,
    title: "Women-Led",
    desc: "Every cup is crafted by passionate women who believe in empowerment through coffee.",
  },
  {
    id: "value-love",
    icon: <RiHeartLine className="text-3xl text-[#F472B6]" />,
    title: "Made with Love",
    desc: "We pour warmth into every brew — from bean selection to your very first sip.",
  },
  {
    id: "value-local",
    icon: <RiLeafLine className="text-3xl text-[#F472B6]" />,
    title: "Locally Sourced",
    desc: "We partner with local Indonesian farmers to bring you the freshest, most sustainable coffee.",
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

// About Us Page
export default function AboutPage() {
  return (
    <div className="pt-28 pb-20 px-6 min-h-screen">
      <div className="mx-auto max-w-4xl">

        {/* Page header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold text-[#1a1a2e]">
            Our Story
          </h1>
          <p className="mt-4 text-[#1a1a2e]/55 max-w-xl mx-auto text-sm leading-relaxed">
            Sistech Cafe was born from a simple belief — that the best coffee is made by people
            who are passionate, purposeful, and proud of their roots.
          </p>
        </motion.div>

        {/* Story block */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="relative bg-white rounded-3xl p-8 md:p-12 border border-pink-50 mb-10 overflow-hidden"
        >
          {/* Decorative blob */}
          <div
            aria-hidden="true"
            className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-pink-100 opacity-40 blur-3xl pointer-events-none"
          />
          <p className="text-[#1a1a2e]/70 leading-8 text-sm md:text-base relative z-10">
            Founded in the heart of Indonesia, Sistech Cafe is more than a coffee shop — it is a
            movement. We celebrate the extraordinary women behind every brew, from farmers in the
            highlands to baristas in our cafe. Our mission is to create a warm, inclusive space
            where great coffee meets great conversations.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F472B6] to-[#c084fc] flex items-center justify-center text-white font-bold text-sm">
              A
            </div>
            <div>
              <p className="text-sm font-bold text-[#1a1a2e]">Aliya</p>
              <p className="text-xs text-[#1a1a2e]/40">Founder, Sistech Cafe</p>
            </div>
          </div>
        </motion.div>

        {/* Values grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {VALUES.map(({ id, icon, title, desc }) => (
            <motion.div
              key={id}
              id={id}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 border border-pink-50 flex flex-col gap-3"
            >
              <div className="w-12 h-12 rounded-xl bg-pink-50 flex items-center justify-center">
                {icon}
              </div>
              <h2 className="text-base font-bold text-[#1a1a2e]">{title}</h2>
              <p className="text-sm text-[#1a1a2e]/50 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}

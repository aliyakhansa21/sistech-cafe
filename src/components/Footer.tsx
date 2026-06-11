"use client";

import { motion, type Variants } from "framer-motion";
import { RiInstagramLine, RiTwitterXLine, RiWhatsappLine, RiHeartFill } from "react-icons/ri";

/* Social link definitions */
const SOCIAL_LINKS = [
  {
    id:    "footer-instagram",
    href:  "https://instagram.com",
    label: "Instagram",
    icon:  <RiInstagramLine />,
    hoverColor: "hover:text-pink-500",
  },
  {
    id:    "footer-twitter",
    href:  "https://twitter.com",
    label: "Twitter / X",
    icon:  <RiTwitterXLine />,
    hoverColor: "hover:text-sky-400",
  },
  {
    id:    "footer-whatsapp",
    href:  "https://wa.me",
    label: "WhatsApp",
    icon:  <RiWhatsappLine />,
    hoverColor: "hover:text-green-400",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const iconVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

export default function Footer() {
  return (
    <footer className="bg-primary/85 text-white/70">
      <div className="mx-auto max-w-7xl flex flex-col items-center gap-5 px-6 py-10">

        <p className="text-xs font-bold tracking-[0.25em] uppercase text-white">
          SISTECH CAFE
        </p>

        {/* Social icons */}
        <motion.ul
          role="list"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="flex items-center gap-6 list-none"
        >
          {SOCIAL_LINKS.map(({ id, href, label, icon, hoverColor }) => (
            <motion.li key={id} variants={iconVariants}>
              <motion.a
                id={id}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.3, rotate: 6 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 350 }}
                className={`text-2xl text-white transition-colors duration-200 ${hoverColor}`}
              >
                {icon}
              </motion.a>
            </motion.li>
          ))}
        </motion.ul>

        {/* Divider */}
        <div className="w-16 h-px bg-white" />

        <p className="text-xs text-white/40 flex items-center gap-1.5">
          Made with
          <motion.span
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
            className="text-white"
            aria-hidden="true"
          >
          <RiHeartFill />
          </motion.span>
          by Aliya
        </p>

      </div>
    </footer>
  );
}
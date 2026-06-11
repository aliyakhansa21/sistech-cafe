"use client";

import { motion, type Variants } from "framer-motion";
import { RiTimeLine, RiGiftLine, RiPercentLine, RiFireLine } from "react-icons/ri";

/*  Promo data  */
const PROMOS = [
  {
    id: "promo-1",
    icon: <RiTimeLine className="text-2xl" />,
    badge: "Today Only",
    badgeColor: "bg-pink-100 text-[#F472B6]",
    title: "Happy Hour",
    desc: "Get 30% off all cold brews every weekday 2 PM – 5 PM. Perfect afternoon pick-me-up!",
    highlight: "30% OFF",
    highlightBg: "from-[#F472B6] to-[#c084fc]",
    expires: "Ends: 5 PM daily",
  },
  {
    id: "promo-2",
    icon: <RiGiftLine className="text-2xl" />,
    badge: "New Member",
    badgeColor: "bg-purple-100 text-purple-600",
    title: "Welcome Gift",
    desc: "First-time visitors get a complimentary signature cookie with any drink purchase.",
    highlight: "FREE Gift",
    highlightBg: "from-[#a78bfa] to-[#818cf8]",
    expires: "Show this promo to cashier",
  },
  {
    id: "promo-3",
    icon: <RiPercentLine className="text-2xl" />,
    badge: "Bundle Deal",
    badgeColor: "bg-amber-100 text-amber-600",
    title: "Buy 2 Get 1",
    desc: "Order any 2 drinks from our signature menu and get the third one absolutely free.",
    highlight: "Buy 2 Get 1",
    highlightBg: "from-[#f59e0b] to-[#f97316]",
    expires: "Valid weekends only",
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

//Promo Page
export default function PromoPage() {
  return (
    <div className="pt-28 pb-20 px-6 min-h-screen">
      <div className="mx-auto max-w-3xl">

        {/*  Page header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >

          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold text-[#1a1a2e] inline-flex items-center justify-center gap-3">
            Hot Deals
            <RiFireLine className="text-orange-500" />
          </h1>
          <p className="mt-3 text-[#1a1a2e]/50 text-sm max-w-sm mx-auto leading-relaxed">
            Exclusive promotions crafted just for our amazing community.
          </p>
        </motion.div>

        {/*  Promo cards  */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-6"
        >
          {PROMOS.map(({ id, icon, badge, badgeColor, title, desc, highlight, highlightBg, expires }) => (
            <motion.article
              key={id}
              id={id}
              variants={cardVariants}
              whileHover={{ x: 6 }}
              transition={{ type: "spring", stiffness: 240 }}
              className="bg-white rounded-2xl p-6 border border-pink-50 flex flex-col sm:flex-row gap-5 items-start"
            >
              {/* Highlight badge (left accent) */}
              <div
                className={`shrink-0 w-24 h-24 rounded-2xl bg-gradient-to-br ${highlightBg} flex flex-col items-center justify-center text-white shadow-md`}
              >
                <span className="text-white/80 mb-1">{icon}</span>
                <span className="text-xs font-extrabold text-center leading-tight px-1">
                  {highlight}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-1.5 flex-1">
                <span className={`self-start px-2.5 py-0.5 rounded-full text-xs font-bold ${badgeColor}`}>
                  {badge}
                </span>
                <h2 className="text-lg font-bold text-[#1a1a2e]">{title}</h2>
                <p className="text-sm text-[#1a1a2e]/50 leading-relaxed">{desc}</p>
                <p className="text-xs text-[#1a1a2e]/30 mt-1">{expires}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>

      </div>
    </div>
  );
}

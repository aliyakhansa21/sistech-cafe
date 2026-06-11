"use client";

import { motion, type Variants } from "framer-motion";
import {
  RiCupLine,
  RiLeafLine,
  RiHeartLine,
  RiStarLine,
  RiDropLine,
  RiFlashlightLine,
  RiBubbleChartLine,
  RiMoonLine,
  RiSunLine,
  RiFlowerLine,
} from "react-icons/ri";
import type { ReactElement } from "react";

// Icon colour wrapper helper 
interface IconBoxProps {
  icon: ReactElement;
  bgColor: string;
  iconColor: string;
}
function IconBox({ icon, bgColor, iconColor }: IconBoxProps) {
  return (
    <div
      className={`w-14 h-14 rounded-2xl ${bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}
    >
      <span className={`text-2xl ${iconColor}`}>{icon}</span>
    </div>
  );
}

// Mock coffee menu data 
const MENU_ITEMS = [
  {
    id: "menu-item-1",
    icon: <RiCupLine />,
    iconBg: "bg-pink-100",
    iconColor: "text-[#F472B6]",
    name: "Signature Latte",
    description: "Smooth espresso with velvety steamed milk and a hint of vanilla.",
    price: "Rp 35.000",
    tag: "Best Seller",
    tagColor: "bg-pink-100 text-[#F472B6]",
  },
  {
    id: "menu-item-2",
    icon: <RiLeafLine />,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    name: "Matcha Latte",
    description: "Premium ceremonial-grade matcha blended with oat milk.",
    price: "Rp 38.000",
    tag: "Fan Favorite",
    tagColor: "bg-green-100 text-green-600",
  },
  {
    id: "menu-item-3",
    icon: <RiBubbleChartLine />,
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    name: "Brown Sugar Boba",
    description: "Fresh milk tea with tiger-stripe brown sugar and chewy tapioca pearls.",
    price: "Rp 32.000",
    tag: "New",
    tagColor: "bg-amber-100 text-amber-600",
  },
  {
    id: "menu-item-4",
    icon: <RiMoonLine />,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    name: "Dark Choco Mocha",
    description: "Rich espresso meets 70% dark chocolate sauce, topped with cream.",
    price: "Rp 40.000",
    tag: "Popular",
    tagColor: "bg-purple-100 text-purple-600",
  },
  {
    id: "menu-item-5",
    icon: <RiDropLine />,
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-600",
    name: "Lemon Sparkling Tea",
    description: "Bright sparkling black tea with fresh lemon and honey.",
    price: "Rp 28.000",
    tag: "Refreshing",
    tagColor: "bg-yellow-100 text-yellow-600",
  },
  {
    id: "menu-item-6",
    icon: <RiFlowerLine />,
    iconBg: "bg-pink-100",
    iconColor: "text-[#F472B6]",
    name: "Rose Cold Brew",
    description: "12-hour cold-brewed coffee infused with rose water and condensed milk.",
    price: "Rp 42.000",
    tag: "Signature",
    tagColor: "bg-pink-100 text-[#F472B6]",
  },
];

// Animation variants 
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

// Menu Page
export default function MenuPage() {
  return (
    <div className="pt-28 pb-20 px-6 min-h-screen">
      <div className="mx-auto max-w-7xl">

        {/* Page header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >

          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold text-[#1a1a2e]">
            Our Drinks Menu
          </h1>
          <p className="mt-3 text-[#1a1a2e]/50 max-w-md mx-auto text-sm leading-relaxed">
            Every sip tells the story of women who craft coffee with love.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {[
              { icon: <RiCupLine />, label: "Fresh Brewed" },
              { icon: <RiLeafLine />, label: "Organic Milk" },
              { icon: <RiHeartLine />, label: "Made with Love" },
              { icon: <RiStarLine />, label: "Top Rated" },
            ].map(({ icon, label }) => (
              <span
                key={label}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-pink-50 text-[#1a1a2e]/60 text-xs font-medium"
              >
                <span className="text-[#F472B6]">{icon}</span>
                {label}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {MENU_ITEMS.map((item) => (
            <motion.article
              key={item.id}
              id={item.id}
              variants={cardVariants}
              whileHover={{ y: -6, boxShadow: "0 16px 40px -8px rgba(244,114,182,0.25)" }}
              transition={{ type: "spring", stiffness: 260 }}
              className="bg-white rounded-2xl p-6 border border-pink-50 cursor-pointer group"
            >
              {/* Icon box */}
              <IconBox icon={item.icon} bgColor={item.iconBg} iconColor={item.iconColor} />

              {/* Tag */}
              <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-bold mb-2 ${item.tagColor}`}>
                {item.tag}
              </span>

              {/* Name */}
              <h2 className="text-lg font-bold text-[#1a1a2e] mb-1">{item.name}</h2>

              {/* Description */}
              <p className="text-sm text-[#1a1a2e]/50 leading-relaxed mb-4">
                {item.description}
              </p>

              {/* Price + Order */}
              <div className="flex items-center justify-between">
                <span className="text-[#F472B6] font-extrabold text-base">
                  {item.price}
                </span>
                <motion.button
                  whileTap={{ scale: 0.92 }}
                  className="px-4 py-1.5 rounded-full bg-[#F472B6] text-white text-xs font-bold hover:bg-[#ec4899] transition-colors duration-150"
                >
                  Order
                </motion.button>
              </div>
            </motion.article>
          ))}
        </motion.div>

      </div>
    </div>
  );
}

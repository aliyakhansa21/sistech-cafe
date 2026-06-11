"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiMenuLine, RiCloseLine, RiCupFill } from "react-icons/ri";

/* ── Navigation links definition ── */
const NAV_LINKS = [
  { href: "/menu",  label: "Menu"     },
  { href: "/about", label: "About Us" },
  { href: "/promo", label: "Promo"    },
];

/**
 * Navbar
 * Fixed top navigation with:
 *  - Logo with icon
 *  - Desktop nav links with active-state indicator
 *  - Visually distinct Login button
 *  - Hamburger mobile menu with slide-in animation
 *  - Scroll-aware background blur
 */
export default function Navbar() {
  const pathname   = usePathname();
  const [open,     setOpen]     = useState(false); // mobile menu state
  const [scrolled, setScrolled] = useState(false); // scroll shadow state

  /* Apply shadow + backdrop-blur once user scrolls */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close mobile menu on route change */
  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm shadow-pink-100"
          : "bg-white/60 backdrop-blur-sm"
      }`}
    >
      <nav
        className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4"
        aria-label="Main navigation"
      >
        {/* ── Logo ── */}
        <Link
          href="/"
          className="flex items-center gap-2 group"
          aria-label="Sistech Cafe Home"
        >
          <motion.span
            whileHover={{ rotate: 15, scale: 1.15 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-[#F472B6] text-2xl"
          >
            <RiCupFill />
          </motion.span>
          <span className="text-lg font-extrabold tracking-widest text-[#1a1a2e] group-hover:text-[#F472B6] transition-colors duration-200">
            SISTECH CAFE
          </span>
        </Link>

        {/* ── Desktop links ── */}
        <ul className="hidden md:flex items-center gap-8 list-none" role="list">
          {NAV_LINKS.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`relative text-sm font-semibold transition-colors duration-200 pb-1 ${
                    isActive
                      ? "text-[#F472B6]"
                      : "text-[#1a1a2e] hover:text-[#F472B6]"
                  }`}
                >
                  {label}
                  {/* Active underline indicator */}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-[#F472B6]"
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* ── Desktop Login button ── */}
        <div className="hidden md:block">
          <Link href="/login" id="login-btn">
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="inline-block px-5 py-2 rounded-full bg-[#F472B6] text-white text-sm font-bold shadow-md shadow-pink-200 hover:bg-[#ec4899] transition-colors duration-200 cursor-pointer"
            >
              Login
            </motion.span>
          </Link>
        </div>

        {/* ── Hamburger toggle (mobile) ── */}
        <button
          id="hamburger-btn"
          className="md:hidden text-[#1a1a2e] text-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F472B6] rounded-md"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <RiCloseLine /> : <RiMenuLine />}
        </button>
      </nav>

      {/* ── Mobile slide-down menu ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-pink-100 px-6 pb-6 pt-4 space-y-4"
          >
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`block text-sm font-semibold py-2 border-b border-pink-50 transition-colors duration-150 ${
                  pathname === href
                    ? "text-[#F472B6]"
                    : "text-[#1a1a2e] hover:text-[#F472B6]"
                }`}
              >
                {label}
              </Link>
            ))}

            {/* Mobile Login */}
            <Link href="/login" className="block">
              <span className="w-full inline-block text-center px-5 py-2.5 rounded-full bg-[#F472B6] text-white text-sm font-bold shadow-md shadow-pink-200 hover:bg-[#ec4899] transition-colors duration-200">
                Login
              </span>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
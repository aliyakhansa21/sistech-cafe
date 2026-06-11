"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { RiEyeLine, RiEyeOffLine, RiCupFill } from "react-icons/ri";

// login page
export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="pt-24 pb-20 px-6 min-h-screen flex items-center justify-center relative overflow-hidden">

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full bg-pink-200 opacity-30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-purple-200 opacity-20 blur-3xl"
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md"
      >

        {/*  Card  */}
        <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-xl shadow-pink-100 border border-pink-50">

          {/* Logo */}
          <div className="flex flex-col items-center mb-8 gap-2">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="text-[#F472B6] text-4xl"
            >
              <RiCupFill />
            </motion.div>
            <h1 className="text-2xl font-extrabold text-[#1a1a2e] tracking-tight">
              Welcome Back
            </h1>
            <p className="text-xs text-[#1a1a2e]/40">Sign in to your Sistech Cafe account</p>
          </div>

          {/* Form */}
          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => e.preventDefault()}
            aria-label="Login form"
          >
            {/* Email field */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="login-email"
                className="text-xs font-semibold text-[#1a1a2e]/70"
              >
                Email address
              </label>
              <input
                id="login-email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-pink-100 bg-pink-50/40 px-4 py-3 text-sm text-[#1a1a2e] placeholder-[#1a1a2e]/30 outline-none focus:border-[#F472B6] focus:ring-2 focus:ring-[#F472B6]/20 transition-all duration-200"
              />
            </div>

            {/* Password field */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="login-password"
                className="text-xs font-semibold text-[#1a1a2e]/70"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="login-password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-pink-100 bg-pink-50/40 px-4 py-3 pr-10 text-sm text-[#1a1a2e] placeholder-[#1a1a2e]/30 outline-none focus:border-[#F472B6] focus:ring-2 focus:ring-[#F472B6]/20 transition-all duration-200"
                />
                <button
                  type="button"
                  id="toggle-password"
                  onClick={() => setShowPassword((p) => !p)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#1a1a2e]/40 hover:text-[#F472B6] transition-colors duration-150"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <RiEyeOffLine /> : <RiEyeLine />}
                </button>
              </div>
            </div>

            {/* Forgot password */}
            <div className="flex justify-end">
              <a
                href="#"
                className="text-xs text-[#F472B6] hover:underline font-medium"
              >
                Forgot password?
              </a>
            </div>

            {/* Submit */}
            <motion.button
              id="login-submit-btn"
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full py-3 rounded-xl bg-[#F472B6] text-white font-bold text-sm shadow-md shadow-pink-200 hover:bg-[#ec4899] transition-colors duration-200"
            >
              Sign In
            </motion.button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px bg-pink-100" />
            <span className="text-xs text-[#1a1a2e]/30">or</span>
            <div className="flex-1 h-px bg-pink-100" />
          </div>

          {/* Register link */}
          <p className="text-center text-xs text-[#1a1a2e]/40">
            Don&apos;t have an account?{" "}
            <Link href="#" className="text-[#F472B6] font-semibold hover:underline">
              Register here
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}

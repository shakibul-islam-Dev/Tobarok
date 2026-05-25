"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FaSun, FaMoon } from "react-icons/fa";
import { motion } from "motion/react";

export function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex cursor-pointer items-center transition-colors"
    >
      {/* Theme onujayi icon */}
      <motion.div
        key={theme}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.35 }}
      >
        {theme === "dark" ? (
          <FaSun className="text-yellow-500" />
        ) : (
          <FaMoon className="text-slate-800 dark:text-slate-200" />
        )}
      </motion.div>
    </div>
  );
}

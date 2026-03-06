"use client"

import { useState } from "react";
import { IoMdMoon, IoMdSunny } from "react-icons/io";
import type { ThemeValue } from "@/app/types/theme";

interface DarkModeProps {
  changeTheme: (value: ThemeValue) => void;
}

const buttonClasses =
  "w-[56px] h-[56px] sm:w-[65px] sm:h-[65px] bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer fixed bottom-6 right-6 sm:bottom-[5%] sm:right-[5%] z-20 transition-all duration-300 hover:scale-110 hover:bg-white/15 active:scale-95 border border-white/10 hover:border-white/20 shadow-lg hover:shadow-accent/20";

export default function DarkMode({ changeTheme }: DarkModeProps) {
  const [isDark, setIsDark] = useState(true);

  function toggleTheme() {
    const nextTheme = isDark ? "light" : "dark";
    changeTheme(nextTheme);
    setIsDark(!isDark);
  }

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={toggleTheme}
      onKeyDown={(e) => e.key === "Enter" && toggleTheme()}
      className={buttonClasses}
      aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
    >
      {isDark ? (
        <IoMdMoon className="w-[30px] h-[30px] text-[#f472b6]" aria-hidden />
      ) : (
        <IoMdSunny
          className="w-[30px] h-[30px] text-white hover:text-[#f472b6]"
          aria-hidden
        />
      )}
    </div>
  );
}

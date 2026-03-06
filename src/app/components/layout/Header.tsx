"use client"

import Image from "next/image";
import { RefObject, useState } from "react";
import type { ThemeValue } from "@/app/types/theme";

interface HeaderProps {
  sectionHome: RefObject<HTMLElement>;
  sectionAbout: RefObject<HTMLElement>;
  sectionSkills: RefObject<HTMLElement>;
  handleScrollTo: (ref: RefObject<HTMLElement>) => void;
  selectedTheme: ThemeValue;
}

const menuItemsConfig = (
  sectionHome: RefObject<HTMLElement>,
  sectionAbout: RefObject<HTMLElement>,
  sectionSkills: RefObject<HTMLElement>
) => [
  { name: "Home", reference: sectionHome },
  { name: "About", reference: sectionAbout },
  { name: "Skills", reference: sectionSkills },
];

const navItemClasses =
  "text-white text-base font-semibold px-[15px] py-[5px] cursor-pointer hover:bg-white hover:text-pink-500 hover:shadow-lg hover:shadow-gray-500/80 transition-all rounded-lg";

export default function Header({
  sectionHome,
  sectionAbout,
  sectionSkills,
  handleScrollTo,
  selectedTheme,
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = menuItemsConfig(sectionHome, sectionAbout, sectionSkills);

  const handleNavClick = (ref: RefObject<HTMLElement>) => {
    setIsMenuOpen(false);
    handleScrollTo(ref);
  };

  const overlayBg = selectedTheme === "dark" ? "bg-slate-900" : "bg-[#C1A6BA]";

  return (
    <header className="w-full py-[20px] fixed backdrop-blur-[5px] border-b-[1px] border-b-[#80808052]">
      <div className="w-[calc(100%-40px)] max-w-[1200px] flex justify-between items-center mx-auto">
        <div>
          <Image
            className="rounded-[20px] shadow-lg shadow-gray-500/40 hover:shadow-gray-500/80"
            src="/img/logo.png"
            width={40}
            height={40}
            alt="Logo"
          />
        </div>

        <nav className="w-full max-w-[400px] flex max-[768px]:hidden" aria-label="Menu principal">
          <ul className="w-full flex justify-between gap-4" role="list">
            {menuItems.map((item) => (
              <li
                key={item.name}
                onClick={() => handleScrollTo(item.reference)}
                className={navItemClasses}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="max-[768px]:flex hidden flex-col gap-[5px] p-0 border-0 bg-transparent cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
        >
          {!isMenuOpen ? (
            <>
              <span className="w-[25px] h-1 bg-[#D529A6] rounded-lg block" />
              <span className="w-[25px] h-1 bg-[#D529A6] rounded-lg block" />
              <span className="w-[25px] h-1 bg-[#D529A6] rounded-lg block" />
            </>
          ) : (
            <span className="relative w-[25px] h-4 block">
              <span className="w-[25px] h-1 bg-[#D529A6] rounded-lg absolute top-1/2 left-0 rotate-[45deg]" />
              <span className="w-[25px] h-1 bg-[#D529A6] rounded-lg absolute top-1/2 left-0 rotate-[135deg]" />
            </span>
          )}
        </button>

        {isMenuOpen && (
          <div className="w-full flex absolute top-0 left-0">
            <div
              className={`absolute h-[100vh] w-full z-10 ${overlayBg}`}
              aria-hidden
            />
            <ul
              className="w-full flex justify-between gap-[15px] flex-col items-center z-20 mt-[65px]"
              role="list"
            >
              {menuItems.map((item) => (
                <li
                  key={item.name}
                  onClick={() => handleNavClick(item.reference)}
                  className={navItemClasses}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

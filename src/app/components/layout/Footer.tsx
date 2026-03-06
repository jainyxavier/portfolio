"use client"

import { FaGithub, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { SOCIAL_LINKS } from "@/app/constants/site";

const SOCIAL_ICONS = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  Instagram: FaInstagramSquare,
} as const;

export default function Footer() {
  return (
    <footer className="w-full py-[30px] backdrop-contrast-[0.9]">
      <div className="w-[calc(100%-40px)] max-w-[150px] mx-auto">
        <ul className="w-full flex justify-between items-center gap-[10px]" role="list">
          {SOCIAL_LINKS.map(({ href, label }) => {
            const Icon = SOCIAL_ICONS[label];
            return (
              <li
                key={label}
                className="hover:scale-125 transition-all flex items-center justify-center"
              >
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                >
                  <Icon fontSize="30px" color="#f472b6" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}

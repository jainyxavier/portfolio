import type { IconType } from "react-icons/lib";
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaReact,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss, SiTypescript } from "react-icons/si";

export const SKILLS: { Icon: IconType; size?: string }[] = [
  { Icon: FaHtml5, size: "50px" },
  { Icon: FaCss3Alt, size: "50px" },
  { Icon: FaSass, size: "50px" },
  { Icon: SiTailwindcss, size: "50px" },
  { Icon: IoLogoJavascript, size: "50px" },
  { Icon: SiTypescript, size: "50px" },
  { Icon: FaReact, size: "50px" },
];

"use client"

import { useState } from "react";
import Image from "next/image";
import { Roboto } from "next/font/google";
import { FaGithub, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { THEME } from "@/app/constants/theme";
import { CONTACT_INFO, SOCIAL_LINKS } from "@/app/constants/site";
import { SKILLS } from "@/app/constants/skills";

import CursorFollower from "@/app/components/effects/CursorFollower";
import DarkMode from "@/app/components/ui/DarkMode";
import InfoItem from "@/app/components/ui/InfoItem";
import ListItemIcon from "@/app/components/ui/ListItemIcon";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

const CONTACT_ICONS = [FaLocationDot, FaPhoneAlt, MdEmail] as const;

const SOCIAL_ICONS = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  Instagram: FaInstagramSquare,
} as const;

export default function Home() {
  const [selectedTheme, setSelectedTheme] = useState<"dark" | "light">("dark");

  const isDark = selectedTheme === THEME.DARK;
  const mainClasses = [
    roboto.className,
    isDark ? "bg-slate-900" : "bg-[#C1A6BA]",
    "animate-fade-down animate-once animate-duration-1000 animate-delay-[1500ms] animate-ease-linear",
    "background-effect overflow-x-hidden",
  ].join(" ");

  const cvButtonClasses = [
    "group relative w-[200px] py-3 bg-white text-[#D529A6] font-semibold rounded-xl flex items-center justify-center",
    "shadow-lg transition-all duration-300 ease-out",
    "hover:scale-[1.02] hover:shadow-xl active:scale-[0.98]",
    isDark ? "shadow-gray-500/30 hover:shadow-pink-500/20" : "shadow-[#8c61a3]/40 hover:shadow-pink-600/30",
  ].join(" ");

  return (
    <main className={mainClasses}>
      <CursorFollower selectedTheme={selectedTheme} />

      <section className="w-[calc(100%-80px)] max-w-[1200px] mx-auto px-4 sm:px-6 pt-20 sm:pt-24 pb-20 sm:pb-28 flex flex-col lg:flex-row justify-between gap-12 lg:gap-16">
        <div className="w-full lg:max-w-[45%] flex flex-col">
          <span className="text-white text-4xl sm:text-[50px] lg:text-[56px] font-bold tracking-tight leading-tight">
            Jaíny Xavier
          </span>

          <h1 className="mt-2 w-fit bg-gradient-to-r from-[#d587e1] via-[#bf27a5] to-[#df78c3] text-transparent bg-clip-text text-2xl sm:text-[30px] font-semibold">
            Desenvolvedora front-end
          </h1>

          <div className="flex items-center gap-4 sm:gap-5 mt-6 sm:mt-8">
            <a
              href="/cv-jainy-xavier.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={cvButtonClasses}
            >
              Visualizar CV
            </a>

            <Image
              src="/img/arrow.webp"
              width={60}
              height={60}
              style={{ width: "60px", height: "60px" }}
              className="object-none animate-fade-left animate-once animate-duration-[3000ms] animate-delay-[1500ms] animate-ease-in flex-shrink-0"
              alt=""
              aria-hidden
            />
          </div>

          <div className="mt-8 sm:mt-10">
            <p className="text-white/80 text-sm mb-3 font-medium">Redes sociais</p>
            <ul className="flex items-center gap-4 sm:gap-5" role="list">
              {SOCIAL_LINKS.map(({ href, label }) => {
                const Icon = SOCIAL_ICONS[label];
                return (
                  <li key={label} className="flex items-center justify-center">
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="p-2 rounded-lg text-accent transition-all duration-300 hover:scale-110 hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                    >
                      <Icon fontSize="28px" color="#f472b6" className="transition-transform duration-300" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="w-full lg:max-w-[50%] opacity-0 animate-fade-in-up" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
          <h2 className="text-2xl sm:text-[30px] text-white font-semibold mb-6 flex items-center gap-3">
            <span className="w-1 h-8 bg-accent rounded-full" aria-hidden />
            About me
          </h2>

          <div className="flex flex-col gap-6">
            <p className="text-base sm:text-[18px] text-white/95 font-medium leading-relaxed">
              Tenho explorado o universo da tecnologia e, a cada dia, me encanto mais pelo desenvolvimento front-end. Decidi dedicar-me integralmente a essa área, buscando aprimorar minhas habilidades e contribuir de forma significativa para o mercado. Atualmente, estou em busca de oportunidades que me permitam aplicar meu conhecimento, evoluir constantemente e colaborar ativamente para o crescimento de projetos e equipes. Além disso, iniciei minha graduação em Análise e Desenvolvimento de Sistemas, reforçando meu compromisso com o aprendizado contínuo e a excelência profissional.
            </p>

            <div className="w-full max-w-[320px] h-[2px] bg-gradient-to-r from-accent to-transparent" aria-hidden />

            <div className="flex flex-col gap-4">
              {CONTACT_INFO.map((item, index) => (
                <InfoItem
                  key={item.text}
                  Icon={CONTACT_ICONS[index]}
                  link={item.link}
                  text={item.text}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full pb-20 sm:pb-28 px-4 sm:px-6 scroll-mt-20">
        <div className="w-full max-w-[1200px] mx-auto">
          <h2 className="text-2xl sm:text-[30px] text-white font-semibold mb-6 sm:mb-8 flex items-center gap-3">
            <span className="w-1 h-8 bg-accent rounded-full" aria-hidden />
            Experience
          </h2>

          <article className="group bg-white/10 hover:bg-white/15 border border-white/5 hover:border-white/10 rounded-2xl flex flex-col sm:flex-row gap-6 sm:gap-10 p-6 sm:p-8 transition-all duration-300">
            <span className="shrink-0 text-accent text-base sm:text-[18px] font-semibold">
              2022 - 2025
            </span>

            <div className="w-full min-w-0">
              <h3 className="mb-4 text-white text-lg sm:text-[18px] font-semibold">
                Frontend Developer - HiveGroup
              </h3>

              <p className="text-white/90 text-[15px] sm:text-[16px] leading-relaxed">
                Na HiveGroup, apliquei meu conhecimento na criação e
                adaptação de aplicações web altamente funcionais e
                responsivas. Utilizei habilidades em HTML, CSS/SCSS,
                JavaScript, TypeScript, React.js, Next.js e Tailwind para
                desenvolver interfaces dinâmicas, atraentes e acessíveis para
                os usuários. Além disso, fui responsável por integrar essas
                aplicações com API's garantindo uma experiência fluida e
                consistente em todos os dispositivos.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="w-full pb-20 sm:pb-28 px-4 sm:px-6 scroll-mt-20">
        <div className="w-full max-w-[1200px] mx-auto">
          <h2 className="text-2xl sm:text-[30px] text-center text-white font-semibold mb-10 sm:mb-12">
            Skills
          </h2>

          <ul
            className="w-full flex flex-wrap items-center justify-center gap-8 sm:gap-10 md:gap-12"
            role="list"
          >
            {SKILLS.map(({ Icon, size }, index) => (
              <ListItemIcon
                key={index}
                Icon={Icon}
                size={size}
                className="opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 80}ms`, animationFillMode: "forwards" }}
              />
            ))}
          </ul>
        </div>
      </section>

      <DarkMode changeTheme={setSelectedTheme} />
    </main>
  );
}

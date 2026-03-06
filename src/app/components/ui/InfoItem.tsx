import { IconType } from "react-icons/lib";

interface InfoItemProps {
  Icon: IconType;
  link: string;
  text: string;
}

export default function InfoItem({ Icon, link, text }: InfoItemProps) {
  const isExternal = link.startsWith("http");
  return (
    <a
      href={link}
      className="group flex items-center gap-4 py-2 text-white/95 hover:text-white transition-colors duration-200"
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 group-hover:bg-accent/20 text-accent transition-colors duration-200">
        <Icon fontSize="18px" aria-hidden />
      </span>
      <span className="text-[15px] sm:text-[16px] font-medium underline-offset-4 hover:underline hover:decoration-wavy hover:decoration-accent">
        {text}
      </span>
    </a>
  );
}

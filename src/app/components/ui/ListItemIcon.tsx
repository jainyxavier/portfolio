import { IconType } from "react-icons/lib";

interface ListItemIconProps {
  link?: string;
  size?: string;
  Icon: IconType;
  className?: string;
  style?: React.CSSProperties;
}

const iconSize = "30px";

export default function ListItemIcon({
  link,
  size = iconSize,
  Icon,
  className = "",
  style,
}: ListItemIconProps) {
  const icon = (
    <Icon fontSize={size} color="#f472b6" aria-hidden />
  );

  return (
    <li
      className={`hover:scale-110 rounded-2xl overflow-hidden transition-all duration-300 flex items-center justify-center ${className}`}
      style={style}
    >
      {link ? (
        <a
          className="p-3 sm:p-4 rounded-2xl bg-white/10 hover:bg-white/20 transition-all duration-300 border border-white/5 hover:border-white/10"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {icon}
        </a>
      ) : (
        <div className="p-5 sm:p-6 rounded-2xl bg-white/10 hover:bg-white/20 hover:scale-105 transition-all duration-300 flex items-center justify-center border border-white/5 hover:border-white/10">
          {icon}
        </div>
      )}
    </li>
  );
}

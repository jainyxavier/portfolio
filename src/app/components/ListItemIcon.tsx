import { IconType } from "react-icons/lib";

interface ListItemIconProps {
    link?: string,
    size?: string,
    Icon: IconType
}

export default function ListItemIcon({link, size, Icon}: ListItemIconProps) {
    return (
        <li className='hover:scale-125 rounded-full overflow-hidden transition-all flex items-center justify-center'>
            {link ? (
                <a className='p-[10px] bg-white/10 hover:bg-white/20' href={link} target='_blank'>
                    <Icon fontSize={size || '30px'} color="#f472b6" />
                </a>
            ) : (
                <div className='p-[20px] rounded-full bg-white/10 hover:bg-white/20 hover:scale-110 transition-all flex items-center justify-center'>
                    <Icon fontSize={size || '30px'} color="#f472b6" />
                </div>
            )}
        </li>
    )
}
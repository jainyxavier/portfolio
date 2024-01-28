import { IconType } from "react-icons/lib"

interface InfoItemProps {
    Icon: IconType,
    link: string,
    text: string
}

export default function InfoItem({Icon, link, text}: InfoItemProps) {
    return (
        <div className='flex gap-[15px]'>
            <Icon fontSize={'20px'} color="#f472b6" />
            <a href={link} className='text-[16px] text-[#99A2A5] hover:text-white transition-all' target='_blank'>
                {text}
            </a>
        </div>
    )
}
"use client"
import { FaGithub, FaLinkedin, FaInstagramSquare } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="w-full py-[30px] backdrop-contrast-[0.9]">
            <div className="w-[calc(100%-40px)] max-w-[150px] mx-auto">
                <ul className='w-full flex justify-between items-center gap-[10px]'>
                    <li className='hover:scale-125 transition-all flex items-center justify-center'>
                        <a href="https://www.linkedin.com/in/jainy-xavier-0288a3215/" target='_blank'>
                            <FaGithub fontSize={'30px'} color="#f472b6" />
                        </a>
                    </li>

                    <li className='hover:scale-125 hover:transition-all flex items-center justify-center'>
                        <a href="https://github.com/jainyxavier" target='_blank'>
                            <FaLinkedin fontSize={'30px'} color="#f472b6" />
                        </a>
                    </li>

                    <li className='hover:scale-125 hover:transition-all flex items-center justify-center'>
                        <a href="https://www.instagram.com/jainy.xavier/" target='_blank'>
                            <FaInstagramSquare fontSize={'30px'} color="#f472b6" />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}
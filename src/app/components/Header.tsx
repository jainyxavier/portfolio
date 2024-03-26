"use client"
import Image from "next/image";
import { RefObject, useState } from "react";

interface HeaderProps{
    sectionHome: RefObject<HTMLElement>,
    sectionAbout: RefObject<HTMLElement>,
    sectionSkills: RefObject<HTMLElement>,
    sectionProjects: RefObject<HTMLElement>,
    handleScrollTo: (referenceElement: RefObject<HTMLElement>) => void,
    selectedTheme: string
}

export default function Header({sectionHome, sectionAbout, sectionSkills, sectionProjects, handleScrollTo, selectedTheme}: HeaderProps) {

    const [toggleMenu, setToggleMenu] = useState(false)
    const [classAnimation, setClassAnimation] = useState(false)

    const menuItems = [
        {
            name: "Home",
            reference: sectionHome
        },
        {
            name: "About",
            reference: sectionAbout
        },
        {
            name: "Skills",
            reference: sectionSkills
        },
        {
            name: "Projects",
            reference: sectionProjects
        }
    ]

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

                {/* desktop */}
                <nav className="w-full max-w-[400px] flex max-[768px]:hidden">
                    <ul className="w-full flex justify-between gap-4">
                        {menuItems.map((item, index) => {
                            return (
                                <li key={index} onClick={() => handleScrollTo(item.reference)} className="text-white text-base font-semibold px-[15px] py-[5px] cursor-pointer hover:bg-white hover:text-pink-500 hover:shadow-lg hover:shadow-gray-500/80 transition-all rounded-lg">
                                    {item.name}
                                </li>
                            )
                        })}
                    </ul>
                </nav>

                {/* mobile */}
                {!toggleMenu ? (
                    <div className="max-[768px]:flex hidden flex-col gap-[5px]" role="button" onClick={() => setToggleMenu(!toggleMenu)}>
                        <div className="w-[25px] h-1 bg-[#D529A6] rounded-lg"></div>
                        <div className="w-[25px] h-1 bg-[#D529A6] rounded-lg"></div>
                        <div className="w-[25px] h-1 bg-[#D529A6] rounded-lg"></div>
                    </div>
                ) : (
                    <div className="max-[768px]:flex transition w-[20px] flex-col gap-1 relative z-20" role="button" onClick={() => setToggleMenu(!toggleMenu)}>
                        <div className="w-[25px] h-1 bg-[#D529A6] rounded-lg absolute rotate-[45deg]"></div>
                        <div className="w-[25px] h-1 bg-[#D529A6] rounded-lg absolute rotate-[135deg]"></div>
                    </div>
                )}

                {toggleMenu && (
                    <div className="w-full flex absolute top-0 left-0">
                        <div className={`absolute h-[100vh] w-full z-10 ${selectedTheme == 'dark' ? 'bg-slate-900' : 'bg-[#C1A6BA]'}`}></div>
                        <ul className="w-full flex justify-between gap-[15px] flex-col items-center z-20 mt-[65px]">
                            {menuItems.map((item, index) => {
                                return (
                                    <li key={index} onClick={() => {setToggleMenu(false), handleScrollTo(item.reference)}} className="text-white text-base font-semibold py-1.5 px-4 cursor-pointer hover:bg-white hover:text-pink-500 hover:shadow-lg hover:shadow-gray-500/80 transition-all rounded-lg">{item.name}</li>
                                )
                            })}
                        </ul>
                    </div>
                )}
            </div>
        </header>
    )
}
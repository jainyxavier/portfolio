"use client"
import Image from "next/image";
import { useState } from "react";

export default function Header() {

    const [toggleMenu, setToggleMenu] = useState(false)
    const [classAnimation, setClassAnimation] = useState(false)

    const menuItems = [
        {
            name: "Home",
            to: "#"
        },
        {
            name: "About",
            to: "#"
        },
        {
            name: "Skills",
            to: "#"
        },
        {
            name: "Projects",
            to: "#"
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
                                <li key={index} className="text-white text-base font-semibold px-[15px] py-[5px] cursor-pointer hover:bg-white hover:text-pink-500 hover:shadow-lg hover:shadow-gray-500/80 transition-all rounded-lg">
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
                    <div className="max-[768px]:flex transition w-[20px] flex-col gap-1 relative z-10" role="button" onClick={() => setToggleMenu(!toggleMenu)}>
                        <div className="w-[25px] h-1 bg-[#D529A6] rounded-lg absolute rotate-[45deg]"></div>
                        <div className="w-[25px] h-1 bg-[#D529A6] rounded-lg absolute rotate-[135deg]"></div>
                    </div>
                )}

                {toggleMenu && (
                    <div className="w-full flex absolute top-0 left-0 pt-[105px]">
                        <div className="absolute h-[100vh] w-full bg-slate-900 z-10"></div>
                        <ul className="w-full flex justify-between gap-[15px] flex-col items-center z-20">
                            {menuItems.map((item, index) => {
                                return (
                                    <li key={index} className="text-white text-base font-semibold py-1.5 px-4 cursor-pointer hover:bg-white hover:text-pink-500 hover:shadow-lg hover:shadow-gray-500/80 transition-all rounded-lg">{item.name}</li>
                                )
                            })}
                        </ul>
                    </div>
                )}
            </div>
        </header>
    )
}
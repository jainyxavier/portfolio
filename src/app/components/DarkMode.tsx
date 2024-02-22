"use client"

import { useState } from "react"
import { IoMdMoon, IoMdSunny } from "react-icons/io"

interface DarkModeProps{
    changeTheme: (value: string) => void
}

export default function DarkMode({ changeTheme }: DarkModeProps) {
    const [darkMode, setDarkMode] = useState(false)

    function toggleDarkMode(value: boolean){
        if(!value){
            changeTheme('dark')
            setDarkMode(!darkMode)
        } else {
            changeTheme('white')
            setDarkMode(!darkMode)
        }
    }

    return (
        <>
            {darkMode ? (
                <div role="button" className='w-[65px] h-[65px] bg-white/10 backdrop-blur-[5px] rounded-full flex items-center justify-center cursor-pointer fixed bottom-[5%] right-[2%] z-[20]' onClick={() => toggleDarkMode(false)}>
                    <IoMdMoon className='w-[30px] h-[30px] text-[#f472b6]' />
                </div>
            ) : (
                <div role="button" className='w-[65px] h-[65px] bg-white/10 backdrop-blur-[5px] rounded-full flex items-center justify-center cursor-pointer fixed bottom-[5%] right-[2%] z-[20]' onClick={() => toggleDarkMode(true)}>
                    <IoMdSunny className='w-[30px] h-[30px] text-white hover:text-[#f472b6]' />
                </div>
            )}
        </>
    )
}
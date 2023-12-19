import Image from "next/image";
import { FaGithubAlt } from "react-icons/fa";

export default function Header() {

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
            name: "Contact",
            to: "#"
        }
    ]

    return (
        <nav className="w-full max-w-[1200px] mx-auto p-5 flex justify-between items-center">
            <div>
                <Image
                className="rounded-xl shadow-lg shadow-gray-500/40 hover:shadow-gray-500/80"
                    src="/logo.png"
                    width={40}
                    height={40}
                    alt="Logo"
                />
            </div>

            <div className="w-full max-w-[400px]">
                <ul className="flex justify-between gap-4">
                    {menuItems.map((item, index) => {
                        return (
                            <li key={index} className="text-white text-base font-semibold py-1.5 px-4 cursor-pointer hover:bg-white hover:text-pink-500 hover:rounded-lg hover:shadow-lg hover:shadow-gray-500/80">{item.name}</li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}
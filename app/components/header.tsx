import Link from "next/link";
import { ReactNode } from "react";
import { BiSolidBank } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";
import { IoDocumentTextSharp } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { RiAccountCircleFill } from "react-icons/ri";

interface nav {
    key: number,
    href: string,
    img_icon: ReactNode
}

const navItems: nav[] = [
    { key: 1, href: '/dashboard', img_icon: <MdDashboard /> },
    { key: 2, href: '/documentation', img_icon: <IoDocumentTextSharp />},
    { key: 3, href: '/settings', img_icon: <IoMdSettings /> },
    { key: 4, href: '/account', img_icon: <RiAccountCircleFill /> },
]

export default function Header() {
    return (
        <header className="flex w-full p-4 relative top-0 left-0 bg-blue-500 text-white justify-between">
            <div className="hover:text-gray-900">
                <a href="/" className="text-2xl"><BiSolidBank /></a>
            </div>
            <nav className="flex gap-4">
                {navItems.map((item) => (
                    <div key={item.key} className="hover:text-gray-900">
                        <Link href={item.href} className="text-2xl">{item.img_icon}</Link>
                    </div>
                ))}
            </nav>
        </header>
    );
}
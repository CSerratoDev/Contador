import Link from "next/link";
import { ReactNode } from "react";
import { BiLogoGithub, BiSolidBank } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";
import { IoDocumentTextSharp } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { RiAccountCircleFill } from "react-icons/ri"; 
import { TiSocialLinkedin } from "react-icons/ti";

interface nav {
    key: number,
    href: string,
    img_icon: ReactNode
}

const socialItems: nav[] = [
    { key: 1, href: 'https://www.linkedin.com/in/alexis-serrato/', img_icon: <TiSocialLinkedin/> },
    { key: 2, href: 'https://github.com/CSerratoDev', img_icon: <BiLogoGithub /> }
]

export default function Footer() {
    return (
        <footer className="flex w-full p-4 fixed bottom-0 left-0 items-center bg-gray-900 text-white justify-between">
            <div className="">
                <Link href="/" className="flex gap-4 text-2xl items-center"><BiSolidBank />
                    <p className="text-xs">Volver al Inicio</p>
                </Link>
            </div>
            <nav className="flex gap-4 items-center justify-center">
                <p className="select-none text-xs font-normal p-1">Redes sociales</p>
                {socialItems.map((item) => (
                    <div key={item.key} className="hover:bg-white hover:text-gray-900 hover:rounded-full">
                        <a href={item.href} className="text-2xl" rel="noreferrer noopener" target="_blank">{item.img_icon}</a>
                    </div>
                ))}
            </nav>
        </footer>
    );
}
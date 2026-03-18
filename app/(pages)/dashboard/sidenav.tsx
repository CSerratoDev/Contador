import { ReactNode } from "react"
import { FaCloudsmith } from "react-icons/fa"
import { FaUserDoctor } from "react-icons/fa6"
import { MdAttachMoney, MdManageAccounts, MdOutlineDriveFolderUpload } from "react-icons/md"

interface sidenavItems {
    key : number,
    href: string,
    label: string,
    img_icon: ReactNode
}

const baseUrl = "dashboard"

const getSidenav : sidenavItems[] = [
    {key: 1, href: `${baseUrl}/money`, label: 'Mi Dinero', img_icon: <MdAttachMoney />},
    {key: 2, href: `${baseUrl}/manage`, label: 'Administrar Cuentas', img_icon: <MdManageAccounts />},
    {key: 3, href: `${baseUrl}/cloud`, label: 'Cuentas Nube', img_icon: <FaCloudsmith />},
    {key: 4, href: `${baseUrl}/doctor`, label: 'Agente Doctor', img_icon: <FaUserDoctor />},
    {key: 5, href: `${baseUrl}/drive-folder`, label: 'Subir Archivos', img_icon: <MdOutlineDriveFolderUpload />}
]

export default function Sidenav() {
    return (
        <div className="bg-gray-900 p-2">
            {getSidenav.map((item) =>(
                <a key={item.key} href={item.href} className="flex p-2 gap-4 m-2 hover:bg-gray-800">
                    <div className="text-2xl ">{item.img_icon}</div>
                    <p className="text-md font-semibold">{item.label}</p>
                </a>
            ))}
        </div>
    )
}
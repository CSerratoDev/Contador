import Link from "next/link";

type dashboardList = {
  key: number,
  name : string,
  href: string
}

const getDashboardList : dashboardList[] = [
  { key: 1, name: "Mi Dinero", href: "/dashboard/money"},
  { key: 2, name: "Administrador Cuentas", href: "/dashboard/manager"},
  { key: 3, name: "Cuentas Nube", href: "/dashboard/cloud-accounts"},
  { key: 4, name: "Agente Doctor", href: "/dashboard/agent-doctor"},
  { key: 5, name: "Subir Archivos", href: "/dashboard/drive-folder"},
]

export default function Home() {
  return (
    <div className="banner">
      <div className="flex flex-col items-center justify-center h-full bg-black/50 text-white px-4">
        <h1 className="select-one font-bold text-4xl text-center md:text-5xl 2xl:text-7xl">
          Contador para PyMES
        </h1>
        <ul className="flex flex-wrap gap-4 mt-4 mb-2 p-1 text-black items-center justify-center">
          {getDashboardList.map((item) => (
            <Link href={item.href} key={item.key} className="text-xs md:text-md 2xl:text-lg cursor-pointer bg-white hover:bg-amber-300 transition-colors p-2 md:pt-1 md:pb-1 md:pl-2 md:pr-2 rounded-full">{item.name}</Link>
          ))}
        </ul>
        <div className="flex gap-4 p-4">
          <button className="cursor-pointer bg-white text-gray-900 font-semibold p-2.5 rounded-md hover:bg-gray-200 transition-colors">
            Documentación
          </button>
          <button className="cursor-pointer bg-gray-900 border border-gray-700 text-white p-2.5 rounded-md hover:bg-gray-800 transition-colors">
            Github
          </button>
        </div>
      </div>
    </div>
  );
}

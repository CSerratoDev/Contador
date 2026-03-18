
export default function AccountPage() {
    return (
        <div>
            <h1 className="font-bold text-2xl mb-4">Perfil</h1>
            <div className="grid md:grid-cols-3 gap-4 w-full ">
                <div className="bg-gray-800 md:col-span-2">
                    <h1 className="p-2">Perfil</h1>
                </div>
                <div className="bg-gray-900 ">
                    <h1 className="p-2">Configuracion de Perfil</h1>
                </div>
            </div>
        </div>
    )
}
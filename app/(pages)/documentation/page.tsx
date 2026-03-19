import Image from "next/image";

export default function DocumentationPage() {
    return (
        <div className="flex flex-col m-4 text-black">
            <h1 className=" font-bold text-2xl mb-4">Documentación</h1>
            <div className="">
                <h1 className="md:text-2xl 2xl:text-5xl">Modelo Entidad Relación</h1>
                <Image 
                    alt="Modelo Entidad Relacion" 
                    src="/assets/modeloER.jpg"
                    className="object-cover"
                    width={900}
                    height={700}
                />
                <p>Generado en</p>
                    <a 
                        target="_blank"
                        rel="noreferrer noopener"
                        href="https://lucid.app/lucidchart/98c7e816-e6ef-4e00-9e34-74ae14c602d1/edit?viewport_loc=-892%2C-251%2C2782%2C1192%2C0_0&invitationId=inv_a4c8c6b8-333d-4807-87a5-007833bf1103"
                        className="text-orange-400 hover:underline"    
                    >
                        Lucidchart
                    </a>
            </div>
        </div>
    )
}
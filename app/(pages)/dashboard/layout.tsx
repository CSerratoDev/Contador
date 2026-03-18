import React from "react";
import Sidenav from "./sidenav";

export default function DashboardLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="m-4">
            <h1 className="font-bold text-2xl mb-4 text-black">Tablero</h1>
            <div className="grid md:grid-cols-4 gap-4">
                <div>
                    <Sidenav/>
                </div>
                <div className="md:col-span-3">
                    {children}
                </div>
            </div>
        </div>
    )
}
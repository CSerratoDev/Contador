import Metrics from "./metrics";
import Sidenav from "./sidenav";

export default function DashboardPage() {
    return (
        <div>
            <h1 className="font-bold text-2xl mb-4">Tablero</h1>
            <div className="grid md:grid-cols-4 gap-4">
                <div>
                    <Sidenav/>
                </div>
                <div className="md:col-span-3">
                    <Metrics/>
                </div>
            </div>
        </div>
    )
}
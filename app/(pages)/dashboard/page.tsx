import Metrics from "./metrics";
import Sidenav from "./sidenav";

export default function DashboardPage() {
    return (
        <div className="grid md:grid-cols-3 gap-4">
            <div>
                <Sidenav/>
            </div>
            <div className="md:col-span-2">
                <Metrics/>
            </div>
        </div>
    )
}
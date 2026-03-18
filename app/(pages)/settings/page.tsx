import Render from "./render";
import Sidenav from "./sidenav";

export default function SettingsPage() {
    return (
        <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gray-900">
                <Sidenav/>
            </div>
            <div className="bg-gray-800 md:col-span-2">
                <Render/>
            </div>
        </div>
    )
}
import { useState } from "react"
import DataList from "../components/DataList";

export default function HomePage() {
    const [theme, setTheme] = useState('dark');
    function handleThemeChange() {
        if(theme === 'dark') {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    }
    return (
        <div>
            <button className="bg-green-500 text-white px-5 py-2 block mb-3" onClick={handleThemeChange}>Toggle Theme</button>
            <DataList theme={theme}/>
        </div>
    )
}

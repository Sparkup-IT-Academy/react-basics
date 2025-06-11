import { createContext, useState } from "react"
import DataList from "../components/DataList";

export const ThemeContext = createContext(null);

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
            <ThemeContext.Provider value={theme}>
                <DataList/>
            </ThemeContext.Provider>
        </div>
    )
}

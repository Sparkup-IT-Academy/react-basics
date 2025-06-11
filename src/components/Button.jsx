import { useContext } from "react";
import { ThemeContext } from "../pages/HomePage";

export default function Button({children}) {
    
    const theme = useContext(ThemeContext);

    return (
        <button style={{
            padding: '10px 20px',
            borderRadius: '10px',
        }} className={theme === 'dark' ? 'bg-black text-white' : 'bg-blue-500 text-white'}>{ children }</button>
    )
}
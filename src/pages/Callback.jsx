import { useCallback, useState } from "react";
import NumberList from '../components/NumberList'

export default function Callback() {
    const [number, setNumber] = useState(0);
    const [theme, setTheme] = useState('dark');

    const getItems = useCallback(() => {
        return [number, number + 1, number + 2];
    })

    return (
        <div>
            <input type="number" value={number} onInput={(e) => {setNumber(parseInt(e.target.value))}} className="outline"/>
            <button onClick={() => {theme === 'dark' ? setTheme('light') : setTheme('dark')}} className="px-5 py-3 rounded-md block mt-3 bg-blue-500 text-white">Toggle Theme</button>
            <div style={{
                backgroundColor: theme === 'dark' ? 'black' : 'cyan',
                color: theme === 'dark' ? 'white' : 'black',
                marginTop: '50px',
                padding: '30px',
            }}>
                This div demonstrates the change in theme
                <NumberList getItems={getItems}/>
            </div>
        </div>
    )
}

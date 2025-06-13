// import { useState, useMemo } from "react";

// function slowFunction(num) {
//     for(let i = 0; i <= 3000000000; i++) {}
//     return num * 2;
// }


// export default function Memo() {
//     const [number, setNumber] = useState(0);
//     const [theme, setTheme] = useState('dark');

//     const double = useMemo(() => {
//         return slowFunction(number);
//     }, [number]);

//     return (
//         <div>
//             <input type="number" value={number} onInput={(e) => {setNumber(e.target.value)}} className="outline"/>
//             <button onClick={() => {theme === 'dark' ? setTheme('light') : setTheme('dark')}} className="px-5 py-3 rounded-md block mt-3 bg-blue-500 text-white">Toggle Theme</button>
//             <div style={{
//                 backgroundColor: theme === 'dark' ? 'black' : 'cyan',
//                 color: theme === 'dark' ? 'white' : 'black',
//                 marginTop: '50px',
//                 padding: '30px',
//             }}>
//                 This div demonstrates the change in theme
//                 <p>
//                     { double }
//                 </p>
//             </div>
//         </div>
//     )
// }


import { useState, useMemo, useEffect } from "react";

function slowFunction(num) {
    for(let i = 0; i <= 3000000000; i++) {}
    return num * 2;
}


export default function Memo() {
    const [number, setNumber] = useState(0);
    const [theme, setTheme] = useState('dark');


    const obj = useMemo(() => {
        return { name: 'Apple' };
    }, [number]);

    useEffect(() => {
        console.log('Object changed')
    }, [obj]);

    return (
        <div>
            <input type="number" value={number} onInput={(e) => {setNumber(e.target.value)}} className="outline"/>
            <button onClick={() => {theme === 'dark' ? setTheme('light') : setTheme('dark')}} className="px-5 py-3 rounded-md block mt-3 bg-blue-500 text-white">Toggle Theme</button>
            <div style={{
                backgroundColor: theme === 'dark' ? 'black' : 'cyan',
                color: theme === 'dark' ? 'white' : 'black',
                marginTop: '50px',
                padding: '30px',
            }}>
                This div demonstrates the change in theme
            </div>
        </div>
    )
}

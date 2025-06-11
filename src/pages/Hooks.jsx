import { useRef } from "react"

// What is context in react (Prop drilling)
// useContext hook
// useMemo hook
// useCallback hook
// useReducer hook

export default function Hooks() {
    const inputRef = useRef();

    function handleClick() {    
        const isPassword = inputRef.current.getAttribute('type') === 'password'
        if(isPassword) {
            inputRef.current.setAttribute('type', 'text');
        } else {
            inputRef.current.setAttribute('type', 'password');
        }
    }

    return <>
        <button onClick={handleClick} className="block mb-5 py-2 px-4 rounded-md bg-blue-500 text-white cursor-pointer">
            Toggle Mode
        </button>
        <input ref={inputRef} type="text" className="border w-full p-4"/>
    </>
}

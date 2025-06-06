import { useState } from "react"

export default function Demo() {
    const [counter, setCounter] = useState(0);

    return <div>
        <div>
            { counter }
        </div>

        <button onClick={() => { setCounter(counter + 1) }}>Increase counter</button>
    </div>
}
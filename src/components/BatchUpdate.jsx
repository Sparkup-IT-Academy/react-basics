import { useState } from "react"

export default function BatchUpdate() {
    const [counter, setCounter] = useState(0);
    function handleClick() {
        setCounter((oldValue) => oldValue + 1);
    }

    return (
        <div class="flex flex-col items-center justify-center gap-10">
            <div className=" text-[40px] text-blue-600 font-bold">{ counter }</div>
            <button
                className="p-4 m-4 bg-blue-500 text-white rounded-md min-w-[100px]"
                onClick={handleClick}
            >
                {counter}
            </button>

            { counter === 10 && <p>Keep going</p> }
            { counter === 20 && <p>Halfway there</p> }
            { counter === 30 && <p>Almost there</p> }
            { counter === 40 && <p>You did it</p> }
        </div>
    )
}
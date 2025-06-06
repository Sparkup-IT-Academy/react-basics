import { useEffect, useState } from "react"

export default function EffectHook() {
    const [counter, setCounter] = useState(0);
    const [another, setAnother] = useState(0);
    useEffect(() =>{
        console.log('Effect hook triggered');
        return () => {
            console.log('clean up function');
        }
    }, []);

  return (
    <>
        <div>EffectHook</div>
        <div className="mt-5 text-xl">{counter}</div>
        <div className="mt-5 text-xl">{another}</div>
        <button onClick={() => setCounter(counter + 1)} className="bg-blue-500 text-white rounded-md px-5 py-3 block mt-3 cursor-pointer">Increase counter</button>
        <button onClick={() => setAnother(another + 1)} className="bg-blue-500 text-white rounded-md px-5 py-3 block mt-3 cursor-pointer">Increase another</button>
    </>
  )
}

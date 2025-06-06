import { useState } from "react"
import First from './First';
import Second from './Second';
export default function Cleanup() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <>
      <button className="bg-blue-500 text-white rounded-md px-5 py-3 block mt-3 cursor-pointer" onClick={() => setIsLoggedIn(!isLoggedIn)}>Toggle Login</button>
      {
        isLoggedIn ? <First /> : <Second />
      }
    </>
  )
}

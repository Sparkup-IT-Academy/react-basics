import { useEffect } from "react"

export default function First() {
  useEffect(() => {
    console.log("use effect hook of first is triggered");

    return () => {
      console.log('clean up function of first is triggered');
    }
  }, [])
  return (
    <div>Logged in</div>
  )
}

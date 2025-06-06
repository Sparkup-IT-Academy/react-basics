import { useEffect } from "react"

export default function Second() {
  useEffect(() => {
    console.log("use effect hook of second is triggered");

    return () => {
      console.log('clean up function of second is triggered');
    }
  }, [])
  return (
    <div>Is not logged in</div>
  )
}

import { useEffect, useState } from "react"

export default function NumberList({ getItems }) {
  const [numbers, setNumbers] = useState([]);
  useEffect(() => {
    console.log('getItems function updated')
    setNumbers(getItems());
  }, [getItems])


  return (
    <div>
      {
        numbers.map(item => <div key={item}>{ item }</div>)
      }
    </div>
  )
}

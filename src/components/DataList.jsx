import { useState } from "react"
import DataItem from "./DataItem"

export default function DataList({ theme }) {
    const [data, setData] = useState([
        'Apple',
        'Banana',
        'Carrot',
        'Guava',
        'Pineapple',
        'Mango'
    ])
    return (
        <div className="grid grid-cols-3 gap-5">
            {
                data.map(item => (
                    <DataItem  key={item} fruit={item} theme={theme}/>
                ))
            }
        </div>
    )
}

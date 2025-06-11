import Button from "./Button";

export default function DataItem({fruit, theme}) {
    return (
        <div>
            <p className="bg-blue-500 text-white rounded-md px-5 py-3 mb-2">{ fruit }</p>
            <Button theme={theme}>Change theme</Button>
        </div>
    )
}
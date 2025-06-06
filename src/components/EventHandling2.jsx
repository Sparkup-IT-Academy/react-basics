export default function EventHandling2() {
    function handleClick(event, message) {
        console.log(message);
        console.log(event);
    }

    return <>
        <button onClick={(event) => { handleClick(event, 'Hello, how is your day ?') }}>Click me</button>
    </>
}
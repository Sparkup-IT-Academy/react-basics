export default function EventHandling() {
    let userInput = '';
    let userSelect = '';

    function handleInput(event) {
        userInput = event.target.value;
    }

    function handleChange(event) {
        userSelect = event.target.value;
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log('These are the form data');
        console.log('Input value: ', userInput);
        console.log('Select value: ', userSelect);
    }

    return <div>

        <form onSubmit={handleSubmit}>
            <input type="text" onInput={handleInput}/>
            <select name="vehicles" id="vehicles" onChange={handleChange}>
                <option value="Car">Car</option>
                <option value="Bike">Bike</option>
                <option value="Cycle">Cycle</option>
            </select>
            <button type="submit">Click me</button>
        </form>
    </div>
}
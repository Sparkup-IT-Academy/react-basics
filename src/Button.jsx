export default function Button({ color, text = 'Click Me'}) {
    return <button style={{
            backgroundColor: color
        }}>{ text }</button>
};

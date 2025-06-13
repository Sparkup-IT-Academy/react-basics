import { useDispatch, useSelector } from "react-redux"
import { increment, decrement, increaseBy5 } from "../store/slices/counterSlice";

export default function HomePage() {
    const count  = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    return (
        <div>
            <p>The count is: {count}</p>
            <button className="block mt-3 bg-blue-500 text-white px-5 py-2 rounded-md" onClick={() => dispatch(increment())}>Increment</button>
            <button className="block mt-3 bg-blue-500 text-white px-5 py-2 rounded-md" onClick={() => dispatch(decrement())}>Decrement</button>
            <button className="block mt-3 bg-blue-500 text-white px-5 py-2 rounded-md" onClick={() => dispatch(increaseBy5())}>Increment by 5</button>
        </div>
    )
}

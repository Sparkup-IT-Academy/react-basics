// import { useReducer, useState } from "react"

import { useReducer, useState } from "react"

// export default function Reducer() {

//     function reducer(state, action) {
//         if(action.type === 'USERNAME') {
//             return {...state, username: action.payload};
//         } else {
//             return {...state, fullName: action.payload};
//         }
//     }

//     const [state, dispatch] = useReducer(reducer, {
//         username: '',
//         fullName: '',
//     });
//   return (
//     <div>
//         <input type="text" value={state.username} onInput={(e) => {dispatch({ type: 'USERNAME', payload: e.target.value})}} placeholder="Username" className="border w-full px-3 py-2 mb-2" />
//         <input type="text"  value={state.fullName} onInput={(e) => {dispatch({ type: 'FULLNAME', payload: e.target.value})}} placeholder="Full name" className="border w-full px-3 py-2"/>
//     </div>
//   )
// }

export default function Reducer() {
    // const [counter, setCounter] = useState(0);

    function reducer(state, action) {
        switch(action.type) {
            case 'INCREMENT': 
                return {...state, counter: state.counter + 1}
        }
    }

    const [state, dispatch] = useReducer(reducer, {
        counter: 0,
    })

    return (
        <div>
            <p>{state.counter}</p>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increase Counter</button>
        </div>
    )
}


// Create a signup form with 5 input fields
// Username, Fullname, Password, Date of birth, Address

// Store the values in the state using useReducer hook and when user click submit button
// Log the value of the state to the console


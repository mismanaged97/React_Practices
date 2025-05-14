// Create a counter component with Increment and decrement functions. Pass these functions to the child component which has buttons to perform the increment and decrement actions
// UseCallback hook to ensure these functions will not recreated on every render

import { memo, useCallback, useState } from "react";

export default function Counter() {
    const [count, setCounter] = useState(0);

    // const handleIncrement = () => {
    //     setCounter(count + 1);
    // }
    // const handleDecrement = () => {
    //     setCounter(count - 1);
    // }

    const handleIncrement = useCallback(() => {
        // setCounter(count + 1);
        setCounter(count => count + 1)                  // another way to write the Set Counter --> when we are passing the callback function inside this then it will take the current count and then add further values in this 
    }, [])                                         // due to the another way there is no need to mention the count dependency in the array 
    const handleDecrement = useCallback(() => {
        // setCounter(count - 1);
        setCounter(count => count - 1)
    }, [])

    return (
        <>
            <p>Count : {count}</p>
            <CounterButtons onIncrement={handleIncrement} onDecrement={handleDecrement}></CounterButtons>
        </>
    )
}

const CounterButtons = memo(({ onIncrement, onDecrement }) => {
    return (
        <>
            <button onClick={onIncrement}>Increment</button>
            <button onClick={onDecrement}>Decrement</button>
        </>
    )
})

// function CounterButtons({ onIncrement, onDecrement }) {
//     return (
//         <>
//             <button onClick={onIncrement}>Increment</button>
//             <button onClick={onDecrement}>Decrement</button>
//         </>
//     )
// }
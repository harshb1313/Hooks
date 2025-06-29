import { useEffect, useState } from "react";

export const StateExample = () => {
    const [count, setCount] = useState(0);
    function counter() {
        setCount((prev) => prev + 1);
        console.log(count);

    }

    useEffect(() => {
         console.log("page rendered")
    })
    return (
        <div>
            <p>Counter: {count}</p>
            <button onClick={counter}>Increment</button>
        </div>
    )
}

//The useState hook in React is a fundamental tool for managing state in functional components. It allows developers to add and update state variables within these components, making them capable of maintaining and responding to changes in data.
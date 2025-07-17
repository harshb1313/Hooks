import { useState,useEffect } from "react";

export const Ex1 = ()=>{
    const [count, setCount] = useState(0);
    useEffect(()=>{
        document.title = `${count}`;
        console.log(count);


    }, [count])
    return  <div>
    <h1>{count}</h1>
    <button onClick={() => setCount(count+1)}>Increment</button>
    <button onClick={() => setCount(count-1)}>Decrement</button>
    </div>

}
import React, { useState } from 'react'

function Ass1() {
    let [count, setCount] = useState(0)
    let [text, setText] = useState("parity")
    function state(newCount) {
        if ( newCount %2== 0) {
        setText("Even")
        console.log("even")
    }
    else {
        setText("odd")
        console.log("odd")
    }



}

return (
    <div>
        <p>Count: { count }</p>
        Text: { text }<br></br>
        <button onClick={() => {
            let newCount = count+1
            setCount(newCount)
            state(newCount)}
        }>Increment</button>

        <button onClick={() => {
            let newCount = count-1
            setCount(newCount)
            state(newCount)}
        }>Decrement</button>

        
    </div>
)
}

export default Ass1

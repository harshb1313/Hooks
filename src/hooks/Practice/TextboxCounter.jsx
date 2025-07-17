import { useState, useEffect } from "react";

export const TextboxCounter = () => {
    const [text, setText] = useState("");
    const[count, setCount] = useState(0);
    useEffect(() => {
        setCount(text.length);
    },[text])

    function handleSubmit() {
        if(text.length > 0) {
            alert("Submitted");
        }
        else{
            if(text.length === 100) {
                alert("Please Decrease size");
            }

            alert("Enter a value");

        }
       

    }



    return <div>
        <input type="textBox" value={text} onChange={(e) => setText(e.target.value)} />
        <p>Character Count: {count}</p>
        <button type="submit" onClick={handleSubmit}>Submit</button>
    </div>
}
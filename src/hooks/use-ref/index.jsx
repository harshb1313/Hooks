import { useRef } from "react";

export const RefExample = () => {
    const inputRef = useRef(null);
    const onClick = () => {
        console.log(inputRef.current.value);
    }

    return <div>
        <input ref={inputRef} />
        <button onClick= {onClick}>Focus</button>
    </div>
}
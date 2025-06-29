import { createContext, useState, useContext } from "react";

const GlobalContext = createContext(null);

export const Context = () => {
    const [isToggle, setIsToggle] = useState(false);

    return (
        <GlobalContext.Provider value={{ isToggle, setIsToggle }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
                <h1>Parent Component</h1>
                <ChildComponent/>
                <ChildComponentDisplay/>
            </div>
        </GlobalContext.Provider>
    )
}

export const ChildComponent = () => {
    const { setIsToggle } = useContext(GlobalContext);
    return (
        <div>
            <button onClick={() => setIsToggle((prev) => !prev)}>Toggle: State</button>
        </div>
    )
}

export const ChildComponentDisplay = ( ) => {
    const { isToggle } = useContext(GlobalContext);
    return (
        <div>
            <p>Toggle: {isToggle ? "ON" : "OFF"}</p>
        </div>
    )

}

//useContext is a React Hook that lets you access global data from a context, anywhere in your component tree, without passing props.
/*createContext() — used once to create a context

useContext() — used many times to read from it

They’re not one hook, but they’re a package deal for global state

*/ 
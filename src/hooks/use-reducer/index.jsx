import { useReducer } from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};
        case 'double':
            return {count: state.count * 2};
        default:
            return state;
    }
}

export const ReducerExample = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0});
    // const [count, setCount] = useState(0);
    return (
        <div>
            <p>Counter: {state.count}</p>
            <button onClick={() => dispatch({type: 'increment'})}>Increment</button>
            <button onClick={() => dispatch({type: 'decrement'})}>Decrement</button>
            <button onClick={() => dispatch({type: 'double'})}>Double</button>
        </div>
    )
}
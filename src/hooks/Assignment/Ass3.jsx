import React, { useState } from 'react'

function Ass3() {
    let [count, setCount] = useState(0);

    function handleIncrement(){
        setCount(count+1);
        if(count == 10){
            setCount(10)
            alert("Max Value reached")
            
        }

    }
    function handleDecrement(){
        setCount(count-1);
        if(count == 0){
            setCount(0)
            alert("Min Value reached")
        }
    }

  return (
    <div>
      Count : {count}

      <button onClick={()=>handleIncrement()}>Increment</button>
      <button onClick={()=>handleDecrement()}>Decrement</button>
    </div>
  )
}

export default Ass3

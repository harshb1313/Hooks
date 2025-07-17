import React, {useEffect,useState} from 'react'

function Ass2() {
    let [time,setime] = useState(0)
    useEffect(()=>{
        setTimeout(()=> setime(time+1),1000)
        console.log("this is time", time)
    },[time])
  return (
    <div>
      <h2>Time</h2>
      <p>{time}</p>
    </div>
  )
}

export default Ass2

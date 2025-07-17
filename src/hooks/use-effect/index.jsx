import { useEffect, useState } from "react"


export const EffectExample = () => {
    let [fetchval, setFetchval] = useState([]);
    let [toggle, setToggle] = useState(false);
    useEffect(()=>{
        fetch("https://api.github.com/users")
         .then((Response)=> Response.json())
         .then((json)=> setFetchval(json));
    })

    useEffect(()=>{
        console.log("rendered");
    },[toggle])

    

  return (
    <div>
      <h1>API DATA</h1>
      <button onClick={()=>setToggle((prev)=> !prev)}>toggle</button>
      <ul>
        {fetchval.map((item) => (
        <li>{item.title}</li>
        ))}
      </ul>
    </div>
  )
}

// useState = “📦 I store data, and when I change, the component updates.”
// useEffect = “🔁 I watch data, and when it changes, I do something extra(execute a function or perform any operation).”





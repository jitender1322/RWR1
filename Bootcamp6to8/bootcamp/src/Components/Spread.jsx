import React, { useState } from 'react'

export default function Spread() {
   const [count,setCount] = useState(0)
   const [name,setName] = useState("Rahul")
   const [obj,setObj]=useState({
    key:value
   })
   const [arr, setArr] =useState([1,2,34,5,5])
   const [bool,setBool] = useState(true)
   const increment = ()=>{
    setCount(count + 1)
   }
  return (
    <div>
      <h1>Spread ...</h1>
      <h1>{name}</h1>
        <h2>{count}</h2>
        <button onClick={increment} >+</button>
    </div>
  );
}

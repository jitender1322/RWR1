import React, { useState } from 'react'

export default function Calc() {
    const [num1,setNum1] = useState()
    const [num2,setNum2]=useState()

    const [result,setResult] = useState()

    const handleClick = ()=>{
       setResult(Number(num1) + Number(num2));
    }
  return (
    <div>
      <h1>Crud</h1>
      <input type="number" onChange={(e) =>setNum1(e.target.value)} />
      <input type="number" onChange={(e) =>setNum2(e.target.value)} />
      <button  onClick={handleClick}>+</button>
      <button onClick={()=>setResult(Number(num1) - Number(num2))} >-</button>
      <button onClick={()=>setResult(Number(num1)* Number(num2))} >x</button>
      <button onClick={()=>setResult(Number(num1)/Number(num2))} >/</button>

        <h2>{result}</h2>
    </div>
  );
}

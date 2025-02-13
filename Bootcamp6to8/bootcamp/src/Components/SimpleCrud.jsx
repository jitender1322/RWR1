import React, { useState } from 'react'

export default function SimpleCrud() {
    const [name,setName] = useState("")
    const [record,setRecord] = useState([])

    const handleSubmit = ()=>{
        setRecord([...record,name])
        setName("")
    }
  return (
    <div>
      <h1>SimpleCrud</h1>
      <input
        type="text"
        placeholder="Enter your Name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>

      {
        record.map((e,i)=>{
            return <h2> {i+1} - {e}</h2>
        })
      }
    </div>
  );
}

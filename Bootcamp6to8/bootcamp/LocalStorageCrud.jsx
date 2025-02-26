import React, { useEffect, useState } from 'react'
export default function LocalStorageCrud() {
  const [name, setName] = useState("")
  const [sub, setSub] = useState("")

  const [editIndex, setEditIndex] = useState(null)

  const [record, setRecord] = useState([])

  useEffect(() => {
    let allData = JSON.parse(localStorage.getItem("students"))
    setRecord(allData)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (editIndex == null) {
      let obj = { id: Date.now(), name, sub }
      setRecord([...record, obj]);
      localStorage.setItem("students", JSON.stringify([...record, obj]))
    } else {
      let singleData = record.find((item) => item.id == editIndex)
      singleData.name = name
      singleData.sub = sub
      localStorage.setItem("students", JSON.stringify(record))
    }
    setName("")
    setSub("")
    setEditIndex(null)
  }

  const handleDelete = (id) => {
    let data = record.filter((item) => item.id != id)
    localStorage.setItem("students", JSON.stringify(data))
    setRecord(data)
  }

  const handleEdit = (id) => {
    let singleData = record.find((item) => item.id == id)
    setName(singleData.name)
    setSub(singleData.sub)
    setEditIndex(id)
  }
  return (
    <div>
      <h1>LocalStorageCrud</h1>
      <button style={{background : editIndex && "blue" , color:"white" }}>Click</button>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" value={name} placeholder='Enter your name' onChange={(e) => setName(e.target.value)} />
        <input type="text" value={sub} placeholder='Enter your subject' onChange={(e) => setSub(e.target.value)} />
        <button type='submit'>{editIndex == null ? "addData" : "update"}</button>
      </form>
      {
        record.map((e, i) => {
          return <ul key={i}>
            <li>{i + 1}</li>
            <li>{e.name}</li>
            <li>{e.sub}</li>
            <li><button onClick={() => handleEdit(e.id)}>Edit</button></li>
            <li><button onClick={() => handleDelete(e.id)}>Delete</button></li>
          </ul>
        })
      }
    </div>
  )
}

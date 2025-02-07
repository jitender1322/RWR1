import React, { useEffect, useState } from 'react'

export default function LocalCrud() {
    const [name,setName]=useState("")
    const [sub,setSub]=useState("")
    const [city,setCity]=useState("")

    const [editIndex,setEditIndex]=useState(null);

    const [record,setRecord]=useState(null)

    useEffect(()=>{
        let data = JSON.parse(localStorage.getItem("Student")) || [] ;
        setRecord(data)
    },[])

    const handleSubmit = ()=>{
        if(editIndex == null){
            let obj = { id: Date.now(), name, sub, city };
            setRecord([...record, obj]);
            localStorage.setItem("Student", JSON.stringify([...record, obj]));
        }else{
            let singleData = record.find((item)=>item.id == editIndex);
            singleData.id = editIndex
            singleData.name = name
            singleData.city = city
            singleData.sub = sub
            localStorage.setItem("Student",JSON.stringify(record))
        }

        setName("")
        setSub("")
        setCity("")
    }

    const handleDelete = (userId)=>{
        let data  = record.filter((item)=>item.id != userId)
        setRecord(data)
        localStorage.setItem("Student",JSON.stringify(data))
    }

    const handleEdit = (userId)=>{
        let singleData = record.find((item)=>item.id == userId)
        setName(singleData.name)
        setSub(singleData.sub)
        setCity(singleData.city)
        setEditIndex(userId)
    }
  return (
    <div>
      <input
        type="text"
        placeholder="Enter name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <input
        type="text"
        placeholder="Enter subject"
        onChange={(e) => setSub(e.target.value)}
        value={sub}
      />
      <input
        type="text"
        placeholder="Enter city"
        onChange={(e) => setCity(e.target.value)}
        value={city}
      />

      <button onClick={handleSubmit}>{editIndex == null ? "Submit" : "Update"}</button>

      <table border="1" width="80%">
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Subject</th>
                <th>City</th>
                <th colSpan={2}>Action</th>
            </tr>
        </thead>

        <tbody>
            {
                record ?
                record.map((e,i)=>{
                    return (
                      <tr key={i}>
                        <td>{e.id}</td>
                        <td>{e.name}</td>
                        <td>{e.sub}</td>
                        <td>{e.city}</td>
                        <td>
                          <button onClick={()=>handleEdit(e.id)}>Edit</button>
                        </td>
                        <td>
                          <button onClick={() => handleDelete(e.id)}>
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                }):
                <p>loading...</p>
            }
        </tbody>
      </table>
    </div>
  );
}

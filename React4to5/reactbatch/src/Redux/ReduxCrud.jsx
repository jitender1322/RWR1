import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addData, deleteData, updateData } from '../features/CrudSlice'

export default function ReduxCrud() {
    const dispatch = useDispatch()
    const [name,setName]=useState("")
    const [sub,setSub]=useState("")
    const [editIndex,setEditIndex]=useState(null)

    const data = useSelector((state)=>{
        return state.crudReducer.students
    })

    const handleAddData = ()=>{
        if(editIndex == null){
              let obj = { id: Date.now(), name, sub };
              dispatch(addData(obj));
        }else{
            dispatch(updateData({editIndex , name,sub}))
        }
        setName("")
        setSub("")
    }

    const handleDelete = (id)=>{
        dispatch(deleteData(id))
    }
    const handleEditData = (id)=>{
        let singleData = data.find((item)=>item.id == id)
        setName(singleData.name)
        setSub(singleData.sub)
        setEditIndex(id)
    }
  return (
    <div>
      <h1>ReduxCrud</h1>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <input
        type="text"
        placeholder="Enter your subject"
        onChange={(e) => setSub(e.target.value)}
        value={sub}
      />
      <button onClick={handleAddData}>{editIndex == null ? "Add Data" : "Update Data"}</button>

      {
        data && data.map((e,i)=>{
            return (
              <ul key={i}>
                <li>{i + 1}</li>
                <li>{e.name}</li>
                <li>{e.sub}</li>
                <button onClick={() => handleEditData(e.id)}>Edit</button>
                <button onClick={() => handleDelete(e.id)}>Delete</button>
              </ul>
            );
        })
      }
    </div>
  );
}

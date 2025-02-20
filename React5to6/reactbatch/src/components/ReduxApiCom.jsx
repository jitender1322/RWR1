import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { featchApi } from '../features/ApiSlice'

export default function ReduxApiCom() {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(featchApi())
    },[])

    const record = useSelector((state)=>{
        return state.apiReducer
    })

    if(record.loading == true){
        return <p>Loading....</p>
    }
  return (
    <div>
      <h1>ReduxApiCom</h1>
      {
        record.data &&
        record.data.map((e,i)=>{
            return <ul key={i}>
                <li>{e.title}</li>
            </ul>
        })
      }
    </div>
  );
}

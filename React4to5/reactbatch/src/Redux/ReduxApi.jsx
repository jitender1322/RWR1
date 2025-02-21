import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApi } from "../features/ApiSlice";

export default function ReduxApi() {

    const dispatch = useDispatch();

    useEffect(()=>{
       setTimeout(()=>{
         dispatch(fetchApi());
       },3000)
    },[])

  const record = useSelector((state) => {
    return state.apiReducer;
  });

  if(record.loading == true){
    return <p>Loading.... </p>
  }
  return (
    <div>
      <h1>ReduxApi</h1>
      {
        record.data && record.data.map((e,i)=>{
            return <ul key={i}>
                <li>{e.title}</li>
            </ul>
        })
      }
    </div>
  );
}

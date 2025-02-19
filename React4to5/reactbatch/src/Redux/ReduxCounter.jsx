import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../features/Slice'

export default function ReduxCounter() {
  const dispatch = useDispatch()
  const obj = useSelector((state)=>{
    return state.counterReducer
  })
  return (
    <div>
      <h1>ReduxCounter</h1>
      <h1>{obj.count}</h1>
      <h1>{obj.name}</h1>
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
    </div>
  );
}

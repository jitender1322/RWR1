import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../features/Slice";

export default function ReduxCounter() {
  const dispatch = useDispatch()
  const count = useSelector((state) => {
    return state.counterReducer.count;
  });
  return (
    <div>
      <h1>ReduxCounter</h1>
      <h1>{count}</h1>
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
    </div>
  );
}

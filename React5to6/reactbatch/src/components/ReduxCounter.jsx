import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../features/CounterSlice";

export default function ReduxCounter() {
    const dispatch = useDispatch();
  const count = useSelector((state) => {
    return state.counterReducer;
  });
  return (
    <div>
      <h1>ReduxCounter</h1>
      <h2>{count.count}</h2>
      <h2>{count.name}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

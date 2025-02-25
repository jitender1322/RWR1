import React from "react";
import { useReducer } from "react";

const initialstate = 0;

const reducer = (state, action) => {
  switch (action) {
    case "Inc1":
      return state += 1;
    case "Inc10":
      return state += 10;
    case "Inc100":
      return state += 100;
    default:
      return state;
  }
};

export default function UseReducer() {
  const [count, dispatch] = useReducer(reducer, initialstate);
  return (
    <div>
      <h1>UseReducer</h1>
      <h1>{count}</h1>
      <button onClick={()=>dispatch("Inc1")}>1</button>
      <button onClick={()=>dispatch("Inc10")}>10</button>
      <button onClick={()=>dispatch("Inc100")}>100</button>
    </div>
  );
}

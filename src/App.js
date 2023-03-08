
import React, { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { Decrement, Increment } from "./redux/action";

function App() {
  const [inputValue, setInputValue] = useState(1);
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  console.log(count)
  return (
    <div className="App">
      <h1>Counter</h1>
      <h1>{count}</h1>
      <input type="number" onChange={(e)=>setInputValue(+(e.target.value||1))} />
      <button onClick={() => dispatch(Increment(inputValue))}>INC</button>
      <button onClick={() => dispatch(Decrement(inputValue))}>DEC</button>
    </div>
  );
}

export default App;

import {useState} from "react"
export default function Activities() {
  let [state,setState]=useState(0);
  function cartOperation(data){
    switch (data){
      case "add":
        if (state>=0){
          setState(state+1)
        }
      case "sub":
        
    }
  }
  return (
    <>
    <div>
      <h1>value is : {state}</h1>
      <button onClick={()=>cartOperation("add")}>+</button>
      <button onClick={()=>setState(state-1)}>-</button>
      <button onClick={()=>setState(0)}>Reset</button>
    </div>
    </>
  )
}
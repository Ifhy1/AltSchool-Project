import React, {useReducer,value} from "react";
import "./style.css";
import { Link } from "react-router-dom";

 function App() {
   
  const initialState = {count:0};
  const reducer=(state, action)=>{
    switch(action.type){
      case "increment":
      return {count: state.count +1};
      case "decrement":
      return {count: state.count -1};
      case "reset":
      return {count: 0};

    }

  }
    const [state, dispatch ] = useReducer(reducer,initialState);


  return (
    <div className="App">
      <h1>Counter with useReducer</h1>
   
   Set Value: <input  type="Set Value" placeholder=""/>
      <p>{value}</p>
         <h2>{state.count}</h2>
          <button onClick={()=> dispatch({type:'increment'})}>Increment</button>
          <button onClick={()=> dispatch({type:'decrement'})}>Decrement</button>
          <button onClick={()=> dispatch({type: 'reset'})}>Reset</button>


    </div>
  );
}

export default App;
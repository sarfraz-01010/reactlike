import React, { useEffect } from "react";
import './App.css'
import { useState } from "react";


function App() {
  const [counter, setcounter] = useState(0);
  useEffect(()=>{
    alert('this page is going to reload!')
  },[])

  return (
    <div className="App">
    <button onClick={()=> setcounter((prevcount)=>prevcount - 1)}> - </button>
    <h1>{counter}</h1>
    <button onClick={()=>setcounter((prevcount) =>prevcount + 1)}> + </button>


    </div>
  );
}

export default App;

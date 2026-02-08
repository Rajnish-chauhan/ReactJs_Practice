import React from 'react'
import { useState } from 'react'
const App = () => {
  const [fruit,ChangeVal]=useState("Apple");
  const Val=()=>{
    ChangeVal("Banana");
  }
  return (
    <div>
      <h1>State In React</h1>
      <h1>{fruit}</h1>
      <button onClick={Val}>Click For Change Fruit Name</button>    </div>
  )
}

export default App
//If we want to use one component to another then you need to be import and export
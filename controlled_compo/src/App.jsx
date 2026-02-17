import { useState } from "react";
function App(){
  const [name,setName]=useState('');
  const [Password,setPassword]=useState('');
  const [Email,setEmail]=useState('');
  return(
    <div>
      <form action="" method="get">
        <input type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder="Enter Name" />
        <br /> <br />
        <input type="password" value={Password} onChange={(event)=>setPassword(event.target.value)} placeholder="Enter Pass" />
        <br /> <br />
        <input type="text" value={Email} onChange={(event)=>setEmail(event.target.value)} placeholder="Enter Gmail" />
        <br />
        <br />
        <button>submit</button>
        <br /> <br />
        <button onClick={()=>{setName(''),setPassword(''),setEmail('')}}>Clear</button>
      </form>

    <h3>{name}</h3>
    <h3>{Password}</h3>
    <h3>{Email}</h3>
    </div>
  )
}

export default App;
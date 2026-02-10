import { useState } from "react";
import User from "./User";
import College from "./College";
import Wrapper from "./Wrapper";
function App() {


  const [input, changeInput] = useState("");

  // const name="I'm Props From App";
  // let CollegeName = ['MIT', 'DU', 'NIT']
  // // Objects passs (props)
  // const names = ""
  // const Objects = {
  //   name: "Rmu kaka",
  //   age: 60,
  //   Profession: "Pahara dena"
  // }
  return (
    <div style={{border:"2px solid blue", width:"300px",height:"300px"}}>
{/*Here we can understand by how to the we can write in the input field of 
the of the any text outside of the input box*/}


      <h1>Input field</h1>
      <input type="text" value={input} onChange={(event) => changeInput(event.target.value)} placeholder="Enter text" />
      <h1>{input}</h1>

{/* <h1>Clear the text</h1> */}
<button onClick={()=>changeInput("")}>Clear</button>





      {/* <College />
      <College />
      <Wrapper/>
      <College name={names} />
      <h1>Props</h1>
      {/* <h1>{name}</h1> */}
      {/* <User user={Objects} /> */}
    </div>
  )
}
export default App;
// Screen par wahi daalo jo aap ek aam user (common user) ko dikhana chahte ho. 
// Console mein wo daalo jo aap khud (as a developer) check karna chahte ho.
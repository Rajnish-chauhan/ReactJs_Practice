import MultipeCondition from "./MultipleConditionInReact";
import { useState } from "react"
function App() {
  const [Conter, UCounter] = useState(0);
  const [DCounter, UDCounter] = useState(0);
  const [Display, Toggle] = useState(true);
  return (

    <div>
      <MultipeCondition />
      {/* <br />
      <h5>Hide and Show Names</h5>
      <hr />
      <h5>{
        Display ? "Rajnish Chauhan" : null
      }
        <br />
        <br />
        <button onClick={() => Toggle(!Display)}> Click for Show/Hide</button>
      </h5>
      <hr />
      <h5>Update Counter</h5>
      <h5>{Conter}</h5>
      <button onClick={() => UCounter(Conter + 1)}>Increament</button>
      <hr />


      <h5>{DCounter}</h5>
      <button onClick={() => UDCounter(DCounter - 1)}>Decreament</button> */}

    </div>
  )
}
export default App;

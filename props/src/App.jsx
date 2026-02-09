import User from "./User";
import College from "./College";
function App() {
  // const name="I'm Props From App";
  let CollegeName = ['MIT', 'DU', 'NIT']
  // Objects passs (props)
  const names = ""
  const Objects = {
    name: "Rajnish",
    age: 21,
    Profession: "Developer"
  }
  return (
    <div>
      <College />
      <College />
      <College name={names} />
      <h1>Props</h1>
      {/* <h1>{name}</h1> */}
      <User user={Objects} />
    </div>
  )
}
export default App;
// Screen par wahi daalo jo aap ek aam user (common user) ko dikhana chahte ho. 
// Console mein wo daalo jo aap khud (as a developer) check karna chahte ho.
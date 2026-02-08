function User({props}) {
    // console.log(props);
    
    return (
        <div>
            <h1>Props In react</h1>
            <h1>{props.name}</h1>
        </div>
    )
}
export default User;
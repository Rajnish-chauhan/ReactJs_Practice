function User({ user })
// function User(name->objetcs)
{
    // console.log(props);

    return (
        <div>

            <h1>Props In react</h1>
            <h1>{user.name}</h1>
            <h1>{user.age}</h1>
            <h1>{user.Profession}</h1>

        </div>
    )
}
export default User;
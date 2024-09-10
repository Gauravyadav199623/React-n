import { useState } from "react"
const UserFun=(({name})=>{

    const [count, setCount] = useState(0)
    return(
        <div className="user-card">
            <h1>count={count}</h1>
            <h1>{name}</h1>
            <h1>Name :Gaurav</h1>
            <h2>location :delhi</h2>
            <h3>contact: noplz</h3>
        </div>
    )
})
export default UserFun
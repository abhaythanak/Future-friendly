import { useState } from "react"



export default function Counter() {
    const [count , setCount] = useState(0)
    return(
        <div className="">
            <h1 data-testId="count">{count}</h1>
            <button onClick={()=> setCount(count + 1)}>Increment</button>
        </div>
    )
};

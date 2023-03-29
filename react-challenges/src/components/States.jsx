import { useState } from "react"

export default function States() {
    //  OBJECT STATE
    const [ object , setObject] = useState({
        name: "Abhay",
        age:25,
    })
    // NUMERIC STATE
    const [count , setCount]= useState(0)
    //  STRING STATE
    const [name , setName] = useState("")
    // BOOLEAN STATE
    const [isVisible , setIsVisible] = useState(false)
    //  ARRAY STATE
    const [array , setArray] = useState([
        {
            name:"abhay",
            age:26,
        },
        {
            name:"mia",
            age:26,
        },
    ])

    const increment =() => {
        setCount (count + 1);
        
        setIsVisible(!isVisible);
        setName("Abhay")
    }

    
    return(
        <>
        <div className="">
            <h1>{count}</h1>
            <h1>{name}</h1>
            {isVisible ? <h1>visible</h1>:<h1>NotVisible</h1> }
            <button onClick={increment}>IncrementsTheCount</button>
        </div>
        </>
    )
    
};

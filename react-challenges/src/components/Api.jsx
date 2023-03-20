import axios from "axios"
import { useEffect, useState } from "react"

export default function Api() {
    // post, get, put or patch, and delete.
    const [ name, setName] = useState("")
    const [users, setUsers] = useState([])

    const postData =()=>{
        axios.post('https://6416c87e47092b8b61346dce.mockapi.io/users', {
            name: name,
            age: 26,
            hobbies:["game, flute, traviling, coding"]
        })
        .then((res)=>{
            console.log(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
//GET
useEffect(()=>{
    axios
    .get("https://6416c87e47092b8b61346dce.mockapi.io/users")
    .then((res)=> {
     setUsers(res.data)
    })
    .catch((err)=>{
        console.log(err)
    },[])
})

const updateData

    return(
        <>
        <input type="text" placeholder="name" onChange={(e)=> setName(e.target.value)} />
        <button onClick={postData}>POST Data</button>

        {users.map((user)=>{
            return(
                <>
                <h1>{user.name}</h1>
                <button>update</button>
                <button>delete</button>
                </>
            )
        })}
        </>
    )
};

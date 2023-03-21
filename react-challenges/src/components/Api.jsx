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

//update
const updateData = (id)=>{
    console.log(id)
    axios.put(`https://6416c87e47092b8b61346dce.mockapi.io/users/${id}`,{
        name: name,
        age: 26,
        hobbies:["game, flute, traviling, coding"]
    },id)
    .then((res)=>{
        console.log(res.data)
    })
    .catch((err)=>{
        console.log(err)
    })
}

// delete

const deleteData = (id)=>{
    console.log(id)
    axios.delete(`https://6416c87e47092b8b61346dce.mockapi.io/users/${id}`)
    .then((res)=>{
        getData();
        console.log(res.data)
    })
    .catch((err)=>{
        console.log(err)
    })
}

const getData =()=>{
    axios
    .get("https://6416c87e47092b8b61346dce.mockapi.io/users")
    .then((res)=> {
     setUsers(res.data)
    })
    .catch((err)=>{
        console.log(err)
    })
}

    useEffect(()=>{
        getData()
    },[])


    return(
        <>
        <input type="text" placeholder="name" onChange={(e)=> setName(e.target.value)} />
        <button onClick={postData}>POST Data</button>

        {users.map((user)=>{
            return(
                <>
                <h1>{`${user.id}. ${user.name}`}</h1>
                <button onClick={()=> updateData(user.id)}>update</button>
                <button onClick={()=> deleteData(user.id)}>delete</button>
                </>
            )
        })}
        </>
    )
};

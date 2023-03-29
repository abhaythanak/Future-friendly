import axios from "axios"
import { useEffect, useState } from "react";
const pinAPI =`https://api.postalpincode.in/pincode/`;



export default function Debouncing() {
const [pin, setPin] = useState("");

useEffect(()=>{
    const debouncing = setTimeout(()=>{
        axios
        .get(pinAPI + pin)
        .then((res)=>{
            console.log(res.data.PostOffice)
        })
        .catch((err)=> {
            console.log(err)
        })
    }, 2000);

    return () => {
        clearTimeout(debouncing)
    }
}, [pin])


    

    return(
        <div className="">
            <input 
            onChange={(e)=> setPin(e.target.value)}
            type="text" placeholder="enter pin code" />
        </div>
    )
};

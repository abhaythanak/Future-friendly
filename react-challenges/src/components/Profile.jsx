import { useContext } from "react"
import { UserData } from "../context/GlobalContext"

export default function Profile() {
    let {setName} = useContext(UserData)
    return(
        <div className="">
            <button onClick={()=> setName("Abhay hulu lulu")}>change the name</button>
        </div>
    )
};

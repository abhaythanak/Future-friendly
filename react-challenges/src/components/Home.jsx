import { useContext } from "react"
import { UserData } from "../context/GlobalContext"

export default function Home() {
    let {name} = useContext(UserData)
    return (
        <h1>This is {name}</h1>
    )
};

import { useState } from "react"
import { Link } from "react-router-dom"
import useOnline from "../utils/useOnline"
import Title from "./Title"
//Api call to check (logIn/out  user) authentication
// const loggedInUser =() =>{
//     return true
// } 



export default function Header() {
const [isLoggedIn, setIsLoggedIn]= useState(false)

const isOnline = useOnline()

    return(
        <>
        <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-blue-50 md:bg-yellow-50">
            {Title()}
            <div className="nav-items">
                <ul className="flex py-10">
                <li className="px-2"><Link to="/">Home</Link></li>
                    <li className="px-2"><Link to="/about">About</Link></li>
                    <li  className="px-2"><Link to="/contact">ContactUs</Link></li>
                </ul>
            </div>
            {/* isOnline showing u online or offline */}
            <h1>{isOnline? '✅online' : '🔴offline' }</h1>
            {isLoggedIn ? (
            <button onClick={()=> setIsLoggedIn(false)}>Logout</button>
            ) : (
            <button onClick={()=> setIsLoggedIn(true)}>LogIn</button>)}
        </div>
        </>
    )
};

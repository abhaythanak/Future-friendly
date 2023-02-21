import { useState } from "react"
import Title from "./Title"
//Api call to check (logIn/out  user) authentication
// const loggedInUser =() =>{
//     return true
// } 



export default function Header() {
const [isLoggedIn, setIsLoggedIn]= useState(false)

    return(
        <>
        <div className="header">
            {Title()}
            <div className="nav-items">
                <ul className="ul-list">
                    <li className="li">About</li>
                    <li  className="li">ContactUs</li>
                    <li className="li">Cart</li>
                </ul>
            </div>
            {isLoggedIn ? (
            <button onClick={()=> setIsLoggedIn(false)}>Logout</button>
            ) : (
            <button onClick={()=> setIsLoggedIn(true)}>LogIn</button>)}
        </div>
        </>
    )
};

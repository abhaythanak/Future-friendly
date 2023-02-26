import { useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import store from "../utils/store"
import useOnline from "../utils/useOnline"
import Title from "./Title"
//Api call to check (logIn/out  user) authentication
// const loggedInUser =() =>{
//     return true
// } 



export default function Header() {
const [isLoggedIn, setIsLoggedIn]= useState(false)

const isOnline = useOnline()

const cartItems = useSelector(Store => store.cart.items)

    return(
        <>
        <div className="header">
            {Title()}
            <div className="nav-items">
                <ul className="ul-list">
                <li className="li"><Link to="/">Home</Link></li>
                    <li className="li"><Link to="/about">About</Link></li>
                    <li  className="li"><Link to="/contact">ContactUs</Link></li>
                    <li className="li"><Link to="/cart">Cart -{cartItems.length}</Link></li>
                </ul>
            </div>
            {/* isOnline showing u online or offline */}
            <h1>{isOnline? 'online' : 'offline' }</h1>
            {isLoggedIn ? (
            <button onClick={()=> setIsLoggedIn(false)}>Logout</button>
            ) : (
            <button onClick={()=> setIsLoggedIn(true)}>LogIn</button>)}
        </div>
        </>
    )
};

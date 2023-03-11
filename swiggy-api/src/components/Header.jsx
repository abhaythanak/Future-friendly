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
const [toggle, setToggle] = useState(false);
const isOnline = useOnline()


    return(
        <>
        <div className="w-full p-[10px] flex justify-between items-center  shadow-lg  bg-gray-800 text-white ">
            {Title()}
            <div className="nav-items hidden md:flex  lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow ">
                <ul className="flex justify-end py-10  lg:flex lg:items-stretch lg:justify-end ml-auto gap-10 mx-3 ">
                <li className="px-2 menuItem hover:scale-110 hover:z-50 transition-all duration-300 ease-in-out"><Link to="/">Home</Link></li>
                    <li className="px-2 menuItem hover:scale-110 hover:z-50 transition-all duration-300 ease-in-out"><Link to="/about">About</Link></li>
                    <li  className="px-2 menuItem hover:scale-110 hover:z-50 transition-all duration-300 ease-in-out"><Link to="/contact">ContactUs</Link></li>
                    <h1 className=" hidden md:flex">{isOnline? '✅' : '🔴' }</h1>  {/*green isOnline showing & red offline */}
                    {isLoggedIn ? (
            <button className=" hidden md:flex  hover:scale-110 hover:z-50 transition-all duration-300 ease-in-out" onClick={()=> setIsLoggedIn(false)}><Link to="/">Logout</Link></button>
            ) : (
            <button className=" hidden md:flex  hover:scale-110 hover:z-50 transition-all duration-300 ease-in-out" onClick={()=> setIsLoggedIn(true)}><Link to="/login">LogIn</Link></button>)}
                </ul>
            </div>
            {/* green isOnline showing & red offline
            <h1 className=" hidden md:flex">{isOnline? '✅' : '🔴' }</h1>   */}
            {/* {isLoggedIn ? (
            <button className=" hidden md:flex  hover:scale-110 hover:z-50 transition-all duration-300 ease-in-out" onClick={()=> setIsLoggedIn(false)}>Logout</button>
            ) : (
            <button className=" hidden md:flex  hover:scale-110 hover:z-50 transition-all duration-300 ease-in-out" onClick={()=> setIsLoggedIn(true)}>LogIn</button>)} */}

        {/*  */}

        <div className="flex flex-col  items-end">
      {!toggle?  <svg xmlns="http://www.w3.org/2000/svg" fill="none" onClick={()=>setToggle(!toggle)}
        viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
         className="w-6 h-6 cursor-pointer md:hidden">
         <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
         </svg>:<svg onClick={()=>setToggle(!toggle)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 cursor-pointer md:hidden h-6">
         <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
       </svg>
      }

      {toggle?
            <ul className="md:hidden absolute flex mt-8 flex-col  bg-gray-900 text-white p-2 rounded-sm">
          <li className="menuItem p-3 hover:scale-110 hover:z-50 transition-all duration-300 ease-in-out">
          <Link to="/">Home</Link>
          </li>
          <li className="menuItem  p-3 hover:scale-110">
          <Link to="/about">About</Link>
          </li>
          {/* <li className="menuItem p-3 hover:scale-110">
            <a href="/#skills">Skills</a>
          </li>
          <li className="menuItem p-3 hover:scale-110">
            <a href="/#companies">Companies</a>
          </li> */}
          <li className="menuItem p-3 hover:scale-110">
          <Link to="/contact">ContactUs</Link>
          </li>
          <li className="menuItem p-3 hover:scale-110">
           {/* isOnline showing u online or offline */}
           <h1>{isOnline? '✅' : '🔴' }</h1>
            {isLoggedIn ? (
            <button onClick={()=> setIsLoggedIn(false)}>Logout</button>
            ) : (
            <button onClick={()=> setIsLoggedIn(true)}>LogIn</button>)}
          </li>
        </ul>:null}
        </div>
        </div>
        </>
    )
};

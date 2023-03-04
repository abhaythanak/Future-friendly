import { useState } from "react"


export default function NavBar() {
    const [toggle, setToggle] = useState(false);
    return (
        <>
        <div className="flex justify-between">
            <img src="logo" alt="logo" className="h-5" />
            <div className="hidden md:flex">
                <ul className="flex flex-row">
                    <li className="mr-4 transition-all ease-in-out hover:scale-110 cursor-pointer">Home</li>
                    <li className="mr-4 transition-all ease-in-out hover:scale-110 cursor-pointer">Skills</li>
                    <li className="mr-4 transition-all ease-in-out hover:scale-110 cursor-pointer">Companies</li>
                    <li className="mr-4 transition-all ease-in-out hover:scale-110 cursor-pointer">Portfolio</li>
                    <li className="mr-4 transition-all ease-in-out hover:scale-110 cursor-pointer">About</li>
                    <li className="mr-4 transition-all ease-in-out hover:scale-110 cursor-pointer">Contact Me</li>
                </ul>
            </div>
            <div className=" md:hidden lg:hidden">
                {!toggle? <svg className="w-6 h-6 cursor-pointer" xmlns="http://www.w3.org/2000/svg" onClick={()=>setToggle(true)} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
              :
              <svg className="w-6 h-6 cursor-pointer float-right" xmlns="http://www.w3.org/2000/svg" onClick={()=>setToggle(false)} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              }
              {toggle?
              <ul className="flex flex-col mt-8 bg-gray-400 p-4">
              <li className="p-4 transition-all ease-in-out hover:scale-110 cursor-pointer">Home</li>
              <li className="p-4 transition-all ease-in-out hover:scale-110 cursor-pointer">Skills</li>
              <li className="p-4 transition-all ease-in-out hover:scale-110 cursor-pointer">Companies</li>
              <li className="p-4 transition-all ease-in-out hover:scale-110 cursor-pointer">Portfolio</li>
              <li className="p-4 transition-all ease-in-out hover:scale-110 cursor-pointer">About</li>
              <li className="p-4 transition-all ease-in-out hover:scale-110 cursor-pointer">Contact Me</li>
          </ul>
             :null
              }
            </div>
        </div>
        </>
    )
};

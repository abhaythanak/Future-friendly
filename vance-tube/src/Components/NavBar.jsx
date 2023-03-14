import { useState } from "react";

export default function NavBar() {
    const [toggle, setToggle] = useState(false);
    return (
      <div className="w-full p-[10px] flex justify-between items-center">
        <img src="https://www.linkpicture.com/q/avtlogo1.png" className="h-24 rounded-full" alt="logo" />
        {/* <h1 className="text-2xl font-extrabold text-rose-800"><span></span> ABHAY<span></span></h1> */}
        <h2 className="bg-red-900 rounded-xl text-white"><button className="w-36 h-14">1000rs</button></h2>
        <div>
          <ul className="hidden md:flex">
            <li className="menuItem hover:scale-110 hover:z-50 transition-all duration-300 ease-in-out">
              <a href="/">Home</a>
            </li>
            <li className="menuItem hover:scale-110">
              <a href="/">About Me</a>
            </li>
            <li className="menuItem hover:scale-110">
              <a href="/">Skills</a>
            </li>
            <li className="menuItem hover:scale-110">
              <a href="/">Companies</a>
            </li>
            <li className="menuItem hover:scale-110">
              <a href="/">Contact Us</a>
            </li>
          </ul>
          {/* <img src={logo} className="sm:hidden w-[40px] h-[40px]" /> */}
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
              <ul className="md:hidden absolute flex mt-8 flex-col bg-gray-200 p-2 rounded-sm">
            <li className="menuItem p-3 hover:scale-110 hover:z-50 transition-all duration-300 ease-in-out">
              <a href="/">Home</a>
            </li>
            <li className="menuItem  p-3 hover:scale-110">
              <a href="/">About Me</a>
            </li>
            <li className="menuItem p-3 hover:scale-110">
              <a href="/">Skills</a>
            </li>
            <li className="menuItem p-3 hover:scale-110">
              <a href="/">Companies</a>
            </li>
            <li className="menuItem p-3 hover:scale-110">
              <a href="/">Contact Us</a>
            </li>
          </ul>:null}
          </div>
          {/* <ul className={!toggle?'hidden':'flex'}>
                  LOGO
              </ul> */}
        </div>
      </div>
    );
};

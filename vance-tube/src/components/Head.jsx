import { useDispatch } from "react-redux"
import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";

export default function Head() {
    const dispatch = useDispatch();
    const toggleMenuHandler = () =>{
        dispatch(toggleMenu());
    }
    return(
        <div className=" grid grid-flow-col p-2 m-2 shadow">
        <div className="flex col-span-1">
        <img
        onClick={() => toggleMenuHandler()}
        className=" h-8 cursor-pointer"
         src="https://cdn-icons-png.flaticon.com/512/7216/7216128.png" alt="menuIcon" />
        <img
        className="h-8 mx-2"
        src="https://lh3.googleusercontent.com/tLxjykvp6rP7gj-A7OOmwJu5_sOXxcQYHTDrHAzupIQNLqD5v76XjXST-XblSRaJHARjYFz6PCs-4j-Mj22lG0jsRnYVeZk9kC54Dnc" alt="vance-tube Logo" />
        
        </div>
        <div className="col-span-10 px-10 ">
            <input
            className="w-1/2 p-2  bg-slate-200 rounded-l-full text-center"
            type="text" />
            <button
            className="rounded-r-full w-1/6 bg-slate-500 p-2 font-bold text-center "
            >Search</button>
        </div>
        <div className="">
            <img 
            className="h-8"
            src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png" alt="UserIcon" />
        </div>

        </div>
    )
};

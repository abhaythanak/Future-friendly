import { useDispatch, useSelector } from "react-redux"
import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/Constants"
import { cacheResults } from "../utils/searchSlice";

export default function Head() {
// search bar functioning
    const [searchQuery, setSearchQuery] = useState("")
  //  console.log(searchQuery)
    const [suggestions, setSuggestions] = useState([])
    const [showSuggestions , setShowSuggestions] = useState(false)

//API CALL FOR SEARCH
//make an api call every key press
// but if the diffrence between 2api call in less than 200ms
//decline the api call

const searchCache = useSelector((store)=>store.search)
const dispatch = useDispatch()
    useEffect(()=>{

    const Timer = setTimeout(() =>{
        if(searchCache[searchQuery]) {
            setSuggestions(searchCache[searchQuery])
        } else {
            getSearchSuggestions()
        }

     } , 200 )  
    
    return () => {
        clearTimeout(Timer);
    }

    },[searchQuery])

    const getSearchSuggestions = async () => {
        console.log("API call-"+ searchQuery)
        const data = await fetch (YOUTUBE_SEARCH_API + searchQuery)
        const json = await data.json();
        // console.log(json)
        setSuggestions(json[1])

        //update cache
        dispatch(cacheResults({
            [searchQuery]:json[1]
        }));

    }

    
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
        <div>
        <div className="col-span-10 px-10 ">
            <input
            className="w-4/5 p-2  bg-slate-200 rounded-l-full text-center"
            type="text"
            value={searchQuery}
            onChange={(e)=> setSearchQuery(e.target.value)}
            onFocus={()=> setShowSuggestions(true)}
            onBlur={()=> setShowSuggestions(false)}
            />
            
            <button
            className="rounded-r-full w-20 bg-slate-500 p-2 font-bold text-center "
            >Search</button>
        </div>
        {showSuggestions && (
        <div className=" fixed rounded-lg content-center border-gray-200 w-2/6 bg-white ml-14 mt-1">
            <ul className="text-center m-1">
                {suggestions.map((s)=> (
                    <li key={s} className="rounded-lg  py-2 shadow hover:bg-gray-200">{s}</li>
                ))}
            
            </ul>
        </div>
        )}
        </div> 
        <div className="">
            <img 
            className="h-8"
            src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png" alt="UserIcon" />
        </div>

        </div>
    )
};

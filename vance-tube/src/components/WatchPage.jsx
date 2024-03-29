import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { closeMenu } from "../utils/appSlice"
import { useParams,useSearchParams } from "react-router-dom"
import CommentsContainer from "./CommentsContainer";


export default function WatchPage() {
    const [searchParams]= useSearchParams()
    // console.log(searchParams.get("v"))

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch( closeMenu())
    },[])

    return(
        <div className="flex flex-col">
        <div className="px-5">
            <iframe width="560" height="315" 
            src={"https://www.youtube.com/embed/"+ searchParams.get("v") }
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen></iframe>
        </div>
        <CommentsContainer/>
        </div>
    )
};

import { useEffect, useState } from "react"
import { YOUTUBE_VIDEOS_API } from "../utils/Constants"
import VideoCards from "./VideoCards"
import { Link } from "react-router-dom"


export default function VideoContainer() {
    const [video, setVideo] = useState([])

    useEffect( () => {
        getVideos()

    },[])

    const getVideos = async () => {
        const data = await fetch(YOUTUBE_VIDEOS_API);
        const json = await data.json()
        
        setVideo(json.items)
    }


    return(
        <div className=" flex flex-wrap ">
            {video.map((video) =>(
           <Link to={"/watch?v=" + video.id} > <VideoCards key={video.id} info={video} /> </Link>
            ))}
            
        </div>
    )
};

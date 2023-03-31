

export default function VideoCards({info}) {
    
    console.log(info)
     
    
    return(
        <div className="p-2 m-2 w-72 shadow-xl">
            <img 
            className="rounded-lg"
            src={info?.snippet?.thumbnails?.high.url} alt="thumbnails" />
            <ul>
                <li>{info?.snippet?.localized.title}</li>
                <li>{info?.snippet?.channelTitle}</li>
                <li>{info?.statistics.viewCount}</li>
            </ul> 
        </div> 
    )
};

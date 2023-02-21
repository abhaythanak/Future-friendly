/* eslint-disable no-useless-concat */
export default function RestaurantCard({
    name,
    cuisines,
    cloudinaryImageId,
    costForTwoString,
}) {
    return (
        <>
        
        <div className="card">
        <img style={{borderRadius:"4px"}}
        src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + `${cloudinaryImageId}`  }
         alt="img" />
            {/* {console.log(props)} */}
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{costForTwoString}</h4>
        </div>
        </>
        )
};

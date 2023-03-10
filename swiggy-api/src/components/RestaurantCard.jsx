/* eslint-disable no-useless-concat */
export default function RestaurantCard({
    name,
    cuisines,
    cloudinaryImageId,
    costForTwoString,
}) {
    return (
        <>
        
        <div className="w-56 h-full p-2 m-2 shadow-lg bg-pink-50 transition-all ease-in-out group hover:scale-110">
        <img className="rounded transition-all ease-in-out group hover:scale-105 "
        src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + `${cloudinaryImageId}`  }
         alt="img" />
            {/* {console.log(props)} */}
            <h2 className="font-extrabold text-xl">{name}</h2>
            <h3 className="text-gray-500">{cuisines.join(", ")}</h3>
            <h4 className="font-bold">{costForTwoString}</h4>
        </div>
        </>
        )
};

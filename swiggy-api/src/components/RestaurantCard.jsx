/* eslint-disable no-useless-concat */
export default function RestaurantCard(props) {
    const { name, cuisines, cloudinaryImageId, costForTwo } = props
    let cdnImage = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_324,c_fill/"

    return (
        <>
        
        <div className="w-56 h-full p-2 m-2 shadow-lg bg-black text-slate-100 transition-all ease-in-out group hover:scale-105 rounded-2xl">
        <img className="rounded-2xl transition-all ease-in-out group hover:scale-105 "
        src= {cdnImage + cloudinaryImageId }
        alt="foodIMG"
         />
            <h2 className="font-extrabold text-xl">{name}</h2>
            <h3 className="text-gray-500">{cuisines.join(", ")}</h3>
            <h4 className="font-bold">{costForTwo}</h4>
        </div>
        </>
        )
};

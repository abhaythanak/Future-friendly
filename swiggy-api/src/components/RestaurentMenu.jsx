/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Shimmer from "./Shimmer"
import { NO_IMAGE_AVAILABLE } from "../constants";
 
export default function RestaurentMenu() {

    const { id } = useParams();

    const [restaurant, setRestaurant] = useState(null);
  
    useEffect(() => {
      getRestaurantInfo();
    }, []);
  
    async function getRestaurantInfo() {
      const data = await fetch(
        
      );
      const json = await data.json();
      setRestaurant(json.data);
      console.log(typeof(json.data))
    }

    // const addFoodItem = (item) => {
    //   dispatch(addItem(item));
    // };

    return !restaurant ? (
      <Shimmer />
    ) : (
      <div className="flex">
        <div>
          <h1>Name :- {restaurant?.info.name}</h1>
          <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" + restaurant?.info.cloudinaryImageId} alt="" />
          
          <h2> {restaurant?.info.area} </h2>
          <h2> {restaurant?.info.city} </h2>
          <h2> {restaurant?.info.avgRating} </h2>
          <h2> {restaurant?.info.costForTwoMsg} </h2>
        </div>
        
        <div className="p-5">
          <h1>Menu</h1>
          <ul>
            {Object.values(restaurant?.info?.menu?.items).map((item) => (
                 <div
                 key={item.name}
                 data-testId="menu"
                 className="flex  p-4 m-4 space-x-5 max-w-xl  rounded-lg justify-between "
               >
                 <div className="flex flex-wrap space-x-3">
                   <img
                     src={
                       !item.cloudinaryImageId
                         ? NO_IMAGE_AVAILABLE
                         : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + item.cloudinaryImageId
                     }
                     className="w-48 rounded-md " alt="imgMenu"
                   />
                   <div className="flex flex-col">
                     <h1 className="font-semibold text-xl">{item.name}</h1>
                     <p className="font-normal">₹ {item.price / 100}</p>
                   </div>
                 </div>
   
                 <button
                  //  onClick={() => addFoodItem(item)}
                   className="bg-green-700 h-10 p-2 px-3 text-white rounded-md mr-0 hover:bg-green-600 "
                 >
                   Add
                 </button>
               </div>
            ))}
          </ul>
        </div>
      </div>
    );
};

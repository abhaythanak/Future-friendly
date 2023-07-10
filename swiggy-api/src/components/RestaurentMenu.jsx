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
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${id}`
      );
      const json = await data.json();
      setRestaurant(json.data);
     // console.log(typeof(json.data))
    }

    // const addFoodItem = (item) => {
    //   dispatch(addItem(item));
    // };

    return !restaurant ? (
      <Shimmer />
    ) : (
      <div className="flex">
        <div>
          <h1>Name :- {restaurant?.name}</h1>
          <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + restaurant?.cloudinaryImageId} alt="" />
          <h2> {restaurant?.area} </h2>
          <h2> {restaurant?.city} </h2>
          <h2> {restaurant?.avgRating} </h2>
          <h2> {restaurant?.costForTwoMsg} </h2>
        </div>
        
        <div className="p-5">
          <h1>Menu</h1>
          <ul>
            {Object.values(restaurant?.menu?.items).map((item) => (
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

    // //  const params = useParams()
    //  //  console.log(params)
    // //  const {id} = params
    //         //  OR only this line  //
    //  const {resId} = useParams()  
    //  const [restaurent , setRestaurent] = useState(null);


    //  useEffect(() => {
    //     getRestaurentInfo();
    //  }, [])

    //  async function getRestaurentInfo() {
    //     const data = await fetch (`https://www.swiggy.com/dapi/menu/v4/full?lat=22.4707019&lng=70.05773&menuId=${resId}`);
    //     const json = await data.json();
    //     console.log(json)
    //     setRestaurent(json.data)
    //  }
    
    // //  if (!restaurent) {
    // //     return <Shimmer/>;   OR
    // //  }

    // return  !restaurent ? (<Shimmer/>) : (
    //     <>
    //     <div>
    //     <h1>Restaurent id: {resId}</h1>
    //     <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+ restaurent?.cloudinaryImageId} alt="menuPage" />
    //     <h2>{restaurent?.name}</h2>
    //     <h3>{restaurent?.area}</h3>
    //     <h3>{restaurent?.city}</h3>
    //     <h3>{restaurent?.avgRating}</h3>
    //     <h3>{restaurent?.area}</h3>
    //     <h3>{restaurent?.costForTwoMsg}</h3>
    //     </div>
    //     <div className="menu">

    //         {/* {restaurent.menu.items} */}
    //         {/* {console.log(Object.values(restaurent.menu.items))}   Q. why use object.values find ans. */}
    //          {/* <h1>Menu</h1> */}
    //          <ul>
    //             {Object.values(restaurent?.menu?.items).map((item) =>(
    //                 <li key={item.id}>{item.name}</li>
    //             )
                    
    //             )}
    //          </ul>
    //     </div>
        
    //     </>
    // )
};

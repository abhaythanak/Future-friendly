//import { RestaurantList } from "../RestaurantList"
import RestaurantCard from "./RestaurantCard"
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer"
import useOnline from "../utils/useOnline";
import { Link } from "react-router-dom";

export default function Body() {
  const [allRestaurent, setAllRestaurent] = useState([])
  const [searchInput, setSearchInput] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
 

  useEffect(() => {
    getRestaurants();
    

  }, []);
  // in console error happened reason is core extension is not downloaded or ON
  async function getRestaurants() {
    const API = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9974533&lng=73.78980229999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    const data = await fetch(API);
    const json = await data.json();
    //console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[0].info.name)
    console.log(json?.data?.cards[1]?.card.card.gridElements.infoWithStyle.restaurants)
    setAllRestaurent(json?.data?.cards[1]?.card.card.gridElements.infoWithStyle.restaurants);
    setFilteredRestaurants(json?.data?.cards[1]?.card.card.gridElements.infoWithStyle.restaurants);
  };
  


  const filterData = (searchInput, restaurants) => {
    const filterData = restaurants.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase()?.includes(searchInput?.toLowerCase())
    );
    setSearchInput("");
    return filterData;
  };
  

  //creating custom hook and call it 
const isOnline = useOnline();
if(!isOnline) {
  return <h1> Offline, please check your internet connection</h1>
}


  // not render component (early render)
      if (!allRestaurent) return null


    return filteredRestaurants.length === 0 ? (<Shimmer/>): (
      <>
      <div className="container p-5  bg-gray-800 my-5 flex lg:justify-center align-middle h-full">
       <div className="w-full flex lg:justify-center align-middle">
        <input
          type="text"
          className=" p-2 text-white rounded-bl-xl lg:w-5/12  bg-black border-none "
          placeholder="Search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button  className="p-2 bg-white w-10 text-white font-bold rounded-tr-xl"
          onClick={() => {
            const data = filterData(searchInput, allRestaurent)

            setFilteredRestaurants(data)
          }}
        >
         🔎
        </button>
        </div>
        {/* <h1> {searchInput} </h1> */}
      </div>
      <div className="flex items-center justify-center min-h-screen container mx-auto bg-gray-800 ">
        <div className=" flex flex-wrap justify-center gap-6 ">
           {filteredRestaurants.map ((restaurant) => {
            return (
              <Link to={`/restaurent/${restaurant.info.id}` } key={restaurant.info.id} >
               <RestaurantCard {...restaurant.info} />  {/*remove from restaurentCard and add it link tag key={restaurant.data.id} */}
              </Link>
            )
           })}
        </div>
        </div>
      </>
    )
};

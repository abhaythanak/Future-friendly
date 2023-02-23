// import { RestaurantList } from "../RestaurantList"
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
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurent(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }


  const filterData = (searchInput, restaurants) => {
    const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchInput?.toLowerCase())
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
      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          onClick={() => {
            const data = filterData(searchInput, allRestaurent)

            setFilteredRestaurants(data)
          }}
        >
          Search
        </button>
        {/* <h1> {searchInput} </h1> */}
      </div>
        <div className="restaurant-list">
           {filteredRestaurants.map ((restaurant) => {
            return (
              <Link to={`/restaurent/${restaurant.data.id}` } key={restaurant.data.id} >
               <RestaurantCard {...restaurant.data} />  {/*remove from restaurentCard and add it link tag key={restaurant.data.id} */}
              </Link>
              // <RestaurantCard {...restaurant.data} key={restaurant.data.id}
              // name={restaurant.data.name}
              // link={restaurant.data.cloudinaryImageId}
              // cuisines={restaurant.data.cuisines}
              // price={restaurant.data.costForTwoString}
              // />
            )
           })}
        </div>
      </>
    )
};

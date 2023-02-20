import { RestaurantList } from "../RestaurantList"
import RestaurantCard from "./RestaurantCard"
import { useEffect, useState } from "react";



export default function Body() {

  const [searchInput, setSearchInput] = useState("");
  const [restaurants, setRestaurants] = useState(RestaurantList);

//useEffect
useEffect(()=> {
  getRestaurents()
},[])

  //Api fetching (async function)
  async function getRestaurents() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.6915853&lng=72.86336349999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json)
    setRestaurants(json?.data?.cards[2]?.data?.data?.cards)
  }
  /// filter the data
  const filterData = (searchInput, restaurants) => {
    const filterData = restaurants.filter((restaurants) =>
    restaurants?.data?.name?.toLowerCase()?.includes(searchInput?.toLowerCase())
    );
    setSearchInput("");
    return filterData;
  };

   // we have used state becoz react doesn't know when this variable will be change for this we have intorduced a hook called useState which watches state every time when component re-render

  // Hook is a normal JS function written by FB developers

  // React used one-way data binding -> means we can't update value of variable manually => we have to create a state variable using useState.

  // useState returns an array which contains a state Variable and a method/function which is utilized to manipulate that state variable

  // useState will re-render whole component when any state variable changes.

    return (
      <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          onClick={() => setRestaurants(filterData(searchInput, restaurants))}
        >
          Search
        </button>
        {/* <h1> {searchInput} </h1> */}
      </div>
        <div className="restaurant-list">
           {restaurants.map ((restaurant) => {
            return (
              <RestaurantCard key={restaurant.data.id}
              name={restaurant.data.name}
              link={restaurant.data.cloudinaryImageId}
              cuisines={restaurant.data.cuisines}
              price={restaurant.data.costForTwoString}
              />
            )
           })}
        </div>
      </>
    )
};

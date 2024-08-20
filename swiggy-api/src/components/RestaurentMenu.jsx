/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { NO_IMAGE_AVAILABLE } from "../constants";

export default function RestaurantMenu() {
    const { id } = useParams(); // Get the restaurant ID from the URL parameters
    const [restaurant, setRestaurant] = useState(null);

    useEffect(() => {
        getRestaurantInfo();
    }, []);

    async function getRestaurantInfo() {
        try {
            const data = await fetch(
                `https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9974533&lng=73.78980229999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING&id=${id}`
            );
            const json = await data.json();
            const restaurantData = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.find(
                (restaurant) => restaurant.info.id === id
            );
            setRestaurant(restaurantData); // Set the state with the restaurant data based on ID
            console.log(restaurantData);
        } catch (error) {
            console.error("Failed to fetch restaurant data:", error);
        }
    }

    return !restaurant ? (
        <Shimmer />
    ) : (
        <div className="flex">
            <div>
                <h1>Name: {restaurant?.info?.name}</h1>
                <img
                    src={
                        restaurant?.info?.cloudinaryImageId
                            ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_160/${restaurant?.info?.cloudinaryImageId}`
                            : NO_IMAGE_AVAILABLE
                    }
                    alt={restaurant?.info?.name}
                />
                <h2>Area: {restaurant?.info?.locality}</h2>
                <h2>{restaurant?.info?.areaName}</h2>
                <h2>Rating: {restaurant?.info?.avgRating}</h2>
                <h2>Cost for Two: {restaurant?.info?.costForTwoMsg}</h2>
            </div>

            <div className="p-5">
                <h1>Menu</h1>
                <ul>
                    {Object.values(restaurant?.info?.menu?.items || {}).map((item) => (
                        <div
                            key={item.id}
                            data-testid="menu"
                            className="flex justify-between space-x-5 m-4 p-4 rounded-lg max-w-xl"
                        >
                            <div className="flex flex-wrap space-x-3">
                                <img
                                    src={
                                        item.cloudinaryImageId
                                            ? `https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${item.cloudinaryImageId}`
                                            : NO_IMAGE_AVAILABLE
                                    }
                                    className="rounded-md w-48"
                                    alt={item.name}
                                />
                                <div className="flex flex-col">
                                    <h1 className="font-semibold text-xl">{item.name}</h1>
                                    <p className="font-normal">₹ {item.price / 100}</p>
                                </div>
                            </div>

                            <button
                                // onClick={() => addFoodItem(item)}
                                className="bg-green-700 hover:bg-green-600 mr-0 px-3 p-2 rounded-md h-10 text-white"
                            >
                                Add
                            </button>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
}

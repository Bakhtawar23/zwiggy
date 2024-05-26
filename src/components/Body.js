import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import ShimmerUI from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [copyListofRestaurant, setCopyListofRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");
    
    useEffect(() => {
        fetchData();
    },[])

    const fetchData = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setCopyListofRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    
    if(listOfRestaurant.length === 0){
      return <ShimmerUI/>
    }

    return listOfRestaurant.length === 0 ? <ShimmerUI/> : (
      <div className='body'>
        <div className='filter flex justify-center'>
          <div className="search m-4 p-4">
            <input type="text" className="border border-solid border-black focus:ring-2 rounded-sm" value={searchText} onChange={(e) => {
              setSearchText(e.target.value);
            }}/>
            <button className="px-4 py-1 m-4 bg-green-400 hover:bg-green-500 rounded-lg" onClick={() => {
              let filteredRestaurant = listOfRestaurant.filter((resData) =>
                resData.info.name.toLowerCase().includes(searchText.toLowerCase()))
              setCopyListofRestaurant(filteredRestaurant);
            }
            }>Search</button>
          </div>
          <div className="m-4 p-4 flex items-center">
          <button className="px-4 py-1 m-4 bg-green-200 rounded-lg hover:bg-green-500" onClick={() => {
            let filterRestaurant = listOfRestaurant.filter((resData) => 
                resData.info.avgRating > 4)
            setCopyListofRestaurant(filterRestaurant);
        }
        }>Top Rated Restaurants</button>
        </div>
        </div>
        <div className='flex flex-wrap'>
          {
            copyListofRestaurant.map((restaurant) => {
              return <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}><RestaurantCard key={restaurant.info.id} resData={restaurant} /></Link>
            })
          }
        </div>
      </div>
    )
}

export default Body;
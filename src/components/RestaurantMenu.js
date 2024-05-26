import ShimmerUI from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategories from "./RestaurantCategories";

const RestaurantMenu = () => {
    const {resId} = useParams(); 
    const resInfo = useRestaurantMenu(resId);

    if(resInfo === null) return <ShimmerUI/>

    const {name, cuisines} = resInfo?.cards[2]?.card?.card?.info;

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    
    return(
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="text-lg font-bold">{cuisines.join(", ")}</p>

            {categories.map((category) => {
                return <RestaurantCategories key={category?.card?.card?.title} data={category?.card?.card}/>
            })}
        </div>
    )
}

export default RestaurantMenu
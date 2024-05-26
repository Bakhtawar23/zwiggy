import { RES_CARD_IMG } from "../utils/Constants";

const RestaurantCard = (props) => {
    const {resData} = props;
  
    const {cloudinaryImageId, name, cuisines, avgRating, } = resData?.info;
    
    return(
      <div className='m-4 p-4 w-52 rounded-lg hover:bg-gray-200 bg-gray-100'>
        <img className="rounded-lg" alt="res-logo" src={RES_CARD_IMG+cloudinaryImageId}/>
        <h3 className="font-bold py-2 text-lg">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
      </div>
    )
}

export default RestaurantCard;
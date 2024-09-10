// import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () =>{

    const {resId} =useParams();
    const resInfo = useRestaurantMenu(resId)

    if(resInfo===null) return <Shimmer />
    
    const {name, cuisines, costForTwoMessage}= resInfo?.cards[2]?.card?.card?.info
    const menuCards = resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || {};

// const itemCard=resInfo
    // console.log(resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card?.card?.itemCards[0],"resinfo")
console.log(menuCards,+"menucard");


const { itemCards = [] } = menuCards;

const formatPrice = (price) => price ? `Rs ${price / 100}` : 'Price Not Available';

return (
    <div className="menu">
        <h1>{name}</h1>
        <p>{cuisines?.join(', ')} - {costForTwoMessage}</p>
        <h2>Menu</h2>
        <h3>{menuCards.title}</h3>
        <ul>
            {itemCards.map((item) => (
                <li key={item.card.info.id}>
                    {item.card.info.name} - {formatPrice(item.card.info.price || item.card.info.defaultPrice)}
                </li>
            ))}
        </ul>
    </div>
);
}
export default RestaurantMenu
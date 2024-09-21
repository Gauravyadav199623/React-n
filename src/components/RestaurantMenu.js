// import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategories";

const RestaurantMenu = () =>{

    const {resId} =useParams();
    const resInfo = useRestaurantMenu(resId)

    if(resInfo===null) return <Shimmer />
    
    const {name, cuisines, costForTwoMessage}= resInfo?.cards[2]?.card?.card?.info
    const menuCards = resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || {};

// const itemCard=resInfo
    console.log(resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards,"resinfo")
console.log(menuCards,+"menucard");

const categories = resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
// ["@type"] == @type



const { itemCards = [] } = menuCards;

const formatPrice = (price) => price ? `Rs ${price / 100}` : 'Price Not Available';

console.log(categories,"categories");

return (
    <div className="text-center">
        <h1 className="font-bold my-6 text-2xl">{name}</h1>
        <p className="font-bold text-lg">{cuisines?.join(', ')} - {costForTwoMessage}</p>
        {
            categories.map((category)=>(
                
                <RestaurantCategory 
                key = {category?.card?.card.title}
                data = {category?.card?.card}/>
                
            ))
        }
        
        {/* <h2>Menu</h2>
        <h3>{menuCards.title}</h3> */}
        {/* <ul>
            {itemCards.map((item) => (
                <li key={item.card.info.id}>
                    {item.card.info.name} - {formatPrice(item.card.info.price || item.card.info.defaultPrice)}
                </li>
            ))}
        </ul> */}
    </div>
);
}
export default RestaurantMenu
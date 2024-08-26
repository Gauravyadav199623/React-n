import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () =>{

    const [resInfo,setResInfo]=useState(null)
    const {resId} =useParams();
    // console.log(resId)

    useEffect(()=>{
        fetchMenu();
    },[])
    const fetchMenu =async ()=>{
        // const data = await fetch(MENU_API+resId
        // );
        // const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65200&lng=77.16630&restaurantId=112346&catalog_qa=undefined&submitAction=ENTER"
        // );
        const data = await fetch(MENU_API+resId);
        // if (!response.ok) {
        //     throw new Error("Failed to fetch menu data");
        // }
        //47851--Bengal Sweet Corner
        //'112346', name: "Aunty's Paranthe"
        // id: '302447', name: 'Punjab Sweet Corner'
        // {id: '12034', name: 'CL Corner', cloudinaryImageId: 'ibubo4whatalvbowetis'
        const json = await data.json ();
        console.log(json)
        // console.log(json?.data?.cards[2]?.card?.card?.info?.name);

        setResInfo(json?.data)
        // console.log(json?.data)

        // console.log(json.data?.cards[4]?.groupedCard?.cardGroupMap.REGULAR.cards[2].card?.card?.itemCards)
    };
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
        <ul>
            {itemCards.map((item) => (
                <li key={item.card.info.id}>
                    {item.card.info.name} - {formatPrice(item.card.info.price)}
                </li>
            ))}
        </ul>
    </div>
);
}
export default RestaurantMenu
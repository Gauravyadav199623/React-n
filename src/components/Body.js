import RestaurantCard from "./RestaurantCard"

import resList from "../utils/mockData.js"
import { useEffect, useState } from "react"

const Body = ()=>{
    const [listOfRestaurant,setListOfRestaurant]= useState([])
    // same as
    // const arr = useState(resList)
    // const listOfRestaurant = arr[0] 
    // const setListOfRestaurant = arr[1] 
    useEffect(()=>{
        fetchData()
    },[]);

    const fetchData= async ()=>{
        const data=  await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');

        const json= await data.json();

        console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
        // console.log(json.data.cards[4])
        setListOfRestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)

    }
    
    
    return (
        < div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    const filteredList = listOfRestaurant.filter(
                        (res)=> res.info.avgRating > 4
                    );
                    setListOfRestaurant(filteredList)
                }}
            >Filter Restaurant</button>
            </div>
            <div className="res-container">
                {listOfRestaurant.map((resData)=>{
                  // console.log(resData);
                  return <RestaurantCard key={resData.info.id} resData={resData.info}/>
                  })}
                  {/* <RestaurantCard resData={resList[0]}/>
                  <RestaurantCard resData={resList[1]}/> */}
            </div>
        </div>
    )
}

export default Body



// * Why should we provide key property to the child elements - When creating a list in the UI from an array with JSX, you should add a key prop to each child and to any of its' children. React uses the key prop create a relationship between the component and the DOM element. The library uses this relationship to determine whether or not the component should be re-rendered.

// * What is Config-driven-UI -> A "config-driven UI" is a user interface that is built and configured using a declarative configuration file or data structure, rather than being hardcoded.


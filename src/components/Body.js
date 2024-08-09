import RestaurantCard from "./RestaurantCard"

import resList from "../utils/mockData.js"
import { useState } from "react"

const Body = ()=>{
    // const [listOfRestaurant,setListOfRestaurant]= useState(resList)
    const arr = useState(resList)
    const listOfRestaurant = arr[0] 
    const setListOfRestaurant = arr[1] 
    return (
        < div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    const filteredList = listOfRestaurant.filter(
                        (res)=> res.data.avgRating > 4
                    );
                    setListOfRestaurant(filteredList)
                }}
            >Filter Restaurant</button>
            </div>
            <div className="res-container">
                {listOfRestaurant.map((resData)=>{
                  // console.log(resData);
                  return <RestaurantCard key={resData.data.id} resData={resData}/>
                  })}
                  {/* <RestaurantCard resData={resList[0]}/>
                  <RestaurantCard resData={resList[1]}/> */}
            </div>
        </div>
    )
}

export default Body
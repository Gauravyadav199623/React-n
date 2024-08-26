import RestaurantCard from "./RestaurantCard"

import { useEffect, useState } from "react"

import Shimmer from './Shimmer'
import { Link } from "react-router-dom"

const Body = ()=>{
    const [listOfRestaurant,setListOfRestaurant]= useState([])
    // same as
    // const arr = useState(resList)
    // const listOfRestaurant = arr[0] 
    // const setListOfRestaurant = arr[1] 

    const [filterRestaurant, setFilterRestaurant] = useState([])

    const [searchText, setSearchText]= useState('')  // we will bind the text in the search box input value to this variable
    console.log('re-rendering')

    // * Whenever a state variable updates or changes, react triggers a reconciliation cycle(re-renders the component)

    useEffect(()=>{
        fetchData()
    },[]);

    const fetchData= async ()=>{
        const data=  await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');

        const json= await data.json();

    //    optional chaining
        console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants,"fetchData")
        // console.log(json.data.cards[4])
        setListOfRestaurant(json.data.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilterRestaurant(json.data.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants)

    }
// conditional rendering
    // if(listOfRestaurant.length==0){
    //     return <Shimmer />
    // }
    
    
    return listOfRestaurant.length == 0 ? ( 
    <Shimmer /> 
) : (
        < div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="searchBox" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value)
                    }}></input>
                    <button className="searchBtn" onClick={()=>{
                        // console.log(searchText)
                        
                        let FilteredRestaurants = listOfRestaurant.filter((res)=>
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        )
                        setFilterRestaurant(FilteredRestaurants)
                        
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={()=>{

                    let filteredList = listOfRestaurant.filter(
                        (resData)=> resData.info.avgRating > 4.2
                    );
                    setFilterRestaurant(filteredList)
                }}
            >Filter Restaurant</button>
            </div>
            <div className="res-container">
                {filterRestaurant.length > 0 ? (
                    filterRestaurant.map((resData) => {
                        return (
                            <Link key={resData.info.id} to={"/restaurants/" + resData.info.id}>
                                <RestaurantCard resData={resData.info} />
                            </Link>
                        );
                    })
                ) : (
                    <p>No restaurants match your search criteria.</p>
                )}
            </div>
        </div>
    )
}

export default Body



// * Why should we provide key property to the child elements - When creating a list in the UI from an array with JSX, you should add a key prop to each child and to any of its' children. React uses the key prop create a relationship between the component and the DOM element. The library uses this relationship to determine whether or not the component should be re-rendered.

// * What is Config-driven-UI -> A "config-driven UI" is a user interface that is built and configured using a declarative configuration file or data structure, rather than being hardcoded.


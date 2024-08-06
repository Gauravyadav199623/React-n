import RestaurantCard from "./RestaurantCard"

import resList from "../utils/mockData.js"

const Body = ()=>{
    return (
        < div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {resList.map((resData)=>{
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
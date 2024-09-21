import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = (data)=>{
    // console.log(data?.data,'data')
    const [showItem, setShowItem] = useState(false)
    const handelClick = ()=>{
        console.log('clicked');
        setShowItem(!showItem); //! kim
    }
    return (
        <div>
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg  p-4 ">
            <div className="flex justify-between cursor-pointer" onClick={handelClick}>
                <span className="text-lg font-bold">{data.data.title}({data.data.itemCards.length})</span>
                <span>🔽</span>
            </div>
             {showItem && <ItemList items = {data?.data?.itemCards}/>}
            </div>
        </div>
    )
}
export default RestaurantCategory;
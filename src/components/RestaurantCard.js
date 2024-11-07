import {CDN_URL} from '../utils/constants'


const RestaurantCard= (props)=>{
    // console.log(props, "props")
    const {resData} =props
    // console.log(resData,"card");
    const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
      sla,
      // sla:{deliveryTime},
    } = resData;
    
    return(
        <div 
        data-testid = "resCard"
        className="w-60 h-[350px] m-2 p-1 bg-gray-100 hover:bg-gray-300"  >
            <img className="w-60 h-36 object-cover rounded-md"
            src={
              CDN_URL+cloudinaryImageId
            }/>
          <h3 className='font-bold'>{name}</h3>
          <em>{cuisines.join(', ')}</em>
          <h4>{avgRating} stars</h4>
          <h4>{costForTwo}</h4>
          <h4>{sla.deliveryTime} minutes</h4>
        </div>
    )
};
export const withPromotedLabel = (RestaurantCard) =>{
  return (props)=>{
    return (
      <div>
        <label className='absolute bg-white text-red-600 rounded-lg m-2 p-2'>Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}
export default RestaurantCard
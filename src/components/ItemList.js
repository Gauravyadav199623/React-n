import { CDN_URL } from '../utils/constants';
import { addItem } from '../utils/cartSlice'
import {useDispatch} from "react-redux"

const ItemList = ({ items, dummy }) => {

  const dispatch = useDispatch();

  const handleAddItem = (item) =>{
    //dispatch an action
    dispatch(addItem(item))
    //todo ->  when ever we will call this (dispatch this action) redux will create an object and it will create an payload inside this object and it will add what ever data we have added to this object and it will take this object and pass as the second argument here. so when we do action.payload we will get that pizza(data) here
    // what ever we will pass it here goes to action.payload in cartSlice

  }

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button className="p-2 mx-10 my-28 rounded-lg bg-black text-white shadow-lg hover:bg-white  hover:text-black transition-all duration-[.3s]"
              onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            </div>
            <img
              src={CDN_URL + item.card.info.imageId}
              alt={item.card.info.name}
              className="w-36 h-36 object-cover rounded-md"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;

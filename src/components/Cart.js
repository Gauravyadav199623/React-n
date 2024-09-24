import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList"
import { clearCart } from "../utils/cartSlice";


const Cart = ()=>{

    const cartItem = useSelector((store)=> store.cart.items)
    // try to subscribe(select) to the specific portion (small part) of the store  not the whole store
    console.log(cartItem);

    const dispatch = useDispatch()

    const handelClearCart = ()=>{
        dispatch(clearCart())
    }
    return <div className="text-center m-4 p-4">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="w-6/12 m-auto">
            <button className="p-2 m-2 bg-black text-white rounded-lg"
            onClick={handelClearCart}
            >
                Clear Cart
            </button>
            {cartItem.length ===0 && <h1> Cart is empty</h1>}
            <ItemList items={cartItem}/>
        </div>
    </div>
}
export default Cart
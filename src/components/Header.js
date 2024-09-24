import {logo_img} from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";

import useOnlineStatus from "../utils/useOnlineStatus"
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


const Header=()=>{

    const onlineStatus = useOnlineStatus()
    const [btnNameReact, setBtNameReact] = useState('Login');

    const {loggedInUser} = useContext(UserContext)
    // console.log(loggedInUser);

    //? here We are subscribing to the store using a selector(reading the store) 
    const cartItems = useSelector((store) => store.cart.items)
    console.log(cartItems);

    // console.log("Header Render")

    return (
        <header>

        <div className="flex justify-between bg-pink-200 sm:bg-yellow-200 lg:bg-green-200 font-[500]">
            <div className="logo-container">
                <img className="w-52" src={logo_img} />
            </div>
            <div className="nav-items">
                <ul  className="flex p-4 m-4" >
                    <li className="p-2">Online Status : {onlineStatus ? "💚" : "❤️"}</li>
                    <li className="p-2"><Link to="/">Home</Link></li>
                    <li className="p-2">
            <Link to="/contact" className="links">
              Contact Us
            </Link>
          </li>
                    <li className="p-2"><Link to="/about">About us</Link></li>
                    <li className="p-2"><Link to="/grocery">Grocery</Link></li>
                    <li className="p-2 font-bold">
                        <Link to='/cart'>
                        Cart({cartItems.length})
                        </Link>
                        </li>

                    <button className="Login" onClick={()=>{
                        btnNameReact == 'login' 
                        ? setBtNameReact('logout')
                        : setBtNameReact("login")
                        console.log(btnNameReact)
                    }}
                    >
                        {btnNameReact}
                    </button>
                    <li className="p-2 font-bold">{loggedInUser}</li>

                </ul>
            </div>
        </div>
    </header>
    )
}
export default Header
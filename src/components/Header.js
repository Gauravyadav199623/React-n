import {logo_img} from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

import useOnlineStatus from "../utils/useOnlineStatus"


const Header=()=>{

    const onlineStatus = useOnlineStatus()
    const [btnNameReact, setBtNameReact] = useState('Login');
    console.log("Header Render")

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
                    <li className="p-2">Cart</li>
                    <button className="Login" onClick={()=>{
                        btnNameReact == 'login' 
                        ? setBtNameReact('logout')
                        : setBtNameReact("login")
                        console.log(btnNameReact)
                    }}
                    >
                        {btnNameReact}
                    </button>
                </ul>
            </div>
        </div>
    </header>
    )
}
export default Header
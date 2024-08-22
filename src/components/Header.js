import {logo_img} from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header=()=>{


    const [btnNameReact, setBtNameReact] = useState('Login');
    console.log("Header Render")

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={logo_img} />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
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
    )
}
export default Header
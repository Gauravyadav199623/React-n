import {logo_img} from "../utils/constants"

const Header=()=>{
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={logo_img} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
export default Header
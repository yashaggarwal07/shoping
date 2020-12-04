import React from 'react';
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";

function Header() {
 const [{ cart }] = useStateValue();

    return (
        <nav className="header">
            <Link to="/">
            <img 
            className="header_logo" 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdNFNDMElrZ3mCX7JtiB7yRiwGKZsH85rvcw&usqp=CAU" 
            alt="shop"/>
            </Link>
            <div className="header_search">
            <input type="text" className="searchInput" />
            <SearchIcon className="searchIcon" />
            </div>
            <div className="nav_buttons">
                <Link to="/" className="header_link">
                <div className="options "> 
                    <span className="optionLineone">Hello buyer</span>
                    <span className="optionLineTwo">Sign In</span>
                </div>
                </Link>
                <Link to="/" className="header_link">
                <div className="options "> 
                    <span className="optionLineone">Return</span>
                    <span className="optionLineTwo"> and Order</span>
                </div>
                </Link>
               <Link to="/checkout" className="header_link">
               <div className="basket">
                <ShoppingBasketIcon />
    <span className="basket_count">{cart?.length}</span>
               </div>
               </Link>
            </div>
       </nav>
    )
}

export default Header

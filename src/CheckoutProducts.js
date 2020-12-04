import React from 'react';
import "./checkoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProducts({id,title,image,price}) {

    const [initialState,dispatch] = useStateValue();    
const removeFromCart = () =>{
    dispatch({
        type:'REMOVE_FROM_CART',
            id: id,
    })
};

    return (
        <div className="checkoutProduct">
            <img className="Product_image" src={image} alt="Product"/>
            <div className="Product_info">
            <p className="Product_title">{title}</p>
            <p className="price">
                <small>Rs</small>
    <strong>{price}</strong>
            </p>
            <button onClick={removeFromCart}>Remove Item form Cart</button>
            </div>
        </div>
    )
}

export default CheckoutProducts

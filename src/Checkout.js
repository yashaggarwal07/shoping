import React from 'react';
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import CheckoutProducts from './CheckoutProducts';
import SubTotal from "./SubTotal";

function Checkout() {
    const[{ cart }] = useStateValue();
    return (
        <div className="checkout">
            {cart?.length === 0 ? (
            <div>
            <h2>Shoping Cart is Empty</h2>
        </div>
            ) :(
                <div>
                    <h2 className="checkout_heading">Your Shoping Cart</h2>
                    {cart?.map(item =>{
                        return(
                             <CheckoutProducts 
                             id = {item.id}
                             title ={item.title}
                             image = {item.image}
                             price = {item.price}
                             />
                    );
                        })};
                   
                    </div>
            )}
            {cart?.length > 0 && (
                <div className="checkout_right">
                    <SubTotal />
                </div>
            )}
            
        </div>
    );
}

export default Checkout

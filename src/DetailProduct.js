import React from 'react';
import "./DetailProduct.css";
import { useStateValue } from "./StateProvider";

function DetailProduct({id,title,image,price}) {
    const [initialState,dispatch] = useStateValue();   
    const addToCart = () => {
        dispatch({
            type:'ADD_TO_CART',
            item:{
                id: id,
                title: title,
                image:image,
                price:price
            },
        })
        };
    return (
        <div className="product_detail">
           <div className="image_view">
            <img src={image} alt="ima"/>
            </div>
            <div className="detail_product">
            <p className="Product_title">{title}</p>
            <p className="price">
                <small>Rs</small>
            <strong>{price}</strong>
            </p>
            <button className="add_cart" onClick={addToCart}>Add To Cart</button>
            </div>
           
    </div>

    )
}

export default DetailProduct

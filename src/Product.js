import React from 'react';
import "./Product.css";
import { useStateValue } from "./StateProvider";
//import { Link } from "react-router-dom";

function Product({id,title,image,price}) {
    const [,dispatch] = useStateValue();
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
// const viewItem = () => {
//     dispatch({
//         type:'VIEW_ITEM',
//         item:{
//             id: id,
//             title: title,
//             image:image,
//             price:price
//         },
//     })
//     };

    return (
        <div className="product">
            <div className="info">
            <p>{title}</p>
            <p className="price">
                <small>Rs</small>
    <strong>{price}</strong>
            </p>
            </div>
            <img src={image} alt="product" />
            {/* <Link to="/Detail">
            <button className="viewItem" onClick={viewItem}>View Item</button>
                
            </Link> */}
            <button onClick={addToCart}>Add To Cart</button>
        </div>
    )
}

export default Product

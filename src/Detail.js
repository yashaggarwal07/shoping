import React from 'react';
import { useStateValue } from "./StateProvider";
import DetailProduct from "./DetailProduct";

function Detail() {
 const [{ cart }] = useStateValue();
 return (
     <div>
 {cart?.map(item =>{
    return(
         <DetailProduct 
         id = {item.id}
         title ={item.title}
         image = {item.image}
         price = {item.price}
         />
)
    })}
    </div>
 )
}

export default Detail

import React from 'react';
import "./SubTotal.css";
// import CurrencyFormat from "react-currency-format";
// import { useStateValue } from "./StateProvider";
// import { getCartTotal } from './reducer';

function SubTotal() {

//const [{cart},dispatch] = useStateValue();


    return (
        <div className="subtotal">  

        {/* <CurrencyFormat 

        // renderText={(value) => (
        //     <>
        //     <p>
        // SubTotal ({cart.length} items): <strong>{` ${value}`}</strong>
        //     </p>
        //     <small>Place Your Order</small>
        //     </>
        // )}
        decimalFormat={2}
        value={getCartTotal(cart)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"Rs"}
        /> */}
            <button>Proceed to checkout</button>
        </div>
    )
}

export default SubTotal

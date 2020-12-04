import React from 'react';
import "./SubTotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getCartTotal } from './reducer';

function SubTotal() {
    const [{cart}] = useStateValue();
    return (
        <div className="subtotal">  
        <p>SubTotal of Items</p>
        <CurrencyFormat className="value_items"
        renderText={(value) =>(
            <>
            <p>
        SubTotal ({cart.length} items): <strong>{` ${value}`}</strong>
            </p>
            
            </>
        )}

        decimalScale={2}
        value={getCartTotal(cart)}
        displaytext={"text"}
        thousandSeparator={true}
        prefix={"Rs"}
        />
<small>This Order is ready to palce</small>
            <button>Proceed to checkout</button>
        </div>
    )
}

export default SubTotal

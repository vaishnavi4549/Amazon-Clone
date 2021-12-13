import React from 'react'
import './subtotal.css';
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import {getBasketTotal} from './Reducer';
function Subtotal() {
    const [{basket},dispatch] = useStateValue();
    console.log(getBasketTotal(basket))
    return (
        <div className="subtotal">
            <CurrencyFormat
            renderText = {(value)=>(
                <>
                    <p>
                    Subtotal ({basket.length} items): <strong>{value}</strong>
                    </p>
                    <small className="subtotal_gift">
                        <input type="checkbox"/>This order contains a gift
                    </small>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)} // Part of the homework
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            />
            <button>Proceed toCheckout</button>
        </div>
    )
}

export default Subtotal

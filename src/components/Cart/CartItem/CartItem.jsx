import React from 'react';
import './CartItem.scss';

import {RiDeleteBin2Fill} from 'react-icons/ri';

function CartItem({cartItem}) {
    return (
        <div className="cartItem">
            <div className="cartLeft">
                <div className="cartImg">
                    <img src={cartItem.image.url} alt=""></img>
                </div>
                <div className="cartDetail">
                    <h3>{cartItem.name}</h3>
                    <p>{cartItem.price.formatted_with_symbol}</p>
                    <p>Quantity: <b>{cartItem.quantity}</b></p>
                </div>
            </div>
            <div className="cartRight">
                <button>
                    <RiDeleteBin2Fill />
                </button>
                
            </div>
            
        </div>
    )
}

export default CartItem

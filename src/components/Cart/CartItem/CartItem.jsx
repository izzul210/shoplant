import React from 'react';
import './CartItem.scss';

import {RiDeleteBin2Fill} from 'react-icons/ri';

function CartItem({cartItem, onUpdateCartQty, onRemoveFromCart}) {
    console.log(cartItem);
    
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
                <div className="qtyButton">
                    <button onClick={() => onUpdateCartQty(cartItem.id, cartItem.quantity+1)}><h3>+</h3></button>
                    <h5>{cartItem.quantity}</h5>
                    <button onClick={() => onUpdateCartQty(cartItem.id, cartItem.quantity-1)}><h3>-</h3></button>
                </div>
                <button className="deleteButton" onClick={() => onRemoveFromCart(cartItem.id)}>
                    <RiDeleteBin2Fill />
                </button>
                
            </div>
            
        </div>
    )
}

export default CartItem

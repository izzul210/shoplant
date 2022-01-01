import React from 'react';
import './CartItem.scss';
import {CloseButton} from 'react-bootstrap';

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
                    <h4>{cartItem.name}</h4>
                    <h4 style={{color: 'darkGreen'}}>{cartItem.price.formatted_with_symbol}</h4>
                    <p>Quantity: <b>{cartItem.quantity}</b></p>
                </div>
            </div>
            <div className="cartRight">
                <div className="qtyButton">
                    <button onClick={() => onUpdateCartQty(cartItem.id, cartItem.quantity-1)}>-</button>
                    <h5>{cartItem.quantity}</h5>
                    <button onClick={() => onUpdateCartQty(cartItem.id, cartItem.quantity+1)}>+</button>
                </div>
                <button className="deleteButton" onClick={() => onRemoveFromCart(cartItem.id)}>
                    <CloseButton />
                </button>
                
            </div>
            
        </div>
    )
}

export default CartItem

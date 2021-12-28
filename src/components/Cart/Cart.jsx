import React from 'react';
import './Cart.scss';
import {Link} from 'react-router-dom';
import CartItem from './CartItem/CartItem';

//Bootstrap
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function Cart({cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart}) {
    const cartList = [];

    console.log(cart);

    if(!cart.line_items){
        return 'Loading...'
    } else if(cart.line_items === 0){
        return <h1>You have no items in your shopping cart. Go and add some buddy!</h1>
    } else{
        cart.line_items.map((item) => (
            cartList.push(
               <CartItem cartItem={item}
                         onUpdateCartQty={handleUpdateCartQty}
                         onRemoveFromCart={handleRemoveFromCart} />
            )
        ))
    }

    return (
        <div className="cart">
            <Container>
                <h1>Order Summary</h1>
                <div className="cartContainer">
                    <div className="cartItems">
                        {cartList}
                    </div>
                    <div className="cartBelow">
                        <div className="cartTotal">
                            <h2>Total Amount: <b style={{color:'darkGreen'}}>{cart.subtotal.formatted_with_symbol}</b></h2>
                        </div>
                        <div className="cartButtons">
                            <Button variant="warning" onClick={handleEmptyCart}>Empty Cart</Button>
                            <Link to="/checkout">
                                <Button variant="success">Checkout</Button>
                            </Link>
                            
                        </div>
                    </div>
                    
                </div>
            </Container>
        </div>
    )
}

export default Cart

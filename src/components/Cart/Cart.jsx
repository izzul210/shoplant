import React from 'react';
import './Cart.scss';
import {Link} from 'react-router-dom';
import CartItem from './CartItem/CartItem';
import {CgTrashEmpty} from 'react-icons/cg';
import {MdOutlineAddShoppingCart} from 'react-icons/md';

//Bootstrap
import Container from 'react-bootstrap/Container';

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
                <h1>Shopping Cart</h1>
                <div className="cartContainer">
                    <div className="cartItems">
                        {cartList}
                    </div>
                    <hr/>
                    <div className="cartBelow">
                        <div className="cartTotal">
                            <h2>Total </h2><h2><b style={{color:'darkGreen'}}>{cart.subtotal.formatted_with_symbol}</b></h2> 
                        </div>
                        <div className="cartButtons">
                            <div className="back">
                                <Link to="/">
                                    <button><MdOutlineAddShoppingCart/></button>
                                </Link>
                            </div>
                            <div className="shopButton">
                            <button className="empty" onClick={handleEmptyCart}><CgTrashEmpty/>Empty Cart</button>
                            <Link to="/checkout">
                                <button className="checkout" >Checkout</button>
                            </Link>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </Container>
        </div>
    )
}

export default Cart

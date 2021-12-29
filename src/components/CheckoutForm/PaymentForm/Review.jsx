import React from 'react';
import './PaymentForm.scss';

function Review({checkoutToken}) {
    return (
        <div className="checkoutReview">
            <h2>Order Summary</h2>
            {checkoutToken.live.line_items.map((product) => (
                <div key={product.name} className="productDesc">
                    <div>
                        <h4>{product.name}</h4>
                        <p>Quantity: {product.quantity}</p>
                    </div>
                    <h5>{product.line_total.formatted_with_symbol}</h5>     
                </div>
            ))}
            <h3>Total</h3>
            <h6>{checkoutToken.live.subtotal.formatted_with_symbol}</h6>
        </div>
    )
}

export default Review

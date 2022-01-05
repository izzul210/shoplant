import React from 'react';
import './PaymentForm.scss';

function Review({checkoutToken}) {
    console.log('In Review Page: checkoutToken');
    console.log(checkoutToken);

    return (
        <div className="checkoutReview">
            <h4>Order Summary</h4>
            {checkoutToken.live.line_items.map((product) => (
                <div key={product.name} className="productDesc">
                    <div className="productImage">
                        <img src={product.image.url} alt=""></img>
                    </div>
                    <div className="productDetail">
                        <h4>{product.name}</h4>
                        <div style={{display: 'flex', gap: '10px'}}><h5>{product.line_total.formatted_with_symbol}</h5> <p style={{color: 'green'}}>x {product.quantity}</p></div>  
                    </div>
                       
                </div>
            ))}
            <hr />
            <div className="productTotal">
                <h4>Total</h4>
                <h2 style={{color: 'green'}}>{checkoutToken.live.subtotal.formatted_with_symbol}</h2>
            </div>
        </div>
    )
}

export default Review

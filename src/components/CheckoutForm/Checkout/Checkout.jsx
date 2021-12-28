import React, { useState } from 'react';
import './Checkout.scss';

function Checkout() {
    const [activeStep, setActiveStep] = useState(0);
    return (
        <div className="checkout">
            <h1>This is Checkout!</h1>
        </div>
    )
}

export default Checkout

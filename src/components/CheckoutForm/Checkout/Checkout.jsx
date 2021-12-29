import React, { useState, useEffect } from 'react';
import './Checkout.scss';
import { Container } from 'react-bootstrap';
import { Stepper, Step } from 'react-form-stepper';
import AddressForm from '../AddressForm/AddressForm';
import PaymentForm from '../PaymentForm/PaymentForm';
import { commerce } from '../../../lib/commerce';

const steps = ['Shipping Address', 'Payment Details'];

function Checkout({cart}) {
    const [activeStep, setActiveStep] = useState(0);
    const [checkoutToken, setCheckoutToken] = useState(null);

    //Generate checkout token as soon as enter Checkout page
    useEffect(() => {
        //Since useEffect can't use async, we have to generate a function within it and call it
        const generateToken = async() => {
            try{
                const token = await commerce.checkout.generateToken(cart.id, { type: 'cart'});
                console.log(token);
                setCheckoutToken(token);
            } catch (error) {

            }
        }

        generateToken()
    }, [cart]);

    const Form = () => activeStep === 0 
        ? <AddressForm checkoutToken={checkoutToken}/>
        : <PaymentForm />

    return (
        <Container>
            <div className="checkout">
                <Stepper activeStep={activeStep}>
                    {steps.map((step) => (
                        <Step label={step} />
                    ))}
                </Stepper> 
                {activeStep === steps.length ? <h1>Confirmation!</h1> : checkoutToken && <Form />}
            </div>
        </Container>
            
       
    )
}

export default Checkout

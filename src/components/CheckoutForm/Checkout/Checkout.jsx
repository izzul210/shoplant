import React, { useState, useEffect } from 'react';
import './Checkout.scss';
import { Container, Button, Spinner } from 'react-bootstrap';
import { Stepper, Step } from 'react-form-stepper';
import AddressForm from '../AddressForm/AddressForm';
import PaymentForm from '../PaymentForm/PaymentForm';
import { commerce } from '../../../lib/commerce';
import {Link} from 'react-router-dom';

const steps = ['Shipping Address', 'Payment Details'];

function Checkout({cart, order, onCaptureCheckout, error}) {
    const [activeStep, setActiveStep] = useState(0);
    const [checkoutToken, setCheckoutToken] = useState(null);
    const [shippingData, setShippingData] = useState({});
    const [isFinished, setIsFinished] = useState(false);

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

    const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
    const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);


    const next = (data) => {
        setShippingData(data);
        nextStep();
        console.log('After nextStep');
    }

    const timeout = () => {
        setTimeout(() => {
            setIsFinished(true)
        }, 5000);
    }

    const Form = () => activeStep === 0 
        ? <AddressForm checkoutToken={checkoutToken} 
                       next={next}/>
        : <PaymentForm shippingData={shippingData} 
                       checkoutToken={checkoutToken} 
                       nextStep={nextStep}
                       backStep={backStep}
                       onCaptureCheckout={onCaptureCheckout}
                       timeout={timeout} />


    let Confirmation = () => order.customer ? (
        <div>
            <h3>Thank you for your purchase, {order.customer.firstname} {order.customer.lastname}</h3>
            <br/>
            <h5>Order ref: {order.customer_reference} </h5>
            <Link to="/">
                <Button>Back to Home</Button>
            </Link>
        </div>
    ) : isFinished ? (
        <div>
            <h3>Thank you for your purchase </h3>
            <br/>
            <Link to="/">
                <Button>Back to Home</Button>
            </Link>
        </div>
    ) : (
        <div>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    )

    if(error){
        <>
         <h5>Error: {error}</h5>
         <br/>
         <Link to="/">
             <Button>Go back Home</Button>
         </Link>
        </>
    }

    return (
        <Container>
            <div className="checkout">
                <Stepper activeStep={activeStep}>
                    {steps.map((step) => (
                        <Step label={step} />
                    ))}
                </Stepper> 
                {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
            </div>
        </Container>
            
       
    )
}

export default Checkout

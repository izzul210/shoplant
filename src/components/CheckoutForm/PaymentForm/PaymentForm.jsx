import React from 'react';
import Review from './Review';
import { Elements, CardElement, ElementsConsumer} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import {Button} from 'react-bootstrap';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

function PaymentForm({checkoutToken, shippingData, backStep, onCaptureCheckout, nextStep}) {
    const handleSubmit = async (event, elements, stripe) => {
        event.preventDefault();

        if(!stripe || !elements) return;

        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({type: 'card', card: cardElement });

        if(error){
            console.log('Error when click pay!')
            console.log(error);
        } else{
            const orderData = {
                line_items: checkoutToken.live.line_items,
                customer: {
                    firstname: shippingData.firstName,
                    lastname: shippingData.lastName,
                    email: shippingData.email
                },
                shipping: {
                    name: 'Primary',
                    street: shippingData.address,
                    town_city: shippingData.city,
                    county_state: shippingData.shippingSubdivision,
                    postal_zip_code: shippingData.postal,
                    country: shippingData.shippingCountry
                },
                fulfillment: {
                    shipping_method: shippingData.shippingOption
                },
                payment:{
                    gateway: 'stripe',
                    stripe:{
                        payment_method_id: paymentMethod.id
                    }
                }
            }

            console.log('orderData');
            console.log(orderData);

            onCaptureCheckout(checkoutToken.id, orderData);
            nextStep();
        }
    }

    return (
        <div>
            <Review checkoutToken={checkoutToken}/>
             <br />
             <h4>Payment Method</h4>
             <Elements stripe={stripePromise}>
                 <ElementsConsumer>
                     {({ elements, stripe }) => (
                         <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
                             <CardElement />
                             <br/><br/>
                             <div>
                                 <Button onClick={backStep}>Back</Button>
                                 <Button type="submit" disabled={!stripe} >
                                     Pay { checkoutToken.live.subtotal.formatted_with_symbol }
                                 </Button>
                             </div>
                         </form>
                     )}
                 </ElementsConsumer>
             </Elements>
        </div>
    )
}

export default PaymentForm

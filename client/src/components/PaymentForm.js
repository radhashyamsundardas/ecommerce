import React, {useState} from 'react';
import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js';
import axios from 'axios';

//from https://www.npmjs.com/package/@stripe/react-stripe-js
//from https://www.youtube.com/watch?v=XKWJFpZYVAQ

const CARD_OPTIONS = {
    iconStyle: "solid", 
    style: {
      base: {
        iconColor: '#c4f0ff',
        color: '#fff',
        fontWeight: '500',
        fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
        fontSize: '16px',
        fontSmoothing: 'antialiased',
        ':-webkit-autofill': {
          color: '#fce883',
        },
        '::placeholder': {
          color: '#87BBFD',
        },
      },
      invalid: {
        iconColor: '#FFC7EE',
        color: '#FFC7EE',
      },
    },
  };


export default function PaymentForm() {
    const [success, setSuccess] = useState(false);
    const stripe = useStripe();
    const elements = useElements();


    const handleSubmit = async (event) => {
        event.preventDefault();
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })

        //check if error
        if(!error) {
            try{
                const{id} = paymentMethod;
                const response = await axios.post("http://localhost:4000/payment", {
                    amount: 1000, //$10.00
                    id
                })
                if(response.data.success) {
                    console.log("Payment was Successful");
                    setSuccess(true);
                }
            } catch (error){
                console.log("error", error);
            }
        } else {
            console.log(error.message)
        }
    }
    return (
        <>
         {!success ?
            <form onSubmit = {handleSubmit}>
                <fieldset className="FormGroup">
                    <div className="FormRow">
                        <CardElement options = {CARD_OPTIONS}/>
                    </div>
                </fieldset>
                <button>Buy Now</button>
            </form> 
            :
            <div>
                <h2>You just purchased exercise equipment</h2>
            </div>
        }   
        </>
    )
}
// PaymentButton.js
import React, { useEffect, useState } from 'react';
import { config } from '../../../config';

const PaymentButton = ({amountLabel,amount, currency, receipt, background, btnbg,width}) => {
  const [isRazorpayLoaded, setIsRazorpayLoaded] = useState(false);

  useEffect(() => {
    // Check if Razorpay is loaded
    if (typeof window.Razorpay === 'undefined') {
      // Load Razorpay script dynamically
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => setIsRazorpayLoaded(true);
      script.onerror = () => alert('Razorpay SDK failed to load. Are you online?');
      document.body.appendChild(script);
    } else {
      setIsRazorpayLoaded(true);
    }
  }, []);

  const handlePayment = async () => {
    if (!isRazorpayLoaded) {
      alert('Razorpay SDK is not loaded. Please try again later.');
      return;
    }

    try {
      // Create order from backend
      const orderResponse = await fetch(`${config.BASE_URL}/create-order`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount, currency, receipt }),
      });

      const orderData = await orderResponse.json();

      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY_ID, // Your Key ID from Razorpay Dashboard
        amount: orderData.amount,
        currency: orderData.currency,
        name: 'Thoughtcoders',
        description: 'Test Transaction',
        order_id: orderData.id, // Order ID generated in the backend
        handler: async (response) => {
          // Verify payment in backend
          const verifyResponse = await fetch(`${config.BASE_URL}/verify-payment`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(response),
          });

          const verifyData = await verifyResponse.json();

          if (verifyData.status === 'success') {
            alert('Payment Successful');
          } else {
            alert('Payment Verification Failed');
          }
        },
        theme: {
          color: '#3399cc',
        },
      };

      // Create Razorpay instance and open the checkout
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error('Payment Error:', error);
    }
  };

  return(
    <div className="card text-center" style={{ width:width }}>
        <div className={`card-body ${background} rounded`}>
            <h4 className="card-text">
                {amountLabel}
            </h4>
            <div className={`btn ${btnbg} px-5`} onClick={handlePayment}>
                Buy Now
            </div>
        </div>
  </div>
    )
};

export default PaymentButton;

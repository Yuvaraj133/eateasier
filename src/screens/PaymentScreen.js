import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Logo from '../components/Logo';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column', // Adjust to column direction
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#fff', // Background color
  },
}));

const RazorpayPaymentButton = () => {
  const classes = useStyles();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
    script.setAttribute('data-payment_button_id', 'pl_NZWZIoUvIA07RZ');

    const form = document.querySelector('form');

    if (form) {
      form.appendChild(script);
    }
 
    return () => {
      if (form && form.contains(script)) {
        console.log("demo")
      }
    };
  }, []);

  return (   
    <div className={classes.container}>
      {/* Your Logo component */}
      <Logo Large/>
      <form>
        {/* Razorpay Payment Button will be added dynamically */}
        <div className="razorpay-embed-btn" data-url="https://rzp.io/l/nopQR9T"></div>
      </form>
    </div>
  );
};

export default RazorpayPaymentButton;

import React, { useEffect } from "react";
import "./payment.scss";

function Payment() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.stripe.com/v3/buy-button.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="page-container">
      <div className="payment-container">
        <h1>Purchase your Advertisement</h1>
        <stripe-buy-button
          buy-button-id="buy_btn_1NraxeJWIcTJl9e0qgb3UdfC"
          publishable-key="pk_test_51NrCChJWIcTJl9e0XDkcyRdqg2bzmiFO90lXy0AFIuSxAjpAIcRrBU3UVoQNF3Wq9I2feKXCuLiADfgbOA0pl9oc00gAzpJ7Sk"
        >
          {/* Your Stripe Buy Button content goes here */}
        </stripe-buy-button>
      </div>
    </div>
  );
}

export default Payment;
import { useState, useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const KEY =
  "pk_test_51OqpN8JVz8zGQIqo5QMKcM3KmOQnjEjwpCxMmXbqWFYkNBJyyU19IGLB31Jv2Q71Tqg56MtOPY3umUmkiaxNoxYr00pbjSn3TT";
const Payment = () => {
  const [stripeToken, setStripeToken] = useState(null);

  const onToken = (token) => {
    setStripeToken(token);
    console.log(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/checkout/payment",
          {
            id: stripeToken.id,
            object: "balance_transaction",
            amount: 1000,
            available_on: 1678043844,
            currency: "NGN",
            description: null,
            exchange_rate: null,
            fee: 0,
            fee_details: [],
            net: -400,
            reporting_category: "transfer",
            source: stripeToken.id,
            status: "available",
            type: "transfer",
          }
        );
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken]);
  return (
    <div className=" flex justify-center  mt-[300px] ">
      <div className="payment  bg-amber-600 h-60 w-[600px] flex rounded-md justify-center items-center">
        <StripeCheckout
          name="EL-ZIZZAH" // the pop-in header title
          description="your total is 10#" // the pop-in header subtitle
          image="https://www.vidhub.co/assets/logos/vidhub-icon-2e5c629f64ced5598a56387d4e3d0c7c.png" // the pop-in header image (default none)
          amount={1000} // cents
          currency="NGN"
          token={onToken}
          bitcoin={true} // accept Bitcoins (default false)
          shippingAddress
          billingAddress={false}
          stripeKey={KEY}
        >
          <button className="  bg-white  w-[200px] h-24">MAKE PAYMENT </button>
        </StripeCheckout>
      </div>
    </div>
  );
};

export default Payment;

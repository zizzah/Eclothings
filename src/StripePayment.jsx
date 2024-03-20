import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
import axios from "axios";

const KEY =
  "pk_test_51OqpN8JVz8zGQIqo5QMKcM3KmOQnjEjwpCxMmXbqWFYkNBJyyU19IGLB31Jv2Q71Tqg56MtOPY3umUmkiaxNoxYr00pbjSn3TT";

const StripePayment = () => {
  const [product, setProduct] = useState({
    name: "Go FullStack with KnowledgeHut",
    price: 1000,
    productOwner: "KnowledgeHut",
    description:
      "This beginner-friendly Full-Stack Web Development Course is offered online in blended learning mode, and also in an on-demand self-paced format.",
    quantity: 1,
  });

  const [products, setProducts] = useState([
    {
      name: "Go FullStack with KnowledgeHut",
      price: 1000,
      productOwner: "KnowledgeHut",
      description:
        "This beginner-friendly Full-Stack Web Development Course is offered online in blended learning mode, and also in an on-demand self-paced format.",
      quantity: 1,
    },

    {
      name: "Go FullStack with KnowledgeHut",
      price: 1000,
      productOwner: "KnowledgeHut",
      description:
        "This beginner-friendly Full-Stack Web Development Course is offered online in blended learning mode, and also in an on-demand self-paced format.",
      quantity: 1,
    },
    // Add more products as needed
    // {
    //   name: "Another Product",
    //   price: 2000,
    //   ...
    // },
  ]);

  const mutiplePayment = async () => {
    const stripe = await loadStripe(KEY);
    const lineItems = products.map((product) => ({
      price_data: {
        currency: "NGN",
        product_data: {
          name: product.name,
        },
        unit_amount: product.price * 100,
      },
      quantity: product.quantity,
    }));

    const session = await axios.post(
      "http://localhost:5000/api/checkout/makepayment",
      { products },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const result = stripe.redirectToCheckout({
      sessionId: session.data.id,
    });

    if (result.error) {
      console.log(result.error);
    }
  };

  const makePayment = async () => {
    const stripe = await loadStripe(KEY);
    const body = { product };
    const headers = {
      "Content-Type": "application/json",
    };

    const response = await fetch(
      "http://localhost:5000/api/create-checkout-session",
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      }
    );

    const session = await response.json();

    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log(result.error);
    }
  };

  const makePayments = async () => {
    const stripe = await loadStripe(KEY);
    const body = { product };
    const headers = {
      "Content-Type": "application/json",
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/checkout/payment",
        body,
        { headers }
      );

      const session = response.data;
      const result = stripe.redirectToCheckout({ sessionId: session.id });

      if (result.error) {
        console.log(result.error);
      }
    } catch (error) {
      console.error(error);
      // Handle errors appropriately, e.g., display an error message to the user
    }
  };

  return (
    <>
      <Card style={{ width: "20rem" }}>
        <Card.Img
          variant="top"
          src="https://images.pexels.com/photos/12428359/pexels-photo-12428359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Button variant="primary" onClick={makePayments}>
            Buy Now for {product.price}
          </Button>
        </Card.Body>
      </Card>

      <div>
        {/* Render your product details and UI here */}
        {/* For example, display product names, prices, and quantities */}
        {products.map((product, index) => (
          <div key={index}>
            <h3>{product.name}</h3>
            <p>Price: NGN {product.price}</p>
            <p>Quantity: {product.quantity}</p>
          </div>
        ))}
        <Button variant="primary" onClick={mutiplePayment}>
          Buy Now for
        </Button>{" "}
      </div>
    </>
  );
};

export default StripePayment;

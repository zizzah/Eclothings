/* eslint-disable no-unused-vars */
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import axios from "axios";
import {  useSelector } from "react-redux";


const KEY =
  "pk_test_51OqpN8JVz8zGQIqo5QMKcM3KmOQnjEjwpCxMmXbqWFYkNBJyyU19IGLB31Jv2Q71Tqg56MtOPY3umUmkiaxNoxYr00pbjSn3TT";

const StripePayment = () => {
  const quant = useSelector((state) => state.cart);
  const order = quant.product
  const amout =600

  const [product, setProduct] = useState({
    name: "Go FullStack with KnowledgeHut",
    price: amout,
    productOwner: "KnowledgeHut",
    description:
      "This beginner-friendly Full-Stack Web Development Course is offered online in blended learning mode, and also in an on-demand self-paced format.",
    quantity: 1,
  });

  const [price, setPrice] =useState(() => {
    // Check if order exists and has products before mapping
    if (!order || !order.length) {
      return []; // Return an empty array if no order data
    }
  
    return order.map((orderItem, index) => ([
       orderItem.product.price* 100, // Handle missing price with default
      
    ]));
  });

  const [products, setProducts] = useState(() => {
    // Check if order exists and has products before mapping
    if (!order || !order.length) {
      return []; // Return an empty array if no order data
    }
  
    return order.map((orderItem, index) => ({
      name: orderItem.product.title,
      price: orderItem.product.price *100, // Handle missing price with default
      productOwner: orderItem.product.img,
      description: orderItem.product.desc,
   
     quantity: orderItem.quantity,
    }));
  });

const [multipleProduct, setMultipleProduct] = useState(() => {
  // Check if order exists and has products before mapping
  if (!order || !order.length) {
    return []; // Return an empty array if no order data
  }

  return order.map((orderItem, index) => ({
    name: orderItem.product.title,
    price: orderItem.product.price || 0, // Handle missing price with default
    productOwner: orderItem.product.img,
    description: orderItem.product.desc,
 
   quantity: orderItem.quantity,
  }));
});

  console.log(price)

  useEffect(() => {
    const processedProducts = order.map((item) => ({
            description:item.product.desc,
      name: item.product.title,
      price: 200,
      productOwner:item.product.img,
      quantity: item.quantity,

    }));
   //  setMultipleProduct(processedProducts)
    // Update products state only if order or processedProducts changes
    if (JSON.stringify(products) !== JSON.stringify(processedProducts)) {
    // setProducts(processedProducts);
    }
  }, [order]);
  

  const multiplePayment = async () => {
    const stripe = await loadStripe(KEY);
  
    // Assuming `order` is an array of objects with product details
    // Handle potential missing or incomplete order data
    if (!order || !order.length) {
      console.error("Order data is missing or empty. Cannot create payment session.");
      return; // Or handle this situation appropriately in your application
    }
  
    // Extract relevant data from order and multipleProduct
  
    try {
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
        console.error("Error redirecting to checkout:", result.error);
      } // Handle errors appropriately (e.g., display error message to user)
    } catch (error) {
      console.error("Error creating payment session:", error);
    } // Handle general errors during Axios request
  };
  
  // eslint-disable-next-line no-unused-vars
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
          <Button variant="primary" onClick={makePayment}>
            Buy Now for {product.price}
          </Button>
        </Card.Body>
      </Card>

      <div>
        {/* Render your product details and UI here */}
        {/* For example, display product names, prices, and quantities */}
        {products.map((product, index) => (
          <div key={index}>
            <h3>{product.title}</h3>
            <p>Price: NGN {product.price}</p>
            <p>Quantity: {product.quantity}</p>
            <img style={{width:'200px',height:'200px'}}
          src={product.productOwner
}
        />
          </div>
        ))}
        <Button variant="primary" onClick={multiplePayment}>
          Buy Now for
        </Button>{" "}
      </div>
    </>
  );
};

export default StripePayment;

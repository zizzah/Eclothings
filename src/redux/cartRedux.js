import { createSlice } from "@reduxjs/toolkit";

const localStorageCart = localStorage.getItem('cart');
const parsedCart = localStorageCart ? JSON.parse(localStorageCart) : []; // Handle empty localStorage



const cartSlice = createSlice({
  name: "cart",
  initialState: {
    product: parsedCart? parsedCart:[],
    quantity: parsedCart? parsedCart.length : 0, // Initialize quantity based on parsed cart or 0
    total: parsedCart? parsedCart.reduce((accumulator, currentProduct) => {
      const productPrice = currentProduct?.product?.price || 0; // Handle potential null price
      const productQuantity = currentProduct?.quantity || 1; // Handle potential null quantity
      return accumulator + (productPrice * productQuantity);
    }, 0) : 0, 
    price: parsedCart? parsedCart.price:[],
    // Initialize total to 0 if cart is empty
  },
  reducers: {
    addProduct: (state, action) => {
      if (!action.payload) { // Check if payload exists
        return state; // Return unmodified state if null
      }

      const newProduct = action.payload;
      console.log(newProduct) // Store payload for clarity

      return {
        ...state,
        product: [...state.product, newProduct],
        quantity: state.quantity + 1,
        total: state.total + (newProduct.price || 0) * newProduct.quantity,
        price: newProduct.price
      };
    }
  },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;

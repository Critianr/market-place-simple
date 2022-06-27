// import React, { useState, useEffect, useContext } from "react";
// import { CartContext } from "../../CartContext";
// import "./style.scss";
// import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

// export default function CheckoutForm(props) {

//     const cardStyle = {
//     style: {
//       base: {
//         color: "#32325d",
//         fontFamily: "Arial, sans-serif",
//         fontSmoothing: "antialiased",
//         fontSize: "16px",
//         "::placeholder": {
//           color: "#32325d",
//         },
//       },
//       invalid: {
//         color: "#fa755a",
//         iconColor: "#fa755a",
//       },
//     },
//   };
//   const handleChange = async (event) => {
//       // Listen for changes in the CardElement
//       // and display any errors as the customer types their card details
    
//   };
//   const handleSubmit = async (ev) => {
//     ev.preventDefault();
//     setProcessing(true);
//   }
//   return (
//     <form className="form-stripe" id="payment-form" onSubmit={handleSubmit}>
//       <h4>Total: ${props.price}</h4>
//       <CardElement
//         id="card-element"
//         options={cardStyle}
//         onChange={handleChange}
//       />
//       <button
//         className="button-stripe"
//         disabled={processing || disabled || succeeded}
//         id="submit"
//       >
//         <span id="button-text">
//           {processing ? <div className="spinner" id="spinner"></div> : "Pay"}
//         </span>
//       </button>
//       {/* Show any error that happens when processing the payment */}
//       {error && (
//         <div className="card-error" role="alert">
//           {error}
//         </div>
//       )}
//       {/* Show a success message upon completion */}
//       <p className={succeeded ? "result-message" : "result-message hidden"}>
//         Payment succeeded, see the result in your
//         <a href={`https://dashboard.stripe.com/test/payments`}>
//           {" "}
//           Stripe dashboard.
//         </a>{" "}
//         Refresh the page to pay again.
//       </p>
//     </form>
//   );
// }

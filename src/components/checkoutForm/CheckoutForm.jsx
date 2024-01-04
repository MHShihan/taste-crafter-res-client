import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const CheckoutForm = () => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");

  const stripe = useStripe();
  const elements = useElements();

  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [cart, refetch] = useCart();

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/user/create-payment-intent", { price: totalPrice })
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("Payment error", error);
      setError(error.message);
    } else {
      console.log("payment method", paymentMethod);
      setError("");
    }

    // Confirm Payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("Confirm error");
    } else {
      console.log("Payment Intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("Transaction ID:", paymentIntent.id);
        setTransactionId(paymentIntent.id);

        // Save the payment on the data base
        const payment = {
          email: user.email,
          name: user?.displayName,
          price: totalPrice,
          transactionId: paymentIntent.id,
          date: new Date(), //utc date convert. use moment js to convert
          cartIds: cart.map((item) => item._id),
          menuIds: cart.map((item) => item.menuId),
          status: "pending",
        };

        const res = await axiosSecure.post("/user/payment", payment);
        if (res.data?.paymentResult?.insertedId) {
          console.log("Payment info saved", res.data);
          Swal.fire({
            title: "Good job!",
            text: "Payment Successful!",
            icon: "success",
            showConfirmButton: false,
            position: "top-end",
            timer: 1500,
          });
        }
        refetch();
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className="btn text-white bg-[#D1A054] hover:bg-[#e0ac5d] text-center my-4 "
        type="submit"
        disabled={!stripe || !clientSecret || transactionId}
      >
        Pay
      </button>
      <p className="text-red-600">{error}</p>
      {transactionId && (
        <p className="text-green-600">Your transaction id: {transactionId}</p>
      )}
    </form>
  );
};

export default CheckoutForm;

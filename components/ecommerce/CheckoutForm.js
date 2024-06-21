import {useState} from "react";
import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js";
import {clearCart} from "../../redux/action/cart";
import axios from "axios";
import {server} from "../../server";
import {toast} from "react-toastify";

const CheckoutForm = ({ cartItems }) => {
    const [error, setError] = useState(null);
    const stripe = useStripe();
    const elements = useElements();
    let userInfo;
    if (typeof window !== 'undefined') {
        userInfo = JSON.parse(localStorage.getItem('userInfo'));
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setError(error.message);
        } else {
            try {
                // const paymentMethodId = paymentMethod.id;
                const userInfo = JSON.parse(localStorage.getItem('userInfo'));
                // const productDetails = cartItems.map((item) => ({
                //     name: item.product_name,
                //     totalPrice: item.price,
                //     quantity: item.quantity,
                // }));

                // Prepare the product details to be sent to your backend
                const productDetails = cartItems.reduce((acc, item) => {
                    acc[item.product_name] = {
                        name: item.product_name,
                        totalPrice: item.price,
                        quantity: item.quantity,
                    };
                    return acc;
                }, {});

                console.log(productDetails);

                // Send the product details to your backend
                const response = await axios(`${server}/orders/${userInfo.user.id}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    data: productDetails,
                });

                if (response.ok) {
                    // Payment successful, handle the response as needed
                    console.log('Payment successful');
                    clearCart();
                    toast.success('Payment successful');
                } else {
                    // Handle payment error
                    console.error('Payment failed:', response.data);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement />
            {error && <div>{error}</div>}
            <button type="submit" disabled={!stripe}>
                Place Order
            </button>
        </form>
    );
};

export default CheckoutForm
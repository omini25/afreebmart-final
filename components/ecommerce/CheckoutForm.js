import {useState} from "react";
import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js";
import {clearCart} from "../../redux/action/cart";

const CheckoutForm = ({ cartItems }) => {
    const [error, setError] = useState(null);
    const stripe = useStripe();
    const elements = useElements();

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
                const paymentMethodId = paymentMethod.id;
                const userInfo = JSON.parse(localStorage.getItem('userInfo'));
                const productDetails = cartItems.map((item) => ({
                    name: item.product_name,
                    totalPrice: item.price,
                    quantity: item.quantity,
                }));

                // Send the payment method ID, user info, and product details to your backend
                const response = await fetch('/process-payment', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        paymentMethodId,
                        userInfo: userInfo.user,
                        productDetails,
                    }),
                });

                if (response.ok) {
                    // Payment successful, handle the response as needed
                    console.log('Payment successful');
                    clearCart();
                } else {
                    // Handle payment error
                    console.error('Payment failed');
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
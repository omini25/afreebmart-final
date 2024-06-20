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

        const { sessionId } = router.query;

        if (sessionId) {
            const result = await stripe.redirectToCheckout({
                sessionId,
            });

            if (result.error) {
                console.error('Stripe error:', result.error.message);
                toast.error('An error occurred during the payment process.');
            } else {
                // Post cart details to the API
                await axios.post(`${server}/orders/${userInfo.user.id}`, {
                    cartItems,
                    userId: userInfo.user.id,
                });

                toast.success('Order placed successfully!');
                navigate('/order-successful');
            }
        } else {
            toast.error('No session ID provided.');
        }
    };

    // return (
    //     <form onSubmit={handleSubmit}>
    //         <CardElement />
    //         {error && <div>{error}</div>}
    //         <button type="submit" disabled={!stripe}>
    //             Place Order
    //         </button>
    //     </form>
    // );
};

export default CheckoutForm
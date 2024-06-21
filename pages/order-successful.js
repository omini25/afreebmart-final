import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from "../components/layout/Layout";
import { connect } from 'react-redux';
import { clearCart } from '../redux/action/cart'; // Import the clearCart action

const OrderSuccessful = ({ clearCart }) => {
    const router = useRouter();
    const { order_id, session_id: sessionId } = router.query;

    useEffect(() => {
        if (sessionId) {
            clearCart(); // Clear the cart if sessionId exists
        }
    }, [sessionId, clearCart]);

    return (
        <Layout parent="Home" sub="Pages">
            <div>
                <h1>Order Successful</h1>
                <p>Thank you for your purchase!</p>
                <p>Your order ID is: {order_id}</p>
                {sessionId && <p>Your session ID is: {sessionId}</p>}
            </div>
        </Layout>
    );
};

const mapDispatchToProps = {
    clearCart,
};

export default connect(null, mapDispatchToProps)(OrderSuccessful);
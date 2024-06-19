import React from 'react';
import { useRouter } from 'next/router';
import Layout from "../components/layout/Layout";

const OrderSuccessful = () => {
    const router = useRouter();
    const { order_id } = router.query;

    return (
        <Layout parent="Home" sub="Pages">
            <div>
                <h1>Order Successful</h1>
                <p>Thank you for your purchase!</p>
                <p>Your order ID is: {order_id}</p>
            </div>
        </Layout>
    );
};

export default OrderSuccessful;
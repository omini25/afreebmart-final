import { connect } from "react-redux";
import Layout from "../components/layout/Layout";
import {
    clearCart,
    closeCart,
    decreaseQuantity,
    deleteFromCart,
    increaseQuantity,
    openCart
} from "../redux/action/cart";
import {assetServer} from "../assetServer";
import React, { useState, useEffect } from 'react';
import {toast} from "react-toastify";
import {useRouter} from "next/router";
import {loadStripe} from "@stripe/stripe-js";
import axios from "axios";
import {server} from "../server";


const Cart = ({
    openCart,
    cartItems,
    activeCart,
    closeCart,
    increaseQuantity,
    decreaseQuantity,
    deleteFromCart,
    clearCart,
}) => {
    const price = () => {
        let price = 0;
        cartItems.forEach((item) => (price += item.price * item.quantity));

        return price;
    };

    const router = useRouter();
    const [defaultAddress, setDefaultAddress] = useState(null);

    useEffect(() => {
        const fetchDefaultAddress = async () => {
            try {
                const userInfo = JSON.parse(localStorage.getItem('userInfo'));
                const response = await axios.get(`${server}/address/${userInfo.user.id}`);
                const defaultAddr = response.data.address.find(addr => addr.is_default === 1);
                setDefaultAddress(defaultAddr);
            } catch (error) {
                console.error('Failed to fetch address:', error);
            }
        };
        fetchDefaultAddress();
    }, []);

    const [useShippingForBilling, setUseShippingForBilling] = useState(false);

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn');

        if (!isLoggedIn) {
            router.push('/page-login');
            toast('You need to login to access this page!')
        }
    }, []);

    const stripePromise = loadStripe('pk_test_51K4bVzCT7v0Ax3ZCQUKpDk4gTPZ6UuWcJlMpNULOujrGRhsEL4IPAdeZ7KwDXIFEcJ5sLTxm3r2DMCUaQYWbLl2W00W13HDVPl');

    return (
        <>
            <Layout parent="Home" sub="Shop" subChild="Checkout">
                <section className="mt-50 mb-50 " style={{paddingLeft: '50px', paddingRight: '50px'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 mb-40">
                                <h1 className="heading-2 mb-10">Checkout</h1>
                                <div className="d-flex justify-content-between">
                                    <h6 className="text-body">
                                        There are{" "}
                                        <span className="text-brand">{cartItems.length}</span>{" "}
                                        products in your cart
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="row mb-50">

                                    <div className="col-lg-6">
                                        <form
                                            method="post"
                                            className="apply-coupon"
                                        >
                                            <input
                                                type="text"
                                                placeholder="Enter Coupon Code..."
                                            />
                                            <button
                                                className="btn  btn-md"
                                                name="login"
                                            >
                                                Apply Coupon
                                            </button>
                                        </form>
                                    </div>
                                </div>
                                <div className="mb-25">
                                    <h4>Shipping Details</h4>
                                </div>
                                {defaultAddress ? (
                                    <div>
                                        <address>
                                            {defaultAddress.street}, {defaultAddress.city}, {defaultAddress.state}, {defaultAddress.country}, {defaultAddress.zip_code}
                                        </address>
                                    </div>
                                ) : (
                                    <form method="post">

                                        <div className="form-group">
                                            <div className="custom_select">
                                                <select className="form-control select-active">
                                                    <option value="">
                                                        Select an option...
                                                    </option>
                                                    <option value="US">
                                                        USA (US)
                                                    </option>

                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                name="address"
                                                required=""
                                                placeholder="Address *"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                name="billing_address2"
                                                required=""
                                                placeholder="Address line2"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                required=""
                                                type="text"
                                                name="city"
                                                placeholder="City / Town *"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                required=""
                                                type="text"
                                                name="state"
                                                placeholder="State / County *"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                required=""
                                                type="text"
                                                name="zipcode"
                                                placeholder="Postcode / ZIP *"
                                            />
                                        </div>

                                    </form>
                                )}

                                <div className="mb-25 mt-30">
                                    <h4>Billing Details</h4>
                                </div>
                                {defaultAddress ? (
                                    <div>
                                        {/*<address>*/}
                                        {/*    {defaultAddress.street}, {defaultAddress.city}, {defaultAddress.state}, {defaultAddress.country}, {defaultAddress.zip_code}*/}
                                        {/*</address>*/}
                                        <div className="chek-form">
                                            <div className="custome-checkbox pb-15">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    name="checkbox"
                                                    id="differentaddress"
                                                    onChange={() => setUseShippingForBilling(!useShippingForBilling)}
                                                />
                                                <label
                                                    className="form-check-label label_info"
                                                    data-bs-toggle="collapse"
                                                    data-target="#collapseAddress"
                                                    href="#collapseAddress"
                                                    aria-controls="collapseAddress"
                                                    htmlFor="differentaddress"
                                                >
                                                        <span>
                                                            Use Shipping Address for Billing
                                                        </span>
                                                </label>
                                            </div>
                                        </div>
                                        {/*<div>*/}
                                        {/*    <input type="checkbox" id="sameAsShipping" name="sameAsShipping"*/}
                                        {/*           onChange={() => setUseShippingForBilling(!useShippingForBilling)}/>*/}
                                        {/*    <label htmlFor="sameAsShipping">Use Shipping Address for Billing</label>*/}
                                        {/*</div>*/}
                                    </div>
                                ) : null}

                                <form method="post">
                                    {!useShippingForBilling && (
                                        <>
                                            <div className="form-group">
                                                <div className="custom_select">
                                                    <select className="form-control select-active">
                                                        <option value="">Select an option...</option>
                                                        <option value="US">USA (US)</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <input type="text" name="address" required="" placeholder="Address *"/>
                                            </div>
                                            <div className="form-group">
                                                <input type="text" name="billing_address2" required=""
                                                       placeholder="Address line2"/>
                                            </div>
                                            <div className="form-group">
                                                <input required="" type="text" name="city" placeholder="City / Town *"/>
                                            </div>
                                            <div className="form-group">
                                                <input required="" type="text" name="state"
                                                       placeholder="State / County *"/>
                                            </div>
                                            <div className="form-group">
                                                <input required="" type="text" name="zipcode"
                                                       placeholder="Postcode / ZIP *"/>
                                            </div>
                                        </>
                                    )}
                                </form>
                            </div>
                            <div className="col-lg-5">
                                <div className="border p-40 cart-totals ml-30 mb-50">
                                    <div className="d-flex align-items-end justify-content-between mb-30">
                                        <h4>Your Order</h4>
                                        <h6 className="text-muted">Subtotal</h6>
                                    </div>
                                    <div className="divider-2 mb-30"></div>
                                    <div className="table-responsive order_table">
                                        {cartItems && cartItems.length <= 0 && "No Products"}
                                        <table
                                            className={
                                                cartItems && cartItems.length > 0
                                                    ? "table no-border"
                                                    : "d-none"
                                            }
                                        >
                                            <tbody>
                                            {cartItems && cartItems.map((item, i) => (

                                                <tr key={i}>
                                                    <td className="image product-thumbnail">
                                                        <img
                                                            src={`${assetServer}/images/products/${item.image}`}
                                                            alt="#"
                                                        />
                                                    </td>
                                                    <td>
                                                        <h6 className="w-160 mb-5">
                                                            <a>
                                                                {
                                                                    item.product_name
                                                                }
                                                            </a>
                                                            {/*<div className="product-rate-cover">*/}
                                                            {/*    <div className="product-rate d-inline-block">*/}
                                                            {/*        <div*/}
                                                            {/*            className="product-rating"*/}
                                                            {/*            style={{*/}
                                                            {/*                width: "90%",*/}
                                                            {/*            }}*/}
                                                            {/*        ></div>*/}
                                                            {/*    </div>*/}
                                                            {/*    <span className="font-small ml-5 text-muted">*/}
                                                            {/*                {" "}*/}
                                                            {/*        (4.0)*/}
                                                            {/*            </span>*/}
                                                            {/*</div>*/}
                                                        </h6>
                                                        {" "}
                                                    </td>
                                                    <td>
                                                        <h6 className="text-muted pl-20 pr-20">
                                                            x{" "}
                                                            {
                                                                item.quantity
                                                            }
                                                        </h6>
                                                    </td>
                                                    <td>
                                                        <h4 className="text-brand">
                                                            $
                                                            {item.quantity *
                                                                item.price}
                                                        </h4>
                                                    </td>
                                                </tr>

                                            ))}

                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="bt-1 border-color-1 mt-30 mb-30"></div>
                                    <div className="payment_method">
                                        <div className="mb-25">
                                            <h5>Shipping: $5.99</h5>
                                        </div>
                                        <div className="mb-25">
                                            <h5>Total Payment: ${(price() + 5.99).toFixed(2)}</h5>
                                        </div>
                                    </div>
                                    <button
                                        className="btn btn-fill-out btn-block mt-30"
                                        onClick={async (event) => {
                                            try {
                                                // Prevent the default action
                                                event.preventDefault();

                                                const productDetails = cartItems.map(item => ({
                                                    name: item.product_name,
                                                    totalPrice: item.price,
                                                    quantity: item.quantity
                                                }));

                                                // Get user info from local storage
                                                const userInfo = JSON.parse(localStorage.getItem('userInfo'));

                                                // Get Stripe.js instance
                                                const stripe = await stripePromise;

                                                // Call your backend to create the Checkout Session
                                                const response = await fetch(`${server}/create-checkout-session`, {
                                                    method: 'POST',
                                                    headers: {
                                                        'Content-Type': 'application/json'
                                                    },
                                                    body: JSON.stringify({
                                                        productDetails: productDetails,
                                                        user_id: userInfo.user.id
                                                    })
                                                });

                                                const session = await response.json();

                                                // Redirect to Stripe Checkout
                                                const result = await stripe.redirectToCheckout({
                                                    sessionId: session.id,
                                                });

                                                if (result.error) {
                                                    console.error('Stripe error:', result.error.message);
                                                }
                                            } catch (error) {
                                                console.error('An error occurred:', error);
                                            }
                                        }}
                                    >
                                        Place Order
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
};

const mapStateToProps = (state) => ({
    cartItems: state.cart,
    activeCart: state.counter,
});

const mapDispatchToProps = {
    closeCart,
    increaseQuantity,
    decreaseQuantity,
    deleteFromCart,
    openCart,
    clearCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

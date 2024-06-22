import { connect } from "react-redux";
import Layout from "../components/layout/Layout";

import Link from "next/link";
import {
    clearCart,
    closeCart,
    decreaseQuantity,
    deleteFromCart,
    increaseQuantity,
    openCart
} from "../redux/action/cart";
import {assetServer} from "../assetServer";
import {useMediaQuery} from "react-responsive";

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
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
    const price = () => {
        let price = 0;
        if (cartItems) {
            cartItems.forEach((item) => (price += item.price * item.quantity));
        }

        return price;
    };

    const totalPrice = () => {
        let price = 0;
        if (cartItems) {
            cartItems.forEach((item) => (price += item.price * item.quantity));
        }

        return price + 5.99; // Add shipping cost to the total price
    };

    return (
        <>
            <Layout parent="Home" sub="Shop" subChild="Cart">
                <section className="mt-50 mb-50" style={{paddingLeft: '20px', paddingRight: '50px'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-10 col-lg-12 m-auto mb-40">
                                <h1 className="heading-2 mb-10">Your Cart</h1>
                                <div className="d-flex justify-content-between">
                                    <h6 className="text-body">
                                        There are{" "}
                                        <span className="text-brand">{cartItems.length}</span>{" "}
                                        products in your cart
                                    </h6>
                                    {/*<h6 className="text-body">*/}
                                    {/*    <a href="#" className="text-muted">*/}
                                    {/*        <i className="fi-rs-trash mr-5"></i>*/}
                                    {/*        Clear Cart*/}
                                    {/*    </a>*/}
                                    {/*</h6>*/}
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="row table-responsive shopping-summery">
                                    {cartItems && cartItems.length <= 0 && "No Products"}
                                    <table
                                        // className={
                                        //     {cartItems && cartItems.length > 0 ? (
                                        //         "table table-wishlist"
                                        //     ): ("d-none"
                                        //     )}}
                                    >
                                        <thead>
                                        {!isMobile &&
                                            <tr className="main-heading">
                                                <th scope="col">Product</th>
                                                <th scope="col">Unit Price</th>
                                                <th scope="col">Quantity</th>
                                                <th scope="col">Subtotal</th>
                                                <th scope="col" className="end">
                                                    Remove
                                                </th>
                                            </tr>
                                        }
                                        </thead>

                                        <tbody>
                                        {cartItems && cartItems.map((item, i) => (
                                            <tr key={i}>
                                                <td className="image product-thumbnail">
                                                    <img
                                                        src={`${assetServer}/images/products/${item.image}`}
                                                    />
                                                    <h6 className="product-name mt-2">
                                                        <Link legacyBehavior href={`/products/${item.product_name}`}>
                                                            <a>
                                                                {item.product_name}
                                                            </a>
                                                        </Link>
                                                    </h6>
                                                </td>
                                                {!isMobile && <td
                                                    className="price"
                                                    data-title="Price"
                                                >
                                                    <h4 className="text-brand">
                                                        ${item.price}
                                                    </h4>
                                                </td>
                                                }

                                                <td
                                                    className="text-center detail-info"
                                                    data-title="Stock"
                                                >
                                                    <div className="detail-extralink mr-15">
                                                        <div className="detail-qty border radius ">
                                                            <a
                                                                onClick={(e) =>
                                                                    decreaseQuantity(
                                                                        item.id
                                                                    )
                                                                }
                                                                className="qty-down"
                                                            >
                                                                <i className="fi-rs-angle-small-down"></i>
                                                            </a>
                                                            <span className="qty-val">
                                                                {item.quantity}
                                                            </span>
                                                            <a
                                                                onClick={(e) =>
                                                                    increaseQuantity(
                                                                        item.id
                                                                    )
                                                                }
                                                                className="qty-up"
                                                            >
                                                                <i className="fi-rs-angle-small-up"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td
                                                    className="text-right"
                                                    data-title="Cart"
                                                >
                                                    <h4 className="text-body">
                                                        $
                                                        {item.quantity *
                                                            item.price}
                                                    </h4>
                                                </td>
                                                <td
                                                    className="action"
                                                    data-title="Remove"
                                                >
                                                    <a
                                                        onClick={(e) =>
                                                            deleteFromCart(
                                                                item.id
                                                            )
                                                        }
                                                        className="text-muted"
                                                    >
                                                        <i className="fi-rs-trash"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                        ))}
                                        <tr>
                                            <td
                                                colSpan="6"
                                                className="text-end"
                                            >
                                                {cartItems && cartItems.length <= 0 && (
                                                    <a
                                                        onClick={clearCart}
                                                        className="text-muted"
                                                    >
                                                        <i className="fi-rs-cross-small"></i>
                                                        Clear Cart
                                                    </a>
                                                )}
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="cart-action text-end">
                                    <a className="btn " href="/products">
                                        <i className="fi-rs-shopping-bag mr-10"></i>
                                        Continue Shopping
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-5">
                                <div className="divider center_icon mt-50 mb-50">
                                    <i className="fi-rs-fingerprint"></i>
                                </div>
                                <div className="row mb-50">
                                    {/*<div className="col-lg-6 col-md-12">*/}
                                    {/*    <div className="heading_s1 mb-3">*/}
                                    {/*        <h4>Shipping Fee</h4>*/}
                                    {/*    </div>*/}
                                    {/*    <p className="mt-15 mb-30">*/}
                                    {/*        Flat rate:*/}
                                    {/*        <span className="font-xl text-brand fw-900">*/}
                                    {/*            $5.99*/}
                                    {/*        </span>*/}
                                    {/*    </p>*/}

                                    {/*    <div className="mb-30 mt-50">*/}
                                    {/*        <div className="heading_s1 mb-3">*/}
                                    {/*            <h4>Apply Coupon</h4>*/}
                                    {/*        </div>*/}
                                    {/*        <div className="total-amount">*/}
                                    {/*            <div className="left">*/}
                                    {/*                <div className="coupon">*/}
                                    {/*                    <form*/}
                                    {/*                        action="#"*/}
                                    {/*                        target="_blank"*/}
                                    {/*                    >*/}
                                    {/*                        <div className="form-row row justify-content-center">*/}
                                    {/*                            <div className="form-group col-lg-6">*/}
                                    {/*                                <input*/}
                                    {/*                                    className="font-medium"*/}
                                    {/*                                    name="Coupon"*/}
                                    {/*                                    placeholder="Enter Your Coupon"*/}
                                    {/*                                />*/}
                                    {/*                            </div>*/}
                                    {/*                            <div className="form-group col-lg-6">*/}
                                    {/*                                <button className="btn  btn-sm">*/}
                                    {/*                                    <i className="fi-rs-label mr-10"></i>*/}
                                    {/*                                    Apply*/}
                                    {/*                                </button>*/}
                                    {/*                            </div>*/}
                                    {/*                        </div>*/}
                                    {/*                    </form>*/}
                                    {/*                </div>*/}
                                    {/*            </div>*/}
                                    {/*        </div>*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}
                                    <div className="col-lg-12 col-md-12">
                                        <div className="border p-md-4 p-30 border-radius cart-totals">
                                            <div className="heading_s1 mb-3">
                                                <h4>Cart Totals</h4>
                                            </div>
                                            <div className="table-responsive">
                                                <table className="table">
                                                    <tbody>
                                                    <tr>
                                                        <td className="cart_total_label">
                                                            Cart Subtotal
                                                        </td>
                                                        <td className="cart_total_amount">
                                                                <span className="font-lg fw-900 text-brand">
                                                                    $ {price()}
                                                                </span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="cart_total_label">
                                                            Shipping
                                                        </td>
                                                        <td className="cart_total_amount">
                                                            <i className="ti-gift mr-5"></i>
                                                            $5.99
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="cart_total_label">
                                                            Total
                                                        </td>
                                                        <td className="cart_total_amount">
                                                            <strong>
                                                                    <span className="font-xl fw-900 text-brand">
                                                                        $
                                                                        {totalPrice()}
                                                                    </span>
                                                            </strong>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <Link legacyBehavior href="/shop-checkout">
                                                <a className="btn">
                                                    <i className="fi-rs-box-alt mr-10"></i>
                                                    Proceed To CheckOut
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
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

import Link from "next/link";
import React from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { addToCart } from "../../redux/action/cart";
import { addToCompare } from "../../redux/action/compareAction";
import { openQuickView } from "../../redux/action/quickViewAction";
import { addToWishlist } from "../../redux/action/wishlistAction";
import {assetServer} from "../../assetServer";
import moment from 'moment';

const SingleProduct2 = ({
    product,
    addToCart,
    addToCompare,
    addToWishlist,
    openQuickView,
}) => {
    

    const handleCart = (product) => {
        addToCart(product);
        toast("Product added to Cart !");
    };

    const handleCompare = (product) => {
        addToCompare(product);
        toast("Added to Compare list !");
    };

    const handleWishlist = (product) => {
        addToWishlist(product);
        toast("Added to Wishlist !");
    };

    const oneWeekAgo = moment().subtract(7, 'days');
    const productCreatedAt = moment(product.created_at);


    return (
        <>
            <div className="product-cart-wrap mb-30">
                <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                        <Link legacyBehavior
                            href="/products/[product_name]"
                            as={`/products/${product.product_name}`}
                        >
                            <a>
                                <img
                                    className="default-img"
                                    src={`${assetServer}/images/products/${product.image}`}
                                    alt=""
                                />
                                {/*<img*/}
                                {/*    className="hover-img"*/}
                                {/*    src={product.images[1].img}*/}
                                {/*    alt=""*/}
                                {/*/>*/}
                            </a>
                        </Link>
                    </div>
                    <div className="product-action-1">
                        <a
                            aria-label="Quick view"
                            className="action-btn hover-up"
                            data-bs-toggle="modal"
                            // data-bs-target="#quickViewModal"
                            onClick={(e) => openQuickView(product)}
                        >
                            <i className="fi-rs-eye"></i>
                        </a>
                        <a
                            aria-label="Add To Wishlist"
                            className="action-btn hover-up"
                            onClick={(e) => handleWishlist(product)}
                        >
                            <i className="fi-rs-heart"></i>
                        </a>
                        {/*<a*/}
                        {/*    aria-label="Compare"*/}
                        {/*    className="action-btn hover-up"*/}
                        {/*    onClick={(e) => handleCompare(product)}*/}
                        {/*>*/}
                        {/*    <i className="fi-rs-shuffle"></i>*/}
                        {/*</a>*/}
                    </div>

                    <div className="product-badges product-badges-position product-badges-mrg">
                        {/*{product.trending && <span className="hot">Hot</span>}*/}
                        {productCreatedAt.isAfter(oneWeekAgo) && <span className="new">New</span>}
                        {product.quantity > 100 && (
                            <span className="best">Top Product</span>
                        )}
                        {/*{product.discount.isActive && (*/}
                        {/*    <span className="sale">Sale</span>*/}
                        {/*)}*/}
                        {/*{product.discount.percentage >= 5 && (*/}
                        {/*    <span className="hot">*/}
                        {/*        {product.discount.percentage}%*/}
                        {/*    </span>*/}
                        {/*)}*/}
                    </div>
                </div>
                <div className="product-content-wrap">
                    <div className="product-category">
                        <Link legacyBehavior href="/products">
                            <a>{product.brand}</a>
                        </Link>
                    </div>
                    <h2>
                        <Link legacyBehavior
                            href="/products/[product_name]"
                            as={`/products/${product.product_name}`}
                        >
                            <a>{product.product_name}</a>
                        </Link>
                    </h2>

                    {/*<div className="product-rate d-inline-block">*/}
                    {/*    <div*/}
                    {/*        className="product-rating"*/}
                    {/*        style={{ width: "90%" }}*/}
                    {/*    ></div>*/}
                    {/*</div>*/}

                    <div className="product-price mt-10">
                        <span>${product.price} </span>
                        {/*<span className="old-price">{product.oldPrice && `$ ${product.oldPrice}`}</span>*/}
                    </div>
                    <div className="sold mt-15 mb-15">
                        <div className="progress mb-5">
                            <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: "50%" }}
                            ></div>
                        </div>
                        <span className="font-xs text-heading"> Sold: 90/120</span>
                    </div>

                    {product.group === "1" ? (
                        <a className="btn w-100 hover-up">
                            Group
                        </a>
                    ) : (
                        <a
                            className="btn w-100 hover-up"
                            onClick={(e) => handleCart(product)}
                        >
                            <i className="fi-rs-shopping-cart mr-5"></i> Add To Cart
                        </a>
                    )}
                </div>
            </div>
        </>
    );
};

const mapDispatchToProps = {
    addToCart,
    addToCompare,
    addToWishlist,
    openQuickView,
};

export default connect(null, mapDispatchToProps)(SingleProduct2);

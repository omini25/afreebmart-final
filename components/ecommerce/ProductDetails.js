import React, { useState } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import {
    addToCart,
    decreaseQuantity,
    increaseQuantity
} from "../../redux/action/cart";
import { addToCompare } from "../../redux/action/compareAction";
import { addToWishlist } from "../../redux/action/wishlistAction";
import ProductTab from "../elements/ProductTab";
import RelatedSlider from "../sliders/Related";
import ThumbSlider from "../sliders/Thumb";
import Link from "next/link";
import Router from 'next/router';

const ProductDetails = ({
    product,
    cartItems,
    addToCompare,
    addToCart,
    addToWishlist,
    increaseQuantity,
    decreaseQuantity,
    quickView,
}) => {
    const [quantity, setQuantity] = useState(1);
    

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

    const inCart = cartItems.find((cartItem) => cartItem.id === product.id);

    console.log(inCart);

    return (
        <>
            <section className="mt-50 mb-50">
                <div className="container">
                    <div className="row flex-row-reverse">
                        <div className="col-xl-10 col-lg-12 m-auto">
                            <div className="product-detail accordion-detail">
                                <div className="row mb-50  mt-30">
                                    <div className="col-md-6 col-sm-12 col-xs-12 mb-md-0 mb-sm-5">
                                        <div className="detail-gallery">


                                            <div className="product-image-slider">
                                                <ThumbSlider product={product} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12 col-xs-12">
                                        <div className="detail-info  pr-30 pl-30">
                                            {/*<span className="stock-status out-stock"> Sale Off </span>*/}
                                            <h2 className="title-detail">{product.product_name}</h2>
                                            {/*<div className="product-detail-rating">*/}
                                            {/*    <div className="product-rate-cover text-end">*/}
                                            {/*        <div className="product-rate d-inline-block">*/}
                                            {/*            <div className="product-rating" style={{ width: "90%" }}></div>*/}
                                            {/*        </div>*/}
                                            {/*        <span className="font-small ml-5 text-muted"> (32 reviews)</span>*/}
                                            {/*    </div>*/}
                                            {/*</div>*/}
                                            <div className="clearfix product-price-cover">
                                                <div className="product-price primary-color float-left">
                                                    <span className="current-price  text-brand">${product.price}</span>
                                                    {/*<span>*/}
                                                    {/*    <span className="save-price font-md color3 ml-15">{product.discount.percentage}% Off</span>*/}
                                                    {/*    <span className="old-price font-md ml-15">{product.oldPrice ? `$ ${product.oldPrice}` : null}</span>*/}
                                                    {/*</span>*/}
                                                </div>
                                            </div>

                                            <div className="mb-30">
                                                <p className="font-lg">{product.description}</p>
                                            </div>

                                            <div className="bt-1 border-color-1 mt-30 mb-30"></div>
                                            <div className="detail-extralink">

                                                {product.group !== "1" && (
                                                    <div className="detail-qty border radius">
                                                        <a onClick={(e) => (!inCart ? setQuantity(quantity > 1 ? quantity - 1 : 1) : decreaseQuantity(product?.id))}
                                                           className="qty-down">
                                                            <i className="fi-rs-angle-small-down"></i>
                                                        </a>
                                                        <span className="qty-val">{inCart?.quantity || quantity}</span>
                                                        <a onClick={() => (!inCart ? setQuantity(quantity + 1) : increaseQuantity(product.id))}
                                                           className="qty-up">
                                                            <i className="fi-rs-angle-small-up"></i>
                                                        </a>
                                                    </div>
                                                )}


                                                <div className="product-extra-link2">
                                                    {product.group === "1" ? (
                                                        <button
                                                            className="button button-add-to-group"
                                                            onClick={() => Router.push('/page-account')}
                                                        >
                                                            Join or Create Group
                                                        </button>
                                                    ) : (
                                                        <button
                                                            onClick={(e) =>
                                                                handleCart({
                                                                    ...product,
                                                                    quantity: quantity || 1
                                                                })
                                                            }
                                                            className="button button-add-to-cart"
                                                        >
                                                            Add to cart
                                                        </button>
                                                    )}
                                                    <a aria-label="Add To Wishlist" className="action-btn hover-up"
                                                       onClick={(e) => handleWishlist(product)}>
                                                        <i className="fi-rs-heart"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <ul className="product-meta font-xs color-grey mt-50">
                                                <li className="mb-5">
                                                    Unit:
                                                    <a href="#">{product.unit}</a>
                                                </li>
                                                <li className="mb-5">
                                                    Sub-category:
                                                    <a href="#" rel="tag" className="me-1">
                                                        {product.subcategory},
                                                    </a>
                                                </li>
                                                <li>
                                                    Availability:
                                                    <span
                                                        className="in-stock text-success ml-5">{product.quantity} Items In Stock</span>
                                                </li>
                                            </ul>
                                            <div className="mobile-social-icon">
                                                <h5 className="mb-15 pt-10 text-grey-4">Share Product</h5>
                                                <Link legacyBehavior href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(product.product_name)}`} target="_blank">
                                                    <a>
                                                        <img
                                                            src="/assets/imgs/theme/icons/icon-facebook.svg"
                                                            alt=""
                                                        />
                                                    </a>
                                                </Link>
                                                <Link legacyBehavior href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(product.product_name)}`} target="_blank">
                                                    <a>
                                                        <img
                                                            src="/assets/imgs/theme/icons/icon-twitter.svg"
                                                            alt=""
                                                        />
                                                    </a>
                                                </Link>
                                                <Link legacyBehavior href={`http://instagram.com/share?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(product.product_name)}`} target="_blank">
                                                    <a>
                                                        <img
                                                            src="/assets/imgs/theme/icons/icon-instagram.svg"
                                                            alt=""
                                                        />
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {quickView ? null : (
                                    <>
                                        <ProductTab product={product} />
                                        <div className="row mt-60">
                                            <div className="col-12">
                                                <h3 className="section-title style-1 mb-30">Related products</h3>
                                            </div>
                                            <div className="col-12">
                                                <div className="row related-products position-relative">
                                                    <RelatedSlider vendorId={product.vendor_id}/>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

const mapStateToProps = (state) => ({
    cartItems: state.cart,
});

const mapDispatchToProps = {
    addToCompare,
    addToWishlist,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);

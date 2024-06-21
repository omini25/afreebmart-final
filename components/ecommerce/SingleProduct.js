import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { addToCart } from "../../redux/action/cart";
import { addToCompare } from "../../redux/action/compareAction";
import { openQuickView } from "../../redux/action/quickViewAction";
import { addToWishlist } from "../../redux/action/wishlistAction";
import Link from "next/link";
import axios from 'axios';
import {server} from "../../server";
import {assetServer} from "../../assetServer";
import Router from 'next/router';
import {useMediaQuery} from "react-responsive";

const SingleProduct = ({
                           product,
                           addToCart,
                           addToCompare,
                           addToWishlist,
                           openQuickView,
                       }) => {

    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

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

    const [isInGroup, setIsInGroup] = useState(false);
    const userId = localStorage.getItem('user.id');

    useEffect(() => {
        const checkGroup = async () => {
            try {
                const response = await axios.get(`https://your-api-url/groups/${product.id}`);
                if (response.data) {
                    setIsInGroup(true);
                }
            } catch (error) {
                console.error('Failed to check group:', error);
            }
        };

        if (userId) {
            checkGroup();
        }
    }, [userId, product.id]);


    return (
        <>

            {/*{product.products ? product.product.map((product) => (*/}
            <div className="product-cart-wrap mb-30" key={product.id}>

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
                                    style={{width: '300px', height: '200px'}}
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
                        {/*{product.created && <span className="new">New</span>}*/}
                        {product.quantity > 100 && (
                            <span className="best">Best Sell</span>
                        )}
                        {/*{product.discount.isActive && (*/}
                        {/*    <span className="sale">Sale</span>*/}
                        {/*)}*/}
                        {/*{product.discount.percentage >= 5 && (*/}
                        {/*    <span className="hot">*/}
                        {/*{product.discount.percentage}%*/}
                        {/*</span>*/}
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
                              href={`/products/${product.product_name}`}
                              as={`/products/${product.product_name}`}
                        >
                            <a>{product.product_name}</a>
                        </Link>
                    </h2>

                    {/*<div className="product-rate-cover">*/}
                    {/*    <div className="product-rate d-inline-block">*/}
                    {/*        <div*/}
                    {/*            className="product-rating"*/}
                    {/*            style={{width: "90%"}}*/}
                    {/*        ></div>*/}
                    {/*    </div>*/}
                    {/*    <span className="font-small ml-5 text-muted">*/}
                    {/*        {" "}*/}
                    {/*                ({product.ratingScore})*/}
                    {/*    </span>*/}
                    {/*</div>*/}

                    <div>
                        <span className="font-small text-muted">
                            By <Link legacyBehavior href="/vendor/1"><a>{product.store_name}</a></Link>
                        </span>
                    </div>

                    <div className="product-card-bottom">
                        <div className="product-price">
                            <span>${product.price} </span>
                            <span className="old-price">{product.oldPrice && `$ ${product.oldPrice}`}</span>
                        </div>
                        {product.group === "1" ? (
                            <div>
                                {userId && isInGroup ? (
                                    <div className="add-cart">
                                        <a
                                            className="add"
                                            onClick={(e) => handleCart(product)}
                                        >
                                            <i className="fi-rs-shopping-cart mr-5"></i> Add
                                        </a>
                                    </div>
                                ) : (
                                    <div className="add-cart">
                                        <a
                                            className="fi-rs-users mr-5"
                                            onClick={() => Router.push('/page-account')}
                                        >
                                            Group
                                        </a>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="add-cart">
                                <a
                                    className="add"
                                    onClick={(e) => handleCart(product)}
                                >
                                    <i className="fi-rs-shopping-cart mr-5"></i> Add
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {/*)) : null}*/}

        </>
    );
};

const mapDispatchToProps = {
    addToCart,
    addToCompare,
    addToWishlist,
    openQuickView,
};

export default connect(null, mapDispatchToProps)(SingleProduct);

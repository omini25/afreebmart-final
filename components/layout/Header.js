import Link from "next/link";
import React, { useEffect, useState } from "react";
import {connect, useDispatch} from "react-redux";
import CategoryProduct2 from "../ecommerce/Filter/CategoryProduct2";
import CategoryProduct3 from "../ecommerce/Filter/CategoryProduct3";
import Search from "../ecommerce/Search";
import {toast} from "react-toastify";
import { useRouter } from "next/router";
import { Popover, OverlayTrigger } from 'react-bootstrap';
import {assetServer} from "../../assetServer";


const Header = ({
                    totalCartItems,
                    totalCompareItems,
                    toggleClick,
                    totalWishlistItems,
                }) => {
    const [shouldRedirect, setShouldRedirect] = useState(false);
    const router = useRouter();
    const [isToggled, setToggled] = useState(false);
    const [scroll, setScroll] = useState(0);
    // const dispatch = useDispatch();
    const [cart, setCart] = useState([]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setCart(JSON.parse(localStorage.getItem('dokani_cart')) || []);
        }
    }, []);

    const handleNavigation = () => {
        router.push({
            pathname: '/shop-fullwidth',
            query: { category: 'Fresh foods' }
        });
    };

    const handleNavigationFoodie = () => {
        router.push({
            pathname: '/shop-fullwidth',
            query: { category: 'Foodie (Hot Food)' }
        });
    };

    const handleNavigationFrozen = () => {
        router.push({
            pathname: '/shop-fullwidth',
            query: { category: 'Frozen Foods' }
        });
    };

    const selectCategory = (e, subCategory) => {
        e.preventDefault();
        // removeSearchTerm();
        // updateProductCategory(category);
        router.push({
            pathname: "/sub-category",
            query: {
                subCategory: subCategory,
            },
        });
    };

    // let cart = localStorage.getItem('cart');
    // cart = cart ? JSON.parse(cart) : [];

    // let cart;
    // if (typeof window !== 'undefined') {
    //     cart = JSON.parse(localStorage.getItem('dokani_cart')) || [];
    // }



    const popover = (
        <Popover id="cart-popover">
            <Popover.Title as="h3">Cart Items</Popover.Title>
            <Popover.Content>
                {cart && cart.length > 0 ? (
                    cart.map((item, index) => (
                        <div key={index}>
                            <p>{item.product_name}</p>
                            <p>Quantity: {item.quantity}</p>
                            <p>Price: {item.price}</p>
                        </div>
                    ))
                ) : (
                    <p>Your cart is empty</p>
                )}
            </Popover.Content>
        </Popover>
    );




    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY >= 100;
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck);
            }
        });
    });

    // const logout = () => {
    // // Check if code is running in the browser
    //     if (typeof window !== 'undefined') {
    //         // Remove userInfo and isLoggedIn from localStorage
    //         localStorage.removeItem('userInfo');
    //         localStorage.removeItem('isLoggedIn');
    //     }
    //
    //     // Dispatch logout action to update the state
    //     dispatch({ type: 'USER_LOGOUT' });
    //
    //     // Set shouldRedirect to true
    //     setShouldRedirect(true);
    //     toast('Logout successful!')
    // };

    // useEffect(() => {
    //     if (shouldRedirect) {
    //         // Redirect to home page
    //         router.push('/');
    //         // Reset shouldRedirect
    //         setShouldRedirect(false);
    //     }
    // }, [shouldRedirect]);

    const handleToggle = () => setToggled(!isToggled);

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedIsLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));
        setIsLoggedIn(storedIsLoggedIn);
    }, []);

    return (
        <>
            <header className="header-area header-style-1 header-height-2">

                <div className="header-middle header-middle-ptb-1 d-none d-lg-block">
                    <div className="container">
                        <div className="header-wrap">
                            <div className="logo logo-width-1">
                                <Link legacyBehavior href="/">
                                    <a>
                                        <img
                                            src="assets/afreemart-logo.png"
                                            alt="logo"
                                        />
                                    </a>
                                </Link>
                            </div>
                            <div className="header-right">
                                <div className="search-style-2">
                                    <Search />
                                </div>
                                <div className="header-action-right">
                                    <div className="header-action-2">

                                        <div className="header-action-icon-2">
                                            <Link legacyBehavior href="/shop-wishlist">
                                                <a>
                                                    <img
                                                        className="svgInject"
                                                        alt="Evara"
                                                        src="/assets/imgs/theme/icons/icon-heart.svg"
                                                    />
                                                    <span className="pro-count blue">
                                                        {totalWishlistItems}
                                                    </span>
                                                </a>
                                            </Link>
                                            <Link legacyBehavior href="/shop-wishlist">
                                                <span className="lable">
                                                    Wishlist
                                                </span>
                                            </Link>
                                        </div>
                                        <div className="header-action-icon-2">

                                            <OverlayTrigger trigger="hover" placement="bottom" overlay={popover}>
                                                <Link legacyBehavior href="/shop-cart">
                                                    <a className="mini-cart-icon">
                                                        <img
                                                            alt="Evara"
                                                            src="/assets/imgs/theme/icons/icon-cart.svg"
                                                        />
                                                        <span className="pro-count blue">
                                                            {totalCartItems}
                                                        </span>
                                                    </a>
                                                </Link>
                                            </OverlayTrigger>
                                            <Link legacyBehavior href="/shop-cart">
                                                <a>
                                                    <span className="lable">
                                                        Cart
                                                    </span>
                                                </a>
                                            </Link>
                                            <div className="cart-dropdown-wrap cart-dropdown-hm2">
                                                <ul>
                                                    {cart && cart.length > 0 ? (
                                                        cart.map((item, index) => (
                                                            <li key={index}>
                                                                <div className="shopping-cart-img">
                                                                    <Link legacyBehavior href="#">
                                                                        <a>
                                                                            <img
                                                                                src={`${assetServer}/images/products/${item.image}`}
                                                                                alt={item.product_name}
                                                                            />
                                                                        </a>
                                                                    </Link>
                                                                </div>
                                                                <div className="shopping-cart-title">
                                                                    <h4>
                                                                        <Link legacyBehavior href="/shop-grid-right">
                                                                            <a>
                                                                                {item.product_name}
                                                                            </a>
                                                                        </Link>
                                                                    </h4>
                                                                    <h3>
                                                                        <span>{item.quantity} × </span>
                                                                        ${item.price}
                                                                    </h3>
                                                                </div>
                                                                <div className="shopping-cart-delete">
                                                                    <Link legacyBehavior href="/#">
                                                                        <a>
                                                                            <i className="fi-rs-cross-small"></i>
                                                                        </a>
                                                                    </Link>
                                                                </div>
                                                            </li>
                                                        ))
                                                    ) : (
                                                        <p>Your cart is empty</p>
                                                    )}
                                                </ul>
                                                <div className="shopping-cart-button">
                                                    <Link legacyBehavior href="/shop-cart">
                                                        <a>View cart</a>
                                                    </Link>
                                                    <Link legacyBehavior href="/shop-checkout">
                                                        <a>Checkout</a>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="cart-dropdown-wrap cart-dropdown-hm2">
                                                <ul>
                                                    <li>
                                                        <div className="shopping-cart-img">
                                                            <Link legacyBehavior href="/shop-grid-right">
                                                                <a>
                                                                <img
                                                                        alt="Evara"
                                                                        src="/assets/imgs/shop/thumbnail-3.jpg"
                                                                    />
                                                                </a>
                                                            </Link>
                                                        </div>
                                                        <div className="shopping-cart-title">
                                                            <h4>
                                                                <Link legacyBehavior href="/shop-grid-right">
                                                                    <a>
                                                                        Plain
                                                                        Striola
                                                                        Shirts
                                                                    </a>
                                                                </Link>
                                                            </h4>
                                                            <h3>
                                                                <span>1 × </span>
                                                                $800.00
                                                            </h3>
                                                        </div>

                                                    </li>
                                                    <li>
                                                        <div className="shopping-cart-img">
                                                            <Link legacyBehavior href="/shop-grid-right">
                                                                <a>
                                                                    <img
                                                                        alt="Evara"
                                                                        src="/assets/imgs/shop/thumbnail-4.jpg"
                                                                    />
                                                                </a>
                                                            </Link>
                                                        </div>
                                                        <div className="shopping-cart-title">
                                                            <h4>
                                                                <Link legacyBehavior href="/shop-grid-right">
                                                                    <a>
                                                                        Macbook Pro
                                                                        2022
                                                                    </a>
                                                                </Link>
                                                            </h4>
                                                            <h3>
                                                                <span>1 × </span>
                                                                $3500.00
                                                            </h3>
                                                        </div>
                                                        <div className="shopping-cart-delete">
                                                            <Link legacyBehavior href="/#">
                                                                <a>
                                                                    <i className="fi-rs-cross-small"></i>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <div className="shopping-cart-footer">
                                                    <div className="shopping-cart-total">
                                                        <h4>
                                                            Total
                                                            <span>$383.00</span>
                                                        </h4>
                                                    </div>
                                                    <div className="shopping-cart-button">
                                                        <Link legacyBehavior href="/shop-cart">
                                                            <a>View cart</a>
                                                        </Link>
                                                        <Link legacyBehavior href="/shop-checkout">
                                                            <a>Checkout</a>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="header-action-icon-2">
                                            <Link legacyBehavior href="/page-account"><a>
                                                <img
                                                    className="svgInject"
                                                    alt="Nest"
                                                    src="/assets/imgs/theme/icons/icon-user.svg"
                                                />
                                            </a></Link>
                                            <Link legacyBehavior href="/page-account"><a>
                                                <span className="lable ml-0">
                                                    Account
                                                </span>
                                            </a></Link>
                                            <div className="cart-dropdown-wrap cart-dropdown-hm2 account-dropdown">
                                                <ul>
                                                    {!isLoggedIn ? (
                                                        <>
                                                            <li>
                                                                <Link legacyBehavior href="/page-login">
                                                                    <a>Login</a>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link legacyBehavior href="/page-register">
                                                                    <a>Signup</a>
                                                                </Link>
                                                            </li>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <li>
                                                                <Link legacyBehavior href="/page-account">
                                                                    <a>
                                                                        <i className="fi fi-rs-user mr-10"></i>
                                                                        My Account
                                                                    </a></Link>
                                                            </li>
                                                            <li>
                                                                <Link legacyBehavior href="/page-account"><a>
                                                                    <i className="fi fi-rs-location-alt mr-10"></i>
                                                                    Order Tracking
                                                                </a></Link>
                                                            </li>
                                                            <li>
                                                                <Link legacyBehavior href="/page-account"><a>
                                                                    <i className="fi fi-rs-label mr-10"></i>
                                                                    Groups
                                                                </a></Link>
                                                            </li>
                                                            <li>
                                                                <Link legacyBehavior href="/shop-wishlist"><a>
                                                                    <i className="fi fi-rs-heart mr-10"></i>
                                                                    My Wishlist
                                                                </a></Link>
                                                            </li>
                                                            <li>
                                                                <Link legacyBehavior href="/page-account"><a>
                                                                    <i className="fi fi-rs-settings-sliders mr-10"></i>
                                                                    Setting
                                                                </a></Link>
                                                            </li>
                                                            {/*<li>*/}
                                                            {/*    <a onClick={logout}>*/}
                                                            {/*        <i className="fi fi-rs-sign-out mr-10"></i>*/}
                                                            {/*        Sign out*/}
                                                            {/*    </a>*/}
                                                            {/*</li>*/}
                                                        </>
                                                    )}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className={
                        scroll
                            ? "header-bottom header-bottom-bg-color sticky-bar stick"
                            : "header-bottom header-bottom-bg-color sticky-bar"
                    }
                >
                    <div className="container">
                    <div className="header-wrap header-space-between position-relative">
                            <div className="logo logo-width-1 d-block d-lg-none">
                                <Link legacyBehavior href="/">
                                    <a>
                                        <img
                                            src="assets/afreemart-logo.png"
                                            alt="logo"
                                        />
                                    </a>
                                </Link>
                            </div>
                            <div className="header-nav d-none d-lg-flex">
                                <div className="main-categori-wrap d-none d-lg-block">
                                    <a
                                        className="categories-button-active"
                                        onClick={handleToggle}
                                    >
                                        <span className="fi-rs-apps"></span>
                                        <span className="et">Browse</span> All
                                        Categories
                                        <i className="fi-rs-angle-down"></i>
                                    </a>

                                    <div
                                        className={
                                            isToggled
                                                ? "categories-dropdown-wrap categories-dropdown-active-large font-heading open"
                                                : "categories-dropdown-wrap categories-dropdown-active-large font-heading"
                                        }
                                    >
                                        <div className="d-flex categori-dropdown-inner">
                                            <CategoryProduct2/>
                                            {/*<CategoryProduct3/>*/}
                                        </div>
                                        {/*<div*/}
                                        {/*    className="more_slide_open"*/}
                                        {/*    style={{ display: "none" }}*/}
                                        {/*>*/}
                                        {/*    <div className="d-flex categori-dropdown-inner">*/}
                                        {/*        <ul>*/}
                                        {/*            <li>*/}
                                        {/*                <Link legacyBehavior href=""><a>*/}
                                        {/*                    onClick={handleNavigation}*/}
                                        {/*                    {" "}*/}
                                        {/*                    <img*/}
                                        {/*                        src="/assets/imgs/theme/icons/icon-1.svg"*/}
                                        {/*                        alt=""*/}
                                        {/*                    />*/}
                                        {/*                    Fresh Foods*/}
                                        {/*                </a></Link>*/}
                                        {/*            </li>*/}
                                        {/*            */}
                                        {/*        </ul>*/}
                                        {/*        <ul className="end">*/}
                                        {/*            <li>*/}
                                        {/*                <Link legacyBehavior href="/products"><a>*/}
                                        {/*                    {" "}*/}
                                        {/*                    <img*/}
                                        {/*                        src="/assets/imgs/theme/icons/icon-3.svg"*/}
                                        {/*                        alt=""*/}
                                        {/*                    />*/}
                                        {/*                    Wines & Drinks*/}
                                        {/*                </a></Link>*/}
                                        {/*            </li>*/}
                                        {/*            */}
                                        {/*        </ul>*/}
                                        {/*    </div>*/}
                                        {/*</div>*/}

                                    </div>
                                </div>
                                <div className="main-menu main-menu-padding-1 main-menu-lh-2 d-none d-lg-block justify-content-center  font-heading">
                                    <nav>
                                        <ul>

                                            <li className="position-static">
                                                <Link legacyBehavior href="/#">
                                                    <a>
                                                        Main Shop
                                                        <i className="fi-rs-angle-down"></i>
                                                    </a>
                                                </Link>
                                                <ul className="mega-menu">
                                                    <li className="sub-mega-menu sub-mega-menu-width-22">
                                                        <a
                                                            className="menu-title"
                                                            onClick={handleNavigation}
                                                        >
                                                            Fresh Foods
                                                        </a>
                                                        <ul>
                                                            <li>
                                                                <a onClick={(e) => selectCategory(e, "Produce")}>
                                                                    Produce
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a onClick={(e) => selectCategory(e, "Bread & Bakery")}>
                                                                    Bread & Bakery
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a onClick={(e) => selectCategory(e, "Breakfast & Cereal")}>
                                                                    Breakfast & Cereal
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a onClick={(e) => selectCategory(e, "Dairy & Eggs")}>
                                                                    Dairy & Eggs
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a onClick={(e) => selectCategory(e, "Meat & Seafood")}>
                                                                    Meat & Seafood
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a onClick={(e) => selectCategory(e, "Snacks")}>
                                                                    Snacks
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a onClick={(e) => selectCategory(e, "Beverage")}>
                                                                    Beverage
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a onClick={(e) => selectCategory(e, "Coffee")}>
                                                                    Coffee
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a onClick={(e) => selectCategory(e, "Cooking Oil")}>
                                                                    Cooking Oil
                                                                </a>
                                                            </li>

                                                            <li>
                                                                <a onClick={(e) => selectCategory(e, "Seasoning Spice")}>
                                                                    Seasoning Spice
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="sub-mega-menu sub-mega-menu-width-22">
                                                        <a
                                                            className="menu-title"
                                                            onClick={handleNavigationFoodie}
                                                        >
                                                            Foodie (Hot Food)
                                                        </a>
                                                        <ul>
                                                            <li>
                                                                <a onClick={(e) => selectCategory(e, "Caribbean")}>
                                                                    Caribbean
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a onClick={(e) => selectCategory(e, "African")}>
                                                                    African
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a onClick={(e) => selectCategory(e, "Others")}>
                                                                    Others
                                                                </a>
                                                            </li>

                                                        </ul>
                                                    </li>
                                                    <li className="sub-mega-menu sub-mega-menu-width-22">
                                                        <a
                                                            className="menu-title"
                                                            onClick={handleNavigationFrozen}
                                                        >
                                                            Frozen Foods
                                                        </a>
                                                        <ul>
                                                            <li>
                                                                <a onClick={(e) => selectCategory(e, "Meat")}>
                                                                    Meat
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a onClick={(e) => selectCategory(e, "Poultry")}>
                                                                    Poultry
                                                                </a>
                                                            </li>

                                                        </ul>
                                                    </li>
                                                    <li className="sub-mega-menu sub-mega-menu-width-34">
                                                        <div className="menu-banner-wrap">
                                                            <a href="#">
                                                                <img
                                                                    src="/assets/imgs/banner/banner-menu.png"
                                                                    alt="Afreebmart"
                                                                />
                                                            </a>
                                                            <div className="menu-banner-content">
                                                                <h4>
                                                                    Hot deals
                                                                </h4>
                                                                <h3>
                                                                    Don't miss
                                                                    <br/>
                                                                    Trending
                                                                </h3>
                                                                <div className="menu-banner-price">
                                                                    <span className="new-price text-success">
                                                                        Save to
                                                                        50%
                                                                    </span>
                                                                </div>
                                                                <div className="menu-banner-btn">
                                                                    <a href="#">
                                                                        Shop now
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="menu-banner-discount">
                                                                <h3>
                                                                    <span>
                                                                        25%
                                                                    </span>
                                                                    off
                                                                </h3>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="position-static">
                                                <Link legacyBehavior href="/products-bulk">
                                                    <a>
                                                        Bulk Shop
                                                    </a>
                                                </Link>
                                            </li>

                                            {/*<li className="hot-deals">*/}
                                            {/*    <img*/}
                                            {/*        src="/assets/imgs/theme/icons/icon-hot.svg"*/}
                                            {/*        alt="hot deals"*/}
                                            {/*    />*/}
                                            {/*    <Link legacyBehavior href="/products"><a>*/}
                                            {/*        Hot Deals*/}
                                            {/*    </a>*/}
                                            {/*    </Link>*/}
                                            {/*</li>*/}

                                            <li>
                                                <a href="#">Vendors <i className="fi-rs-angle-down"></i></a>
                                                <ul className="sub-menu">
                                                    <li><Link legacyBehavior href="/vendors-list"><a>Vendors</a></Link></li>

                                                    {/*<li><Link legacyBehavior href="/vendor-dashboard"><a>Vendor Dashboard</a></Link></li>*/}
                                                    <li><Link legacyBehavior href="/vendor-guide"><a>Vendor Guide</a></Link></li>
                                                    <li><Link legacyBehavior href="/"><a>Become A Vendor </a></Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="hotline d-none d-lg-flex">
                                {/*<img*/}
                                {/*    src="/assets/imgs/theme/icons/icon-headphone.svg"*/}
                                {/*    alt="hotline"*/}
                                {/*/>*/}

                                {/*<p>*/}
                                {/*    1900 - 888<span>24/7 Support Center</span>*/}
                                {/*</p>*/}
                            </div>



                            <div className="header-action-right d-block d-lg-none">
                                <div className="header-action-2">
                                    <div className="header-action-icon-2">
                                        <Link legacyBehavior href="/shop-wishlist">
                                            <a>
                                                <img
                                                    alt="Evara"
                                                    src="/assets/imgs/theme/icons/icon-heart.svg"
                                                />
                                                <span className="pro-count white">
                                                    {totalWishlistItems}
                                                </span>
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="header-action-icon-2">
                                        <Link legacyBehavior href="/shop-cart">
                                            <a className="mini-cart-icon">
                                                <img
                                                    alt="Evara"
                                                    src="/assets/imgs/theme/icons/icon-cart.svg"
                                                />
                                                <span className="pro-count white">
                                                    {totalCartItems}
                                                </span>
                                            </a>
                                        </Link>
                                        {/*<div className="cart-dropdown-wrap cart-dropdown-hm2">*/}
                                        {/*    <ul>*/}
                                        {/*        <li>*/}
                                        {/*            <div className="shopping-cart-img">*/}
                                        {/*                <Link legacyBehavior href="/shop-grid-right">*/}
                                        {/*                    <a>*/}
                                        {/*                        <img*/}
                                        {/*                            alt="Evara"*/}
                                        {/*                            src="/assets/imgs/shop/thumbnail-3.jpg"*/}
                                        {/*                        />*/}
                                        {/*                    </a>*/}
                                        {/*                </Link>*/}
                                        {/*            </div>*/}
                                        {/*            <div className="shopping-cart-title">*/}
                                        {/*                <h4>*/}
                                        {/*                    <Link legacyBehavior href="/shop-grid-right">*/}
                                        {/*                        <a>*/}
                                        {/*                            Plain*/}
                                        {/*                            Striola*/}
                                        {/*                            Shirts*/}
                                        {/*                        </a>*/}
                                        {/*                    </Link>*/}
                                        {/*                </h4>*/}
                                        {/*                <h3>*/}
                                        {/*                    <span>1 × </span>*/}
                                        {/*                    $800.00*/}
                                        {/*                </h3>*/}
                                        {/*            </div>*/}
                                        {/*            <div className="shopping-cart-delete">*/}
                                        {/*                <Link legacyBehavior href="/#">*/}
                                        {/*                    <a>*/}
                                        {/*                        <i className="fi-rs-cross-small"></i>*/}
                                        {/*                    </a>*/}
                                        {/*                </Link>*/}
                                        {/*            </div>*/}
                                        {/*        </li>*/}
                                        {/*        <li>*/}
                                        {/*            <div className="shopping-cart-img">*/}
                                        {/*                <Link legacyBehavior href="/shop-grid-right">*/}
                                        {/*                    <a>*/}
                                        {/*                        <img*/}
                                        {/*                            alt="Evara"*/}
                                        {/*                            src="/assets/imgs/shop/thumbnail-4.jpg"*/}
                                        {/*                        />*/}
                                        {/*                    </a>*/}
                                        {/*                </Link>*/}
                                        {/*            </div>*/}
                                        {/*            <div className="shopping-cart-title">*/}
                                        {/*                <h4>*/}
                                        {/*                    <Link legacyBehavior href="/shop-grid-right">*/}
                                        {/*                        <a>*/}
                                        {/*                            Macbook Pro*/}
                                        {/*                            2022*/}
                                        {/*                        </a>*/}
                                        {/*                    </Link>*/}
                                        {/*                </h4>*/}
                                        {/*                <h3>*/}
                                        {/*                    <span>1 × </span>*/}
                                        {/*                    $3500.00*/}
                                        {/*                </h3>*/}
                                        {/*            </div>*/}
                                        {/*            <div className="shopping-cart-delete">*/}
                                        {/*                <Link legacyBehavior href="/#">*/}
                                        {/*                    <a>*/}
                                        {/*                        <i className="fi-rs-cross-small"></i>*/}
                                        {/*                    </a>*/}
                                        {/*                </Link>*/}
                                        {/*            </div>*/}
                                        {/*        </li>*/}
                                        {/*    </ul>*/}
                                        {/*    <div className="shopping-cart-footer">*/}
                                        {/*        <div className="shopping-cart-total">*/}
                                        {/*            <h4>*/}
                                        {/*                Total*/}
                                        {/*                <span>$383.00</span>*/}
                                        {/*            </h4>*/}
                                        {/*        </div>*/}
                                        {/*        <div className="shopping-cart-button">*/}
                                        {/*            <Link legacyBehavior href="/shop-cart">*/}
                                        {/*                <a>View cart</a>*/}
                                        {/*            </Link>*/}
                                        {/*            <Link legacyBehavior href="/shop-checkout">*/}
                                        {/*                <a>Checkout</a>*/}
                                        {/*            </Link>*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*</div>*/}
                                    </div>
                                    <div className="header-action-icon-2 d-block d-lg-none">
                                        <div
                                            className="burger-icon burger-icon-white"
                                            onClick={toggleClick}
                                        >
                                            <span className="burger-icon-top"></span>
                                            <span className="burger-icon-mid"></span>
                                            <span className="burger-icon-bottom"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

const mapStateToProps = (state) => ({
    totalCartItems: state.cart ? state.cart.length : 0,
    totalCompareItems: state.compare && state.compare.items ? state.compare.items.length : 0,
    totalWishlistItems: state.wishlist && state.wishlist.items ? state.wishlist.items.length : 0,
});


export default connect(mapStateToProps, null)(Header);

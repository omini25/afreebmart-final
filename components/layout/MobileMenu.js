import Link from "next/link";
import React, { useState } from "react";
import useClickOutside from "../../util/outsideClick";
import { useRouter } from "next/router";


const MobileMenu = ({ isToggled, toggleClick }) => {
    const router = useRouter();

    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    });

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
        removeSearchTerm();
        updateProductCategory(category);
        router.push({
            pathname: "/sub-category",
            query: {
                subCategory: subCategory,
            },
        });
    };

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };

    let domNode = useClickOutside(() => {
        setIsActive({
            status: false,
        });
    });
    return (
        <>
            <div
                className={
                    isToggled
                        ? "mobile-header-active mobile-header-wrapper-style sidebar-visible"
                        : "mobile-header-active mobile-header-wrapper-style"
                }
            >
                <div className="mobile-header-wrapper-inner">
                    <div className="mobile-header-top">
                        <div className="mobile-header-logo">
                            <Link legacyBehavior href="/">
                                <a>
                                    <img
                                        src="assets/afreemart-logo.png"
                                        alt="logo"
                                    />
                                </a>
                            </Link>
                        </div>
                        <div className="mobile-menu-close close-style-wrap close-style-position-inherit">
                            <button
                                className="close-style search-close"
                                onClick={toggleClick}
                            >
                                <i className="icon-top"></i>
                                <i className="icon-bottom"></i>
                            </button>
                        </div>
                    </div>
                    <div className="mobile-header-content-area">
                        <div className="mobile-search search-style-3 mobile-header-border">
                            <form action="#">
                                <input
                                    type="text"
                                    placeholder="Search for items…"
                                />
                                <button type="submit">
                                    <i className="fi-rs-search"></i>
                                </button>
                            </form>
                        </div>
                        <div className="mobile-menu-wrap mobile-header-border">

                            <nav>
                                <ul className="mobile-menu" ref={domNode}>

                                    <li
                                        className={
                                            isActive.key == 3
                                                ? "menu-item-has-children active"
                                                : "menu-item-has-children"
                                        }
                                    >
                                        <span
                                            className="menu-expand"
                                            onClick={() => handleToggle(3)}
                                        >
                                            <i className="fi-rs-angle-small-down"></i>
                                        </span>
                                        <Link legacyBehavior href="#">
                                            <a>Main Shop</a>
                                        </Link>
                                        <ul
                                            className={
                                                isActive.key == 3
                                                    ? "dropdown"
                                                    : "d-none"
                                            }
                                        >
                                            <li className="menu-item-has-children">
                                                <span className="menu-expand"></span>
                                                <Link legacyBehavior href="#">
                                                    <a
                                                        className="menu-title"
                                                        onClick={handleNavigation}
                                                    >
                                                        Fresh Foods
                                                    </a>
                                                </Link>
                                                <ul className="dropdown">
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
                                            <li className="menu-item-has-children">
                                                <span className="menu-expand"></span>
                                                <Link legacyBehavior href="#">
                                                    <a
                                                        className="menu-title"
                                                        onClick={handleNavigationFoodie}
                                                    >
                                                        Foodie (Hot Food)
                                                    </a>
                                                </Link>
                                                <ul className="dropdown">
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
                                            <li className="menu-item-has-children">
                                                <span className="menu-expand"></span>
                                                <Link legacyBehavior href="#">
                                                    <a
                                                        className="menu-title"
                                                        onClick={handleNavigationFrozen}
                                                    >
                                                        Frozen Foods
                                                    </a>
                                                </Link>
                                                <ul className="dropdown">
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
                                        </ul>
                                    </li>
                                    <li
                                        className={
                                            isActive.key == 4
                                                ? "menu-item-has-children active"
                                                : "menu-item-has-children"
                                        }
                                    >
                                        <span
                                            className="menu-expand"
                                            onClick={() => handleToggle(4)}
                                        >
                                            <i className="fi-rs-angle-small-down"></i>
                                        </span>
                                        <Link legacyBehavior href="">
                                            <a>Vendor</a>
                                        </Link>
                                        <ul
                                            className={
                                                isActive.key == 4
                                                    ? "dropdown"
                                                    : "d-none"
                                            }
                                        >
                                            <li><Link legacyBehavior href="/vendors-list"><a>Vendors</a></Link></li>

                                            {/*<li><Link legacyBehavior href="/vendor-dashboard"><a>Vendor Dashboard</a></Link></li>*/}
                                            <li><Link legacyBehavior href="/vendor-guide"><a>Vendor Guide</a></Link></li>
                                            <li><Link legacyBehavior href="/"><a>Become A Vendor </a></Link></li>
                                        </ul>
                                    </li>

                                    <li
                                        className={
                                            isActive.key == 5
                                                ? "menu-item-has-children active"
                                                : "menu-item-has-children"
                                        }
                                    >
                                        <span
                                            className="menu-expand"
                                            onClick={() => handleToggle(5)}
                                        >
                                            <i className="fi-rs-angle-small-down"></i>
                                        </span>
                                        <Link legacyBehavior href="/products-bulk">
                                            <a>Bulk Shop</a>
                                        </Link>

                                    </li>

                                </ul>
                            </nav>
                        </div>
                        <div className="mobile-header-info-wrap mobile-header-border">

                            <div className="single-mobile-header-info">
                                <Link legacyBehavior href="/page-login">
                                <a>Log In / Sign Up </a>
                                </Link>
                            </div>

                        </div>
                        <div className="mobile-social-icon">
                            <h5 className="mb-15 text-grey-4">Follow Us</h5>
                            <Link legacyBehavior href="#">
                                <a>
                                    <img
                                        src="/assets/imgs/theme/icons/icon-facebook.svg"
                                        alt=""
                                    />
                                </a>
                            </Link>
                            <Link legacyBehavior href="#">
                                <a>
                                    <img
                                        src="/assets/imgs/theme/icons/icon-twitter.svg"
                                        alt=""
                                    />
                                </a>
                            </Link>
                            <Link legacyBehavior href="#">
                                <a>
                                    <img
                                        src="/assets/imgs/theme/icons/icon-instagram.svg"
                                        alt=""
                                    />
                                </a>
                            </Link>
                            <Link legacyBehavior href="#">
                                <a>
                                    <img
                                        src="/assets/imgs/theme/icons/icon-pinterest.svg"
                                        alt=""
                                    />
                                </a>
                            </Link>
                            <Link legacyBehavior href="#">
                                <a>
                                    <img
                                        src="/assets/imgs/theme/icons/icon-youtube.svg"
                                        alt=""
                                    />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MobileMenu;

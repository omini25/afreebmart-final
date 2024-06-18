import Link from "next/link";
import React, { useEffect, useState } from "react";
// import { fetchByCatagory } from "../../redux/action/product";
import {server} from "../../server";
import FeaturedSlider from "../sliders/Featured";
import NewArrivalTabSlider from "../sliders/NewArrivalTab";
import TrendingSlider from "../sliders/Trending";
import moment from "moment";

function FeatchTabSlider() {
    const [active, setActive] = useState("1");
    const [featured, setFeatured] = useState([]);
    const [trending, setTrending] = useState([]);
    const [newArrival, setNewArrival] = useState([]);
    const oneWeekAgo = moment().subtract(7, 'days');

    const featuredProduct = async () => {
        const request = await fetch(`${server}/products`);
        const response = await request.json();
        const allProducts = response.products;
        const featuedItem = allProducts.filter((item) => item.group === "1");
        setFeatured(featuedItem);
        setActive("1");
    };

    const trendingProduct = async () => {
        const request = await fetch(`${server}/products`);
        const response = await request.json();
        const allProducts = response.products;
        const trendingItem = allProducts.filter((item) => item.trending);
        setTrending(trendingItem);
        setActive("2");
    };
    const newArrivalProduct = async () => {
        const request = await fetch(`${server}/products`);
        const response = await request.json();
        const allProducts = response.products;
        const newArrivalItem = allProducts
            .filter((item) => item.group === "1" && moment(item.created_at).isAfter(oneWeekAgo))
            .sort((a, b) => (a.created_at > b.created_at ? -1 : 1));
        setNewArrival(newArrivalItem);
        setActive("3");
    };

    useEffect(() => {
        featuredProduct();
    }, []);

    return (
        <>
            <div className="section-title wow animate__animated animate__fadeIn">
                <h3 className="">Daily Best Sells</h3>

                <ul className="nav nav-tabs links" id="myTab-1" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className={active === "1" ? "nav-link active" : "nav-link"} onClick={featuredProduct}>
                            All Bulk Products
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className={active === "2" ? "nav-link active" : "nav-link"} onClick={trendingProduct}>
                            Popular
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className={active === "3" ? "nav-link active" : "nav-link"} onClick={newArrivalProduct}>
                            New added
                        </button>
                    </li>
                </ul>
            </div>

            <div className="row">
                <div className="col-lg-3 d-none d-lg-flex wow animate__animated animate__fadeIn">
                    <div className="banner-img style-2">
                        <div className="banner-text">
                            <h2 className="mb-100">Buy parts of a product at low prices</h2>

                            <Link legacyBehavior href="/products">
                                <a className="btn btn-xs">
                                    Join group or Create group <i className="fi-rs-arrow-small-right"></i>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-9 col-md-12">
                    <div className="tab-content wow fadeIn animated" id="myTabContent">
                        <div className={active === "1" ? "tab-pane fade show active" : "tab-pane fade"}>
                            <div className="carausel-4-columns-cover card-product-small arrow-center position-relative">
                                <FeaturedSlider products={featured} />
                            </div>
                        </div>

                        <div className={active === "2" ? "tab-pane fade show active" : "tab-pane fade"}>
                            <div className="carausel-4-columns-cover card-product-small arrow-center position-relative">
                                <TrendingSlider products={trending} />
                            </div>
                        </div>
                        <div className={active === "3" ? "tab-pane fade show active" : "tab-pane fade"}>
                            <div className="carausel-4-columns-cover card-product-small arrow-center position-relative">
                                <NewArrivalTabSlider products={newArrival} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default FeatchTabSlider;

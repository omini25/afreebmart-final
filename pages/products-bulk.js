import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import ShowSelect from "../components/ecommerce/Filter/ShowSelect";
import SortSelect from "../components/ecommerce/Filter/SortSelect";
import Breadcrumb2 from "../components/layout/Breadcrumb2";
import CategoryProduct from "./../components/ecommerce/Filter/CategoryProduct";
import PriceRangeSlider from "./../components/ecommerce/Filter/PriceRangeSlider";
import SizeFilter from "./../components/ecommerce/Filter/SizeFilter";
import VendorFilter from "./../components/ecommerce/Filter/VendorFilter";
import Pagination from "./../components/ecommerce/Pagination";
import QuickView from "./../components/ecommerce/QuickView";
import SingleProduct from "./../components/ecommerce/SingleProduct";
import Layout from "./../components/layout/Layout";
import { fetchProduct } from '../redux/action/product';
import axios from "axios";
import {server} from "../server";

const Products = ({ products, productFilters, fetchProduct }) => {
    const [showSection, setShowSection] = useState(false);

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`${server}/products`); // Replace with your actual API endpoint
                const allProducts = response.data.products;

                // Filter the products based on the group field
                const filteredProducts = allProducts.filter(product => product.group === "1");

                setData(filteredProducts);
            } catch (error) {
                console.error("Error fetching products", error);
            }
        };

        fetchProducts();
    }, []);

    let Router = useRouter(),
        searchTerm = Router.query.search,
        showLimit = 12,
        showPagination = 4;

    let [pagination, setPagination] = useState([]);
    let [limit, setLimit] = useState(showLimit);

    // let pages = products && products.items ? Math.ceil(products.items.length / limit) : 0;
    let [pages, setPages] = useState(products && products.items ? Math.ceil(products.items.length / limit) : 0);

    let [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        fetchProduct(searchTerm, "/static/product.json", productFilters);
        if (products && products.items) {
            cratePagination();
        }
    }, [productFilters, limit, pages, products && products.items && products.items.length]);

    const cratePagination = () => {
        // set pagination
        let arr = new Array(Math.ceil(products.items.length / limit))
            .fill()
            .map((_, idx) => idx + 1);

        setPagination(arr);
        setPages(Math.ceil(products.items.length / limit));
    };

    const startIndex = currentPage * limit - limit;
    const endIndex = startIndex + limit;
    const getPaginatedProducts = products && products.items ? products.items.slice(startIndex, endIndex) : [];

    let start = Math.floor((currentPage - 1) / showPagination) * showPagination;
    let end = start + showPagination;
    const getPaginationGroup = pagination.slice(start, end);

    const next = () => {
        setCurrentPage((page) => page + 1);
    };

    const prev = () => {
        setCurrentPage((page) => page - 1);
    };

    const handleActive = (item) => {
        setCurrentPage(item);
    };

    const selectChange = (e) => {
        setLimit(Number(e.target.value));
        setCurrentPage(1);
        setPages(Math.ceil(products.items.length / Number(e.target.value)));
    };
    return (
        <>
            <Layout noBreadcrumb="d-none">
                {/*<Breadcrumb2/>*/}
                <div className="col-xl-10 col-lg-12 m-auto">
                    <button onClick={() => setShowSection(!showSection)} className="btn btn-sm font-weight-bold text-white mt-20 border-radius-5 btn-shadow-brand hover-up">
                        <i className="down-icon">What is Bulk Product</i>
                    </button>
                    {showSection && (
                        <section className="row align-items-end mb-50">
                            <div className="col-lg-4 mb-lg-0 mb-md-5 mb-sm-5">
                                <h4 className="mb-20 text-brand">Guide to Group Bulk Purchasing on Afreebmart</h4>
                                <h3 className="mb-30">Save Money by Sharing Purchases!</h3>
                                <p className="mb-20">Find a Deal:</p>
                                <p>Browse our Group Purchase section for shared buying options.</p>
                            </div>
                            <div className="col-lg-8">
                                <div className="row">
                                    <div className="col-lg-6 mb-4">
                                        <h5 className="mb-20">01. Join or Create a Group</h5>
                                        <p>Select a product and either join an existing group or create your own.</p>
                                    </div>
                                    <div className="col-lg-6 mb-4">
                                        <h5 className="mb-20">02. Invite Others:</h5>
                                        <p>Share the product link or the group id to fill the required slots faster.</p>
                                    </div>
                                    <div className="col-lg-6 mb-lg-0 mb-4">
                                        <h5 className="mb-20 text-brand">03. Complete the Purchase:</h5>
                                        <p>Pay once the group is complete and receive your product.</p>
                                    </div>
                                    <div className="col-lg-6">
                                        <h5 className="mb-20">* Benefits</h5>
                                        <p>- Cost Savings: Share the cost with others.</p>
                                        <br /><p>- Easy Collaboration: Join or create groups for the best deals.</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}
                </div>
                <section className="mt-50 mb-50">
                    <div className="container mb-30">
                        <div className="row flex-row-reverse">
                            <div className="col-lg-4-5">
                                <div className="shop-product-fillter">


                                </div>
                                <div className="row product-grid">
                                    {data && data.length === 0 && (
                                        <h3>No Products Found </h3>
                                    )}

                                    {data && data.map((item, i) => (
                                        <div
                                            className="col-lg-1-5 col-md-4 col-12 col-sm-6"
                                            key={i}
                                        >
                                            <SingleProduct product={item}/>
                                        </div>
                                    ))}
                                </div>

                                {/*<div className="pagination-area mt-15 mb-sm-5 mb-lg-0">*/}
                                {/*    <nav aria-label="Page navigation example">*/}
                                {/*        <Pagination*/}
                                {/*            getPaginationGroup={*/}
                                {/*                getPaginationGroup*/}
                                {/*            }*/}
                                {/*            currentPage={currentPage}*/}
                                {/*            pages={pages}*/}
                                {/*            next={next}*/}
                                {/*            prev={prev}*/}
                                {/*            handleActive={handleActive}*/}
                                {/*        />*/}
                                {/*    </nav>*/}
                                {/*</div>*/}
                            </div>
                            <div className="col-lg-1-5 primary-sidebar sticky-sidebar">
                                <div className="sidebar-widget widget-category-2 mb-30">
                                    <h5 className="section-title style-1 mb-30">
                                        Category
                                    </h5>
                                    <CategoryProduct/>
                                </div>


                                <div className="banner-img wow fadeIn mb-lg-0 animated d-lg-block d-none">
                                    <img
                                        src="/assets/imgs/banner/banner-11.png"
                                        alt=""
                                    />
                                    <div className="banner-text">
                                        <span>Oganic</span>
                                        <h4>
                                            Save 17% <br/>
                                            on{" "}
                                            <span className="text-brand">
                                                Oganic
                                            </span>
                                            <br/>
                                            Juice
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <WishlistModal /> */}
                {/* <CompareModal /> */}
                {/* <CartSidebar /> */}
                <QuickView/>
                {/* <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <Search />
                        </div>
                        <div className="col-xl-6">
                            <SideBarIcons />
                        </div>
                    </div>
                    <div className="row justify-content-center text-center">
                        <div className="col-xl-6">
                            <CategoryProduct />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-3">
                            
                        </div>
                        <div className="col-md-9">
                            

                            

                            
                        </div>
                    </div>
                </div> */}
            </Layout>
        </>
    );
};

const mapStateToProps = (state) => ({
    products: state.products,
    productFilters: state.productFilters,
});

const mapDidpatchToProps = {
    // openCart,
    fetchProduct,
    // fetchMoreProduct,
};

export default connect(mapStateToProps, mapDidpatchToProps)(Products);

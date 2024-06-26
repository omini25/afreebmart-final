import React, { useState } from "react";

const ProductTab = ({product}) => {
    const [activeIndex, setActiveIndex] = useState(1);

    const handleOnClick = (index) => {
        setActiveIndex(index);
    };

    console.log(product)

    return (
        <div className="product-info">
            <div className="tab-style3">
                <ul className="nav nav-tabs text-uppercase">
                    <li className="nav-item">
                        <a className={activeIndex === 1 ? "nav-link active" : "nav-link"} id="Description-tab" data-bs-toggle="tab" onClick={() => handleOnClick(1)}>
                            Description
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className={activeIndex === 2 ? "nav-link active" : "nav-link"} id="Additional-info-tab" data-bs-toggle="tab" onClick={() => handleOnClick(2)}>
                            Additional info
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className={activeIndex === 3 ? "nav-link active" : "nav-link"} id="Reviews-tab" data-bs-toggle="tab" onClick={() => handleOnClick(3)}>
                            Vendor
                        </a>
                    </li>
                    {/*<li className="nav-item">*/}
                    {/*    <a className={activeIndex === 4 ? "nav-link active" : "nav-link"} id="Reviews-tab" data-bs-toggle="tab" onClick={() => handleOnClick(4)}>*/}
                    {/*        Reviews (3)*/}
                    {/*    </a>*/}
                    {/*</li>*/}
                </ul>
                <div className="tab-content shop_info_tab entry-main-content">
                    <div className={activeIndex === 1 ? "tab-pane fade show active" : "tab-pane fade"} id="Description">
                        <div className="">
                            <p>{product.description}</p>
                            {/*<ul className="product-more-infor mt-30">*/}
                            {/*    <li>*/}
                            {/*        <span>Type Of Packing</span> Bottle*/}
                            {/*    </li>*/}
                            {/*    <li>*/}
                            {/*        <span>Color</span> Green, Pink, Powder Blue, Purple*/}
                            {/*    </li>*/}
                            {/*    <li>*/}
                            {/*        <span>Quantity Per Case</span> 100ml*/}
                            {/*    </li>*/}
                            {/*    <li>*/}
                            {/*        <span>Ethyl Alcohol</span> 70%*/}
                            {/*    </li>*/}
                            {/*    <li>*/}
                            {/*        <span>Piece In One</span> Carton*/}
                            {/*    </li>*/}
                            {/*</ul>*/}
                            <hr className="wp-block-separator is-style-dots" />
                            <h4 className="mt-30">Packaging & Delivery</h4>
                            <hr className="wp-block-separator is-style-wide" />
                            <p>We ensure your fresh food items arrive in perfect condition using eco-friendly packaging materials:</p>
                            <p>* Temperature Control: Insulated boxes and ice packs keep perishables fresh.
                                <br />* Secure Wrapping: Items are carefully wrapped to prevent damage.
                                <br />* Sustainable Materials: Our packaging is recyclable and biodegradable.
                            </p>
                            <p>Learn more about our delivery options <a>here</a></p>
                        </div>
                    </div>
                    <div className={activeIndex === 2 ? "tab-pane fade show active" : "tab-pane fade"} id="Additional-info">
                        <table className="font-md">
                            <tbody>
                                <tr className="stand-up">
                                    <th>SKU</th>
                                    <td>
                                        <p>{product.sku}</p>
                                    </td>
                                </tr>
                                <tr className="folded-wo-wheels">
                                    <th>Category</th>
                                    <td>
                                        <p>{product.category}</p>
                                    </td>
                                </tr>
                                <tr className="folded-w-wheels">
                                    <th>Sub-Category</th>
                                    <td>
                                        <p>{product.subcategory}</p>
                                    </td>
                                </tr>
                                <tr className="door-pass-through">
                                    <th>Tags</th>
                                    <td>
                                        <p>{product.tags}</p>
                                    </td>
                                </tr>
                                <tr className="frame">
                                    <th>Unit</th>
                                    <td>
                                        <p>{product.unit}</p>
                                    </td>
                                </tr>
                                <tr className="weight-wo-wheels">
                                    <th>Weight</th>
                                    <td>
                                        <p>{product.shipping_weight}</p>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    <div className={activeIndex === 3 ? "tab-pane fade show active" : "tab-pane fade"} id="Reviews">
                        <div className="vendor-logo d-flex mb-30">
                            {/*<img src="/assets/imgs/vendor/vendor-18.svg" alt="" />*/}
                            <div className="vendor-name ml-15">
                                <h6>
                                    <a href="vendor-details-2.html">{product.store_name}</a>
                                </h6>
                                {/*<div className="product-rate-cover text-end">*/}
                                {/*    <div className="product-rate d-inline-block">*/}
                                {/*        <div className="product-rating" style={{ width: "90%" }}></div>*/}
                                {/*    </div>*/}
                                {/*    <span className="font-small ml-5 text-muted"> (32 reviews)</span>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                        {/*<ul className="contact-infor mb-50">*/}
                        {/*    <li>*/}
                        {/*        <img src="/assets/imgs/theme/icons/icon-location.svg" alt="" />*/}
                        {/*        <strong>Address: </strong> <span>5171 W Campbell Ave undefined Kent, Utah 53127 United States</span>*/}
                        {/*    </li>*/}
                        {/*    <li>*/}
                        {/*        <img src="/assets/imgs/theme/icons/icon-contact.svg" alt="" />*/}
                        {/*        <strong>Contact Seller:</strong>*/}
                        {/*        <span>(+91) - 540-025-553</span>*/}
                        {/*    </li>*/}
                        {/*</ul>*/}
                        {/*<div className="d-flex mb-55">*/}
                        {/*    <div className="mr-30">*/}
                        {/*        <p className="text-brand font-xs">Rating</p>*/}
                        {/*        <h4 className="mb-0">92%</h4>*/}
                        {/*    </div>*/}
                        {/*    <div className="mr-30">*/}
                        {/*        <p className="text-brand font-xs">Ship on time</p>*/}
                        {/*        <h4 className="mb-0">100%</h4>*/}
                        {/*    </div>*/}
                        {/*    <div>*/}
                        {/*        <p className="text-brand font-xs">Chat response</p>*/}
                        {/*        <h4 className="mb-0">89%</h4>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<p>Noodles & Company is an American fast-casual restaurant that offers international and American noodle dishes and pasta in addition to soups and salads. Noodles & Company was founded in 1995 by Aaron Kennedy and is headquartered in Broomfield, Colorado. The company went public in 2013 and recorded a $457 million revenue in 2017.In late 2018, there were 460 Noodles & Company locations across 29 states and Washington, D.C.</p>*/}
                    </div>
                    <div className={activeIndex === 4 ? "tab-pane fade show active" : "tab-pane fade"} id="Reviews">
                        <div className="comments-area">
                            <div className="row">
                                <div className="col-lg-8">
                                    <h4 className="mb-30">Customer questions & answers</h4>
                                    <div className="comment-list">
                                        <div className="single-comment justify-content-between d-flex">
                                            <div className="user justify-content-between d-flex">
                                                <div className="thumb text-center">
                                                    <img src="/assets/imgs/blog/author-2.png" alt="" />
                                                    <h6>
                                                        <a href="#">Jacky Chan</a>
                                                    </h6>
                                                    <p className="font-xxs">Since 2012</p>
                                                </div>
                                                <div className="desc">
                                                    <div className="product-rate d-inline-block">
                                                        <div
                                                            className="product-rating"
                                                            style={{
                                                                width: "90%"
                                                            }}
                                                        ></div>
                                                    </div>
                                                    <p>Thank you very fast shipping from Poland only 3days.</p>
                                                    <div className="d-flex justify-content-between">
                                                        <div className="d-flex align-items-center">
                                                            <p className="font-xs mr-30">December 4, 2020 at 3:12 pm</p>
                                                            <a href="#" className="text-brand btn-reply">
                                                                Reply
                                                                <i className="fi-rs-arrow-right"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="single-comment justify-content-between d-flex">
                                            <div className="user justify-content-between d-flex">
                                                <div className="thumb text-center">
                                                    <img src="/assets/imgs/blog/author-3.png" alt="" />
                                                    <h6>
                                                        <a href="#">Ana Rosie</a>
                                                    </h6>
                                                    <p className="font-xxs">Since 2008</p>
                                                </div>
                                                <div className="desc">
                                                    <div className="product-rate d-inline-block">
                                                        <div
                                                            className="product-rating"
                                                            style={{
                                                                width: "90%"
                                                            }}
                                                        ></div>
                                                    </div>
                                                    <p>Great low price and works well.</p>
                                                    <div className="d-flex justify-content-between">
                                                        <div className="d-flex align-items-center">
                                                            <p className="font-xs mr-30">December 4, 2020 at 3:12 pm</p>
                                                            <a href="#" className="text-brand btn-reply">
                                                                Reply
                                                                <i className="fi-rs-arrow-right"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="single-comment justify-content-between d-flex">
                                            <div className="user justify-content-between d-flex">
                                                <div className="thumb text-center">
                                                    <img src="/assets/imgs/blog/author-4.png" alt="" />
                                                    <h6>
                                                        <a href="#">Steven Keny</a>
                                                    </h6>
                                                    <p className="font-xxs">Since 2010</p>
                                                </div>
                                                <div className="desc">
                                                    <div className="product-rate d-inline-block">
                                                        <div
                                                            className="product-rating"
                                                            style={{
                                                                width: "90%"
                                                            }}
                                                        ></div>
                                                    </div>
                                                    <p>Authentic and Beautiful, Love these way more than ever expected They are Great earphones</p>
                                                    <div className="d-flex justify-content-between">
                                                        <div className="d-flex align-items-center">
                                                            <p className="font-xs mr-30">December 4, 2020 at 3:12 pm</p>
                                                            <a href="#" className="text-brand btn-reply">
                                                                Reply
                                                                <i className="fi-rs-arrow-right"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <h4 className="mb-30">Customer reviews</h4>
                                    <div className="d-flex mb-30">
                                        <div className="product-rate d-inline-block mr-15">
                                            <div
                                                className="product-rating"
                                                style={{
                                                    width: "90%"
                                                }}
                                            ></div>
                                        </div>
                                        <h6>4.8 out of 5</h6>
                                    </div>
                                    <div className="progress">
                                        <span>5 star</span>
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{
                                                width: " 50%"
                                            }}
                                            aria-valuenow="50"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        >
                                            50%
                                        </div>
                                    </div>
                                    <div className="progress">
                                        <span>4 star</span>
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{
                                                width: " 25%"
                                            }}
                                            aria-valuenow="25"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        >
                                            25%
                                        </div>
                                    </div>
                                    <div className="progress">
                                        <span>3 star</span>
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{
                                                width: " 45%"
                                            }}
                                            aria-valuenow="45"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        >
                                            45%
                                        </div>
                                    </div>
                                    <div className="progress">
                                        <span>2 star</span>
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{
                                                width: " 65%"
                                            }}
                                            aria-valuenow="65"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        >
                                            65%
                                        </div>
                                    </div>
                                    <div className="progress mb-30">
                                        <span>1 star</span>
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{
                                                width: " 85%"
                                            }}
                                            aria-valuenow="85"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        >
                                            85%
                                        </div>
                                    </div>
                                    <a href="#" className="font-xs text-muted">
                                        How are ratings calculated?
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="comment-form">
                            <h4 className="mb-15">Add a review</h4>
                            <div className="product-rate d-inline-block mb-30"></div>
                            <div className="row">
                                <div className="col-lg-8 col-md-12">
                                    <form className="form-contact comment_form" action="#" id="commentForm">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <textarea className="form-control w-100" name="comment" id="comment" cols="30" rows="9" placeholder="Write Comment"></textarea>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <input className="form-control" name="name" id="name" type="text" placeholder="Name" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <input className="form-control" name="email" id="email" type="email" placeholder="Email" />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <input className="form-control" name="website" id="website" type="text" placeholder="Website" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <button type="submit" className="button button-contactForm">
                                                Submit Review
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductTab;

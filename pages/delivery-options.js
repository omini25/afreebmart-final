import React, { useState } from 'react';
import Layout from "../components/layout/Layout";

const DeliveryOptions = () => {
    const [openAccordion, setOpenAccordion] = useState(null);

    const toggleAccordion = (accordionId) => {
        setOpenAccordion(openAccordion === accordionId ? null : accordionId);
    };

    return (
        <>
            <Layout>

                <section className="saller-poster-section">
                    <div className="container-fluid-lg">
                        <div className="row">
                            <div className="col-xxl-4 order-lg-2">
                                <div className="poster-box">
                                    <div className="poster-image">
                                        <img
                                            src="{{ asset('images/landing-images/delivery.jpg') }}"
                                            className="img-fluid"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-7">
                                <div className="seller-title h-100 d-flex align-items-center">
                                    <div>
                                        <h2>Delivery Options and Timeline at Afreebmart</h2>
                                        <p>
                                            Welcome to Afreebmart's Delivery Options and Timeline page. Here,
                                            we provide detailed information about our delivery services,
                                            including available options, delivery areas, timelines, and
                                            related policies.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="business-section section-b-space">
                    <div className="container-fluid-lg">
                        <div className="accordion" id="deliveryAccordion">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button"
                                            onClick={() => toggleAccordion('collapseOne')}
                                            aria-expanded={openAccordion === 'collapseOne'}
                                            aria-controls="collapseOne">
                                        Delivery Options
                                    </button>
                                </h2>
                                <div id="collapseOne"
                                     className={`accordion-collapse collapse ${openAccordion === 'collapseOne' ? 'show' : ''}`}
                                     aria-labelledby="headingOne" data-bs-parent="#deliveryAccordion">
                                    <div className="accordion-body">
                                        <strong>Standard Delivery:</strong>
                                        <ul>
                                            <li>Available for all orders within our designated delivery areas</li>
                                            <li>Delivery fees may apply based on order category, type size and
                                                location.
                                            </li>
                                            <li>Estimated delivery time: estimated at 1-7 business days after order.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                            aria-expanded="false" aria-controls="collapseTwo">
                                        Delivery Areas : Available delivery areas
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse"
                                     aria-labelledby="headingTwo" data-bs-parent="#deliveryAccordion">
                                    <div className="accordion-body">
                                        <strong>Local Delivery:</strong>
                                        <ul>
                                            <li>We offer local delivery within Milwaukee</li>
                                            <li>Delivery availability and fees are based on the delivery address
                                                provided during checkout.
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div id="collapseTwo" className="accordion-collapse collapse"
                                     aria-labelledby="headingTwo" data-bs-parent="#deliveryAccordion">
                                    <div className="accordion-body">
                                        <strong>Citywide Delivery:</strong>
                                        <ul>
                                            <li>Afreebmart provides citywide delivery across Wisconsin.</li>
                                            <li>Delivery fees and timelines may vary based on distance and delivery zone
                                                within the state.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                            aria-expanded="false" aria-controls="collapseThree">
                                        Delivery Timeline
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse"
                                     aria-labelledby="headingThree" data-bs-parent="#deliveryAccordion">
                                    <div className="accordion-body">
                                        <strong>Order Processing:</strong>
                                        <ul>
                                            <li>Orders are processed promptly upon receipt and verification of
                                                payment.
                                            </li>
                                            <li>After processing, orders are dispatched for delivery within 1 to 10
                                                business days for standard delivery.
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div id="collapseThree" className="accordion-collapse collapse"
                                     aria-labelledby="headingThree" data-bs-parent="#deliveryAccordion">
                                    <div className="accordion-body">
                                        <strong>Dispatch and Transit:</strong>
                                        <ul>
                                            <li>Transit times depend on the delivery location.</li>
                                        </ul>
                                    </div>
                                </div>

                                <div id="collapseThree" className="accordion-collapse collapse"
                                     aria-labelledby="headingThree" data-bs-parent="#deliveryAccordion">
                                    <div className="accordion-body">
                                        <strong>Estimated Delivery Time:</strong>
                                        <ul>
                                            <li>For standard delivery: estimated timeframe of 1-7 business days from
                                                order processing.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFour">
                                    <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseFour"
                                            aria-expanded="false" aria-controls="collapseFour">
                                        Delivery Policies
                                    </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse"
                                     aria-labelledby="headingFour" data-bs-parent="#deliveryAccordion">
                                    <div className="accordion-body">
                                        <strong>Delivery Confirmation:</strong>
                                        <ul>
                                            <li>Customers will receive a confirmation email or notification once their
                                                order is out for delivery.
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div id="collapseFour" className="accordion-collapse collapse"
                                     aria-labelledby="headingFour" data-bs-parent="#deliveryAccordion">
                                    <div className="accordion-body">
                                        <strong>Tracking:</strong>
                                        <ul>
                                            <li>Order tracking information will be provided to track the status of your
                                                delivery.
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div id="collapseFour" className="accordion-collapse collapse"
                                     aria-labelledby="headingFour" data-bs-parent="#deliveryAccordion">
                                    <div className="accordion-body">
                                        <strong>Delivery Updates:</strong>
                                        <ul>
                                            <li>Customers may receive updates or notifications regarding their delivery
                                                status or any delays.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>


                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFive">
                                    <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseFive"
                                            aria-expanded="false" aria-controls="collapseFive">
                                        Delivery Fees
                                    </button>
                                </h2>
                                <div id="collapseFive" className="accordion-collapse collapse"
                                     aria-labelledby="headingFive" data-bs-parent="#deliveryAccordion">
                                    <div className="accordion-body">
                                        <strong>Standard Delivery Fees:</strong>
                                        <ul>
                                            <li>Standard fee does not apply.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>


                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingSix">
                                    <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseSix"
                                            aria-expanded="false" aria-controls="collapseSix">
                                        Delivery Schedule
                                    </button>
                                </h2>
                                <div id="collapseSix" className="accordion-collapse collapse"
                                     aria-labelledby="headingSix" data-bs-parent="#deliveryAccordion">
                                    <div className="accordion-body">
                                        <strong>Delivery Days:</strong>
                                        <ul>
                                            <li>Deliveries are typically made on [Specify delivery days, e.g., Monday to
                                                Friday].
                                            </li>
                                            <li>Weekend or holiday delivery options may be available in some areas.</li>
                                        </ul>
                                    </div>
                                </div>
                                <div id="collapseSix" className="accordion-collapse collapse"
                                     aria-labelledby="headingSix" data-bs-parent="#deliveryAccordion">
                                    <div className="accordion-body">
                                        <strong>Delivery Hours:</strong>
                                        <ul>
                                            <li>Delivery hours vary based on location and delivery carrier schedules.
                                            </li>
                                            <li>Customers will be informed of the estimated delivery window during
                                                checkout.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingSeven">
                                    <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseSeven"
                                            aria-expanded="false" aria-controls="collapseSeven">
                                        Group Purchases
                                    </button>
                                </h2>
                                <div id="collapseSeven" className="accordion-collapse collapse"
                                     aria-labelledby="headingSeven" data-bs-parent="#deliveryAccordion">
                                    <div className="accordion-body">
                                        <strong>Group Purchase Option:</strong>
                                        <ul>
                                            <li>Customers have the option to buy items in groups as a team.</li>
                                            <li>Individuals participating in group purchases will bear the cost of their
                                                own items.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

            </Layout>

        </>
    );
}

export default DeliveryOptions;
import Layout from "../components/layout/Layout";
import Link from "next/link"
import React, { useState, useEffect } from "react";
import {useDispatch} from "react-redux";
import {server} from "../server";
import axios from "axios";
import {toast} from "react-toastify";
import { useRouter } from "next/router";
import {Modal} from "react-responsive-modal";
import AddAddress from "../components/ecommerce/AddAddress";

function Account() {
    const [shouldRedirect, setShouldRedirect] = useState(false);
    const router = useRouter();
    const [activeIndex, setActiveIndex] = useState(1);
    const [userInfo, setUserInfo] = useState({});
    const dispatch = useDispatch();
    const userId = userInfo.user ? userInfo.user.id : null;

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentAddress, setCurrentAddress] = useState(null);

    const openModal = (addr) => {
        setCurrentAddress(addr);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn');

        if (!isLoggedIn) {
            router.push('/page-login');
            toast('You need to login to access this page!')
        }
    }, []);

    const handleLogout = () => {
        if (typeof window !== 'undefined') {
            // Remove userInfo and isLoggedIn from localStorage
            localStorage.removeItem('userInfo');
            localStorage.removeItem('isLoggedIn');
        }

        // Dispatch logout action to update the state
        dispatch({ type: 'USER_LOGOUT' });

        // Set shouldRedirect to true
        setShouldRedirect(true);
        toast('Logout successful!')
    };


    useEffect(() => {
        if (shouldRedirect) {
            // Redirect to home page
            router.push('/');
            // Reset shouldRedirect
            setShouldRedirect(false);
        }
    }, [shouldRedirect]);

    useEffect(() => {
        const storedUserInfo = JSON.parse(localStorage.getItem('userInfo'));
        if (storedUserInfo) {
            setUserInfo(storedUserInfo);
        }
    }, []);

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const storedUserInfo = JSON.parse(localStorage.getItem('userInfo'));
        if (storedUserInfo) {
            setUserInfo(storedUserInfo);
            fetchOrders(storedUserInfo.user.id);
        }
    }, []);


    const fetchOrders = async (userId) => {
        try {
            const response = await axios.get(`${server}/order/${userId}`);
            setOrders(response.data);
        } catch (error) {
            console.error('Failed to fetch orders:', error);
        }
    };

    const handleOnClick = (index) => {
        setActiveIndex(index); // remove the curly braces
    };

    const [address, setAddress] = useState('');


    useEffect(() => {
        const fetchAddress = async () => {
            if (userInfo.user) {
                try {
                    const response = await axios.get(`${server}/address/${userInfo.user.id}`);
                    setAddress(response.data.address);
                } catch (error) {
                    console.error('Failed to fetch address:', error);
                }
            }
        };
        fetchAddress();
    }, [userInfo]);

    console.log(address);


    const handleSubmit = async (event) => {
        event.preventDefault();

        const name = event.target.elements.name.value;
        const phone = event.target.elements.phone.value;
        const email = event.target.elements.email.value;
        const newPassword = event.target.elements.npassword.value;
        const confirmPassword = event.target.elements.cpassword.value;

        // Create a new object
        const data = {};

        // Add only non-empty fields to the object
        if (name) data.name = name;
        if (phone) data.phone = phone;
        if (email) data.email = email;
        if (newPassword) data.newPassword = newPassword;
        if (confirmPassword) data.confirmPassword = confirmPassword;

        try {
            const response = await axios.put(`${server}/user/${userId}`, data);
            console.log(response.data);

            // Update userInfo state with the new data
            setUserInfo(prevState => ({
                ...prevState,
                user: {
                    ...prevState.user,
                    ...data
                }
            }));

            // Update userInfo in localStorage
            const storedUserInfo = JSON.parse(localStorage.getItem('userInfo'));
            localStorage.setItem('userInfo', JSON.stringify({
                ...storedUserInfo,
                user: {
                    ...storedUserInfo.user,
                    ...data
                }
            }));

            // Show success toast
            toast.success('Profile updated successfully');

            // Refresh the page
            router.reload();

        } catch (error) {
            console.error('Failed to submit form:', error);
        }
    };

    const fetchAddress = async () => {
        if (userInfo.user) {
            try {
                const response = await axios.get(`${server}/address/${userInfo.user.id}`);
                setAddress(response.data.address);
            } catch (error) {
                console.error('Failed to fetch address:', error);
            }
        }
    };

    return (
        <>
            <Layout parent="Home" sub="Pages" subChild="Account">
                <div className="page-content pt-150 pb-150">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 m-auto">
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="dashboard-menu">
                                            <ul className="nav flex-column" role="tablist">
                                                <li className="nav-item">
                                                    <a className={activeIndex === 1 ? "nav-link active" : "nav-link"}
                                                       onClick={() => handleOnClick(1)}><i
                                                        className="fi-rs-settings-sliders mr-10"></i>Dashboard</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className={activeIndex === 2 ? "nav-link active" : "nav-link"}
                                                       onClick={() => handleOnClick(2)}><i
                                                        className="fi-rs-shopping-bag mr-10"></i>Orders</a>
                                                </li>

                                                <li className="nav-item">
                                                    <a className={activeIndex === 6 ? "nav-link active" : "nav-link"}
                                                       onClick={() => handleOnClick(6)}><i
                                                        className="fi-rs-shopping-bag mr-10"></i>Bulk Groups</a>
                                                </li>

                                                <li className="nav-item">
                                                    <a className={activeIndex === 3 ? "nav-link active" : "nav-link"}
                                                       onClick={() => handleOnClick(3)}><i
                                                        className="fi-rs-shopping-cart-check mr-10"></i>Track Your Order</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className={activeIndex === 4 ? "nav-link active" : "nav-link"}
                                                       onClick={() => handleOnClick(4)}><i
                                                        className="fi-rs-marker mr-10"></i>My Address</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className={activeIndex === 5 ? "nav-link active" : "nav-link"}
                                                       onClick={() => handleOnClick(5)}><i
                                                        className="fi-rs-user mr-10"></i>Account details</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a onClick={handleLogout} className="nav-link"><i
                                                        className="fi-rs-sign-out mr-10"></i>Logout</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-9">
                                    <div className="tab-content account dashboard-content pl-50">
                                            <div className={activeIndex === 1 ? "tab-pane fade active show" : "tab-pane fade "} >
                                                <div className="card">
                                                    <div className="card-header">
                                                        <h3 className="mb-0">Hello {userInfo.user ? userInfo.user.name : ''}!</h3>
                                                    </div>
                                                    <div className="card-body">
                                                        <p>
                                                            From your account dashboard. you can easily check &amp; view your <a href="#">recent orders</a>,<br />
                                                            manage your <a href="#">addresses</a> and <a href="#">edit your password and account details.</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={activeIndex === 2 ? "tab-pane fade active show" : "tab-pane fade "} >
                                                <div className="card">
                                                    <div className="card-header">
                                                        <h3 className="mb-0">Your Orders</h3>
                                                    </div>
                                                    <div className="card-body">
                                                        <div className="table-responsive">
                                                            <table className="table">
                                                                <thead>
                                                                <tr>
                                                                    <th>Order</th>
                                                                    <th>Date</th>
                                                                    <th>Status</th>
                                                                    <th>Total</th>
                                                                    <th>Actions</th>
                                                                </tr>
                                                                </thead>
                                                                <tbody>
                                                                {orders && orders.orders && Array.isArray(orders.orders) && orders.orders.map((order) => (
                                                                    <tr key={order.id}>
                                                                        <td>#{order.id}</td>
                                                                        <td>{new Date(order.created_at).toLocaleDateString()}</td>
                                                                        <td>{order.status}</td>
                                                                        <td>${order.total_price} for {order.quantity} item(s)</td>
                                                                        <td><a href="#"
                                                                               className="btn-small d-block">View</a>
                                                                        </td>
                                                                    </tr>
                                                                ))}
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                        <div
                                            className={activeIndex === 3 ? "tab-pane fade active show" : "tab-pane fade "}>
                                        <div className="card">
                                                    <div className="card-header">
                                                        <h3 className="mb-0">Orders tracking</h3>
                                                    </div>
                                                    <div className="card-body contact-from-area">
                                                        <p>To track your order please enter your OrderID in the box below and press "Track" button. This was given to you on your receipt and in the confirmation email you should have received.</p>
                                                        <div className="row">
                                                            <div className="col-lg-8">
                                                                <form className="contact-form-style mt-30 mb-50" action="#" method="post">
                                                                    <div className="input-style mb-20">
                                                                        <label>Order ID</label>
                                                                        <input name="order-id" placeholder="Found in your order confirmation email" type="text" />
                                                                    </div>
                                                                    <div className="input-style mb-20">
                                                                        <label>Billing email</label>
                                                                        <input name="billing-email" placeholder="Email you used during checkout" type="email" />
                                                                    </div>
                                                                    <button className="submit submit-auto-width" type="submit">Track</button>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={activeIndex === 4 ? "tab-pane fade active show" : "tab-pane fade "} >
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="card mb-3 mb-lg-0">
                                                            <div className="card-header d-flex justify-content-between">
                                                                <h3 className="mb-0 mr-5">Address</h3>
                                                                <AddAddress userId={userId} refreshAddresses={fetchAddress}/>
                                                            </div>
                                                            <div className="card-body">
                                                                <div>
                                                                    {address && address.map((addr, index) => (
                                                                        <div key={index}>
                                                                            <address className="mt-20">
                                                                                {addr.street}, <br />{addr.city}, <br />{addr.state}, <br />{addr.country}, <br />{addr.zip_code}
                                                                            </address>
                                                                            <button className="btn btn-fill-out btn-block mt-20" onClick={() => openModal(addr)}>Edit</button>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>

                                                            <Modal
                                                                isOpen={modalIsOpen}
                                                                onRequestClose={closeModal}
                                                                contentLabel="Edit Address"
                                                            >
                                                                <h2>Edit Address</h2>
                                                                <form>
                                                                    <label>
                                                                        Street:
                                                                        <input type="text"
                                                                               defaultValue={currentAddress ? currentAddress.street : ''}/>
                                                                    </label>
                                                                    <label>
                                                                        City:
                                                                        <input type="text"
                                                                               defaultValue={currentAddress ? currentAddress.city : ''}/>
                                                                    </label>
                                                                    <label>
                                                                        State:
                                                                        <input type="text"
                                                                               defaultValue={currentAddress ? currentAddress.state : ''}/>
                                                                    </label>
                                                                    <label>
                                                                        Country:
                                                                        <input type="text"
                                                                               defaultValue={currentAddress ? currentAddress.country : ''}/>
                                                                    </label>
                                                                    <label>
                                                                        Zip Code:
                                                                        <input type="text"
                                                                               defaultValue={currentAddress ? currentAddress.zip_code : ''}/>
                                                                    </label>
                                                                    <button type="submit">Save</button>
                                                                </form>
                                                                <button onClick={closeModal}>Close</button>
                                                            </Modal>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        <div
                                            className={activeIndex === 5 ? "tab-pane fade active show" : "tab-pane fade "}>
                                            <div className="card">
                                                <div className="card-header">
                                                    <h5>Account Details</h5>
                                                </div>
                                                <div className="card-body">
                                                    <p>Already have an account? <Link legacyBehavior href="/page-login"><a>Log
                                                        in instead!</a></Link></p>
                                                    <form onSubmit={handleSubmit} name="enq">
                                                        <div className="row">
                                                            <div className="form-group col-md-6">
                                                                <label>Name <span className="required">*</span></label>
                                                                <input
                                                                    required=""
                                                                    className="form-control"
                                                                    name="name"
                                                                    type="text"
                                                                    placeholder={userInfo.user ? userInfo.user.name : ''}
                                                                />
                                                            </div>
                                                            <div className="form-group col-md-6">
                                                                    <label>Phone Number <span className="required">*</span></label>
                                                                    <input required=""
                                                                           className="form-control"
                                                                           name="phone"
                                                                           placeholder={userInfo.user ? userInfo.user.phone : ''}
                                                                    />
                                                                </div>

                                                                <div className="form-group col-md-12">
                                                                    <label>Email Address <span className="required">*</span></label>
                                                                    <input required=""
                                                                           className="form-control"
                                                                           name="email"
                                                                           type="email"
                                                                            placeholder={userInfo.user ? userInfo.user.email : ''}
                                                                    />
                                                                </div>
                                                                {/*<div className="form-group col-md-12">*/}
                                                                {/*    <label>Current Password <span className="required">*</span></label>*/}
                                                                {/*    <input required="" className="form-control" name="password" type="password" />*/}
                                                                {/*</div>*/}
                                                                <div className="form-group col-md-12">
                                                                    <label>New Password <span className="required">*</span></label>
                                                                    <input required="" className="form-control" name="npassword" type="password" />
                                                                </div>
                                                                <div className="form-group col-md-12">
                                                                    <label>Confirm Password <span className="required">*</span></label>
                                                                    <input required="" className="form-control" name="cpassword" type="password" />
                                                                </div>
                                                                <div className="col-md-12">
                                                                    <button type="submit" className="btn btn-fill-out submit font-weight-bold" name="submit" value="Submit">Save Change</button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}



export default Account;

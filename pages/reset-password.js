import Link from "next/link";
import {useState} from "react";
import {toast} from "react-toastify";
import axios from "axios";
import {server} from "../server";

function ResetPassword() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleResetPassword = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            toast("Passwords do not match!");
            return;
        }

        // Add your password reset logic here
    };

    return (
        <>
            {/*<Layout parent="Home" sub="Pages" subChild="Login & Register">*/}
            <div className="page-content pt-50 pb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-10 col-md-12 m-auto">

                            <div className="col-lg-6 col-md-8">
                                <Link legacyBehavior href="/">
                                    <a>
                                        <img src="assets/afreemart-logo.png" alt=""
                                             style={{width: '50%', height: 'auto'}}/>
                                    </a>
                                </Link>
                            </div>

                            <div className="row mt-30">
                                <div className="col-lg-6 pr-30 d-none d-lg-block">
                                    <img className="border-radius-15"
                                         src="https://images.unsplash.com/photo-1550258987-190a2d41a8ba?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                         alt=""/>
                                </div>
                                <div className="col-lg-6 col-md-8">
                                    <div className="login_wrap widget-taber-content background-white">
                                        <div className="padding_eight_all bg-white">
                                            <div className="heading_s1">
                                                <h1 className="mb-5">Reset Password</h1>

                                            </div>
                                            <form onSubmit={handleResetPassword}>
                                                <div className="form-group">
                                                    <input
                                                        type="password"
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                        placeholder="New Password"
                                                        required
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <input
                                                        type="password"
                                                        value={confirmPassword}
                                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                                        placeholder="Confirm New Password"
                                                        required
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <button type="submit" className="btn btn-heading btn-block hover-up"
                                                            name="login">Reset Password
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
            </div>
            {/*</Layout>*/}
        </>
    );
}

export default ResetPassword;
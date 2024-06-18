import Link from "next/link";
import Layout from "../components/layout/Layout";
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/action/userActions';
import {useState} from "react";
import {toast} from "react-toastify";
import {useRouter} from "next/router";

function Login() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const error = useSelector(state => state.error);
    const router = useRouter(); // Add this line

    const handleLogin = async (event) => {
        event.preventDefault();

        await dispatch(login(email, password));
        if (!error) {
            toast.success('Login successful!'); // Add this line
            router.push('/page-account'); // Add this line
        } else {
            toast.error('Login failed!');
        }
    };

    return (
        <>
            {/*<Layout parent="Home" sub="Pages" subChild="Login & Register">*/}
            <div className="page-content pt-150 pb-150">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-10 col-md-12 m-auto">
                            <div className="row">
                                <div className="col-lg-6 pr-30 d-none d-lg-block">
                                    <img className="border-radius-15" src="https://images.unsplash.com/photo-1550258987-190a2d41a8ba?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                </div>
                                <div className="col-lg-6 col-md-8">
                                    <div className="login_wrap widget-taber-content background-white">
                                        <div className="padding_eight_all bg-white">
                                            <div className="heading_s1">
                                                <h1 className="mb-5">Login</h1>
                                                <p className="mb-30">Don't have an account? <Link legacyBehavior href="/page-register"><a>Create here</a></Link></p>
                                            </div>
                                            <form onSubmit={handleLogin}>
                                                <div className="form-group">
                                                    <input
                                                        type="email"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        placeholder="Email"
                                                        required
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <input
                                                        type="password"
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                        placeholder="Password"
                                                        required
                                                    />
                                                </div>
                                                {/*<div className="login_footer form-group">*/}
                                                {/*    <div className="chek-form">*/}
                                                {/*        <input type="text" required="" name="email"*/}
                                                {/*               placeholder="Security code *"/>*/}
                                                {/*    </div>*/}
                                                {/*    <span className="security-code">*/}
                                                {/*        <b className="text-new">8</b>*/}
                                                {/*        <b className="text-hot">6</b>*/}
                                                {/*        <b className="text-sale">7</b>*/}
                                                {/*        <b className="text-best">5</b>*/}
                                                {/*    </span>*/}
                                                {/*</div>*/}
                                                <div className="login_footer form-group mb-50">
                                                    <div className="chek-form">
                                                        <div className="custome-checkbox">
                                                            <input className="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox1" value="" />
                                                            <label className="form-check-label" htmlFor="exampleCheckbox1"><span>Remember me</span></label>
                                                        </div>
                                                    </div>
                                                    <a className="text-muted" href="#">Forgot password?</a>
                                                </div>
                                                <div className="form-group">
                                                    <button type="submit" className="btn btn-heading btn-block hover-up" name="login">Log in</button>
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

export default Login;
import Link from "next/link";
import Layout from "../components/layout/Layout";
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../redux/action/userActions';
import {useState} from "react";
import {toast} from "react-toastify";
import {useRouter} from "next/router";

function Signup() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const error = useSelector(state => state.error);
    const router = useRouter(); // Add this line

    const handleSignup = async (event) => {
        event.preventDefault();

        // const enteredSecurityCode = event.target.elements.securityCode.value;
        // if (enteredSecurityCode !== securityCode.toString()) {
        //     alert('Security code does not match!');
        //     return;
        // }

        const name = event.target.elements.name.value;
        const email = event.target.elements.email.value;
        const password = event.target.elements.password.value;

        await dispatch(signup(name, email, password));
        if (!error) {
            toast.success('Sign-Up successful!'); // Add this line
            router.push('/page-account'); // Add this line
        } else {
            toast.error('Sign Up failed!');
        }
    };

    // Generate a new security code when the component mounts
    // useEffect(() => {
    //     const newSecurityCode = Math.floor(1000 + Math.random() * 9000); // generates a random 4 digit number
    //     setSecurityCode(newSecurityCode);
    // }, []);

    // const handleSubmit = (event) => {
    //     const enteredSecurityCode = event.target.elements.securityCode.value;
    //
    //     if (enteredSecurityCode !== securityCode.toString()) {
    //         alert('Security code does not match!');
    //         event.preventDefault();
    //     }
    // };


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
                            <div className="row">
                                <div className="col-lg-6 pr-30 d-none d-lg-block">
                                    <img className="border-radius-15"
                                         src="https://images.unsplash.com/photo-1550258987-190a2d41a8ba?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                         alt=""/>
                                </div>
                                <div className="col-lg-6 col-md-8">
                                    <div className="login_wrap widget-taber-content background-white">
                                        <div className="padding_eight_all bg-white">
                                            <div className="heading_s1">
                                                <h1 className="mb-5">Signup</h1>
                                                <p className="mb-30">Have an account? <Link legacyBehavior
                                                                                            href="/page-login"><a>Login
                                                    here</a></Link></p>
                                            </div>
                                            <form onSubmit={handleSignup} method="post">
                                                <div className="form-group">
                                                    <input
                                                        id="name"
                                                        name="name"
                                                        type="text"
                                                        autoComplete="name"
                                                        value={name}
                                                        onChange={e => setName(e.target.value)}
                                                        required
                                                        placeholder="Full Name"
                                                    />
                                                </div>

                                                <div className="form-group">
                                                    <input
                                                        id="email"
                                                        name="email"
                                                        type="email"
                                                        autoComplete="email"
                                                        required
                                                        placeholder="Email Address"
                                                        value={email}
                                                        onChange={e => setEmail(e.target.value)}
                                                    />
                                                </div>


                                                <div className="form-group">
                                                    <input
                                                        id="password"
                                                        name="password"
                                                        type="password"
                                                        autoComplete="current-password"
                                                        required
                                                        placeholder="Password"
                                                        value={password}
                                                        onChange={e => setPassword(e.target.value)}
                                                    />
                                                </div>

                                                <div className="form-group">
                                                    <button type="submit" className="btn btn-heading btn-block hover-up"
                                                            name="login">Sign Up
                                                    </button>
                                                </div>
                                                <div className="heading_s1">
                                                    <p className="mb-30">By clicking signup you agree to our <Link
                                                        legacyBehavior href="/page-terms"><a>{"Terms "}</a></Link>
                                                        and <Link legacyBehavior href="/page-privacy-policy"><a>Privacy
                                                            Policy</a></Link>
                                                    </p>
                                                </div>
                                                {error && <p>{error}</p>}
                                            </form>
                                            <div className="">
                                                <div className="card-login mt-10">
                                                    <a href="#" className="social-login facebook-login">
                                                        <img src="/assets/imgs/theme/icons/logo-facebook.svg" alt=""/>
                                                        <span>Continue with Facebook</span>
                                                    </a>
                                                    <a href="#" className="social-login google-login">
                                                        <img src="/assets/imgs/theme/icons/logo-google.svg" alt=""/>
                                                        <span>Continue with Google</span>
                                                    </a>
                                                    <a href="#" className="social-login apple-login">
                                                        <img src="/assets/imgs/theme/icons/logo-apple.svg" alt=""/>
                                                        <span>Continue with Apple</span>
                                                    </a>
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
            {/*</Layout>*/}
        </>
    );
}

export default Signup;

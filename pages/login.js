import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import Link from 'next/link';
import SubscribeForm from '../components/Common/SubscribeForm';

const Login = () => {
    return (
        <>
			<Navbar />

			<PageBanner 
                pageTitle="Login" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Login" 
                BGImage="item-bg4" 
            />

            <div className="login-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="login-image pr-15">
                                <img src="/images/login-form.png" alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="pl-15">
                                <div className="login-form">
                                    <h2>Login</h2>

                                    <form>
                                        <div className="form-group">
                                            <label>Username or email</label>
                                            <input type="text" className="form-control" placeholder="Username or email" />
                                        </div>

                                        <div className="form-group">
                                            <label>Password</label>
                                            <input type="password" className="form-control" placeholder="Password" />
                                        </div>

                                        <div className="row align-items-center">
                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="checkme" />
                                                    <label className="form-check-label" htmlFor="checkme">Remember me</label>
                                                </div>
                                            </div>

                                            <div className="col-lg-6 col-md-6 col-sm-6 lost-your-password">
                                                <Link href="/forgot-password">
                                                    <a className="lost-your-password">Lost your password?</a>
                                                </Link>
                                            </div>
                                        </div>

                                        <button type="submit" className="default-btn">Login</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

			<SubscribeForm />

			<Footer />
		</>
    )
}

export default Login;
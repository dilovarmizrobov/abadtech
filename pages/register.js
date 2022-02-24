import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import SubscribeForm from '../components/Common/SubscribeForm';

const Register = () => {
    return (
        <>
			<Navbar />

			<PageBanner 
                pageTitle="Register" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Register" 
                BGImage="item-bg3" 
            />

            <div className="register-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="register-image pr-15">
                                <img src="/images/register-form.png" alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="pl-15">
                                <div className="register-form">
                                    <h2>Register</h2>

                                    <form>
                                        <div className="form-group">
                                            <label>Username</label>
                                            <input type="text" className="form-control" placeholder="Username" />
                                        </div>

                                        <div className="form-group">
                                            <label>Email</label>
                                            <input type="email" className="form-control" placeholder="Email" />
                                        </div>

                                        <div className="form-group">
                                            <label>Password</label>
                                            <input type="password" className="form-control" placeholder="Password" />
                                        </div>

                                        <p className="description">The password should be at least eight characters long. To make it stronger, use upper and lower case letters, numbers, and symbols like ! " ? $ % ^ & )</p>

                                        <button type="submit" className="default-btn">Register</button>
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

export default Register;
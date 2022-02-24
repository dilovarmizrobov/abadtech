import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import SubscribeForm from '../components/Common/SubscribeForm';

const ForgotPassword = () => {
    return (
        <>
			<Navbar />

			<PageBanner 
                pageTitle="Forgot Password" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Forgot Password" 
                BGImage="item-bg1" 
            />
			
            <div className="forgot-password-area ptb-100">
                <div className="container">
                    <div className="forgot-password-form">
                        <div className="forgot-password-in-title">
                            <h3>Forgot Your Password</h3>
                        </div>
                            
                        <form>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Enter Your Email" />
                            </div>

                            <div className="send-btn">
                                <button type="submit" className="default-btn">Submit Now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
		 
			<SubscribeForm />

			<Footer />
		</>
    )
}

export default ForgotPassword;
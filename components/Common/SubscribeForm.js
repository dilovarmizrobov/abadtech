import React from 'react';

const SubscribeForm = () => {
    return (
        <div className="subscribe-area ptb-100">
            <div className="container">
                <div className="subscribe-content">
                    <span>Get Started Instantly!</span>
                    <h2>Get Only New Update from this Newsletter</h2>

                    <form className="newsletter-form">
                        <input type="email" className="input-newsletter" placeholder="Enter your email" name="EMAIL" required />

                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SubscribeForm;
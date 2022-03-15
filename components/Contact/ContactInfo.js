import React from 'react';

const ContactInfo = () => {
    return (
        <div className="contact-info-area pt-100 pb-70">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="contact-info-box">
                            <div className="icon">
                                <i className="flaticon-email-1"></i>
                            </div>

                            <h3>Email Here</h3>
                            <p><a href="mailto:hello@info@abad.tj">info@abad.tj</a></p>
                            <p><a href="mailto:abrorkholov@abad.tj">abrorkholov@abad.tj</a></p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="contact-info-box">
                            <div className="icon">
                                <i className="flaticon-pin"></i>
                            </div>

                            <h3>Location Here</h3>
                            <p><a href="https://www.google.com/maps/@24.9045273,91.8523559,15z" target="_blank">2750 Quadra Street Victoria Road, New York, Canada</a></p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="contact-info-box">
                            <div className="icon">
                                <i className="flaticon-call"></i>
                            </div>

                            <h3>Call Here</h3>
                            <p><a href="tel:+992988833369">+992 988 833 369</a></p>
                            <p><a href="tel:+992988888562">+992 988 888 562</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo;
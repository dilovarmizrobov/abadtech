import React from 'react';
import Link from 'next/link';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <div className="footer-area pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-footer-widget">
                                <div className="logo">
                                    <Link href="/">
                                        <a>
                                            <img src="/images/logo.svg" alt="image"/>
                                        </a>
                                    </Link>
                                </div>

                                <p>Abad Technologies is engaged in the development, design and consulting of enterprise
                                    software in the domestic market of Tajikistan and exports IT solutions abroad.</p>

                                <ul className="social">
                                    <li>
                                        <a href="https://www.linkedin.com/company/abadtech/" className="linkedin" target="_blank">
                                            <i className='bx bxl-linkedin'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/abadtech/" className="linkedin" target="_blank">
                                            <i className='bx bxl-instagram-alt'></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="single-footer-widget pl-5">
                                <h3>Important Links</h3>

                                <ul className="quick-links">
                                    <li>
                                        <Link href="/about-2">
                                            <a>About Us</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/portfolio-2">
                                            <a>Portfolio</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services-2">
                                            <a>Services</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/blog-2">
                                            <a>Blog</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact-1">
                                            <a>Contact</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/privacy-policy">
                                            <a>Privacy Policy</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="single-footer-widget pl-5">
                                <h3>Featured Services</h3>

                                <ul className="quick-links">
                                    <li>
                                        <Link href="/services-details">
                                            <a>IT Management</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services-details">
                                            <a>Development</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services-details">
                                            <a>UI/UX Design</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services-details">
                                            <a>Support Engineer</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services-details">
                                            <a>Website Development</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services-details">
                                            <a>App Development</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="single-footer-widget pl-5">
                                <h3>Information</h3>

                                <ul className="footer-contact-info">
                                    <li>
                                        <i className="flaticon-call"></i>
                                        <span>Phone</span>
                                        <a href="tel:882569756">+992-988-833-369</a>
                                        <a href="tel:882569756">+992-988-888-562</a>
                                    </li>
                                    <li>
                                        <i className="flaticon-email-1"></i>
                                        <span>Email</span>
                                        <a href="mailto:info@abad.tj">info@abad.tj</a>
                                    </li>
                                    <li>
                                        <i className="flaticon-pin"></i>
                                        <span>Address</span>
                                        <a href="https://www.google.com/maps/@51.5287718,-0.2416804,11z"
                                           target="_blank">50 Nortambiya, UK.</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="copyright-area">
                <div className="container">
                    <div className="copyright-area-content">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6">
                                <p>
                                    Copyright &copy; {currentYear} Abad Technology. All Rights Reserved
                                </p>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <ul>
                                    <li>
                                        <Link href="/terms-of-service">
                                            <a>Terms of Service</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/privacy-policy">
                                            <a>Privacy Policy</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
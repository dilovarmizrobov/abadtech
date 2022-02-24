import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import Link from 'next/link';
import WeWorkForIndustries from '../components/Common/WeWorkForIndustries';

const Services = () => {
    return (
        <>
			<Navbar />

			<PageBanner 
                pageTitle="Services One" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Services One" 
                BGImage="item-bg1" 
            />

            <div className="services-area pt-100 pb-70">
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <div className="image">
                                    <Link href="/services-details">
                                        <a>
                                            <img src="/images/services/services-1.png" alt="image" />
                                        </a>
                                    </Link>
                                </div>
                                <h3>
                                    <Link href="/services-details">
                                        <a>Website Development</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incutu  labore et dolore magna aliqua.</p>

                                <Link href="/services-details">
                                    <a className="services-btn">
                                        Read More <i className='bx bx-chevrons-right'></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <div className="image">
                                    <Link href="/services-details">
                                        <a>
                                            <img src="/images/services/services-2.png" alt="image" />
                                        </a>
                                    </Link>
                                </div>
                                <h3>
                                    <Link href="/services-details">
                                        <a>Digital Media & PPC</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incutu  labore et dolore magna aliqua.</p>
                                
                                <Link href="/services-details">
                                    <a className="services-btn">
                                        Read More <i className='bx bx-chevrons-right'></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <div className="image">
                                    <Link href="/services-details">
                                        <a>
                                            <img src="/images/services/services-3.png" alt="image" />
                                        </a>
                                    </Link>
                                </div>
                                <h3>
                                    <Link href="/services-details">
                                        <a>Social Media Marketing</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incutu  labore et dolore magna aliqua.</p>
                                
                                <Link href="/services-details">
                                    <a className="services-btn">
                                        Read More <i className='bx bx-chevrons-right'></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <div className="image">
                                    <Link href="/services-details">
                                        <a>
                                            <img src="/images/services/services-4.png" alt="image" />
                                        </a>
                                    </Link>
                                </div>
                                <h3>
                                    <Link href="/services-details">
                                        <a>Content Marketing Services</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incutu  labore et dolore magna aliqua.</p>
                                
                                <Link href="/services-details">
                                    <a className="services-btn">
                                        Read More <i className='bx bx-chevrons-right'></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <div className="image">
                                    <Link href="/services-details">
                                        <a>
                                            <img src="/images/services/services-5.png" alt="image" />
                                        </a>
                                    </Link>
                                </div>
                                <h3>
                                    <Link href="/services-details">
                                        <a>Competitor Research</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incutu  labore et dolore magna aliqua.</p>
                                
                                <Link href="/services-details">
                                    <a className="services-btn">
                                        Read More <i className='bx bx-chevrons-right'></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <div className="image">
                                    <Link href="/services-details">
                                        <a>
                                            <img src="/images/services/services-6.png" alt="image" />
                                        </a>
                                    </Link>
                                </div>
                                <h3>
                                    <Link href="/services-details">
                                        <a>Software Development</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incutu  labore et dolore magna aliqua.</p>
                                
                                <Link href="/services-details">
                                    <a className="services-btn">
                                        Read More <i className='bx bx-chevrons-right'></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="default-shape">
                    <div className="shape1">
                        <img src="/images/default-shape/default-shape1.png" alt="image" />
                    </div>
                    <div className="shape2">
                        <img src="/images/default-shape/default-shape2.png" alt="image" />
                    </div>
                    <div className="shape3">
                        <img src="/images/default-shape/default-shape3.png" alt="image" />
                    </div>
                    <div className="shape4">
                        <img src="/images/default-shape/default-shape4.png" alt="image" />
                    </div>
                </div>
            </div>

            <WeWorkForIndustries />

			<Footer />
		</>
    )
}

export default Services;
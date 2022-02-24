import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import Link from 'next/link';
import WeWorkForIndustries from '../components/Common/WeWorkForIndustries';

const ServicesThree = () => {
    return (
        <>
			<Navbar />

			<PageBanner 
                pageTitle="Services Three" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Services Three" 
                BGImage="item-bg1" 
            />

            <div className="services-area bg-fafafa pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <i className="flaticon-code"></i>
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
                            <div className="single-services-box">
                                <div className="icon">
                                    <i className="flaticon-vector"></i>
                                </div>
                                <h3>
                                    <Link href="/services-details">
                                        <a>Web Design</a>
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
                            <div className="single-services-box">
                                <div className="icon">
                                    <i className="flaticon-network"></i>
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
                            <div className="single-services-box">
                                <div className="icon">
                                    <i className="flaticon-search"></i>
                                </div>
                                <h3>
                                    <Link href="/services-details">
                                        <a>Content Marketing</a>
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
                            <div className="single-services-box">
                                <div className="icon">
                                    <i className="flaticon-digital-marketing-1"></i>
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
                            <div className="single-services-box">
                                <div className="icon">
                                    <i className="flaticon-cpu"></i>
                                </div>
                                <h3>
                                    <Link href="/services-details">
                                        <a>Technology</a>
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

export default ServicesThree;
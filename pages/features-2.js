import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import Link from 'next/link';
import SubscribeForm from '../components/Common/SubscribeForm';

const FeaturesTwo = () => {
    return (
        <>
			<Navbar />

			<PageBanner 
                pageTitle="Features Two" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Features Two" 
                BGImage="item-bg1" 
            />

            <div className="features-area pt-100 pb-70">
                <div className="container">
                    <div className="section-title text-width">
                        <span>Care Features</span>
                        <h2>Create Awesome Service With Our Tools</h2>
                        <div className="bar"></div>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="features-image-warp">
                                <img src="/images/features/features-2.png" alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="single-features-box top-1">
                                        <div className="icon">
                                            <i className="flaticon-promotion"></i>
                                        </div>
                                        <h3>
                                            <Link href="/services-details">
                                                <a>Marketing Analysis</a>
                                            </Link>
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="single-features-box top-2">
                                        <div className="icon">
                                            <i className="flaticon-speed"></i>
                                        </div>
                                        <h3>
                                            <Link href="/services-details">
                                                <a>Website Optimization</a>
                                            </Link>
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="single-features-box top-3">
                                        <div className="icon">
                                            <i className="flaticon-email"></i>
                                        </div>
                                        <h3>
                                            <Link href="/services-details">
                                                <a>Email Marketing</a>
                                            </Link>
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="single-features-box top-4">
                                        <div className="icon">
                                            <i className="flaticon-network"></i>
                                        </div>
                                        <h3>
                                            <Link href="/services-details">
                                                <a>Social Media Marketing</a>
                                            </Link>
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="features-area pb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="features-inner-content">
                                <span>Features</span>
                                <h3>Digital Marketing</h3>
                                <div className="bar"></div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra.</p>

                                <ul className="features-list">
                                    <li>
                                        <span><i className="flaticon-checked"></i> SEO Marketing</span>
                                    </li>
                                    <li>
                                        <span><i className="flaticon-checked"></i> Social Marketing</span>
                                    </li>
                                    <li>
                                        <span><i className="flaticon-checked"></i> Email Marketing</span>
                                    </li>
                                    <li>
                                        <span><i className="flaticon-checked"></i> Facebook Marketing</span>
                                    </li>
                                    <li>
                                        <span><i className="flaticon-checked"></i> Youtube Marketing</span>
                                    </li>
                                    <li>
                                        <span><i className="flaticon-checked"></i> Page Ranking</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="features-image">
                                <img src="/images/features/features-1.png" alt="image" />
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

export default FeaturesTwo;
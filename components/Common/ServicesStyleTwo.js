import React from 'react';
import Link from 'next/link';

const ServicesStyleTwo = () => {
    return (
        <div className="services-area bg-fafafa pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span>Services we provided</span>
                    <h2>Our Digital Marketing Services</h2>
                    <div className="bar"></div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-services-item">
                            <div className="image">
                                <Link href="/services-details">
                                    <a>
                                        <img src="/images/services/services-7.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>
                            <div className="content">
                                <h3>
                                    <Link href="/services-details">
                                        <a>Creative Web Design</a>
                                    </Link>
                                </h3>
                                <span>Web Design</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6">
                        <div className="single-services-item">
                            <div className="image">
                                <Link href="/services-details">
                                    <a>
                                        <img src="/images/services/services-8.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>
                            <div className="content">
                                <h3>
                                    <Link href="/services-details">
                                        <a>Digital Agency</a>
                                    </Link>
                                </h3>
                                <span>Agency</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-services-item">
                            <div className="image">
                                <Link href="/services-details">
                                    <a>
                                        <img src="/images/services/services-9.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>
                            <div className="content">
                                <h3>
                                    <Link href="/services-details">
                                        <a>Complex Dashboard</a>
                                    </Link>
                                </h3>
                                <span>Solutions</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-services-item">
                            <div className="image">
                                <Link href="/services-details">
                                    <a>
                                        <img src="/images/services/services-10.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>
                            <div className="content">
                                <h3>
                                    <Link href="/services-details">
                                        <a>Software Engineers</a>
                                    </Link>
                                </h3>
                                <span>Analysis</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-services-item">
                            <div className="image">
                                <Link href="/services-details">
                                    <a>
                                        <img src="/images/services/services-11.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>
                            <div className="content">
                                <h3>
                                    <Link href="/services-details">
                                        <a>Marketing Agency</a>
                                    </Link>
                                </h3>
                                <span>Marketing</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-services-item">
                            <div className="image">
                                <Link href="/services-details">
                                    <a>
                                        <img src="/images/services/services-12.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>
                            <div className="content">
                                <h3>
                                    <Link href="/services-details">
                                        <a>Data Analysis</a>
                                    </Link>
                                </h3>
                                <span>Explanation</span>
                            </div>
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
    )
}

export default ServicesStyleTwo;
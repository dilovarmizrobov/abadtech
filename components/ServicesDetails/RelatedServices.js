import React from 'react';
import Link from 'next/link';

const RelatedServices = () => {
    return (
        <div className="services-area pb-70">
            <div className="container">
                <div className="section-title">
                    <span>Services we provided</span>
                    <h2>Related Services</h2>
                    <div className="bar"></div>
                </div>

                <div className="row">
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
                </div>
            </div>
        </div>
    )
}

export default RelatedServices;
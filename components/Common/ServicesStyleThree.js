import React from 'react';
import Link from 'next/link';

const ServicesStyleThree = () => {
    return (
        <div className="services-area bg-fafafa pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span>Services we provided</span>
                    <h2>Our Digital Marketing Services</h2>
                    <div className="bar"></div>
                </div>

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
                            <p>The use of agile development methodologies with the delivery of a predictable result to
                                the customer at each iteration (SCRUM).</p>

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
                            <p>The use of dynamic interface prototyping and modern business process modeling
                                notations.</p>

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
                            <p>Product support in social networks, targeted advertising and brand promotion.</p>

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
                                    <a>SOA</a>
                                </Link>
                            </h3>
                            <p>We use Service-Oriented Architecture (SOA) in the construction of information
                                systems.</p>

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
                                    <a>Mobile apps</a>
                                </Link>
                            </h3>
                            <p>Native development of mobile applications on Android (Architecture Components, Kotlin)
                                and iOS (SwiftUI) platforms.</p>

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
                                    <a>Portals</a>
                                </Link>
                            </h3>
                            <p>Development of thematic portals, online stores, regulatory information management
                                systems, loyalty programs and dynamic sites.</p>

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
                                    <a>Process automation</a>
                                </Link>
                            </h3>
                            <p>Electronic document management, approval chains, CRM, supply automation and production
                                management.</p>

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
                                    <a>Personal accounts</a>
                                </Link>
                            </h3>
                            <p>Development of personal web-accounts of organizations and users with an extensive system
                                of roles and powers.</p>

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
                    <img src="/images/default-shape/default-shape1.png" alt="image"/>
                </div>
                <div className="shape2">
                    <img src="/images/default-shape/default-shape2.png" alt="image"/>
                </div>
                <div className="shape3">
                    <img src="/images/default-shape/default-shape3.png" alt="image"/>
                </div>
                <div className="shape4">
                    <img src="/images/default-shape/default-shape4.png" alt="image"/>
                </div>
            </div>
        </div>
    )
}

export default ServicesStyleThree;
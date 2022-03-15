import React from 'react';
import Link from 'next/link';

const Features = () => {
    return (
        <div className="features-area pt-100">
            <div className="container">
                <div className="section-title text-width">
                    <span>How we work</span>
                    <h2>Create Awesome Service With Our Tools</h2>
                    <div className="bar"/>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-3 col-md-6">
                        <div className="single-features">
                            <div className="icon">
                                <i className="flaticon-analysis"/>
                            </div>
                            <h3>
                                <Link href="/services-details">
                                    <a>Requirement Analysis</a>
                                </Link>
                            </h3>
                            <p>We discuss the product with the customer to make Use case and UML diagrams for
                                structuring the product.</p>

                            <div className="number">
                                <span>1</span>
                            </div>

                            <div className="shape">
                                <img src="/images/features-shape/features-shape-1.png" alt="image"/>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="h-100">

                            <div className="single-features">
                                <div className="icon">
                                    <i className="flaticon-vector"/>
                                </div>
                                <h3>
                                    <Link href="/services-details">
                                        <a>Design</a>
                                    </Link>
                                </h3>
                                <p>Develop prototypes, we define UX/UI, and agreed with the customer.</p>

                                <div className="number">
                                    <span>2</span>
                                </div>

                                <div className="shape">
                                    <img src="/images/features-shape/features-shape-1.png" alt="image"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="single-features">
                            <div className="icon">
                                <i className="flaticon-code"/>
                            </div>
                            <h3>
                                <Link href="/services-details">
                                    <a>Development</a>
                                </Link>
                            </h3>
                            <p>We develop the product in stages and deploy it in QA, test and agree with the customer
                                according to Agile.</p>

                            <div className="number">
                                <span>3</span>
                            </div>

                            <div className="shape">
                                <img src="/images/features-shape/features-shape-1.png" alt="image"/>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="single-features">
                            <div className="icon">
                                <i className="flaticon-digital-marketing-1"/>
                            </div>
                            <h3>
                                <Link href="/services-details">
                                    <a>Release</a>
                                </Link>
                            </h3>
                            <p>After passing all kinds of testing we publish the product globally or locally on the
                                customer's network, depending on the requirements.</p>

                            <div className="number">
                                <span>4</span>
                            </div>

                            <div className="shape">
                                <img src="/images/features-shape/features-shape-1.png" alt="image"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;
import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import ServiceSidebar from '../components/ServicesDetails/ServiceSidebar';
import ServiceFaq from '../components/ServicesDetails/ServiceFaq';
import RelatedServices from '../components/ServicesDetails/RelatedServices';

const ServicesDetails = () => {
    return (
        <>
			<Navbar />

			<PageBanner 
                pageTitle="Services Details" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Services Details" 
                BGImage="item-bg1" 
            />

            <div className="services-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="services-details-image">
                                <img src="/images/services-details/services-details-1.jpg" alt="image" />
                            </div>

                            <div className="services-details-desc">
                                <h3>Creative Solutions, Creative Results</h3>
                                <p>Lorem ipsum dolor sit amet, consectetLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                <h3>Solving Problems, Building Brands</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

                                <div className="services-details-features">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <div className="features-image">
                                                <img src="/images/services-details/services-details-2.jpg" alt="image" />
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <ul className="features-list">
                                                <li><i className="flaticon-check"></i> Offering All Jobs Guaranteed & Neatly Done</li>
                                                <li><i className="flaticon-check"></i> The Problem</li>
                                                <li><i className="flaticon-check"></i> Dedicated and Knowledgeable Professionals</li>
                                                <li><i className="flaticon-check"></i> The Skills</li>
                                                <li><i className="flaticon-check"></i> We provide 24/7 on Time Services</li>
                                                <li><i className="flaticon-check"></i> We Use Technology To Do The Job More Quickly</li>
                                                <li><i className="flaticon-check"></i> We provide 24/7 on Time Services</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-result">
                                    <h3>Challenge and Solutions</h3>
                                    <p>Surrounded by their possessions, pets, and a familiar environment, our clients receive the support they ned to enjoy their regular activities and continue living well at home.</p>
                                </div>

                                <ServiceFaq />
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <ServiceSidebar />
                        </div>
                    </div>
                </div>
            </div>
			
            <RelatedServices />
            
			<Footer />
		</>
    )
}

export default ServicesDetails;
import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import SubscribeForm from '../components/Common/SubscribeForm';
import TeamMember from '../components/Common/TeamMember';
import PriceTable from '../components/PricingPlans/PriceTable';
import TestimonialStyleTwo from '../components/Common/TestimonialStyleTwo';
import FunFactsTwo from '../components/Common/FunFactsTwo';
import WhatWeDoingBest from '../components/HomeFive/WhatWeDoingBest';
import LatestBlogPost from '../components/Common/LatestBlogPost';
import Partners from '../components/Common/Partners';

const AboutOne = () => {
    return (
        <>
			<Navbar />

			<PageBanner 
                pageTitle="About One" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="About One" 
                BGImage="item-bg3" 
            />

            <div className="about-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="about-image-warp"></div>
                        </div>

                        <div className="col-lg-6">
                            <div className="about-content warp">
                                <span>About Us</span>
                                <h3>We Help Companies to Generate Leads and Increase in Sales</h3>
                                <div className="bar"></div>
                                <strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore  dolore magna aliqua.</strong>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  

            <TeamMember />

            <PriceTable />

            <div className="pb-100">
                <TestimonialStyleTwo />
            </div>

            <FunFactsTwo />

            <WhatWeDoingBest />
            
            <LatestBlogPost />
	  
			<SubscribeForm />

            <div className="pt-100">
                <Partners />
            </div>
            
            <Footer />
		</>
    )
}

export default AboutOne;
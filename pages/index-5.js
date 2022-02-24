import React from 'react';
import Navbar from '../components/_App/Navbar';
import MainBanner from '../components/HomeFour/MainBanner';
import Features from '../components/HomeFour/Features';
import AboutContent from '../components/HomeFour/AboutContent';
import Services from '../components/HomeFour/Services';
import QuoteForm from '../components/HomeFive/QuoteForm';
import WeWorkForIndustries from '../components/Common/WeWorkForIndustries';
import PortfolioShowcase from '../components/HomeFour/PortfolioShowcase';
import TestimonialStyleThree from '../components/Common/TestimonialStyleThree';
import LatestBlogPost from '../components/Common/LatestBlogPost';
import SubscribeForm from '../components/Common/SubscribeForm';
import Partners from '../components/Common/Partners';
import Footer from '../components/_App/Footer';

const Index5 = () => {
    return (
        <>
            <Navbar />

            <MainBanner />

            <Features />

            <AboutContent />

            <Services />

            <QuoteForm />

            <WeWorkForIndustries />

            <PortfolioShowcase />

            <TestimonialStyleThree />

            <LatestBlogPost />
            
            <SubscribeForm />

            <div className="pt-100">
                <Partners />
            </div>

            <Footer />
        </>
    )
}

export default Index5;
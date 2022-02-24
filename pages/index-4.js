import React from 'react';
import Navbar from '../components/_App/Navbar';
import MainBanner from '../components/HomeThree/MainBanner';
import Features from '../components/HomeThree/Features';
import ServicesStyleThree from '../components/Common/ServicesStyleThree';
import AboutContent from '../components/HomeThree/AboutContent';
import ImpressivePortfolio from '../components/HomeThree/ImpressivePortfolio';
import PriceTable from '../components/PricingPlans/PriceTable';
import TeamMember from '../components/Common/TeamMember';
import FunFactsTwo from '../components/Common/FunFactsTwo';
import WeWorkForIndustries from '../components/Common/WeWorkForIndustries';
import LatestBlogPost from '../components/Common/LatestBlogPost';
import SubscribeForm from '../components/Common/SubscribeForm';
import Partners from '../components/Common/Partners';
import Footer from '../components/_App/Footer';
import TestimonialStyleThree from '../components/Common/TestimonialStyleThree';

const Index4 = () => {
    return (
        <>
            <Navbar />

            <MainBanner />

            <Features />

            <ServicesStyleThree />

            <AboutContent />

            <ImpressivePortfolio />

            <PriceTable />

            <TeamMember />

            <FunFactsTwo />

            <WeWorkForIndustries />

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

export default Index4;
import React from 'react';
import Navbar from '../components/_App/Navbar';
import MainBanner from '../components/HomeTwo/MainBanner';
import AboutContent from '../components/HomeTwo/AboutContent';
import Features from '../components/HomeTwo/Features';
import ServicesStyleTwo from '../components/Common/ServicesStyleTwo';
import OurProjectStyleTwo from '../components/Common/OurProjectStyleTwo';
import TeamMember from '../components/Common/TeamMember';
import PriceTable from '../components/PricingPlans/PriceTable';
import TestimonialStyleTwo from '../components/Common/TestimonialStyleTwo';
import LatestBlogPost from '../components/Common/LatestBlogPost';
import Partners from '../components/Common/Partners';
import Footer from '../components/_App/Footer';

const Index3 = () => {
    return (
        <>
            <Navbar />

            <MainBanner />

            <AboutContent />

            <Features />

            <ServicesStyleTwo />
            
            <OurProjectStyleTwo />

            <TeamMember />

            <PriceTable />

            <TestimonialStyleTwo />

            <LatestBlogPost />

            <Partners />
            
            <Footer />
        </>
    )
}

export default Index3;
import React from 'react';
import Navbar from '../components/_App/Navbar';
import MainBanner from '../components/HomeOne/MainBanner';
import Features from '../components/HomeOne/Features';
import AboutUsContent from '../components/HomeOne/AboutUsContent';
import ServicesStyleOne from '../components/Common/ServicesStyleOne';
import DigitalExperience from '../components/Common/DigitalExperience';
import FunFacts from '../components/Common/FunFacts';
import OurProjects from '../components/Common/OurProjects';
import Testimonials from '../components/Common/Testimonials';
import LatestBlogPost from '../components/Common/LatestBlogPost';
import Partners from '../components/Common/Partners';
import Footer from '../components/_App/Footer';

const Index2 = () => {
    return (
        <>
            <Navbar />

            <MainBanner />

            <Features />

            <AboutUsContent />

            <ServicesStyleOne />

            <DigitalExperience />

            <FunFacts />

            <OurProjects />

            <Testimonials />

            <LatestBlogPost />

            <Partners />
            
            <Footer />
        </>
    )
}

export default Index2;
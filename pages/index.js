import React from 'react';
import Navbar from '../components/_App/Navbar';
import MainBanner from '../components/HomeFive/MainBanner';
import Features from '../components/HomeOne/Features';
import AboutContent from '../components/HomeFive/AboutContent';
import OurProjectStyleTwo from "../components/Common/OurProjectStyleTwo";
import FunFactsTwo from '../components/Common/FunFactsTwo';
import TeamMemberStyleTwo from '../components/Common/TeamMemberStyleTwo';
import Testimonials from '../components/Common/Testimonials';
import WhatWeDoingBest from '../components/HomeFive/WhatWeDoingBest';
import SubscribeForm from '../components/Common/SubscribeForm';
import Partners from '../components/Common/Partners';
import Footer from '../components/_App/Footer';
import ServicesStyleThree from "../components/Common/ServicesStyleThree";

const Index = () => {
    return (
        <>
            <Navbar />

            <MainBanner />

            <AboutContent />

            <ServicesStyleThree />

            <Features />

            <OurProjectStyleTwo/>

            <FunFactsTwo />

            <TeamMemberStyleTwo />

            <Testimonials />

            <WhatWeDoingBest />

            <SubscribeForm />

            <div className="pt-100">
                <Partners />
            </div>
            
            <Footer />
        </>
    )
}

export default Index;
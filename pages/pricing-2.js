import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import SubscribeForm from '../components/Common/SubscribeForm';
import PriceTableTwo from '../components/PricingPlans/PriceTableTwo';
 
const PricingTwo = () => {
    return (
        <>
			<Navbar />

			<PageBanner 
                pageTitle="Pricing Two" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Pricing Two" 
                BGImage="item-bg1" 
            />

            <div className="pt-100">
                <PriceTableTwo />
            </div>

			<SubscribeForm />

			<Footer />
		</>
    )
}

export default PricingTwo;
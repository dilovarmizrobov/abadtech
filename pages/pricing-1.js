import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import SubscribeForm from '../components/Common/SubscribeForm';
import PriceTable from '../components/PricingPlans/PriceTable';

const PricingOne = () => {
    return (
        <>
			<Navbar />

			<PageBanner 
                pageTitle="Pricing One" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Pricing One" 
                BGImage="item-bg1" 
            />

            <div className="pt-100">
                <PriceTable />
            </div>
	 
			<SubscribeForm />

			<Footer />
		</>
    )
}

export default PricingOne;
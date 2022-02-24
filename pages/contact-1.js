import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import SubscribeForm from '../components/Common/SubscribeForm';
import ContactInfo from '../components/Contact/ContactInfo';
import ContactForm from '../components/Contact/ContactForm';

const Contact = () => {
    return (
        <>
			<Navbar />

			<PageBanner 
                pageTitle="Contact Style One" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Contact Style One" 
                BGImage="item-bg4" 
            />

            <ContactInfo />
 
            <ContactForm />

			<SubscribeForm />

			<Footer />
		</>
    )
}

export default Contact;
import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import TeamMemberStyleTwo from '../components/Common/TeamMemberStyleTwo';
import PriceTableTwo from '../components/PricingPlans/PriceTableTwo';
import TestimonialStyleThree from '../components/Common/TestimonialStyleThree';
import FunFactsTwo from '../components/Common/FunFactsTwo';
import Partners from '../components/Common/Partners';
import SubscribeForm from '../components/Common/SubscribeForm';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

const AboutTwo = () => {

    // Popup Video
	const [isOpen, setIsOpen] = React.useState(true);
    const openModal = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
			<Navbar />

			<PageBanner 
                pageTitle="About Two" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="About Two" 
                BGImage="item-bg4" 
            />
 
            <>
                <div className="about-area ptb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="about-image-warp image-three">
                                    <div
                                        onClick={e => {e.preventDefault(); openModal()}}
                                        className="video-btn popup-youtube"
                                    > 
                                        <i className='bx bx-play'></i>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="about-content warp">
                                    <span>About Us</span>
                                    <h3>We Help Companies to Generate Leads and Increase in Sales</h3>
                                    <div className="bar"></div>
                                    <strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore  dolore magna aliqua.</strong>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                                    <div className="about-inner-content">
                                        <div className="icon">
                                            <i className="flaticon-check"></i>
                                        </div>
                                        <h4>Online Presence</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>

                                    <div className="about-inner-content">
                                        <div className="icon">
                                            <i className="flaticon-check"></i>
                                        </div>
                                        <h4>Marketing Strategy</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>

                                    <div className="about-inner-content">
                                        <div className="icon">
                                            <i className="flaticon-check"></i>
                                        </div>
                                        <h4>Promote local Sale</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* If you want to change the video need to update videoID */}
                <ModalVideo 
                    channel='youtube' 
                    isOpen={!isOpen} 
                    videoId='bk7McNUjWgw' 
                    onClose={() => setIsOpen(!isOpen)} 
                />
            </>

            <TeamMemberStyleTwo />

            <PriceTableTwo />

            <TestimonialStyleThree />
            
            <div className="pt-100">
                <FunFactsTwo />
            </div>

            <SubscribeForm />

            <div className="pt-100">
                <Partners />
            </div>

			<Footer />
		</>
    )
}

export default AboutTwo;
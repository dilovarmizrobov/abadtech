import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import SubscribeForm from '../components/Common/SubscribeForm';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';

const Faq = () => {
    return (
        <>
			<Navbar />

			<PageBanner 
                pageTitle="FAQ" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="FAQ" 
                BGImage="item-bg1" 
            />

            <div className="faq-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <span>FAQ</span>
                        <h2>Asked Questions</h2>
                        <div className="bar"></div>
                    </div>

                    <div className="faq-accordion">
                        <Accordion allowZeroExpanded preExpanded={['a']}>
                            <AccordionItem uuid="a">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>
                                            What is digital marketing?
                                        </span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Digital marketing involves marketing to people using Internet-connected electronic devices, namely computers, smartphones and tablets. Digital marketing focuses on channels such as search engines, social media, email, websites and apps to connect with prospects and customers.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem uuid="b">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>
                                            Would my business benefit from digital marketing?
                                        </span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Digital marketing involves marketing to people using Internet-connected electronic devices, namely computers, smartphones and tablets. Digital marketing focuses on channels such as search engines, social media, email, websites and apps to connect with prospects and customers.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem uuid="c">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>
                                            What’s the biggest mistake digital marketers make?
                                        </span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Digital marketing involves marketing to people using Internet-connected electronic devices, namely computers, smartphones and tablets. Digital marketing focuses on channels such as search engines, social media, email, websites and apps to connect with prospects and customers.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem uuid="d">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>
                                            What’s the biggest mistake digital marketers make?
                                        </span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Digital marketing involves marketing to people using Internet-connected electronic devices, namely computers, smartphones and tablets. Digital marketing focuses on channels such as search engines, social media, email, websites and apps to connect with prospects and customers.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem uuid="e">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>
                                            How often should I update my website?
                                        </span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Digital marketing involves marketing to people using Internet-connected electronic devices, namely computers, smartphones and tablets. Digital marketing focuses on channels such as search engines, social media, email, websites and apps to connect with prospects and customers.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem uuid="f">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>
                                            What do I need to know about mobile?
                                        </span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Digital marketing involves marketing to people using Internet-connected electronic devices, namely computers, smartphones and tablets. Digital marketing focuses on channels such as search engines, social media, email, websites and apps to connect with prospects and customers.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem uuid="g">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>
                                            What is content marketing?
                                        </span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Digital marketing involves marketing to people using Internet-connected electronic devices, namely computers, smartphones and tablets. Digital marketing focuses on channels such as search engines, social media, email, websites and apps to connect with prospects and customers.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem uuid="h">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>
                                            Do I need a blog?
                                        </span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Digital marketing involves marketing to people using Internet-connected electronic devices, namely computers, smartphones and tablets. Digital marketing focuses on channels such as search engines, social media, email, websites and apps to connect with prospects and customers.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        </Accordion>
                    </div> 
                </div>
            </div>

			<SubscribeForm />

			<Footer />
		</>
    )
}

export default Faq;
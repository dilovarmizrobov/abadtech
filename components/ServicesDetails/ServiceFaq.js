import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';

const ServiceFaq = () => {
    return (
        <div className="faq-accordion mt-3">
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
            </Accordion>
        </div>
    )
}

export default ServiceFaq;
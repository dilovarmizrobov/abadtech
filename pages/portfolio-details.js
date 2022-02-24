import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer'; 

const PortfolioDetails = () => {
    return (
        <>
			<Navbar />

			<PageBanner 
                pageTitle="Portfolio Details" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Portfolio Details" 
                BGImage="item-bg4" 
            />

            <div className="portfolio-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="portfolio-details-image">
                                <img src="/images/portfolio-details.jpg" alt="portfolio" />
                            </div>

                            <div className="portfolio-details-desc">
                                <h3>Competitor Analysis</h3>
                                <p>Lorem ipsum dolor sit amet, conse cte tuer adipiscing elit, sed diam no nu m nibhie eui smod. Facil isis atve eros et accumsan etiu sto odi dignis sim qui blandit praesen lup ta de er. At molestiae appellantur pro. Vis wisi oportere per ic ula ad, ei latine prop riae na, mea cu purto debitis.</p>

                                <div className="features-text">
                                    <h4><i className="flaticon-check"></i> Core Development</h4>
                                    <p>No fake products and services. The customer is king their lives and needs are the inspiration.</p>
                                </div>
                                <div className="features-text">
                                    <h4><i className="flaticon-check"></i> Define Your Choices</h4>
                                    <p>No fake products and services. The customer is king their lives and needs are the inspiration.</p>
                                </div>
                                
                                <h3>Customer Satisfaction for a Digital Marketing Agency</h3>
                                <p>Nost rud no eos, no impedit dissenti as mea, ea vide labor amus neglegentur vix. Ancillae intellegat vix et. Sit causae laoreet nolu ise. Ad po exerci nusquam eos te. Cu altera expet enda qui, munere oblique theo phrastu ea vix. Ne nec modus civibus modera tius, sit ei lorem doctus. Ne docen di verterem reformidans eos. Cu altera expetenda qui munere oblique theophr astus ea vix modus civiu mod eratius.</p>

                                <h4>Results</h4>
                                <p>Lorem ipsum dolor sit amet, conse cte tuer adipiscing elit, sed diam no nu m nibhie eui smod. Facil isis atve eros et accumsan etiu sto odi dignis sim qui blandit praesen lup ta de er. At molestiae appellantur pro. Vis wisi oportere per ic ula ad, ei latine prop riae na, mea cu purto debitis.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <div className="portfolio-details-information ml-10">
                                <ul>
                                    <li>
                                        <div className="icon">
                                            <i className='bx bx-user'></i>
                                        </div>
                                        <span>Client:</span>
                                        <a href="https://envytheme.com/" target="_blank">EnvyTheme.com</a>
                                        <a href="https://themeforest.net/" target="_blank">ThemeForest.com</a>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className='bx bxs-map'></i>
                                        </div>
                                        <span>Location:</span>
                                        New York, USA
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className='bx bx-purchase-tag'></i>
                                        </div>
                                        <span>Technologies:</span>
                                        IT Startups & Digital Services
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className='bx bx-check'></i>
                                        </div>
                                        <span>Completed:</span>
                                        28 April 2020
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className='bx bx-globe'></i>
                                        </div>
                                        <span>Website:</span>
                                        <a href="https://envytheme.com/" target="_blank">EnvyTheme.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

			<Footer />
		</>
    )
}

export default PortfolioDetails;
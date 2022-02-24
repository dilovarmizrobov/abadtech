import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import Link from 'next/link';

const Portfolio = () => {
    return (
        <>
			<Navbar />

			<PageBanner 
                pageTitle="Portfolio Two Column" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Portfolio Two Column" 
                BGImage="item-bg1" 
            />

            <div className="portfolio-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="single-portfolio">
                                <div className="portfolio-image">
                                    <img src="/images/portfolio/portfolio-9.jpg" alt="image" />
                                </div>

                                <div className="portfolio-content">
                                    <Link href="/portfolio-details">
                                        <a><i className='bx bx-plus'></i></a>
                                    </Link>
                                    <h3>
                                        <Link href="/portfolio-details">
                                            <a>Creative Web Design</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-portfolio">
                                <div className="portfolio-image">
                                    <img src="/images/portfolio/portfolio-2.jpg" alt="image" />
                                </div>

                                <div className="portfolio-content">
                                    <Link href="/portfolio-details">
                                        <a><i className='bx bx-plus'></i></a>
                                    </Link>
                                    <h3>
                                        <Link href="/portfolio-details">
                                            <a>Web Development</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-portfolio">
                                <div className="portfolio-image">
                                    <img src="/images/portfolio/portfolio-3.jpg" alt="image" />
                                </div>

                                <div className="portfolio-content">
                                    <Link href="/portfolio-details">
                                        <a><i className='bx bx-plus'></i></a>
                                    </Link>
                                    <h3>
                                        <Link href="/portfolio-details">
                                            <a>Web Application</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-portfolio">
                                <div className="portfolio-image">
                                    <img src="/images/portfolio/portfolio-4.jpg" alt="image" />
                                </div>

                                <div className="portfolio-content">
                                    <Link href="/portfolio-details">
                                        <a><i className='bx bx-plus'></i></a>
                                    </Link>
                                    <h3>
                                        <Link href="/portfolio-details">
                                            <a>Dashboard App</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-portfolio">
                                <div className="portfolio-image">
                                    <img src="/images/portfolio/portfolio-5.jpg" alt="image" />
                                </div>

                                <div className="portfolio-content">
                                    <Link href="/portfolio-details">
                                        <a><i className='bx bx-plus'></i></a>
                                    </Link>
                                    <h3>
                                        <Link href="/portfolio-details">
                                            <a>App Development</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-portfolio">
                                <div className="portfolio-image">
                                    <img src="/images/portfolio/portfolio-6.jpg" alt="image" />
                                </div>

                                <div className="portfolio-content">
                                    <Link href="/portfolio-details">
                                        <a><i className='bx bx-plus'></i></a>
                                    </Link>
                                    <h3>
                                        <Link href="/portfolio-details">
                                            <a>Digital Agency</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-portfolio">
                                <div className="portfolio-image">
                                    <img src="/images/portfolio/portfolio-7.jpg" alt="image" />
                                </div>

                                <div className="portfolio-content">
                                    <Link href="/portfolio-details">
                                        <a><i className='bx bx-plus'></i></a>
                                    </Link>
                                    <h3>
                                        <Link href="/portfolio-details">
                                            <a>Website Development</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-portfolio">
                                <div className="portfolio-image">
                                    <img src="/images/portfolio/portfolio-8.jpg" alt="image" />
                                </div>

                                <div className="portfolio-content">
                                    <Link href="/portfolio-details">
                                        <a><i className='bx bx-plus'></i></a>
                                    </Link>
                                    <h3>
                                        <Link href="/portfolio-details">
                                            <a>Logo & Branding</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                            <div className="pagination-area">
                                <a href="#" className="prev page-numbers">
                                    <i className="flaticon-left-arrow"></i>
                                </a>
                                <a href="#" className="page-numbers">1</a>
                                <span className="page-numbers current" aria-current="page">2</span>
                                <a href="#" className="page-numbers">3</a>
                                <a href="#" className="page-numbers">4</a>
                                <a href="#" className="next page-numbers">
                                    <i className="flaticon-next"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="default-shape">
                    <div className="shape1">
                        <img src="/images/default-shape/default-shape1.png" alt="image" />
                    </div>
                    <div className="shape2">
                        <img src="/images/default-shape/default-shape2.png" alt="image" />
                    </div>
                    <div className="shape3">
                        <img src="/images/default-shape/default-shape3.png" alt="image" />
                    </div>
                    <div className="shape4">
                        <img src="/images/default-shape/default-shape4.png" alt="image" />
                    </div>
                </div>
            </div>
	  
			<Footer />
		</>
    )
}

export default Portfolio;
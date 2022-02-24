import React from 'react';

const MainBanner = () => {
    return (
        <div className="main-banner">
            <div className="main-banner-item item-four">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="main-banner-content pr-15">
                                        <h1>Digital Marketing Best Solution</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        
                                        <form className="banner-form">
                                            <input type="email" className="form-control" placeholder="Enter your Email" />
                                            <button type="submit">Get Your Report</button>
                                        </form>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="main-banner-image pl-15">
                                        <img src="/images/banner/banner-image-4.jpg" alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBanner;
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
                                        <h1>Enterprise Software Development Design & Consulting</h1>
                                        <p>
                                            <b>Abad Technologies</b> is engaged in the development, design and
                                            consulting of enterprise software in the domestic market of Tajikistan and
                                            exports IT solutions abroad.
                                        </p>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="main-banner-image pl-15">
                                        <img src="/images/banner/main-banner-image.jpg" alt="image" />
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
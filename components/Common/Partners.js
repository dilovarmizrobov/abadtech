import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: false,
    dots: false,
    smartSpeed: 500,
    margin: 30,
    autoplayHoverPause: true,
    autoplay: true,
    responsive: {
        0: {
            items: 2
        },
        576: {
            items: 3
        },
        768: {
            items: 3
        },
        1024: {
            items: 4
        },
        1200: {
            items: 5
        }
    }
};

const Partners = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <div className="partner-area pb-100">
            <div className="container">
                {display ? <OwlCarousel 
                    className="partner-slider owl-carousel owl-theme"
                    {...options}
                >
                    <div className="partner-item">
                        <img src="/images/partner/partner-5.png" title="United Nations Development" alt="image" />
                    </div>

                    <div className="partner-item">
                        <img src="/images/partner/partner-1.png" title="DUOB Transport expeditionary company" alt="image" />
                    </div>

                    <div className="partner-item">
                        <img src="/images/partner/partner-2.png" title="Committee for Environmental Protection under the Government of the Republic of Tajikistan" alt="image" />
                    </div>

                    <div className="partner-item">
                        <img src="/images/partner/partner-3.png" title="Metal Invest" alt="image" />
                    </div>

                    <div className="partner-item">
                        <img src="/images/partner/partner-4.png" title="Carec" alt="image" />
                    </div>

                    <div className="partner-item">
                        <img src="/images/partner/partner-6.png" title="State Committee on Investments and State property management of the Republic of Tajikistan." alt="image" />
                    </div>

                    <div className="partner-item">
                        <img src="/images/partner/partner-7.png" title="Schiever Tajikistan" alt="image" />
                    </div>
                </OwlCarousel> : ''}
            </div>
        </div>
    )
}

export default Partners;
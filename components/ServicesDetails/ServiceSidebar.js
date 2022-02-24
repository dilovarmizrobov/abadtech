import React from 'react';
import Link from 'next/link';

const ServiceSidebar = () => {
    return (
        <div className="services-details-information ml-10">
            <ul className="services-list">
                <li>
                    <Link href="/services-details">
                        <a className="active">Creative Web Design</a>
                    </Link>
                </li>
                <li>
                    <Link href="/services-details">
                        <a>Complex Dashboard</a>
                    </Link>
                </li>
                <li>
                    <Link href="/services-details">
                        <a>Digital Agency</a>
                    </Link>
                </li>
                <li>
                    <Link href="/services-details">
                        <a>Software Engineers</a>
                    </Link>
                </li>
                <li>
                    <Link href="/services-details">
                        <a>Marketing Agency</a>
                    </Link>
                </li>
                <li>
                    <Link href="/services-details">
                        <a>Data Analysis</a>
                    </Link>
                </li>
                <li>
                    <Link href="/services-details">
                        <a>App Development</a>
                    </Link>
                </li>
                <li>
                    <Link href="/services-details">
                        <a>Web Application</a>
                    </Link>
                </li> 
                <li>
                    <Link href="/services-details">
                        <a>Logo Design</a>
                    </Link>
                </li> 
            </ul>

            <div className="download-file">
                <h3>Brochures</h3>

                <ul>
                    <li><a href="/services-details" target="_blank">PDF Download <i className='bx bxs-file-pdf'></i></a></li>
                    <li><a href="/services-details" target="_blank">Services Details.txt <i className='bx bxs-file-txt'></i></a></li>
                </ul>
            </div>

            <div className="services-contact-info">
                <h3>Contact Info</h3>
                
                <ul>
                    <li>
                        <div className="icon">
                            <i className='bx bx-user-pin'></i>
                        </div>
                        <span>Phone:</span>
                        <a href="tel:+21453545413">+2145 354 5413</a>
                    </li>
                    <li>
                        <div className="icon">
                            <i className='bx bx-map'></i>
                        </div>
                        <span>Location:</span>
                        New York, USA
                    </li>
                    <li>
                        <div className="icon">
                            <i className='bx bx-envelope'></i>
                        </div>
                        <span>Email:</span>
                        <a href="mailto:hello@renex.com">hello@renex.com</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ServiceSidebar;
import React, {useContext, useState} from "react";
import Link from '../../utils/ActiveLink';
import LanguageContext, {LANGUAGES} from "../../store/LanguageContext";
import multiTranslate from "../../utils/multiTranslate";

const Navbar = () => {
    const [menu, setMenu] = useState(true)
    const {locale, handleLocaleChange} = useContext(LanguageContext)
    const TRANSLATE = multiTranslate();

    const toggleNavbar = () => {
        setMenu(!menu)
    }

    React.useEffect(() => {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0); 
    })
 
    const classOne = menu ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = menu ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <>
            <div id="navbar" className="navbar-area">
                <div className="main-navbar">
                    <div className="container">
                        <nav className="navbar navbar-expand-md navbar-light">
                            <Link href="/">
                                <a onClick={toggleNavbar} className="navbar-brand">
                                    <img src={"/images/logo.svg"} alt="logo" />
                                </a>
                            </Link>

                            <button 
                                onClick={toggleNavbar} 
                                className={classTwo}
                                type="button"
                                data-toggle="collapse" 
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                                aria-expanded="false" 
                                aria-label="Toggle navigation"
                            >
                                <span className="icon-bar top-bar"></span>
                                <span className="icon-bar middle-bar"></span>
                                <span className="icon-bar bottom-bar"></span>
                            </button>

                            <div className={classOne} id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link href="/portfolio-2" activeClassName="active">
                                            <a onClick={toggleNavbar} className="nav-link">{TRANSLATE.portfolio}</a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="/services-1" activeClassName="active">
                                            <a onClick={toggleNavbar} className="nav-link">{TRANSLATE.services}</a>
                                        </Link>
                                    </li>


                                    <li className="nav-item">
                                        <Link href="/blog-1" activeClassName="active">
                                            <a onClick={toggleNavbar} className="nav-link">{TRANSLATE.blog}</a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="/contact-1" activeClassName="active">
                                            <a onClick={toggleNavbar} className="nav-link">{TRANSLATE.contact}</a>
                                        </Link>
                                    </li>

                                    {/*<li className="nav-item">*/}
                                    {/*    <Link href="/#">*/}
                                    {/*        <a onClick={e => e.preventDefault()} className="nav-link">*/}
                                    {/*            Home <i className='bx bx-chevron-down'></i>*/}
                                    {/*        </a>*/}
                                    {/*    </Link> */}

                                    {/*    <ul className="dropdown-menu">*/}
                                    {/*        <li className="nav-item">*/}
                                    {/*            <Link href="/" activeClassName="active">*/}
                                    {/*                <a onClick={toggleNavbar} className="nav-link">Home Demo One</a>*/}
                                    {/*            </Link>*/}
                                    {/*        </li>*/}

                                    {/*        <li className="nav-item">*/}
                                    {/*            <Link href="/index-2" activeClassName="active">*/}
                                    {/*                <a onClick={toggleNavbar} className="nav-link">Home Demo Two</a>*/}
                                    {/*            </Link>*/}
                                    {/*        </li>*/}

                                    {/*        <li className="nav-item">*/}
                                    {/*            <Link href="/index-3" activeClassName="active">*/}
                                    {/*                <a onClick={toggleNavbar} className="nav-link">Home Demo Three</a>*/}
                                    {/*            </Link>*/}
                                    {/*        </li>*/}

                                    {/*        <li className="nav-item">*/}
                                    {/*            <Link href="/index-4" activeClassName="active">*/}
                                    {/*                <a onClick={toggleNavbar} className="nav-link">Home Demo Four</a>*/}
                                    {/*            </Link>*/}
                                    {/*        </li>*/}

                                    {/*        <li className="nav-item">*/}
                                    {/*            <Link href="/index-5" activeClassName="active">*/}
                                    {/*                <a onClick={toggleNavbar} className="nav-link">Home Demo Five</a>*/}
                                    {/*            </Link>*/}
                                    {/*        </li>*/}
                                    {/*    </ul>*/}
                                    {/*</li>*/}

    
                                    <li className="nav-item">
                                        <Link href="/#">
                                            <a onClick={e => e.preventDefault()} className="nav-link">
                                                Pages <i className='bx bx-chevron-down'></i>
                                            </a>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/#" activeClassName="active">
                                                    <a onClick={e => e.preventDefault()} className="nav-link">
                                                        About <i className='bx bx-chevron-down'></i>
                                                    </a>
                                                </Link>

                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <Link href="/about-1" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">About Style One</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/about-2" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">About Style Two</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/#" activeClassName="active">
                                                    <a onClick={e => e.preventDefault()} className="nav-link">
                                                        Team <i className='bx bx-chevron-down'></i>
                                                    </a>
                                                </Link>

                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <Link href="/team" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Team Style One</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/team-2" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Team Style Two</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/#" activeClassName="active">
                                                    <a onClick={e => e.preventDefault()} className="nav-link">
                                                        Pricing <i className='bx bx-chevron-down'></i>
                                                    </a>
                                                </Link>

                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <Link href="/pricing-1" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Pricing Style One</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/pricing-2" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Pricing Style Two</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/#" activeClassName="active">
                                                    <a onClick={e => e.preventDefault()} className="nav-link">
                                                        Features <i className='bx bx-chevron-down'></i>
                                                    </a>
                                                </Link>

                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <Link href="/features-1" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Features Style One</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/features-2" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Features Style Two</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/testimonials" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Testimonials</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/faq" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">FAQ's</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/#" activeClassName="active">
                                                    <a onClick={e => e.preventDefault()} className="nav-link">
                                                        Account <i className='bx bx-chevron-down'></i>
                                                    </a>
                                                </Link>

                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <Link href="/login" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Login</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/register" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Register</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/forgot-password" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Forgot Password</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/404" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">404 Error Page</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/terms-of-service" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Terms of Service</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/privacy-policy" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Privacy Policy</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    {/* Start Language*/}
                                    <li className="nav-item">
                                        <Link href="/#">
                                            <a onClick={e => e.preventDefault()} className="nav-link">
                                                {LANGUAGES[locale].show} <i className='bx bx-chevron-down'></i>
                                            </a>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            {
                                                Object.values(LANGUAGES).map((item,index) => (
                                                    <li className="nav-item" key={index}>
                                                        <Link href="/#">
                                                            <a
                                                                onClick={(e) => {
                                                                    e.preventDefault()
                                                                    handleLocaleChange(item.key)
                                                                }}
                                                                className="nav-link"
                                                            >
                                                                {item.show}
                                                            </a>
                                                        </Link>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </li>
                                    {/* End Language*/}

                                    {/*<li className="nav-item">*/}
                                    {/*    <Link href="/#">*/}
                                    {/*        <a onClick={e => e.preventDefault()} className="nav-link">*/}
                                    {/*            Services <i className='bx bx-chevron-down'></i>*/}
                                    {/*        </a>*/}
                                    {/*    </Link> */}

                                    {/*    <ul className="dropdown-menu">*/}
                                    {/*        <li className="nav-item">*/}
                                    {/*            <Link href="/services-1" activeClassName="active">*/}
                                    {/*                <a onClick={toggleNavbar} className="nav-link">Services Style One</a>*/}
                                    {/*            </Link>*/}
                                    {/*        </li>*/}

                                    {/*        <li className="nav-item">*/}
                                    {/*            <Link href="/services-2" activeClassName="active">*/}
                                    {/*                <a onClick={toggleNavbar} className="nav-link">Services Style Two</a>*/}
                                    {/*            </Link>*/}
                                    {/*        </li>*/}

                                    {/*        <li className="nav-item">*/}
                                    {/*            <Link href="/services-3" activeClassName="active">*/}
                                    {/*                <a onClick={toggleNavbar} className="nav-link">Services Style Three</a>*/}
                                    {/*            </Link>*/}
                                    {/*        </li>*/}

                                    {/*        <li className="nav-item">*/}
                                    {/*            <Link href="/services-details" activeClassName="active">*/}
                                    {/*                <a onClick={toggleNavbar} className="nav-link">Services Details</a>*/}
                                    {/*            </Link>*/}
                                    {/*        </li>*/}
                                    {/*    </ul>*/}
                                    {/*</li>*/}

                                    {/*<li className="nav-item">*/}
                                    {/*    <Link href="/#">*/}
                                    {/*        <a onClick={e => e.preventDefault()} className="nav-link">*/}
                                    {/*            Portfolio <i className='bx bx-chevron-down'></i>*/}
                                    {/*        </a>*/}
                                    {/*    </Link> */}

                                    {/*    <ul className="dropdown-menu">*/}
                                    {/*        <li className="nav-item">*/}
                                    {/*            <Link href="/portfolio-1" activeClassName="active">*/}
                                    {/*                <a onClick={toggleNavbar} className="nav-link">Portfolio Two Column</a>*/}
                                    {/*            </Link>*/}
                                    {/*        </li>*/}

                                    {/*        <li className="nav-item">*/}
                                    {/*            <Link href="/portfolio-2" activeClassName="active">*/}
                                    {/*                <a onClick={toggleNavbar} className="nav-link">Portfolio Three Column</a>*/}
                                    {/*            </Link>*/}
                                    {/*        </li>*/}

                                    {/*        <li className="nav-item">*/}
                                    {/*            <Link href="/portfolio-3" activeClassName="active">*/}
                                    {/*                <a onClick={toggleNavbar} className="nav-link">Portfolio Four Column</a>*/}
                                    {/*            </Link>*/}
                                    {/*        </li>*/}

                                    {/*        <li className="nav-item">*/}
                                    {/*            <Link href="/portfolio-details" activeClassName="active">*/}
                                    {/*                <a onClick={toggleNavbar} className="nav-link">Portfolio Details</a>*/}
                                    {/*            </Link>*/}
                                    {/*        </li>*/}
                                    {/*    </ul>*/}
                                    {/*</li>*/}

                                    {/*<li className="nav-item">*/}
                                    {/*    <Link href="/#">*/}
                                    {/*        <a onClick={e => e.preventDefault()} className="nav-link">*/}
                                    {/*            Blog <i className='bx bx-chevron-down'></i>*/}
                                    {/*        </a>*/}
                                    {/*    </Link>*/}

                                    {/*    <ul className="dropdown-menu">*/}
                                    {/*        <li className="nav-item">*/}
                                    {/*            <Link href="/blog-1" activeClassName="active">*/}
                                    {/*                <a onClick={toggleNavbar} className="nav-link">Blog Two Column</a>*/}
                                    {/*            </Link>*/}
                                    {/*        </li>*/}

                                    {/*        <li className="nav-item">*/}
                                    {/*            <Link href="/blog-2" activeClassName="active">*/}
                                    {/*                <a onClick={toggleNavbar} className="nav-link">Blog Three Column</a>*/}
                                    {/*            </Link>*/}
                                    {/*        </li>*/}

                                    {/*        <li className="nav-item">*/}
                                    {/*            <Link href="/blog-3" activeClassName="active">*/}
                                    {/*                <a onClick={toggleNavbar} className="nav-link">Blog Four Column</a>*/}
                                    {/*            </Link>*/}
                                    {/*        </li>*/}

                                    {/*        <li className="nav-item">*/}
                                    {/*            <Link href="/blog-details" activeClassName="active">*/}
                                    {/*                <a onClick={toggleNavbar} className="nav-link">Blog Details</a>*/}
                                    {/*            </Link>*/}
                                    {/*        </li>*/}
                                    {/*    </ul>*/}
                                    {/*</li>*/}

                                    {/*<li className="nav-item">*/}
                                    {/*    <Link href="/#">*/}
                                    {/*        <a onClick={e => e.preventDefault()} className="nav-link">*/}
                                    {/*            Contact <i className='bx bx-chevron-down'></i>*/}
                                    {/*        </a>*/}
                                    {/*    </Link>*/}

                                    {/*    <ul className="dropdown-menu">*/}
                                    {/*        <li className="nav-item">*/}
                                    {/*            <Link href="/contact-1" activeClassName="active">*/}
                                    {/*                <a onClick={toggleNavbar} className="nav-link">Contact Style One</a>*/}
                                    {/*            </Link>*/}
                                    {/*        </li>*/}

                                    {/*        <li className="nav-item">*/}
                                    {/*            <Link href="/contact-2" activeClassName="active">*/}
                                    {/*                <a onClick={toggleNavbar} className="nav-link">Contact Style Two</a>*/}
                                    {/*            </Link>*/}
                                    {/*        </li>*/}
                                    {/*    </ul>*/}
                                    {/*</li>*/}
                                </ul>
                            </div>

                            <div className="others-options d-flex align-items-center">
                                <div className="option-item">
                                    <Link href="/contact-1">
                                        <a className="default-btn">
                                            Get Quote
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
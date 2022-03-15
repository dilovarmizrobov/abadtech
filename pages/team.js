import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import SubscribeForm from '../components/Common/SubscribeForm';

const TeamOne = () => {
    const team = [
        {
            name: "Jaloliddin Asoev",
            position: "CEO & Co-founder",
            image: "team-1.jpg",
            social: {
                linkedin: "https://www.linkedin.com/in/asoev-jaloliddin-210915220",
                instagram: "https://www.instagram.com/jaloliddin.asoev/",
                telegram: "https://t.me/jalolasoev",
                mail: "mailto:asoev@abad.tj",
            }
        },
        {
            name: "Abror Kholov",
            position: "CBDO & Co-founder",
            image: "team-2.jpg",
            social: {
                linkedin: "https://www.linkedin.com/in/abror-kholov/",
                instagram: "https://www.instagram.com/abror_abadtech/",
                telegram: "https://www.t.me/abrorkholov/",
                mail: "mailto:abrorkholov@abad.tj",
            }
        },
        {
            name: "Sumbulmo Nekqadamova",
            position: "HRBP & Recruitment",
            image: "team-3.jpg",
            social: {
                linkedin: "https://www.linkedin.com/in/sumbulmo-nekqadamova-8904a1b2/",
                instagram: "https://www.instagram.com/sumneqkadamova/",
                telegram: "https://t.me/sumbulmo",
                mail: "mailto:sumbulmo@abad.tj",
            }
        },
        {
            name: "Khakimdzhanova Shakhnoza",
            position: "Head of Marketing",
            image: "team-4.jpg",
        },
        {
            name: "Muhsiddin Naimov",
            position: "Accountant",
            image: "team-5.jpg",
        },
        {
            name: "Ibodzoda Azizullo",
            position: "Full-stack Engineer",
            image: "team-6.jpg",
        },
        {
            name: "Dilshod Mizrobov",
            position: "Software Engineer & AWS Expert",
            image: "team-7.jpg",
        },
        {
            name: "Alijon Valiev",
            position: "Software Engineer",
            image: "team-8.jpg",
        },
        {
            name: "Dilovar Mizrobov",
            position: "Full-stack Engineer",
            image: "team-9.jpg",
        },
        {
            name: "Surush Todzhibekov",
            position: "Software Engineer",
            image: "team-10.jpg",
        },
        {
            name: "Farangis Makhmadyorova",
            position: "Software Engineer",
            image: "team-11.jpg",
        },
        {
            name: "Fariza Muhamedjonova",
            position: "Software Engineer",
            image: "team-12.jpg",
        },
        {
            name: "Dilshod Shamsiddinov",
            position: "UX/UI Designer",
            image: "team-13.jpg",
        },
    ]

    return (
        <>
			<Navbar />

			<PageBanner 
                pageTitle="Our Team"
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Our Team"
                BGImage="item-bg1" 
            />

            <div className="team-area pt-100 pb-70">
                <div className="container-fluid">
                    <div className="section-title">
                        <span>Team Member</span>
                        <h2>Our Expert Team</h2>
                        <div className="bar"></div>
                    </div>
                    
                    <div className="row justify-content-center">
                        {team.map((item, index) => (
                            <div key={index} className="col-lg-3 col-sm-6">
                                <div className="single-team">
                                    <div className="image">
                                        <img src={`/images/team/${item.image}`} alt="image" />

                                        {
                                            item.social && (
                                                <ul className="social">
                                                    <li>
                                                        <a href={item.social.linkedin} target="_blank">
                                                            <i className='bx bxl-linkedin'></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href={item.social.instagram} target="_blank">
                                                            <i className='bx bxl-instagram'></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href={item.social.telegram} target="_blank">
                                                            <i className='bx bxl-telegram'></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href={item.social.mail} target="_blank">
                                                            <i className='bx bx-mail-send'></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            )
                                        }

                                        <div className="content">
                                            <h3>{item.name}</h3>
                                            <span>{item.position}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
	  
			<SubscribeForm />

			<Footer />
		</>
    )
}

export default TeamOne;
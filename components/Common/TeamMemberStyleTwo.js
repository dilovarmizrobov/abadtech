import React from 'react';
import Link from "next/link";

const TeamMemberStyleTwo = () => {
    const expertTeam = [
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
            name: "Khakimdzhanova Shakhnoza",
            position: "Head of Marketing",
            image: "team-4.jpg",
        },
    ]

    return (
        <div className="team-area pb-70">
            <div className="container">
                <div className="section-title">
                    <span>Team Member</span>
                    <h2>Our Expert Team</h2>
                    <div className="bar"></div>
                </div>

                <div className="row">
                    {
                        expertTeam.map((item, index) => (
                            <div key={index} className="col-lg-3 col-sm-6">
                                <div className="single-team-box">
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
                                    </div>

                                    <div className="content">
                                        <h3>{item.name}</h3>
                                        <span>{item.position}</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="d-flex justify-content-center">
                    <Link href="/team">
                        <a className="default-btn">
                            Read More
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default TeamMemberStyleTwo;
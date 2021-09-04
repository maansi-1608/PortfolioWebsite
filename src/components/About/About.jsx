import React from 'react';
import FooterLink from '../FooterLink/FooterLink';
import Header from '../Header/Header';
import aboutVector from './../../assets/about_vector.png';
import './About.css';
import aboutAnime from './../../assets/about_anime.gif';

const About = () => {
    return (
        <div className='section-container'>
            <Header
                heading='About Me.'
                details='A budding Engineer with expertise in common 
                software applications and dynamic
                personality.Well‐versed in business organization 
                strategies for successfully modernizing
                workplaces. Skilled at project support with
                solutions‐oriented problem‐solving.'
            />

            <div className='about-main'>
                <div className='about-main-left'>
                    {/* Sub section 1 */}
                    <h3 className='about-sub-head'>Software Engineering</h3>
                    <p className='about-details'>
                        I am an aspiring Software Engineer. I have explored my interests in the fiels by participating 
                        in various hackathons and working under expert mentors during my internships. Please do checkout 
                        {' '}
                        <a
                            className='about-link-element'
                            href='https://devpost.com/maansi-1608?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav'
                        >
                            my devpost account!
                        </a>
                    </p>

                    {/* Sub section 2 */}
                    <h3 className='about-sub-head'>Certifications</h3>
                    <p className='about-details'>
                        AWS Certified Cloud Practitioner
                    </p>

                    {/* Sub section 3 */}
                    <h3 className='about-sub-head'>Education</h3>
                    <p className='about-details'>
                        <p>2018‐2022</p>
                        <p> B.TECH. IN ELECTRONICS AND COMMUNICATION ENGINEERING </p>
                        <p> Amrita Vishwa Vidyapeetham </p>
                        <p>CGPA : 9.0/10</p>
                        {' '}
                    </p>
                </div>

                <div className='about-main-right'>
                    <img
                        src={aboutAnime}
                        alt='animation'
                        className='about-anime'
                    />
                </div>
            </div>

            <FooterLink
                phrase='Check out my '
                link='projects!'
                toAdress='/projects'
            />
            {/* Vector Frame! */}
            <div className='vector-frame'>
                <img src={aboutVector} className='about-vector' alt='about' />
            </div>
        </div>
    );
};

export default About;

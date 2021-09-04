import React from 'react';
import FooterLink from '../FooterLink/FooterLink';
import Header from '../Header/Header';
import workExperienceVector from './../../assets/about_vector.png';
import './workExperience.css';
import workExperienceAnime from './../../assets/work.webp';

const workExperience = () => {
    return (
        <div className='section-container'>
            <Header
                heading='Work Experience'
                details='My Journey so far in the Industry.'
            />

            <div className='workExperience-main'>
                <div className='workExperience-main-left'>
                    {/* Sub section 1 */}
                    <h3 className='workExperience-sub-head'>Software Engineer - Microsoft</h3>
                    <p className='workExperience-details'>
                    Produced clean, validation‐ready code for project needs as a part of
                    the Commercial Software Engineering Team.
                    Supported software engineering projects in Agile work environment.{' '}
                        <a
                            className='workExperience-link-element'
                            href='https://devpost.com/maansi-1608?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav'
                        >
                            June'21 - July'21
                        </a>
                    </p>

                    {/* Sub section 2 */}
                    <h3 className='workExperience-sub-head'>Developer Intern - Cisco ThingQbator</h3>
                    <p className='workExperience-details'>
                    Developed prototype of a digital aid solution to enable a simple, easy
                    living for dementia patients.
                    Analyzed problems, identified solutions and made decisions.{' '}
                        <a
                            className='workExperience-link-element'
                            href='https://madhavbahl.medium.com/'
                        >
                            my medium blogs today!
                        </a>
                    </p>

                    {/* Sub section 3 */}
                    <h3 className='workExperience-sub-head'>Data Analytics Intern - Taken Mind Global</h3>
                    <p className='workExperience-details'>
                    Developed business, financial and analytical skills needed for career.
                    Analyzed problems, identified solutions and made decisions.{' '}
                        <a
                            className='workExperience-link-element'
                            href='mailto:info@theleanprogrammer.com'
                        >
                            Email me the details!
                        </a>
                    </p>
                </div>

                <div className='workExperience-main-right'>
                    <img
                        src={workExperienceAnime}
                        alt='animation'
                        className='workExperience-anime'
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
                <img src={workExperienceVector} className='workExperience-vector' alt='experience' />
            </div>
        </div>
    );
};

export default workExperience;
